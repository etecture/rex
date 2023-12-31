import { RefObject, useEffect } from "react";

export type UseScrollbarHandlerProps = {
  verticalScrollbarRef: RefObject<HTMLDivElement | null>;
  horizontalScrollbarRef: RefObject<HTMLDivElement | null>;
  contentRef: RefObject<HTMLDivElement>;
  onScroll?: () => void;
};

export const useScrollHandler = (props: UseScrollbarHandlerProps) => {
  const { verticalScrollbarRef, horizontalScrollbarRef, contentRef, onScroll } = props;

  useEffect(() => {
    const handleScroll = () => {
      const contentWidth = contentRef.current?.clientWidth ?? 0;
      const contentHeight = contentRef.current?.clientHeight ?? 0;

      onScroll?.();

      if (contentRef.current && verticalScrollbarRef.current && horizontalScrollbarRef.current) {
        // VERTICAL

        const verticalThumbElement = verticalScrollbarRef.current.firstChild as HTMLDivElement;
        const verticalScrollbarRect = verticalScrollbarRef.current.getBoundingClientRect();
        const verticalThumbRect = verticalThumbElement.getBoundingClientRect();

        const movableVerticalArea = contentRef.current.scrollHeight - contentHeight;
        const scrollTop = contentRef.current.scrollTop;
        const verticalScrollRatio = scrollTop / movableVerticalArea;

        const verticalScrollbarSpace = verticalScrollbarRect.height - verticalThumbRect.height;
        const verticalThumbOffset = verticalScrollbarSpace * verticalScrollRatio;

        verticalThumbElement.style.transform = `translateY(${verticalThumbOffset}px)`;

        // HORIZONTAL

        const horizontalThumbElement = horizontalScrollbarRef.current.firstChild as HTMLDivElement;
        const horizontalScrollbarRect = horizontalScrollbarRef.current.getBoundingClientRect();
        const horizontalThumbRect = horizontalThumbElement.getBoundingClientRect();

        const movableHorizontalArea = contentRef.current.scrollWidth - contentWidth;
        const scrollLeft = contentRef.current.scrollLeft;
        const horizontalScrollRatio = scrollLeft / movableHorizontalArea;

        const horizontalScrollbarSpace = horizontalScrollbarRect.width - horizontalThumbRect.width;
        const scrollbarThumbOffset = horizontalScrollbarSpace * horizontalScrollRatio;

        horizontalThumbElement.style.transform = `translateX(${scrollbarThumbOffset}px)`;
      }
    };

    contentRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      contentRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
