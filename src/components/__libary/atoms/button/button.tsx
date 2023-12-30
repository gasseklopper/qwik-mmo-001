import type { QRL, QwikIntrinsicElements } from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './button.scss?inline'

interface ButtonProps {
	label?: string
	size?: string
	variant?: string
}

type ExtendedButtonElement = QwikIntrinsicElements['button'] & {
	'aria-label': string,
	'onClick$'?: QRL<() => void> 
}

export type ExtendedButtonProps = ExtendedButtonElement & ButtonProps

export default component$(
	({ ...props }: ExtendedButtonProps) => {
		useStyles$(styles)

		return (
			<button {...props} class={`${props.size} ${props.variant}`}>
				{props.label}
				<Slot />
			</button>
		)
	}
)
