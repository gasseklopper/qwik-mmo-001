import type { QwikIntrinsicElements } from '@builder.io/qwik'
import {
	Slot,
	component$,
	useSignal,
	useStyles$,
	useTask$,
} from '@builder.io/qwik'
import styles from './product-card.scss?inline'
import { useProductCardContext } from './productCardContext'

type ExtendedDivlement = QwikIntrinsicElements['div'] & {
	'aria-label'?: string
}

export type ExtendedProductRatingProps = ExtendedDivlement

export default component$(({ ...props }: ExtendedProductRatingProps) => {
	useStyles$(styles)
	const product = useProductCardContext()

	return (
		<div class="product-card__rating" {...props}>
			{product.stars > 0 && product.stars < 6 ? '*'.repeat(product.stars): <>0</>}
			<Slot />
		</div>
	)
})
