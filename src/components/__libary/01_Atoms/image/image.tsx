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

const baseClassDefault = 'image'

export default component$((props: ExtendedImageProps) => {
	useStyles$(styles)

	const componentBaseClass = props.imageBaseClass || baseClassDefault

	return (
		<img {...props} class={`${componentBaseClass} ${props.imageVariant}`} />
	)
})
