import type { Meta, StoryObj } from 'storybook-framework-qwik'
import GridComponent, { type ExtendedGridProps } from './grid'

const primaryButtonProps: ExtendedGridProps = {
	class: 'testClassName'
}

const meta: Meta<ExtendedGridProps> = {
	title: 'Atoms/Headline',
	component: GridComponent,
	tags: ['autodocs'],
}

type Story = StoryObj<ExtendedGridProps>

export default meta

export const HeadlineDefault: Story = {
	args: primaryButtonProps,
	render: (args) => <GridComponent {...args}>Headline lorem Ipsum</GridComponent>,
}

