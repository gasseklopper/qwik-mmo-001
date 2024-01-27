import { component$, Slot, useStyles$, useSignal, useVisibleTask$, useContext } from '@builder.io/qwik'
import Footer from '~/components/footer/footer'
import Header from '~/components/header/header'
// import {
// 	disableBodyScroll,
// 	enableBodyScroll,
// 	clearAllBodyScrollLocks,
// } from 'body-scroll-lock'
import { GlobalMenuStore } from '~/globalContext'

export default component$(() => {
	// useStyles$(styles)
	const globalMenuStore = useContext(GlobalMenuStore)
	// auth check getUser
	const outputRef = useSignal<Element>()
	// auth check getUser
	useVisibleTask$(() => {
		if (outputRef.value) {
			console.log('menuStore.showOverlay', globalMenuStore.showOverlay)
			// disableBodyScroll(outputRef.value)
		}
		// if (outputRef.value && menuStore.showOverlay == true) {
		// 	disableBodyScroll(outputRef.value)
		// } else if (outputRef.value && menuStore.showOverlay == false) {
		// 	enableBodyScroll(outputRef.value)
		// }
	})
	return (
		<>
			<Header />
			<main class="test 2" ref={outputRef}>
				{/* <div class="container"> */}
				<Slot />
				{/* </div> */}
			</main>
			<Footer />
		</>
	)
})
