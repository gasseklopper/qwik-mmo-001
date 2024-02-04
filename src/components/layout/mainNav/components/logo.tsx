import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './../mainNav.scss?inline'

export default component$(() => {
	useStyles$(styles)

	return (
		<>
			<a class="logo h4" href="/" aria-label="Logo">
				Markus Morley
			</a>
		</>
	)
})
