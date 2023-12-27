import type { QwikIntrinsicElements } from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './product-card.scss?inline'

type ExtendedDivlement = QwikIntrinsicElements['button'] & {
	'aria-label'?: string
}

export type ExtendedProductButtonProps = ExtendedDivlement

export default component$(({ ...props }: ExtendedProductButtonProps) => {
	useStyles$(styles)

	return (
		<button class="button product-card__button" {...props}>
			<Slot />
		</button>
	)
})
