import {
	component$,
	useStyles$,
	QwikIntrinsicElements,
	type QRL,
	Slot,
} from '@builder.io/qwik'
import styles from './../mainNav.scss?inline'
import { type Size, type Variant } from '~/globalContext'

// ButtonProps type
type ButtonProps = {
	buttonBaseClass?: string
	buttonLabel?: string
	buttonSize?: Size
	buttonVariant?: Variant
	buttonFit?: boolean
}

type ExtendedButtonElement = QwikIntrinsicElements['button'] & {
	'aria-label'?: string
	onClick$?: QRL<() => void>
}

export type ExtendedButtonProps = ExtendedButtonElement & ButtonProps

const mainClass = 'button-burger'

export default component$(
	({ class: className, ...rest }: ExtendedButtonProps) => {
		useStyles$(styles)

		return (
			<>
				<button {...rest} class={`${mainClass} ${className}`}>
					<div class="header__icon"></div>
					<Slot/>
				</button>
			</>
		)
	}
)
