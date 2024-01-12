import type { QRL, QwikIntrinsicElements } from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './button.scss?inline'

type ButtonProps = {
	button$_baseClass?: string
	button$_label?: string
	button$_size?: string
	button$_variant?: string
}

type ExtendedButtonElement = QwikIntrinsicElements['button'] & {
	'aria-label'?: string,
	'onClick$'?: QRL<() => void> 
}

export type ExtendedButtonProps = ExtendedButtonElement & ButtonProps

export default component$(
	({ ...props }: ExtendedButtonProps) => {
		useStyles$(styles)

		const baseClassDefault = 'button'

		const componentVariant = props.button$_variant || ''
		const componentSize = props.button$_size || ''
		const componentBaseClass = props.button$_baseClass || baseClassDefault
		const componentClass = props.class || '' 

		return (
			<button {...props} class={`${componentBaseClass} ${componentSize} ${componentVariant} ${componentClass}`}>
				{props.button$_label}
				<Slot />
			</button>
		)
	}
)
