import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import SliderHero from '~/components/sliderHero/sliderHero'

export default component$(() => {
	return (
		<>
			<SliderHero></SliderHero>
		</>
	)
})

export const head: DocumentHead = {
	title: 'Welcome to Qwik Docs Starter',
}
