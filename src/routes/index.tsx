import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Section_hero_001 from '~/components/section_hero_001/section_hero_001'

export default component$(() => {
	return (
		<>
			<Section_hero_001 />
		</>
	)
})

export const head: DocumentHead = {
	title: 'Welcome to Qwik Docs Starter',
}
