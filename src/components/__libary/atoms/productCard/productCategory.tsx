import type { QwikIntrinsicElements } from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './product-card.scss?inline'
import { useProductCardContext } from './productCardContext'

type ExtendedDivlement = QwikIntrinsicElements['div'] & {
	'aria-label'?: string
}

export type ExtendedProductCategoryProps = ExtendedDivlement

export default component$(({ ...props }: ExtendedProductCategoryProps) => {
	useStyles$(styles)
	const product = useProductCardContext()

	return (
		<>
			<div class="product-card__category" {...props}>
				{product.category.length && (
					<ul>
						{product.category.map((item: any, index: number) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				)}
				<Slot />
			</div>
		</>
	)
})
