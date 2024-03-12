import { RefObject, useEffect, useRef } from "react";

export type UseSwiperProps = {
  /**
   * The reference to the element that should scroll
   */
  viewportRef: RefObject<HTMLElement>;

  /**
   * The reference to the element that should handle the drag events
   * Will use the viewportRef by default
   * @default viewportRef
   */
  dragRef?: RefObject<HTMLElement>;

  /**
   * Controls the base velocity strength when swiping, higher number means faster scroll after releasing the mouse
   * @default 0.75
   */
  velocityMultiplier?: number;

  /**
   * Controls how fast the velocity subsides with each frame, the smaller the number the faster the velocity decreases with each frame.
   * 0.96 will reduce the velocity by 4% each frame, 0.50 would reduce it by 50% each frame
   * @default 0.96
   */
  dampenerMultiplier?: number;
};

/**
 * This hook simulates a mobile swipe scroll behaviour with mouse dragging.
 */
export const useSwiper = (props: UseSwiperProps) => {
  const {
    viewportRef,
    dragRef = viewportRef,
    velocityMultiplier = 0.75,
    dampenerMultiplier = 0.96,
  } = props;

  const isDragging = useRef(false);
  const previousScrollLeft = useRef(0);
  const velocityX = useRef(0);
  const dragStartMouseX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const momentumTrackRAF = useRef(0);
  const momentumScrollRAF = useRef(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging.current || !viewportRef.current) return;
      const mouseMovedX = (event.screenX - dragStartMouseX.current) * -1;
      viewportRef.current.scrollLeft = dragStartScrollLeft.current + mouseMovedX;
    };

    const beginMomentumScroll = () => {
      cancelMomentumScroll();
      momentumScrollRAF.current = requestAnimationFrame(momentumScrollLoop);
    };

    const cancelMomentumScroll = () => {
      cancelAnimationFrame(momentumScrollRAF.current);
    };

    const cancelMomentumTrack = () => {
      cancelAnimationFrame(momentumTrackRAF.current);
    };

    const momentumScrollLoop = () => {
      if (!viewportRef.current) return;
      viewportRef.current.scrollLeft += velocityX.current * velocityMultiplier;
      velocityX.current *= dampenerMultiplier;

      if (Math.abs(velocityX.current) > 0.2) {
        momentumScrollRAF.current = requestAnimationFrame(momentumScrollLoop);
      }
    };

    const trackMomentumLoop = () => {
      if (!viewportRef.current) return;
      velocityX.current = viewportRef.current.scrollLeft - previousScrollLeft.current;
      previousScrollLeft.current = viewportRef.current.scrollLeft;

      if (isDragging.current === true) {
        momentumTrackRAF.current = requestAnimationFrame(trackMomentumLoop);
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      beginMomentumScroll();
    };

    const handleMouseDown = (event: MouseEvent) => {
      isDragging.current = true;
      dragStartMouseX.current = event.screenX;
      dragStartScrollLeft.current = viewportRef.current?.scrollLeft ?? 0;
      previousScrollLeft.current = viewportRef.current?.scrollLeft ?? 0;
      cancelMomentumScroll();
      cancelMomentumTrack();
      trackMomentumLoop();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    dragRef.current?.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("scroll", cancelMomentumScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      dragRef.current?.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("scroll", cancelMomentumScroll);
    };
  }, [velocityMultiplier, dampenerMultiplier, viewportRef, dragRef]);
};
