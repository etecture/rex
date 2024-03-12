import { type RefObject, useEffect, useRef, useState } from "react";

export type UseDragHandlerProps = {
  horizontalScrollbarRef: RefObject<HTMLDivElement | null>;
  verticalScrollbarRef: RefObject<HTMLDivElement | null>;
  contentRef: RefObject<HTMLDivElement | null>;
};

export const useDragHandler = (props: UseDragHandlerProps) => {
  const { horizontalScrollbarRef, verticalScrollbarRef, contentRef } = props;

  const initialPositionYRef = useRef(0);
  const initialPositionXRef = useRef(0);

  const scrollTopRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const [horizontalDragging, setHorizontalDragging] = useState(false);
  const [verticalDragging, setVerticalDragging] = useState(false);

  useEffect(() => {
    const onHorizontalMouseDown = (event: MouseEvent) => {
      setHorizontalDragging(true);

      initialPositionXRef.current = event.clientX;
      scrollLeftRef.current = contentRef.current?.scrollLeft ?? 0;
    };

    const onVerticalMouseDown = (event: MouseEvent) => {
      setVerticalDragging(true);

      initialPositionYRef.current = event.clientY;
      scrollTopRef.current = contentRef.current?.scrollTop ?? 0;
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!contentRef.current) return;

      if (horizontalScrollbarRef.current && horizontalDragging) {
        const scrollbarThumb = horizontalScrollbarRef.current.firstChild as HTMLDivElement;
        const contentRect = contentRef.current.getBoundingClientRect();
        const deltaX = event.clientX - initialPositionXRef.current;

        const scrollbarTrackArea =
          horizontalScrollbarRef.current.getBoundingClientRect().width -
          scrollbarThumb.getBoundingClientRect().width;
        const deltaRatio = deltaX / scrollbarTrackArea;

        const movableArea = contentRef.current.scrollWidth - contentRect.width;

        contentRef.current.scrollLeft = scrollLeftRef.current + movableArea * deltaRatio;
      }

      if (verticalScrollbarRef.current && verticalDragging) {
        const scrollbarThumb = verticalScrollbarRef.current.firstChild as HTMLDivElement;
        const contentRect = contentRef.current.getBoundingClientRect();

        const deltaY = event.clientY - initialPositionYRef.current;

        const scrollbarTrackArea =
          verticalScrollbarRef.current.getBoundingClientRect().height -
          scrollbarThumb.getBoundingClientRect().height;
        const deltaRatio = deltaY / scrollbarTrackArea;

        const movableArea = contentRef.current.scrollHeight - contentRect.height;

        contentRef.current.scrollTop = scrollTopRef.current + movableArea * deltaRatio;
      }
    };

    const handleMouseUp = () => {
      setHorizontalDragging(false);
      setVerticalDragging(false);
    };

    if (horizontalScrollbarRef.current) {
      const scrollbarThumb = horizontalScrollbarRef.current.firstChild as HTMLDivElement;
      scrollbarThumb.addEventListener("mousedown", onHorizontalMouseDown);
    }

    if (verticalScrollbarRef.current) {
      const scrollbarThumb = verticalScrollbarRef.current.firstChild as HTMLDivElement;
      scrollbarThumb.addEventListener("mousedown", onVerticalMouseDown);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      if (horizontalScrollbarRef.current) {
        const scrollbarThumb = horizontalScrollbarRef.current.firstChild as HTMLDivElement;
        scrollbarThumb.removeEventListener("mousedown", onHorizontalMouseDown);
      }

      if (verticalScrollbarRef.current) {
        const scrollbarThumb = verticalScrollbarRef.current.firstChild as HTMLDivElement;
        scrollbarThumb.removeEventListener("mousedown", onVerticalMouseDown);
      }

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [
    verticalDragging,
    horizontalDragging,
    contentRef,
    horizontalScrollbarRef,
    verticalScrollbarRef,
  ]);

  return {
    horizontalDragging,
    verticalDragging,
  };
};
