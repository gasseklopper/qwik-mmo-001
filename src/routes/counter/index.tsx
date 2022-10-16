import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Counter from '~/components/counter/counter'
import Debounced from '~/components/debounced/debounced'

export default component$(() => {
	return (
		<>
			<Counter />
			<Debounced />
		</>
	)
})

export const head: DocumentHead = {
	title: 'Counter',
}
