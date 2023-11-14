import React, { CSSProperties, MutableRefObject, ReactNode, useRef } from "react";
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
   * Controls when the scrollbar tracks are shown.
   * "always" will always show the scrollbar as long as the content is scrollable.
   * "hover" will only show the tracks when hovering over the container.
   * "never" will never show tracks
   * @default "hover"
   */
  visibility?: "always" | "hover" | "never";

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
  const {
    children,
    classNames,
    h: height,
    w: width,
    mah: maxHeight,
    mih: minHeight,
    viewportRef,
    visibility = "hover",
    ...divProps
  } = props;

  const contentRef = useRef<HTMLDivElement | null>(null);
  const { width: contentWidth, height: contentHeight } = useResizeObserver({ ref: contentRef });

  const handleViewportMount = (node: HTMLDivElement) => {
    (contentRef as MutableRefObject<HTMLDivElement>).current = node;

    if (viewportRef) {
      viewportRef.current = node;
    }
  };

  const verticalScrollbarRef = useRef<HTMLDivElement | null>(null);
  const horizontalScrollbarRef = useRef<HTMLDivElement | null>(null);

  useScrollHandler({
    horizontalScrollbarRef,
    verticalScrollbarRef,
    contentRef,
    contentHeight,
    contentWidth,
  });

  const { horizontalDragging, verticalDragging } = useDragHandler({
    contentRef,
    verticalScrollbarRef,
    horizontalScrollbarRef,
  });
  const isDragging = horizontalDragging || verticalDragging;

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

  const isTrackVisible = visibility === "always" || isDragging;
  const isTrackHidden = visibility === "never";

  const containerClassNames = clsx(
    styles.scrollContainer,
    classNames?.root,
    isTrackVisible && styles.visible,
    isTrackHidden && styles.trackHidden,
    hasHorizontalScroll && styles.hasHorizontalScroll,
    hasVerticalScroll && styles.hasVerticalScroll,
  );

  const verticalAttributes = verticalDragging ? { ["data-dragging"]: true } : {};
  const horizontalAttributes = horizontalDragging ? { ["data-dragging"]: true } : {};

  return (
    <div className={containerClassNames} {...divProps}>
      <div
        className={clsx(styles.content, classNames?.viewport)}
        data-horizontal-scroll={hasHorizontalScroll}
        data-vertical-scroll={hasVerticalScroll}
        style={{ height, width, minHeight, maxHeight }}
        ref={handleViewportMount}
      >
        {children}
      </div>

      <div className={clsx(styles.verticalTrack, classNames?.verticalTrack)} ref={verticalScrollbarRef}>
        <div
          className={clsx(styles.scrollbarThumb, classNames?.verticalThumb)}
          style={{ height: verticalThumbHeight }}
          {...verticalAttributes}
        />
      </div>

      <div className={clsx(styles.horizontalTrack, classNames?.horizontalTrack)} ref={horizontalScrollbarRef}>
        <div
          className={clsx(styles.scrollbarThumb, classNames?.horizontalThumb)}
          style={{ width: horizontalThumbWidth }}
          {...horizontalAttributes}
        />
      </div>
    </div>
  );
};
