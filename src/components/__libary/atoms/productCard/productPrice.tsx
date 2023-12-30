import type { QwikIntrinsicElements } from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './product-card.scss?inline'
import { useProductCardContext } from './productCardContext'

type Props = {
	currency?: string
}
type ExtendedDivlement = QwikIntrinsicElements['div'] & {
	'aria-label'?: string
}

export type ExtendedProductPriceProps = ExtendedDivlement & Props

export default component$(({ currency = "EUR", ...props }: ExtendedProductPriceProps) => {
	useStyles$(styles)
	const product = useProductCardContext()

	return (
		<div class="product-card__price" {...props}>
			{new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(
				product.price
			)}
			<Slot />
		</div>
	)
})
