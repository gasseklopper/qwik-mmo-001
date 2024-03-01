import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Hatting from '~/components/hatting/hatting'

export default component$(() => {
	return (
		<div class="row">
			<div class="column">
				<Hatting />
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'hatting',
}
