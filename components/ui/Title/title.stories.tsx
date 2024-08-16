import type { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";

const meta: Meta<typeof Title> = {
  title: "components/ui/Title",
  component: Title,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Default Title",
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "All Products Here!",
  },
};

