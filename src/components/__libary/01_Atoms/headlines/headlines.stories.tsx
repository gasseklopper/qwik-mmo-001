import type { Meta, StoryObj } from 'storybook-framework-qwik'
import HeadlineComponent, { ExtendedHeadlinesProps } from './headlines'

const primaryButtonProps: ExtendedHeadlinesProps = {
	headlineTag: 'h1',
	headlineClass: 'h4',
	class: 'testClassName'
}

const meta: Meta<ExtendedHeadlinesProps> = {
	title: 'Atoms/Headline',
	component: HeadlineComponent,
	tags: ['autodocs'],
}

type Story = StoryObj<ExtendedHeadlinesProps>

export default meta

export const HeadlineDefault: Story = {
	args: primaryButtonProps,
	render: (args) => <HeadlineComponent {...args}>Headline lorem Ipsum</HeadlineComponent>,
}

