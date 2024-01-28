import type { Meta, StoryObj } from 'storybook-framework-qwik'
import HeadlineComponent, { ExtendedProductCategoryProps } from './headlines'

const primaryButtonProps: ExtendedProductCategoryProps = {
	componentTag: 'h1',
}

const meta: Meta<ExtendedProductCategoryProps> = {
	title: 'Atoms/Headline',
	component: HeadlineComponent,
	tags: ['autodocs'],
}

type Story = StoryObj<ExtendedProductCategoryProps>

export default meta

const componentTag: string = primaryButtonProps.componentTag || 'h2'

export const HeadlineDefault: Story = {
	args: primaryButtonProps,
	render: (args) => <HeadlineComponent {...args} >Headline lorem Ipsum</HeadlineComponent>,
}

