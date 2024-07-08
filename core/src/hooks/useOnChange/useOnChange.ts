import { useEffect, useRef } from "react";
import { usePrevious } from "../usePrevious/usePrevious";

export interface UseOnChangeProps<ValueType> {
  value: ValueType;
  onChange: (value: ValueType) => void;
}

/**
 * Triggers the onChange callback whenever the passed value changed since the last render.
 */
export const useOnChange = <ValueType>(props: UseOnChangeProps<ValueType>) => {
  const { value, onChange } = props;

  const lastChangeValue = useRef<ValueType | null>(null);
  const previousValue = usePrevious(value, { useInitialValueAsPrevious: true });

  useEffect(() => {
    if (value === lastChangeValue.current) return;
    if (value !== previousValue) {
      onChange(value);
    }
    lastChangeValue.current = value;
  }, [value, previousValue, onChange]);
};
