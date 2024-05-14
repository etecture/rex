import type { Meta, StoryObj } from "@storybook/react";
import { type UseToggleProps, useToggle } from "../useToggle";

export default {
  title: "Hooks/useToggle",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<UseToggleProps>;

export const Default: StoryObj<UseToggleProps> = {
  render: (args) => {
    const [value, handler] = useToggle(args);

    return (
      <div>
        <div>{value.toString()}</div>
        <div>
          <button type="button" onClick={handler.open}>
            open
          </button>
          <button type="button" onClick={handler.close}>
            close
          </button>
          <button type="button" onClick={handler.toggle}>
            toggle
          </button>
        </div>
      </div>
    );
  },
};
