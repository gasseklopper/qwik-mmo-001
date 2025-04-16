import type { Meta, StoryObj } from 'storybook-framework-qwik'
import Modal, { type ExtendedProductCategoryProps } from './modal'
import { QwikJSX, _Only$, ComponentBaseProps, JSXChildren } from '@builder.io/qwik'

const modalProps: ExtendedProductCategoryProps = {
	class: 'testClassName'
}

const meta: Meta<ExtendedProductCategoryProps> = {
	title: 'Atoms/Modal',
	component: Modal,
	tags: ['autodocs'],
}

type Story = StoryObj<ExtendedProductCategoryProps>

export default meta

export const ModalDefault: Story = {
	args: modalProps,
	render: (args: QwikJSX.IntrinsicAttributes & Omit<ExtendedProductCategoryProps, `${string}$`> & _Only$<ExtendedProductCategoryProps> & ComponentBaseProps & { children?: JSXChildren }) =>
		<>
			<Modal {...args} >Headline lorem Ipsum 1</Modal>
			<Modal {...args} >Headline lorem Ipsum 2</Modal>
			<Modal {...args} >Headline lorem Ipsum 3</Modal>
			<Modal {...args} >Headline lorem Ipsum 5</Modal>
		</>
}
