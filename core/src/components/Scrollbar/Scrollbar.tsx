import React, { CSSProperties, MutableRefObject, ReactNode, useRef, useState } from "react";
import clsx from "clsx";

import { useResizeObserver } from "../../hooks";
import { useDragHandler } from "./hooks/useDragHandler";
import { useScrollHandler } from "./hooks/useScrollHandler";

import styles from "./Scrollbar.module.css";

export interface ScrollbarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
   * Fixed height of the scrollbar container
   */
  h?: CSSProperties["height"];

  /**
   * Fixed with of the scrollbar container
   */
  w?: CSSProperties["width"];

  /**
   * Max height of the container, if the content is less than that the scrollbar won't be used
   */
  mah?: CSSProperties["maxHeight"];

  /**
   * The min height of the container
   */
  mih?: CSSProperties["minHeight"];

  /**
   * An optional reference to the scroll container.
   * This is the element on which the scroll events happen.
   */
  viewportRef?: MutableRefObject<HTMLDivElement | null>;

  /**
   * Classnames for each part of the component
   */
  classNames?: {
    root?: string;
    viewport?: string;
    verticalTrack?: string;
    verticalThumb?: string;
    horizontalTrack?: string;
    horizontalThumb?: string;
  };

  children: ReactNode;
}

export const Scrollbar: React.FC<ScrollbarProps> = (props) => {
  const { children, classNames, h: height, w: width, mah: maxHeight, mih: minHeight, viewportRef, ...divProps } = props;

  const contentRef = useRef<HTMLDivElement | null>(null);
  const { width: contentWidth, height: contentHeight } = useResizeObserver({ ref: contentRef });

  const handleViewportMount = (node: HTMLDivElement) => {
    (contentRef as MutableRefObject<HTMLDivElement>).current = node;

    if (viewportRef) {
      viewportRef.current = node;
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  const fadeOutRef = useRef<ReturnType<typeof setTimeout>>();
  const handleFadeIn = () => {
    if (!isVisible) {
      setIsVisible(true);
    }

    clearTimeout(fadeOutRef.current);
    fadeOutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 1600);
  };

  const verticalScrollbarRef = useRef<HTMLDivElement | null>(null);
  const horizontalScrollbarRef = useRef<HTMLDivElement | null>(null);

  useScrollHandler({
    horizontalScrollbarRef,
    verticalScrollbarRef,
    contentRef,
    contentHeight,
    contentWidth,
    onScroll: handleFadeIn,
  });

  useDragHandler({ contentRef, scrollbarRef: verticalScrollbarRef, mode: "vertical" });
  useDragHandler({ contentRef, scrollbarRef: horizontalScrollbarRef, mode: "horizontal" });

  let hasHorizontalScroll = false;
  let horizontalThumbWidth = "0px";

  let hasVerticalScroll = false;
  let verticalThumbHeight = "0px";

  if (contentRef.current) {
    // VERTICAL
    const verticalRatio = contentHeight / contentRef.current.scrollHeight;
    const thumbHeightPercent = Math.ceil(Math.min(verticalRatio * 100, 100));

    if (thumbHeightPercent < 100) {
      verticalThumbHeight = `${thumbHeightPercent}%`;
      hasVerticalScroll = true;
    } else {
      hasVerticalScroll = false;
    }

    // HORIZONTAL
    const horizontalRatio = contentWidth / contentRef.current.scrollWidth;
    const thumbWidthPercent = Math.ceil(Math.min(horizontalRatio * 100, 100));

    if (thumbWidthPercent < 100) {
      horizontalThumbWidth = `${thumbWidthPercent}%`;
      hasHorizontalScroll = true;
    } else {
      hasHorizontalScroll = false;
    }
  }

  const containerClassNames = clsx(
    styles.scrollContainer,
    classNames?.root,
    isVisible && styles.visible,
    hasHorizontalScroll && styles.hasHorizontalScroll,
    hasVerticalScroll && styles.hasVerticalScroll,
  );

  return (
    <div className={containerClassNames} {...divProps}>
      <div
        className={clsx(styles.content, classNames?.viewport)}
        style={{ height, width, minHeight, maxHeight }}
        data-horizontal-scroll={hasHorizontalScroll}
        data-vertical-scroll={hasVerticalScroll}
        ref={handleViewportMount}
      >
        {children}
      </div>

      <div className={clsx(styles.verticalTrack, classNames?.verticalTrack)} ref={verticalScrollbarRef}>
        <div
          className={clsx(styles.scrollbarThumb, classNames?.verticalThumb)}
          style={{ height: verticalThumbHeight }}
        />
      </div>

      <div className={clsx(styles.horizontalTrack, classNames?.horizontalTrack)} ref={horizontalScrollbarRef}>
        <div
          className={clsx(styles.scrollbarThumb, classNames?.horizontalThumb)}
          style={{ width: horizontalThumbWidth }}
        />
      </div>
    </div>
  );
};
