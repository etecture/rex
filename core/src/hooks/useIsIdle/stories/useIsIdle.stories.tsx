import type { Meta, StoryObj } from "@storybook/react";
import { type UseIsIdleOptions, useIsIdle } from "../useIsIdle";

export default {
  title: "Hooks/useIsIdle",
  parameters: {
    layout: "centered",
  },
  args: {
    idleAfterMs: 1000,
  } satisfies UseIsIdleOptions,
} satisfies Meta;

export const Default: StoryObj = {
  render: (args: UseIsIdleOptions) => {
    const isIdle = useIsIdle(args);
    return <div>isIdle: {isIdle.toString()}</div>;
  },
};
