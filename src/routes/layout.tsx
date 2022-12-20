import { component$, Slot, useStyles$ } from '@builder.io/qwik'
import Footer from '~/components/footer/footer'
import Header from '~/components/header/header'
import styles from '~/index.scss'

export default component$(() => {
	useStyles$(styles)
	return (
		<>
			<Header />
			<main>
				<Slot />
			</main>
			<Footer />
		</>
	)
})
