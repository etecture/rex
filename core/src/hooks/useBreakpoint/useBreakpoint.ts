import { useEffect, useState } from "react";

/**
 * Defines a value for each breakpoint
 */
export type BreakpointValues<ValueType = unknown> = {
  xs?: ValueType;
  sm?: ValueType;
  md?: ValueType;
  lg?: ValueType;
  xl?: ValueType;
};

/**
 * Defines which breakpoint key is used for which window width
 */
export type Breakpoints = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export const DEFAULT_BREAKPOINTS = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1408,
} as const;

/**
 * The breakpoint keys
 * xs, sm, md, lg, xl
 */
export type BreakpointKey = keyof BreakpointValues;

/**
 * Contains the current breakpoint and its value
 */
export type UseBreakpointResult<ValueType> = {
  breakpoint: BreakpointKey;
  value: ValueType | undefined;
};

/**
 * Matches the current breakpoint and returns its assigned value
 * @returns the currently matching breakpoint and its value
 */
export const useBreakpoint = <Values extends BreakpointValues>(
  values?: Values,
  breakpoints: Breakpoints = DEFAULT_BREAKPOINTS,
): UseBreakpointResult<Values["xs"]> => {
  const [breakpoint, setBreakpoint] = useState<BreakpointKey>("xs");

  useEffect(() => {
    const updateBreakpoint = () => {
      let _breakpoint: BreakpointKey = "xs";

      Object.keys(breakpoints).forEach((size) => {
        if (document.body.clientWidth >= Number(breakpoints[size as BreakpointKey])) {
          _breakpoint = size as BreakpointKey;
        }
      });

      setBreakpoint(_breakpoint);
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);

    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, [breakpoints]);

  let returnValue: unknown | undefined = undefined;
  if (typeof values !== "undefined") {
    const breakpointKeys = ["xs", "sm", "md", "lg", "xl"] as const;

    breakpointKeys.some((it, index) => {
      if (values[it]) returnValue = values[it];
      const hasMatchingValue = returnValue && it === breakpoint;
      const isNextPossibleValue = returnValue && index >= breakpointKeys.indexOf(breakpoint);

      return hasMatchingValue || isNextPossibleValue;
    });
  }

  return {
    breakpoint,
    value: returnValue,
  };
};
