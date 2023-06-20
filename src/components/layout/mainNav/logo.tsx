import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './main-nav.scss?inline'

export default component$(() => {
	useStyles$(styles)

	return (
		<>
			<a class="logo" href="/" aria-label="Logo">
				LOGO
			</a>
		</>
	)
})
