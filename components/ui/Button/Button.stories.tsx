import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered", // Centers the component in the Storybook preview
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "ghost", "dark"], // Match with your variant options
    },
    size: {
      control: "select",
      options: ["default", "icon"], // Match with your size options
    },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  args: {
    variant: "default",
    size: "default",
    children: "Default Button",
  },
};

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: "ghost",
    size: "default",
    children: "Ghost Button",
  },
};

export const Dark: StoryObj<ButtonProps> = {
  args: {
    variant: "dark",
    size: "default",
    children: "Dark Button",
  },
};

export const Icon: StoryObj<ButtonProps> = {
  args: {
    variant: "default",
    size: "icon",
    children: <span>Icon</span>, // Replace with actual icon if needed
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    variant: "default",
    size: "default",
    children: "Disabled Button",
    disabled: true,
  },
};
