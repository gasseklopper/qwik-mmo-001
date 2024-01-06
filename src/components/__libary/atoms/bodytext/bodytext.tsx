import {
	QwikIntrinsicElements,
	Slot,
	component$,
	useStyles$,
} from '@builder.io/qwik'
import styles from './bodytext.scss?inline'

export interface BodyTextProps {
	size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
	variant?: 'bodytext' | 'subline' | 'eyebrow'
	class?: string
}

type ExtendedDivlement = QwikIntrinsicElements['p'] & {
	'aria-label'?: string
}

export type ExtendedProductCategoryProps = ExtendedDivlement & BodyTextProps

const mainClass = 'bodytext'

export default component$((props: ExtendedProductCategoryProps) => {
	const componentSize = props.size || 'medium'
	const componentVariant = props.variant || 'bodytext'
	const componentClass = props.class || ''
	useStyles$(styles)

	return (
		<p
			class={`${mainClass} ${componentClass} p-${componentSize} ${componentVariant}`}
		>
			<Slot />
		</p>
	)
})
