import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Clock from '~/components/clock/clock'

export default component$(() => {
	return (
		<>
			<Clock />
		</>
	)
})

export const head: DocumentHead = {
	title: 'Clock',
}
