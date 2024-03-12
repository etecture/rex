import type { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";
import { type UseSwiperProps, useSwiper } from "../useSwiper";

export default {
  title: "Hooks/useSwiper",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    dampenerMultiplier: { control: { type: "number", step: 0.05 } },
    velocityMultiplier: { control: "number" },
  },
  args: {
    dampenerMultiplier: 0.96,
    velocityMultiplier: 6,
  },
} satisfies Meta<UseSwiperProps>;

export const Default: StoryObj<UseSwiperProps> = {
  render: (args) => {
    const viewportRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef<HTMLDivElement>(null);
    useSwiper({ ...args, dragRef, viewportRef });

    return (
      <div ref={viewportRef} style={{ width: 1000, overflowX: "scroll", position: "relative" }}>
        <div style={{ width: 4000, position: "relative" }}>
          <div
            ref={dragRef}
            style={{
              position: "absolute",
              display: "inline-block",
              inset: 0,
              width: "100%",
              zIndex: 0,
            }}
          />

          <img
            width={4000}
            height={300}
            alt={"lorem picsum"}
            src={"https://picsum.photos/4000/300"}
          />

          <div
            style={{
              fontSize: 30,
              position: "absolute",
              left: 20,
              top: 20,
              color: "white",
              textShadow: "0 0 8px black",
              zIndex: 1,
            }}
          >
            You can select this text without causing a scroll!
          </div>
        </div>
      </div>
    );
  },
};
