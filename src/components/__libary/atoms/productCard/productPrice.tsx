import type { QwikIntrinsicElements } from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './product-card.scss?inline'
import { useProductCardContext } from './productCardContext'

type ExtendedDivlement = QwikIntrinsicElements['div'] & {
	'aria-label'?: string
}

export type ExtendedProductPriceProps = ExtendedDivlement

export default component$(({ ...props }: ExtendedProductPriceProps) => {
	useStyles$(styles)
	const product = useProductCardContext()

	return (
		<div class="product-card__price" {...props}>
			{product.price}
			<Slot />
		</div>
	)
})
