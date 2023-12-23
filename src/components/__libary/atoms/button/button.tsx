import type { QRL, QwikIntrinsicElements } from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './button.scss?inline'

export interface ButtonProps {
	label?: string
	size?: number
	variant?: string
}

type ExtendedButtonElement = QwikIntrinsicElements['button'] & {
	'aria-label': string,
	'onClick$'?: QRL<() => void> 
}

type ExtendedButtonProps = ExtendedButtonElement & ButtonProps

export default component$(
	({ ...props }: ExtendedButtonProps) => {
		useStyles$(styles)
		return (
			<button {...props}>
				<Slot />
			</button>
		)
	}
)
