import { useEffect, useRef, useState } from "react";

export interface UseIsIdleOptions {
  /**
   * The amount of time after the last interaction that marks the user as idle.
   * @default 10000
   */
  idleAfterMs?: number;
}

/**
 * Checks for user interaction and returns idle after a set time.
 * The default user interactions are mousemove, mousedown, touchstart and keydown.
 */
export const useIsIdle = (options?: UseIsIdleOptions) => {
  const { idleAfterMs = 10000 } = options ?? {};

  const [isIdle, setIsIdle] = useState(true);

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleAction = (event: Event) => {
      event.preventDefault();

      setIsIdle(false);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsIdle(true);
      }, idleAfterMs);
    };

    document.addEventListener("mousemove", handleAction);
    document.addEventListener("touchstart mousedown", handleAction);
    document.addEventListener("keydown", handleAction);

    return () => {
      document.removeEventListener("mousemove", handleAction);
      document.removeEventListener("touchstart mousedown", handleAction);
      document.removeEventListener("keydown", handleAction);
    };
  }, [idleAfterMs]);

  return isIdle;
};
