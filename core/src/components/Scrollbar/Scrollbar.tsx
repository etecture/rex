import clsx from "clsx";
import React, { CSSProperties, MutableRefObject, ReactNode, useRef } from "react";

import { useContentUpdate } from "./hooks/useContentUpdate";
import { useDragHandler } from "./hooks/useDragHandler";
import { useScrollHandler } from "./hooks/useScrollHandler";

import styles from "./Scrollbar.module.css";

export type ScrollbarClassnames = {
  root?: string;
  viewport?: string;
  verticalTrack?: string;
  verticalThumb?: string;
  horizontalTrack?: string;
  horizontalThumb?: string;
};

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
   * Max height of the container, if the content is less than that the scrollbar won't be used
   */
  maw?: CSSProperties["maxWidth"];

  /**
   * The min height of the container
   */
  miw?: CSSProperties["minWidth"];

  /**
   * Controls when the scrollbar tracks are shown.
   * "always" will always show the scrollbar as long as the content is scrollable.
   * "hover" will only show the tracks when hovering over the container.
   * "never" will never show tracks
   * @default "hover"
   */
  visibility?: "always" | "hover" | "never";

  /**
   * Disables horizontal scrolling
   * @default false
   */
  horizontalScrollDisabled?: boolean;

  /**
   * Disables vertical scrolling
   * @default false
   */
  verticalScrollDisabled?: boolean;

  /**
   * An optional reference to the scroll container.
   * This is the element on which the scroll events happen.
   */
  viewportRef?: MutableRefObject<HTMLDivElement | null>;

  /**
   * Classnames for each part of the component
   */
  classNames?: ScrollbarClassnames;

  children: ReactNode;
}

/**
 * Customizable scrollbar component with high layout compatibility
 */
export const Scrollbar: React.FC<ScrollbarProps> = (props) => {
  const {
    children,
    className,
    classNames,
    h: height,
    w: width,
    mah: maxHeight,
    mih: minHeight,
    miw: minWidth,
    maw: maxWidth,
    viewportRef,
    visibility = "hover",
    verticalScrollDisabled = false,
    horizontalScrollDisabled = false,
    ...divProps
  } = props;

  const contentRef = useRef<HTMLDivElement | null>(null);

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
  });

  const { horizontalDragging, verticalDragging } = useDragHandler({
    contentRef,
    verticalScrollbarRef,
    horizontalScrollbarRef,
  });
  const isDragging = horizontalDragging || verticalDragging;

  const { hasHorizontalScroll, hasVerticalScroll, horizontalThumbWidth, verticalThumbHeight } = useContentUpdate({
    contentRef,
    visibility,
  });

  const isTrackVisible = visibility === "always" || isDragging;
  const isTrackHidden = visibility === "never";

  const containerClassNames = clsx(
    styles.scrollContainer,
    className,
    classNames?.root,
    isTrackVisible && styles.visible,
    isTrackHidden && styles.trackHidden,
    hasHorizontalScroll && styles.hasHorizontalScroll,
    hasVerticalScroll && styles.hasVerticalScroll,
    verticalScrollDisabled && styles.verticalScrollDisabled,
    horizontalScrollDisabled && styles.horizontalScrollDisabled,
  );

  const verticalAttributes = verticalDragging ? { "data-dragging": true } : {};
  const horizontalAttributes = horizontalDragging ? { "data-dragging": true } : {};

  return (
    <div
      className={containerClassNames}
      style={{ height, width, minHeight, maxHeight, minWidth, maxWidth }}
      {...divProps}
    >
      <div
        className={clsx(styles.viewport, classNames?.viewport)}
        data-horizontal-scroll={hasHorizontalScroll}
        data-vertical-scroll={hasVerticalScroll}
        style={{ height, width, minHeight, maxHeight, minWidth, maxWidth }}
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
