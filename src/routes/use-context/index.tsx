import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import UsingContext from '~/components/usingContext/usingContext'

export default component$(() => {
	return (
		<>
			<UsingContext />
		</>
	)
})

export const head: DocumentHead = {
	title: 'using-context',
}
