import { type RefObject, useEffect, useRef } from "react";

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
   * @default 1
   */
  velocityMultiplier?: number;

  /**
   * Controls how fast the velocity subsides with each frame, the smaller the number the faster the velocity decreases with each frame.
   * 0.96 will reduce the velocity by 4% each frame, 0.50 would reduce it by 50% each frame
   * @default 0.97
   */
  dampenerMultiplier?: number;

  /**
   * If false the hook will not do anything
   * @default true
   */
  enabled?: boolean;
};

/**
 * This hook simulates a mobile swipe scroll behaviour with mouse dragging.
 */
export const useSwiper = (props: UseSwiperProps) => {
  const {
    viewportRef,
    dragRef = viewportRef,
    velocityMultiplier = 1,
    dampenerMultiplier = 0.97,
    enabled = true,
  } = props;

  const isDragging = useRef(false);
  const previousScrollLeft = useRef(0);
  const velocities = useRef([0, 0, 0]);
  const dragStartMouseX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const momentumTrackRAF = useRef(0);
  const momentumScrollRAF = useRef(0);

  useEffect(() => {
    const getVelocity = () => {
      return (
        velocities.current.reduce((sum, current) => sum + current, 0) / velocities.current.length
      );
    };

    const dampenVelocity = () => {
      velocities.current = velocities.current.map((vel) => vel * dampenerMultiplier);
    };

    const addVelocity = (velocity: number) => {
      velocities.current = [velocity, ...velocities.current.slice(0, 2)];
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging.current || !viewportRef.current) return;

      const mouseMovedX = (event.screenX - dragStartMouseX.current) * -1;
      viewportRef.current.scrollLeft = dragStartScrollLeft.current + mouseMovedX;
      viewportRef.current.style.pointerEvents = "none";
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
      if (velocityMultiplier <= 0) return;
      if (!viewportRef.current) return;

      const velocity = getVelocity();

      viewportRef.current.scrollLeft += velocity * velocityMultiplier;
      dampenVelocity();

      if (Math.abs(velocity) >= 1) {
        momentumScrollRAF.current = requestAnimationFrame(momentumScrollLoop);
      }
    };

    const trackMomentumLoop = () => {
      if (!viewportRef.current) return;

      addVelocity(viewportRef.current.scrollLeft - previousScrollLeft.current);

      previousScrollLeft.current = viewportRef.current.scrollLeft;

      if (isDragging.current === true) {
        momentumTrackRAF.current = requestAnimationFrame(trackMomentumLoop);
      }
    };

    const handleMouseUp = () => {
      if (!viewportRef.current) return;

      isDragging.current = false;

      const velocity = getVelocity();
      if (Math.abs(velocity) >= 1) {
        beginMomentumScroll();
      }

      viewportRef.current.style.pointerEvents = "auto";
    };

    const handleMouseDown = (event: MouseEvent) => {
      event.preventDefault();

      isDragging.current = true;
      dragStartMouseX.current = event.screenX;
      dragStartScrollLeft.current = viewportRef.current?.scrollLeft ?? 0;
      previousScrollLeft.current = viewportRef.current?.scrollLeft ?? 0;
      cancelMomentumScroll();
      cancelMomentumTrack();
      trackMomentumLoop();
    };

    const isTouchDevice = window.matchMedia("(pointer:coarse)").matches;

    if (enabled && !isTouchDevice) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      dragRef.current?.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("scroll", cancelMomentumScroll);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      dragRef.current?.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("scroll", cancelMomentumScroll);
    };
  }, [velocityMultiplier, dampenerMultiplier, viewportRef, dragRef, enabled]);
};
