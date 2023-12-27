import type { QwikIntrinsicElements } from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './product-card.scss?inline'

type ExtendedDivlement = QwikIntrinsicElements['div'] & {
	'aria-label'?: string
}

export default component$(({ ...props }: ExtendedDivlement) => {
	useStyles$(styles)

	return (
		<div class="product-card__title" {...props}>
			<Slot />
		</div>
	)
})
