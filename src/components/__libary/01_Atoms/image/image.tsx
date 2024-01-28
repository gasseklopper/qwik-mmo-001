import { QwikIntrinsicElements, component$, useStyles$ } from '@builder.io/qwik'
import styles from './image.scss?inline'

export interface ImageProps {
	imageBaseClass?: string
	imageVariant?: string
}

type ExtendedImageElement = QwikIntrinsicElements['img'] & {
	'aria-label'?: string
	loading?: 'eager' | 'lazy' | undefined
}

export type ExtendedImageProps = ExtendedImageElement & ImageProps

const mainClass = 'image'

export default component$(({class: className,...props}: ExtendedImageProps) => {
	useStyles$(styles)

	const componentClass = className || ''
	const componentBaseClass = props.imageBaseClass || ''

	return (
		<img {...props} class={`${mainClass} ${componentClass} ${componentBaseClass} ${props.imageVariant}`} />
	)
})
