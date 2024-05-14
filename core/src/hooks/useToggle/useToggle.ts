import { useState } from "react";

export interface UseToggleProps {
  initialValue?: boolean;
}

export type UseToggleResult = [
  boolean,
  { open: () => void; close: () => void; toggle: () => void },
];

export const useToggle = (props?: UseToggleProps): UseToggleResult => {
  const [value, setValue] = useState(props?.initialValue ?? false);

  const open = () => setValue(true);
  const close = () => setValue(false);
  const toggle = () => setValue((current) => !current);

  return [value, { open, close, toggle }];
};
