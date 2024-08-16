import type { Meta, StoryObj } from "@storybook/react";
import Products from "./Products";

// Define some sample data for the products
const sampleProducts = [
  {
    _id: 1001,
    title: "iphone 15",
    price: 1500.99,
    previousPrice: 1600.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/p3s01cP/iphone15.jpg",
    isNew: true,
    brand: "Apple",
    quantity: 1,
  },
  {
    _id: 1002,
    title: "iphone 14",
    price: 1150.99,
    previousPrice: 1240.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/HD4JCrk/iphone2.jpg",
    isNew: true,
    brand: "Apple",
    quantity: 1,
  },
];

const meta = {
  title: "components/ui/Products",
  component: Products,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    products: sampleProducts,
  },
} satisfies Meta<typeof Products>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    products: sampleProducts,
  },
};
