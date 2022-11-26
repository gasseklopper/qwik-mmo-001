import { component$, useStyles$ } from '@builder.io/qwik'
import  MainNav  from '../layout/mainNav/mainNav'
import  ShemeToggle  from '../color-sheme-toggle/color-sheme-toggle'
import styles from './header.css?inline'

export default component$(() => {
	useStyles$(styles)



	return (
		<>
			<header>
			</header>
			<MainNav/>
			<ShemeToggle/>
		</>
	)
})
