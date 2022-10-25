import { component$, useStyles$ } from '@builder.io/qwik'
import { QwikLogo } from '../icons/qwik'
import  MainNav  from '../layout/mainNav/mainNav'
import styles from './header.css?inline'

export default component$(() => {
	useStyles$(styles)



	return (
		<>
			<header>
				<a class="logo" href="/" aria-label="Logo">
					<QwikLogo />
				</a>

			</header>
			<MainNav/>
		</>
	)
})
