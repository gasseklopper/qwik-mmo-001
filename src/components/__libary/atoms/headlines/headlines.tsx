import {
	QwikIntrinsicElements,
	Slot,
	component$,
	useStyles$,
} from '@builder.io/qwik'
import styles from './headlines.scss?inline'

export interface HeadlineProps {
	componentTag?: any
	class?: string
	weight?: 'regular' | 'bold'
	variant?: 'bodytext' | 'subline' | 'eyebrow' | 'browLine'
}

type ExtendedDivlement = QwikIntrinsicElements['h1'] &
	QwikIntrinsicElements['h2'] &
	QwikIntrinsicElements['h3'] &
	QwikIntrinsicElements['h4'] &
	QwikIntrinsicElements['h5'] &
	QwikIntrinsicElements['h6'] & {
		'aria-label'?: string
	}

export type ExtendedProductCategoryProps = ExtendedDivlement & HeadlineProps

const mainClass = 'headlines'

export default component$((props: HeadlineProps) => {
	useStyles$(styles)
	const ComponentTag = props.componentTag || 'h2'
	const componentVariant = props.variant || 'bodytext'
	const componentWeight = props.weight || 'regular'
	const componentClass = props.class || 'h2'

	return (
		<ComponentTag
			class={`${mainClass} ${componentClass} ${componentClass}--${componentWeight} ${componentVariant}`}
		>
			<Slot />
		</ComponentTag>
	)
})