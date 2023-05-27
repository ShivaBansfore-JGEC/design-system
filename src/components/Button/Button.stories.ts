import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Button",
    type: "primary",
    size: "large",
    loading: false,
    disabled: false
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    type: "secondary",
    size: "medium",
    loading: false,
    disabled: false
  },
};

export const Tertiary: Story = {
  args: {
    label: "Button",
    type: "tertiary",
    size: "large",
    loading: false,
    disabled: false
  },
};

