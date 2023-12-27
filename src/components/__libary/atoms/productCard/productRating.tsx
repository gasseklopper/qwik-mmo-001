import type { QwikIntrinsicElements } from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './product-card.scss?inline'

interface ProductRatingProps {
	rating?: number
}

type ExtendedDivlement = QwikIntrinsicElements['div'] & {
	'aria-label'?: string
}

export type ExtendedProductInfoProps = ExtendedDivlement & ProductRatingProps

export default component$(({ ...props }: ExtendedProductInfoProps) => {
	useStyles$(styles)

	return (
		<div class="product-card__rating" {...props}>
			{props.rating}
			<Slot />
		</div>
	)
})
