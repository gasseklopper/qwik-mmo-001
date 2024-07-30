import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './../mainNav.scss?inline'
import { Link } from '@builder.io/qwik-city'

export default component$(() => {
	useStyles$(styles)

	return (
		<>
			<Link class="logo h4" href="/" aria-label="Logo">
				Markus Morley
			</Link>
		</>
	)
})
