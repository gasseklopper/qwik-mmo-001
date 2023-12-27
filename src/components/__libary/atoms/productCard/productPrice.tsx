import type {
	QwikIntrinsicElements,
} from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './product-card.scss?inline'

interface ProductPriceProps {
	amount: string
}

type ExtendedDivlement = QwikIntrinsicElements['div'] & {
	'aria-label'?: string
}

export type ExtendedProductInfoProps = ExtendedDivlement & ProductPriceProps

export default component$(({ ...props }: ExtendedProductInfoProps) => {
	useStyles$(styles)

	return (
		<div class="product-card__price" {...props}>
			{props.amount}
			<Slot />
		</div>
	)
})
