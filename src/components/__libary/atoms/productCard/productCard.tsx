import type {
	FunctionComponent,
	JSXNode,
	QwikIntrinsicElements,
} from '@builder.io/qwik'
import { component$, useStyles$, Slot } from '@builder.io/qwik'
import styles from './product-card.scss?inline'

type ProductCardProps = {
	image?: JSXNode<string | FunctionComponent<Record<string, any>>> | undefined
	info?: JSXNode<string | FunctionComponent<Record<string, any>>> | undefined
	action?: JSXNode<string | FunctionComponent<Record<string, any>>> | undefined
}

type ExtendedDivElement = QwikIntrinsicElements['div'] & {
	'aria-label'?: string
}

export type ExtendedProductCardProps = ExtendedDivElement & ProductCardProps

export default component$(({ ...props }: ExtendedProductCardProps) => {
	useStyles$(styles)

	return (
		<div {...props}>
			<div class="product-card">
				{props.image}
				<div class="product-card__bottom">
					{props.info}
					{props.action}
				</div>
			</div>
			<Slot />
		</div>
	)
})
