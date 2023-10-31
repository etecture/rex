import { RefObject, useEffect, useRef, useState } from "react";

export type UseDragHandlerProps = {
  scrollbarRef: RefObject<HTMLDivElement | null>;
  contentRef: RefObject<HTMLDivElement | null>;
  mode: "vertical" | "horizontal";
};

export const useDragHandler = (props: UseDragHandlerProps) => {
  const { scrollbarRef, contentRef, mode } = props;

  const initialPositionRef = useRef(0);
  const scrollTopRef = useRef(0);

  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      setDragging(true);

      if (mode === "vertical") {
        initialPositionRef.current = event.clientY;
        scrollTopRef.current = contentRef.current?.scrollTop ?? 0;
      }

      if (mode === "horizontal") {
        initialPositionRef.current = event.clientX;
        scrollTopRef.current = contentRef.current?.scrollLeft ?? 0;
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      if (dragging && contentRef.current && scrollbarRef.current) {
        const scrollbarThumb = scrollbarRef.current.firstChild as HTMLDivElement;
        const contentRect = contentRef.current.getBoundingClientRect();

        if (mode === "vertical") {
          const deltaY = event.clientY - initialPositionRef.current;

          const scrollbarTrackArea =
            scrollbarRef.current.getBoundingClientRect().height - scrollbarThumb.getBoundingClientRect().height;
          const deltaRatio = deltaY / scrollbarTrackArea;

          const movableArea = contentRef.current.scrollHeight - contentRect.height;

          contentRef.current.scrollTop = scrollTopRef.current + movableArea * deltaRatio;
        }

        if (mode === "horizontal") {
          const deltaX = event.clientX - initialPositionRef.current;

          const scrollbarTrackArea =
            scrollbarRef.current.getBoundingClientRect().width - scrollbarThumb.getBoundingClientRect().width;
          const deltaRatio = deltaX / scrollbarTrackArea;

          const movableArea = contentRef.current.scrollWidth - contentRect.width;

          contentRef.current.scrollLeft = scrollTopRef.current + movableArea * deltaRatio;
        }
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    if (scrollbarRef.current) {
      const scrollbarThumb = scrollbarRef.current.firstChild as HTMLDivElement;

      scrollbarThumb.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (scrollbarRef.current) {
        const scrollbarThumb = scrollbarRef.current.firstChild as HTMLDivElement;
        scrollbarThumb.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, [mode, dragging]);
};
