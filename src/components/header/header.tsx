import { component$, useStyles$ } from '@builder.io/qwik'
import MainNav from '../layout/mainNav/mainNav'
import styles from './header.css?inline'

export default component$(() => {
	useStyles$(styles)

	return (
		<>
			<MainNav />
		</>
	)
})
