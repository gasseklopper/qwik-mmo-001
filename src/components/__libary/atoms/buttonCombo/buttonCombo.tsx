import type { QwikIntrinsicElements } from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './buttonCombo.scss?inline'

// Gloabl Types (design system?)
type Size = 'large' | 'default' | 'small'
type Variant = 'primary' | 'secondary'
type Position = 'left' | 'center' | 'right'

// buttonCombo type
type ButtonCombo = {
	buttonCombo$_baseClass?: string
	buttonCombo$_label?: string
	buttonCombo$_size?: Size
	buttonCombo$_variant?: Variant
	buttonCombo$_stack?: boolean
	buttonCombo$_position?: Position
}

// holds available attributes of both
// native DOM elements and custom Qwik elements.
type ExtendedDivElement = QwikIntrinsicElements['div'] & {
	'aria-label'?: string
}

// Combine QwikIntrinsicElements and ButtonProps type
export type ExtendedButtonProps = ExtendedDivElement & ButtonCombo

// Define baseClassDefault value for buttonCombo component
const baseClassDefault = 'buttonCombo'

export default component$(({ ...props }: ExtendedButtonProps) => {
	useStyles$(styles)

	const componentVariant = `${baseClassDefault}--${props.buttonCombo$_variant}` || ''
	const componentSize = `${baseClassDefault}--${props.buttonCombo$_size}` || ''
	const componentBaseClass = props.buttonCombo$_baseClass || baseClassDefault
	const componentClass = props.class || ''
	const componentStack = props.buttonCombo$_stack ? `${baseClassDefault}--stack` : ''
	const componentPosition = props.buttonCombo$_position ? `${baseClassDefault}--${props.buttonCombo$_position}` : ''

	return (
		<div
			{...props}
			class={`${componentBaseClass} ${componentSize} ${componentPosition} ${componentStack} ${componentVariant} ${componentClass}`}
		>
			<Slot />
		</div>
	)
})
