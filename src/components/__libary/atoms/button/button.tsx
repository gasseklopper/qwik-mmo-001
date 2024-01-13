import type { QRL, QwikIntrinsicElements } from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './button.scss?inline'

// Gloabl Types (design system?)
type Size = 'large' | 'default' | 'small'
type Variant = 'primary' | 'secondary'

// ButtonProps type
type ButtonProps = {
	button$_baseClass?: string
	button$_label?: string
	button$_size?: Size
	button$_variant?: Variant
	button$_fit?: boolean
}

// holds available attributes of both
// native DOM elements and custom Qwik elements.
type ExtendedButtonElement = QwikIntrinsicElements['button'] & {
	'aria-label'?: string
	onClick$?: QRL<() => void>
}

// Combine QwikIntrinsicElements and ButtonProps type
export type ExtendedButtonProps = ExtendedButtonElement & ButtonProps

// Define baseClassDefault value for button component 
const baseClassDefault = 'button'

export default component$(({ ...props }: ExtendedButtonProps) => {
	useStyles$(styles)

	const componentVariant = `${baseClassDefault}--${props.button$_variant}` || ''
	const componentSize = `${baseClassDefault}--${props.button$_size}` || ''
	const componentBaseClass = props.button$_baseClass || baseClassDefault
	const componentClass = props.class || ''
	const componentFit = props.button$_fit ? `${baseClassDefault}--fit` : ''

	return (
		<button
			{...props}
			class={`${componentBaseClass} ${componentSize} ${componentFit} ${componentVariant} ${componentClass}`}
		>
			<span>
				<span>
					{props.button$_label}
					<Slot />
				</span>
			</span>
		</button>
	)
})
