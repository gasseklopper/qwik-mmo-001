import { type QRL, type QwikIntrinsicElements } from '@builder.io/qwik'
import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './overlayContainer.scss?inline'
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
// const mainClass = 'button'

export default component$(
	// ({ class: className, ...rest }: ExtendedButtonProps) => {
	() => {
		useStyles$(styles)

		// const componentVariant = `${mainClass}--${rest.buttonVariant}` || ''
		// const componentSize = `${mainClass}--${rest.buttonSize}` || ''
		// const componentBaseClass = rest.buttonBaseClass || mainClass
		// const componentClass = className || ''
		// const componentFit = rest.buttonFit ? `${mainClass}--fit` : ''

		return (
			<div id="overlay-container">
				<svg xmlns="http://www.w3.org/2000/svg">
					<filter id="noiseFilter">
						<feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
					</filter>
					<rect width="100%" height="100%" filter="url(#noiseFilter)" />
				</svg>
			</div>
		)
	}
)
