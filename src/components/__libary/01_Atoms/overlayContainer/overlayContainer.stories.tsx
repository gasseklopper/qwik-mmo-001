import type { Meta, StoryObj } from 'storybook-framework-qwik'
import Button, { type ExtendedButtonProps } from './overlayContainer'
import { QwikJSX, ComponentBaseProps, JSXChildren } from '@builder.io/qwik'

const primaryButtonProps: ExtendedButtonProps = {
	buttonSize: 'default',
	buttonVariant: 'primary',
	buttonFit: false,
	buttonLabel: 'Primary Button',
	buttonBaseClass: 'button',
	class: 'testClassName'
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
	render: (args: QwikJSX.IntrinsicAttributes & ComponentBaseProps & { children?: JSXChildren }) => <Button {...args} />,
}

export const SecondaryButton: Story = {
	args: primaryButtonProps,
	render: (args: QwikJSX.IntrinsicAttributes & ComponentBaseProps & { children?: JSXChildren }) => <Button {...{ ...args, buttonVariant: 'secondary' }} />,
}

export const PrimaryButtonSmall: Story = {
	args: primaryButtonProps,
	render: (args: QwikJSX.IntrinsicAttributes & ComponentBaseProps & { children?: JSXChildren }) => <Button {...{ ...args, buttonSize: 'small' }} />,
}
