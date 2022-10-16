import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import UseStyles from '~/components/useStyles/useStyles'

export default component$(() => {
	return (
		<>
			<UseStyles />
		</>
	)
})

export const head: DocumentHead = {
	title: 'Clock',
}
