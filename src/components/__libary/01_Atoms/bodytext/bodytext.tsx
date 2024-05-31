import {
	type QwikIntrinsicElements,
	Slot,
	component$,
	useStyles$,
} from '@builder.io/qwik'
import styles from './bodytext.scss?inline'

export interface BodyTextProps {
	bodytextSize?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
	bodytextVariant?: 'bodytext' | 'subline' | 'eyebrow'
}

type ExtendedDivlement = QwikIntrinsicElements['p'] & {
	'aria-label'?: string
}

export type ExtendedBodytextProps = ExtendedDivlement & BodyTextProps

const mainClass = 'bodytext'

export default component$((props: ExtendedBodytextProps) => {
	const componentSize = props.bodytextSize || 'medium'
	const componentVariant = props.bodytextVariant || 'bodytext'
	const componentClass = props.class || ''
	useStyles$(styles)

	return (
		<p {...props}
			class={`${mainClass} ${componentClass} p-${componentSize} ${componentVariant}`}
		>
			<Slot />
		</p>
	)
})
