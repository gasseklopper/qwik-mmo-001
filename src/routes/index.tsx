import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
	return (
		<>
			{/* <SliderHero></SliderHero> */}
			slider hero
		</>
	)
})

export const head: DocumentHead = {
	title: 'Welcome to Qwik Docs Starter',
}
