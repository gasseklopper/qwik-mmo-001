import type { QRL, QwikIntrinsicElements } from '@builder.io/qwik'
import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import styles from './product-card.scss?inline'

type ExtendedDivElement = QwikIntrinsicElements['img'] & {
	'aria-label'?: string
}

export type ExtendedButtonProps = ExtendedDivElement

export default component$(({ ...props }: ExtendedButtonProps) => {
	useStyles$(styles)

	return (
		<>
			<img {...props}></img>
			<Slot />
		</>
	)
})
