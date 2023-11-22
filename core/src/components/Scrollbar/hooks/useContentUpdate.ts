import { RefObject, useCallback, useEffect, useRef, useState } from "react";

import { ScrollbarProps } from "../Scrollbar";

type ScrollData = {
  hasHorizontalScroll: boolean;
  hasVerticalScroll: boolean;
  horizontalThumbWidth: string;
  verticalThumbHeight: string;
};

const blankScrollData = {
  hasHorizontalScroll: false,
  hasVerticalScroll: false,
  horizontalThumbWidth: "0px",
  verticalThumbHeight: "0px",
};

export type UseContentUpdateProps = {
  contentRef: RefObject<HTMLDivElement>;
  visibility: ScrollbarProps["visibility"];
};

export const useContentUpdate = (props: UseContentUpdateProps) => {
  const { contentRef, visibility } = props;

  const [scrollData, setScrollData] = useState<ScrollData>(blankScrollData);

  const update = useCallback(() => {
    const contentWidth = contentRef.current?.clientWidth;
    const contentHeight = contentRef.current?.clientHeight;
    const scrollHeight = contentRef.current?.scrollHeight;
    const scrollWidth = contentRef.current?.scrollWidth;

    if (
      contentWidth === undefined ||
      contentHeight === undefined ||
      scrollHeight === undefined ||
      scrollWidth === undefined
    ) {
      return;
    }

    const updateData: ScrollData = { ...blankScrollData };

    // VERTICAL
    const verticalRatio = contentHeight / scrollHeight;
    const thumbHeightPercent = Math.ceil(Math.min(verticalRatio * 100, 100));

    if (thumbHeightPercent < 100) {
      updateData.verticalThumbHeight = `${thumbHeightPercent}%`;
      updateData.hasVerticalScroll = true;
    } else {
      updateData.hasVerticalScroll = false;
    }

    // HORIZONTAL
    const horizontalRatio = contentWidth / scrollWidth;
    const thumbWidthPercent = Math.ceil(Math.min(horizontalRatio * 100, 100));

    if (thumbWidthPercent < 100) {
      updateData.horizontalThumbWidth = `${thumbWidthPercent}%`;
      updateData.hasHorizontalScroll = true;
    } else {
      updateData.hasHorizontalScroll = false;
    }

    setScrollData(updateData);
  }, []);

  const mutationObserverRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    update();

    contentRef.current?.addEventListener("mouseenter", update);
    contentRef.current?.addEventListener("scroll", update);

    if (!mutationObserverRef.current && visibility === "always") {
      mutationObserverRef.current = new MutationObserver(() => {
        update();
      });
    }

    if (contentRef.current) {
      mutationObserverRef.current?.observe(contentRef.current, { childList: true });
    }

    return () => {
      contentRef.current?.removeEventListener("mouseenter", update);
      contentRef.current?.removeEventListener("scroll", update);
      mutationObserverRef.current?.disconnect();
    };
  }, [update, visibility]);

  return scrollData;
};
