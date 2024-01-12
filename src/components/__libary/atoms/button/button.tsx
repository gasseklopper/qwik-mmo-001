import type { QRL, QwikIntrinsicElements } from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './button.scss?inline'

interface ButtonProps {
	label?: string
	size?: string
	variant?: string
	class?: string
}

type ExtendedButtonElement = QwikIntrinsicElements['button'] & {
	'aria-label'?: string,
	'onClick$'?: QRL<() => void> 
}

export type ExtendedButtonProps = ExtendedButtonElement & ButtonProps

export default component$(
	({ ...props }: ExtendedButtonProps) => {
		useStyles$(styles)

		const componentVariant = props.variant || ''
		const componentSize = props.size || ''
		const componentClass = props.class || ''

		return (
			<button {...props} class={`button ${componentSize} ${componentVariant} ${componentClass}`}>
				{props.label}
				<Slot />
			</button>
		)
	}
)
