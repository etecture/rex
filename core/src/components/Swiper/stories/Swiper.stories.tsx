import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";
import { Swiper } from "../Swiper";

export default {
  title: "Components/Swiper",
  component: Swiper,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    dampenerMultiplier: { control: { type: "number", step: 0.01 } },
    velocityMultiplier: { control: "number" },
  },
  args: {
    dampenerMultiplier: 0.97,
    velocityMultiplier: 1,
  },
} satisfies Meta<typeof Swiper>;

type Story = StoryObj<typeof Swiper>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 1000, border: "2px dashed gray" }}>
      <Swiper {...args}>
        <div style={{ padding: 25 }}>
          <img
            style={{ width: 4000 }}
            width={4000}
            height={200}
            alt={"lorem picsum"}
            src={"https://picsum.photos/4000/200"}
          />
        </div>
      </Swiper>
    </div>
  ),
};

export const TabScroller: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState(1);
    const buttons = new Array(30).fill("").map((_, index) => index);

    return (
      <div style={{ width: 1000, border: "2px dashed gray" }}>
        <Swiper {...args}>
          <div style={{ display: "flex", flexWrap: "nowrap" }}>
            {buttons.map((index) => (
              <button
                key={`button_${index}`}
                type="button"
                style={{ width: 150, flexShrink: 0, height: 80, border: "1px solid gray" }}
                onClick={() => setActiveTab(index + 1)}
              >
                Tab {index + 1}
              </button>
            ))}
          </div>
        </Swiper>

        <div style={{ padding: 25 }}>ActiveTab: {activeTab}</div>
      </div>
    );
  },
};
