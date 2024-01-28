import type { Meta, StoryObj } from 'storybook-framework-qwik'
import Button, { ExtendedButtonProps } from './button'

const primaryButtonProps: ExtendedButtonProps = {
	buttonSize: 'default',
	buttonVariant: 'primary',
	buttonFit: false,
	buttonLabel: 'Primary Button',
	buttonBaseClass: 'button',
}

const meta: Meta<ExtendedButtonProps> = {
	title: 'Atoms/Button',
	component: Button,
	tags: ['autodocs'],
}

type Story = StoryObj<ExtendedButtonProps>

export default meta

export const PrimaryButton: Story = {
	args: primaryButtonProps,
	render: (args) => <Button {...args} />,
}

export const SecondaryButton: Story = {
	args: primaryButtonProps,
	render: (args) => <Button {...{ ...args, buttonVariant: 'secondary' }} />,
}

export const PrimaryButtonSmall: Story = {
	args: primaryButtonProps,
	render: (args) => <Button {...{ ...args, buttonSize: 'small' }} />,
}

export const PrimaryButtonLarge: Story = {
	args: primaryButtonProps,
	render: () => (
		<Button buttonSize="large" buttonVariant="primary">
			Button Primary Large
		</Button>
	),
}
