import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './button.scss?inline'

export interface ButtonProps {
	label: string
	size?: string
	variant?: string
}

export default component$((props: ButtonProps) => {
	useStyles$(styles)

	return (
		<button class={`${props.size} ${props.variant}`}>{props.label}</button>
	)
})
