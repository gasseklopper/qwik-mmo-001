import {
	FunctionComponent,
	JSXNode,
	QwikIntrinsicElements,
	Slot,
	component$,
	useStyles$,
} from '@builder.io/qwik'
import styles from './grid.scss?inline'

export interface GridProps {
	variant?: 'bodytext' | 'subline' | 'eyebrow' | 'browLine'
	image?: JSXNode<string | FunctionComponent<Record<string, any>>> | undefined
	info?: JSXNode<string | FunctionComponent<Record<string, any>>> | undefined
	action?: JSXNode<string | FunctionComponent<Record<string, any>>> | undefined
}

type ExtendedDivlement = QwikIntrinsicElements['div'] & {
	'aria-label'?: string
}

export type ExtendedGridProps = ExtendedDivlement & GridProps

const mainClass = 'grid'

export default component$(
	({ class: className, ...rest }: ExtendedGridProps) => {
		useStyles$(styles)

		const componentVariant = rest.variant || 'bodytext'
		const componentClass = className || ''

		return (
			<div class={`${mainClass} ${componentClass} ${componentVariant}`} {...rest}>
				<Slot/>
				{rest.info}
				{rest.action}
				{rest.image}
			</div>
		)
	}
)
