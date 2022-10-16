import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import AutoComplete from '~/components/autoComplete/autoComplete'

export default component$(() => {
	return (
		<>
			<AutoComplete />
		</>
	)
})

export const head: DocumentHead = {
	title: 'star-wars-api',
}
