import type { Meta, StoryObj } from "storybook-framework-qwik";
import  Button,{ ExtendedButtonProps } from "./button";

const meta: Meta<ExtendedButtonProps> = {
  component: Button,
};

type Story = StoryObj<ExtendedButtonProps>;

export default meta;

export const Primary: Story = {
  args: {
    buttonSize: "default",
    buttonVariant: "primary"
  },
  render: (props) => <Button {...props}>Some button</Button>,
};
