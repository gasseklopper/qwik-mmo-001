import type { Meta, StoryObj } from 'storybook-framework-qwik';
import Bodytext, { type ExtendedBodytextProps } from './bodytext';

const primaryButtonProps: ExtendedBodytextProps = {
  bodytextSize: 'medium',
  bodytextVariant: 'bodytext',
  class: 'testClassName',
};

const meta: Meta<ExtendedBodytextProps> = {
  title: 'Atoms/Bodytext',
  component: Bodytext,
  tags: ['autodocs'],
};

type Story = StoryObj<ExtendedBodytextProps>;

export default meta;

export const BodytextDefault: Story = {
  args: primaryButtonProps,
  render: (args) => (
    <Bodytext {...args}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit esse nulla sapiente voluptates! Rerum asperiores quasi harum delectus odio aut ad, inventore provident, temporibus eius voluptates facere ea suscipit, autem veniam eum optio dolore.
    </Bodytext>
  ),
};
