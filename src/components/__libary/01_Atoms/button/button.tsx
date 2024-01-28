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

export default component$(({class: className, ...rest }: ExtendedButtonProps) => {
	useStyles$(styles)

	const componentVariant = `${baseClassDefault}--${rest.buttonVariant}` || ''
	const componentSize = `${baseClassDefault}--${rest.buttonSize}` || ''
	const componentBaseClass = rest.buttonBaseClass || baseClassDefault
	const componentClass = className || ''
	const componentFit = rest.buttonFit ? `${baseClassDefault}--fit` : ''

	return (
		<button
			{...rest}
			class={`${componentBaseClass} ${componentSize} ${componentFit} ${componentVariant} ${componentClass}`}
		>
			<span>
				<span>
					{rest.buttonLabel}
					<Slot />
				</span>
			</span>
		</button>
	)
})
