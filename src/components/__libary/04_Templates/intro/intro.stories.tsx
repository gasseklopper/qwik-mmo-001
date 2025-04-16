import type { Meta, StoryObj } from 'storybook-framework-qwik'
import GridComponent, { type ExtendedGridProps } from './intro'
import { QwikJSX, _Only$, ComponentBaseProps, JSXChildren } from '@builder.io/qwik'

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
	render: (args: QwikJSX.IntrinsicAttributes & Omit<ExtendedGridProps, `${string}$`> & _Only$<ExtendedGridProps> & ComponentBaseProps & { children?: JSXChildren }) => <GridComponent {...args}>Headline lorem Ipsum</GridComponent>,
}
