import type { Meta, StoryObj } from 'storybook-framework-qwik'
import HeadlineComponent, { ExtendedProductCategoryProps } from './headlines'

const primaryButtonProps: ExtendedProductCategoryProps = {
	headlineTag: 'h1',
	headlineClass: 'h4'
}

const meta: Meta<ExtendedProductCategoryProps> = {
	title: 'Atoms/Headline',
	component: HeadlineComponent,
	tags: ['autodocs'],
}

type Story = StoryObj<ExtendedProductCategoryProps>

export default meta

export const HeadlineDefault: Story = {
	args: primaryButtonProps,
	render: (args) => <HeadlineComponent {...args}>Headline lorem Ipsum</HeadlineComponent>,
}

