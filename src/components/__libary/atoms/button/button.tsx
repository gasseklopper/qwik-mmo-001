import type { QRL, QwikIntrinsicElements } from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './button.scss?inline'

// Gloabl Types (design system?)
type Size = 'large' | 'default' | 'small' | undefined
type Variant = 'primary' | 'secondary'

// ButtonProps type
type ButtonProps = {
	buttonBaseClass?: string
	buttonLabel?: string
	buttonSize?: Size
	buttonVariant?: Variant
	buttonFit?: boolean
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

	const componentVariant = `${baseClassDefault}--${props.buttonVariant}` || ''
	const componentSize = `${baseClassDefault}--${props.buttonSize}` || ''
	const componentBaseClass = props.buttonBaseClass || baseClassDefault
	const componentClass = props.class || ''
	const componentFit = props.buttonFit ? `${baseClassDefault}--fit` : ''

	return (
		<button
			{...props}
			class={`${componentBaseClass} ${componentSize} ${componentFit} ${componentVariant} ${componentClass}`}
		>
			<span>
				<span>
					{props.buttonLabel}
					<Slot />
				</span>
			</span>
		</button>
	)
})
