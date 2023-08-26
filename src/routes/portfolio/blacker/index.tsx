import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Blacker from '~/components/_portfolio/blacker/blacker'

export default component$(() => {
	return (
		<>
			<div class="row">
				<div class="column">
					<h1>Blacker</h1>
					<p>this is the Blacker main page</p>
					<Blacker />
				</div>
			</div>
		</>
	)
})

export const head: DocumentHead = {
	title: 'Blacker',
}
