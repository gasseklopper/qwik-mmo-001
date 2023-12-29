import type { QwikIntrinsicElements } from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './product-card.scss?inline'
import { useProductCardContext } from './productCardContext'

type ExtendedDivlement = QwikIntrinsicElements['div'] & {
	'aria-label'?: string
}

export default component$(({ ...props }: ExtendedDivlement) => {
	useStyles$(styles)
    const product = useProductCardContext()
    

	return (
		<div class="product-card__title" {...props}>
            {product.title}
			<Slot />
		</div>
	)
})
