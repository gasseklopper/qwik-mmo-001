import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './bodytext.scss?inline'

export interface BodyTextProps {
	tag: any
	text: string
	size: string
	variant?: string
}

export default component$((props: BodyTextProps) => {
	useStyles$(styles)
	const Component = props.tag

	return (
		<Component class={`${props.size} ${props.variant}`}>
			{props.text}
		</Component>
	)
})
