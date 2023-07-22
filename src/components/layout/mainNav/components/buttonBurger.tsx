import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './../main-nav.scss?inline'

export default component$(() => {
	useStyles$(styles)

	return (
		<>
			<button class="header__burger">
				<div class="header__icon"></div>
			</button>
		</>
	)
})
