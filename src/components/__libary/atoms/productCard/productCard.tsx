import type {
	FunctionComponent,
	JSXNode,
	QwikIntrinsicElements,
} from '@builder.io/qwik'
import {
	component$,
	useStyles$,
	Slot,
	useContextProvider,
	useStore,
} from '@builder.io/qwik'
import styles from './product-card.scss?inline'
import ProductCardContext from './productCardContext'
import type { TProduct } from './productCardTypes'
import productImage from './productImage'

type ProductCardProps = {
	product: TProduct
	image?: JSXNode<string | FunctionComponent<Record<string, any>>> | undefined
	info?: JSXNode<string | FunctionComponent<Record<string, any>>> | undefined
	action?: JSXNode<string | FunctionComponent<Record<string, any>>> | undefined
}

type ExtendedDivElement = QwikIntrinsicElements['div'] & {
	'aria-label'?: string
}

export type ExtendedProductCardProps = ExtendedDivElement & ProductCardProps

export default component$(
	({ ...props }: ExtendedProductCardProps) => {
		useStyles$(styles)

		const productStore = useStore<TProduct>(props.product)
		useContextProvider(ProductCardContext, productStore)

		return (
			<div {...props}>
				<div class="product-card">
					{props.image}
					<div class="product-card__bottom">
						{props.info}
						{props.action}
					</div>
					<Slot />
				</div>
			</div>
		)
	}
)