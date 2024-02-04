import { component$, useStyles$ } from '@builder.io/qwik'
import MainNav from '../layout/mainNav/mainNav'
import styles from './header.scss?inline'

export const baseClassMainMenu = 'header'

export default component$(() => {
	useStyles$(styles)
	
	return (
		<>
			<MainNav />
		</>
	)
})
