import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import InputContext from '~/components/inputContext/inputContext'

export default component$(() => {
	return (
		<>
			<InputContext />
		</>
	)
})

export const head: DocumentHead = {
	title: 'Clock',
}
