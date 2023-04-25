import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
// import Section_hero_001 from '~/components/section_hero_001/section_hero_001'
import Section_intro from '~/components/section_intro/section_intro'

export default component$(() => {
	return (
		<>
			<Section_intro />
			{/* <Section_hero_001 /> */}
		</>
	)
})

export const head: DocumentHead = {
	title: 'Welcome to Qwik testing',
}
