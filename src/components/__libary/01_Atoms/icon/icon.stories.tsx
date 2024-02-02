import type { Meta, StoryObj } from 'storybook-framework-qwik'
import Icon, { ExtendedIconProps } from './icon'

const iconProps: ExtendedIconProps = {
	iconName: 'LuActivitySquare',
	width: 100,
	height: 100,
	color: 'var(--surface6)',
	class: 'testClassName'
}

const meta: Meta<ExtendedIconProps> = {
	title: 'Atoms/Icon',
	component: Icon,
	tags: ['autodocs'],
}

type Story = StoryObj<ExtendedIconProps>

export default meta

export const IconDefault: Story = {
	args: iconProps,
	render: (args) => <Icon {...args} />,
}
