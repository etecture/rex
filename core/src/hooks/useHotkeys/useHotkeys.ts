import { type RefObject, useEffect, useRef, useState } from "react";

interface HotkeyItemOptions {
  preventDefault?: boolean;
  stopPropagation?: boolean;
}

export type HotkeyItemCallback = (event: KeyboardEvent) => void;

export type HotkeyItem = [key: string, callback: HotkeyItemCallback, options?: HotkeyItemOptions];

export interface UseHotkeysOptions {
  target?: RefObject<HTMLElement | Document | Window | null>;
}

export const useHotkeys = (hotkeys: HotkeyItem[], options?: UseHotkeysOptions) => {
  const [target, setTarget] = useState<HTMLElement | Document | Window | null | undefined>(
    options?.target?.current,
  );

  // Workaround for next.js SSR
  useEffect(() => {
    setTarget(options?.target?.current ?? document);
  }, [options?.target]);

  const pressedKeys = useRef<string[]>([]);

  useEffect(() => {
    const handleHotkey = (eventKeys: string[], event: KeyboardEvent) => {
      for (const hotkey of hotkeys) {
        const [hotkeyKey, callback, options] = hotkey;
        const hotkeyParts = hotkeyKey.split("+");

        if (
          hotkeyParts.length !== eventKeys.length ||
          hotkeyParts.some((hotkeyPart) => !eventKeys.includes(hotkeyPart))
        ) {
          continue;
        }

        if (options?.preventDefault) event.preventDefault();
        if (options?.stopPropagation) event.stopPropagation();
        callback(event);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      pressedKeys.current.push(event.key);
      handleHotkey(pressedKeys.current, event);
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      pressedKeys.current.splice(pressedKeys.current.indexOf(event.key), 1);
    };

    target?.addEventListener("keydown", handleKeyDown as EventListenerOrEventListenerObject);
    target?.addEventListener("keyup", handleKeyUp as EventListenerOrEventListenerObject);

    return () => {
      target?.removeEventListener("keydown", handleKeyDown as EventListenerOrEventListenerObject);
      target?.removeEventListener("keyup", handleKeyUp as EventListenerOrEventListenerObject);
    };
  }, [target, hotkeys]);
};
