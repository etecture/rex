import { type RefObject, useEffect, useRef, useState } from "react";

export type UseResizeObserverParams = {
  ref: RefObject<HTMLElement>;
  onChange?: (rect: UseResizeObserverResult) => void;
};

export type UseResizeObserverResult = {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
  x: number;
  y: number;
};

export const useResizeObserver = (params: UseResizeObserverParams): UseResizeObserverResult => {
  const { ref, onChange } = params;

  const [contentRect, setContentRect] = useState<UseResizeObserverResult>({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (!resizeObserverRef.current) {
      resizeObserverRef.current = new ResizeObserver((entries) => {
        const [entry] = entries;
        setContentRect(entry.contentRect);
        onChange?.(entry.contentRect);
      });
    }

    resizeObserverRef.current.observe(ref.current);

    return () => {
      if (ref.current) {
        resizeObserverRef.current?.unobserve(ref.current);
      }
    };
  }, [onChange, ref]);

  return contentRect;
};
