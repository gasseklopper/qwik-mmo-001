import type { QwikIntrinsicElements } from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './product-card.scss?inline'
import { useProductCardContext } from './productCardContext'

type ExtendedDivlement = QwikIntrinsicElements['button'] & {
	'aria-label'?: string
}

export type ExtendedProductButtonProps = ExtendedDivlement

export default component$(({ ...props }: ExtendedProductButtonProps) => {
	useStyles$(styles)
	const product = useProductCardContext()
	

	return (
		<button
			class="button product-card__button"
			{...props}
			onClick$={props.onClick$}
		>
			{product.buttonLabel}
			<Slot />
		</button>
	)
})
