import type { Meta, StoryObj } from "storybook-framework-qwik";
import Friends, { type HeadlineProps } from "./friends";

const meta: Meta<HeadlineProps> = {
  component: Friends,
};

type Story = StoryObj<HeadlineProps>;

export default meta;

export const Primary: Story = {
  args: {

  },
  render: (props) => <Friends {...props} />,
};
