import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Rippel from '~/components/_portfolio/rippel/rippel'

export default component$(() => {
	return (
		<>
			<div class="row">
				<div class="column">
					<h1>rippel</h1>
					<p>this is the rippel main page</p>
					<Rippel />
				</div>
			</div>
		</>
	)
})

export const head: DocumentHead = {
	title: 'rippel',
}
