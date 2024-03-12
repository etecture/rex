import type { Meta, StoryObj } from "@storybook/react";

import { Swiper } from "../Swiper";

export default {
  title: "Components/Swiper",
  component: Swiper,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof Swiper>;

type Story = StoryObj<typeof Swiper>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 1000, border: "2px dashed gray" }}>
      <Swiper {...args}>
        <Swiper.Background style={{ padding: 25 }}>
          <img
            style={{ width: 4000 }}
            width={4000}
            height={200}
            alt={"lorem picsum"}
            src={"https://picsum.photos/4000/200"}
          />
        </Swiper.Background>

        <Swiper.Foreground style={{ position: "absolute", left: 45, top: 45 }}>
          <div style={{ color: "white", textShadow: "0 0 8px black" }}>
            You can select this text since it's wrapped with the `Swiper.Foreground` component
          </div>
        </Swiper.Foreground>
      </Swiper>
    </div>
  ),
};
