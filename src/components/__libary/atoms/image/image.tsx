import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './image.scss?inline'

export interface ImageProps {
	src: string
	alt: string
	size?: string
	variant?: string
}

export default component$((props: ImageProps) => {
	useStyles$(styles)

	return (
		<img
			src={props.src}
			class={`${props.size} ${props.variant}`}
			alt={props.alt}
		/>
	)
})
