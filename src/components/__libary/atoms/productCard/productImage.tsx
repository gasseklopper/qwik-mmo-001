import type { QwikIntrinsicElements } from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './product-card.scss?inline'
import { useProductCardContext } from './productCardContext'

type ExtendedDivElement = QwikIntrinsicElements['img'] & {
	'aria-label'?: string
}

export type ExtendedButtonProps = ExtendedDivElement

export default component$(({ ...props }: ExtendedButtonProps) => {
	useStyles$(styles)
	const product = useProductCardContext()

	return (
		<>
			<img src={product.image} {...props}></img>
			<Slot />
		</>
	)
})
