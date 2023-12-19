import { Meta, StoryObj } from "@storybook/react";

import { BreakpointValues, useBreakpoint } from "../useBreakpoint";

export default {
  title: "Hooks/useBreakpoint",
  parameters: {
    layout: "centered",
  },
  args: {
    xs: "xsValue",
    sm: "smValue",
    md: "mdValue",
    lg: "lgValue",
    xl: "xlValue",
  },
} satisfies Meta;

export const Default: StoryObj = {
  render: (args: BreakpointValues<string>) => {
    const test = useBreakpoint({ xs: args.xs, sm: args.sm, md: args.md, lg: args.lg, xl: args.xl });

    return (
      <div>
        {test.breakpoint}: {test.value}
      </div>
    );
  },
};
