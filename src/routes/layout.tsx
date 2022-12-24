import { component$, Slot, useStyles$ } from '@builder.io/qwik'
import Footer from '~/components/footer/footer'
import Header from '~/components/header/header'
import styles from '~/index.scss?inline'

export default component$(() => {
	useStyles$(styles)

	return (
		<>
			<Header />
			<main class="test">
				<div class="container">
					<Slot />
				</div>
			</main>
			<Footer />
		</>
	)
})
