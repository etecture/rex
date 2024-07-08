import { useEffect, useRef, useState } from "react";

export interface UsePreviousOptions {
  /**
   * If true, the first previous value will be the first passed value so you can avoid null checks.
   */
  useInitialValueAsPrevious?: boolean;
}

/**
 * Keeps track of a states value from the last render. Is initially null.
 * Set options: { useInitialValueAsPrevious = true } to use the first passed value as the first previous value.
 */
export const usePrevious = <ValueType, Options extends UsePreviousOptions>(
  value: ValueType,
  options?: Options,
) => {
  const { useInitialValueAsPrevious = false } = options ?? {};

  const currentValue = useRef<ValueType | null>(useInitialValueAsPrevious ? value : null);
  const [previousValue, setPreviousValue] = useState<ValueType | null>(
    useInitialValueAsPrevious ? value : null,
  );

  useEffect(() => {
    setPreviousValue(currentValue.current);
    currentValue.current = value;
  }, [value]);

  type ReturnType = Options["useInitialValueAsPrevious"] extends true
    ? ValueType
    : ValueType | null;

  return previousValue as ReturnType;
};
