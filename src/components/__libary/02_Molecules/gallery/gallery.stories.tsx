import type { Meta, StoryObj } from 'storybook-framework-qwik'
import Image, { type ExtendedImageProps } from './gallery'

const image = "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"

const imageProps: ExtendedImageProps = {
	src: image,
	alt: 'example image',
	imageVariant: 'default image variant',
	height: 400,
	width: 400,
}

const meta: Meta<ExtendedImageProps> = {
	title: 'Atoms/Image',
	component: Image,
	tags: ['autodocs'],
}

type Story = StoryObj<ExtendedImageProps>

export default meta

export const defaultImage: Story = {
	args: imageProps,
	render: (args) => <Image {...args} />,
}
