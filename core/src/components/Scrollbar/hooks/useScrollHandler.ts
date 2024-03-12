import { type RefObject, useEffect, useRef, useState } from "react";

export type UseScrollbarHandlerProps = {
  verticalScrollbarRef: RefObject<HTMLDivElement | null>;
  horizontalScrollbarRef: RefObject<HTMLDivElement | null>;
  contentRef: RefObject<HTMLDivElement>;
  visibilityTimeout: number;
  verticalToHorizontalScroll: boolean;
  onScroll?: () => void;
};

export const useScrollHandler = (props: UseScrollbarHandlerProps) => {
  const {
    verticalScrollbarRef,
    horizontalScrollbarRef,
    contentRef,
    visibilityTimeout,
    verticalToHorizontalScroll,
    onScroll,
  } = props;

  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const targetScrollLeft = useRef(contentRef.current?.scrollLeft ?? 0);
  const targetScrollTop = useRef(contentRef.current?.scrollTop ?? 0);

  useEffect(() => {
    const handleScroll = () => {
      const contentWidth = contentRef.current?.clientWidth ?? 0;
      const contentHeight = contentRef.current?.clientHeight ?? 0;

      onScroll?.();
      setIsScrolling(true);
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), visibilityTimeout);

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

    const handleWheel = (event: WheelEvent) => {
      if (!contentRef.current) return;
      if (!verticalToHorizontalScroll) return;
      event.preventDefault();

      const beforeLeft = contentRef.current.scrollLeft;
      const beforeTop = contentRef.current.scrollTop;

      const scrollWidth = contentRef.current.scrollWidth - contentRef.current.clientWidth;
      const scrollHeight = contentRef.current.scrollHeight - contentRef.current.clientHeight;

      targetScrollLeft.current = Math.max(
        Math.min(targetScrollLeft.current + event.deltaY, scrollWidth),
        0,
      );

      targetScrollTop.current = Math.max(
        Math.min(targetScrollTop.current + event.deltaY, scrollHeight),
        0,
      );

      const getScrollStep = () => {
        return event.deltaY / 15;
      };

      const smoothHorizontalScroll = () => {
        if (!contentRef.current) return;
        const step = getScrollStep();

        if (event.shiftKey) {
          contentRef.current.scrollBy({ top: step });

          const scrollTop = contentRef.current.scrollTop;

          const reachedPositiveTarget = scrollTop >= targetScrollTop.current && step >= 0;
          const reachedNegativeTarget = scrollTop <= targetScrollTop.current && step <= 0;

          if (reachedPositiveTarget || reachedNegativeTarget) return;
          if (scrollTop === beforeTop) return;
        } else {
          contentRef.current.scrollBy({ left: step });

          const scrollLeft = contentRef.current.scrollLeft;

          const reachedPositiveTarget = scrollLeft >= targetScrollLeft.current && step >= 0;
          const reachedNegativeTarget = scrollLeft <= targetScrollLeft.current && step <= 0;

          if (reachedPositiveTarget || reachedNegativeTarget) return;
          if (scrollLeft === beforeLeft) return;
        }

        requestAnimationFrame(smoothHorizontalScroll);
      };

      requestAnimationFrame(smoothHorizontalScroll);
    };

    contentRef.current?.addEventListener("scroll", handleScroll);

    if (verticalToHorizontalScroll) {
      contentRef.current?.addEventListener("wheel", handleWheel);
    }

    return () => {
      contentRef.current?.removeEventListener("scroll", handleScroll);
      contentRef.current?.removeEventListener("wheel", handleWheel);
    };
  }, [
    contentRef,
    verticalScrollbarRef,
    horizontalScrollbarRef,
    visibilityTimeout,
    verticalToHorizontalScroll,
    onScroll,
  ]);

  return { isScrolling };
};
