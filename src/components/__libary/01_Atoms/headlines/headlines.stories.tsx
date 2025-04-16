import type { Meta, StoryObj } from 'storybook-framework-qwik'
import HeadlineComponent, { type ExtendedHeadlinesProps } from './headlines'
import type { QwikJSX, _Only$, ComponentBaseProps, JSXChildren } from '@builder.io/qwik'

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
	render: (args: QwikJSX.IntrinsicAttributes & Omit<ExtendedHeadlinesProps, `${string}$`> & _Only$<ExtendedHeadlinesProps> & ComponentBaseProps & { children?: JSXChildren }) => <HeadlineComponent {...args}>Headline lorem Ipsum</HeadlineComponent>,
}
