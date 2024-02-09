import {
	QwikIntrinsicElements,
	Slot,
	component$,
	useStyles$,
} from '@builder.io/qwik'
import styles from './headlines.scss?inline'

export interface HeadlineProps {
	headlineTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	headlineClass?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
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

export type ExtendedHeadlinesProps = ExtendedDivlement & HeadlineProps

const mainClass = 'headlines'

export default component$(({class: className, ...rest }: ExtendedHeadlinesProps) => {
	useStyles$(styles)

	const ComponentTag = rest.headlineTag || 'h2'
	const componentVariant = rest.variant || 'bodytext'
	const componentWeight = rest.weight || 'regular'
	const componentClass = className || ''
	const componentBaseClass = rest.headlineClass || rest.headlineTag || 'h2'

	return (
		<ComponentTag
			{...rest}
			class={`${mainClass} ${componentBaseClass} ${componentBaseClass}--${componentWeight} ${componentVariant} ${componentClass}`}
		>
			<Slot />
		</ComponentTag>
	)
})
