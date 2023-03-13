import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './headline.scss?inline'

export interface HeadlineProps {
	tag: any
	text: string
	size: string
	variant?: string
}

export default component$((props: HeadlineProps) => {
	useStyles$(styles)
	const Component = props.tag

	return (
		<Component class={`${props.size} ${props.variant}`}>
			{props.text}
		</Component>
	)
})
