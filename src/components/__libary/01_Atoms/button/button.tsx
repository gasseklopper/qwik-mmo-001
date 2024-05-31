import { type QRL, type QwikIntrinsicElements } from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './button.scss?inline'
import { type Size, type Variant } from '~/globalContext'

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
const mainClass = 'button'

export default component$(
	({ class: className, ...rest }: ExtendedButtonProps) => {
		useStyles$(styles)

		const componentVariant = `${mainClass}--${rest.buttonVariant}` || ''
		const componentSize = `${mainClass}--${rest.buttonSize}` || ''
		const componentBaseClass = rest.buttonBaseClass || mainClass
		const componentClass = className || ''
		const componentFit = rest.buttonFit ? `${mainClass}--fit` : ''

		return (
			<button
				{...rest}
				class={`${mainClass} ${componentBaseClass} ${componentSize} ${componentFit} ${componentVariant} ${componentClass}`}
			>
				<span class={`${mainClass}__content-wrapper`}>
					<span>
						{rest.buttonLabel}
						<Slot />
					</span>
				</span>
			</button>
		)
	}
)
