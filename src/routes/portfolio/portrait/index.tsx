import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Portrait from '~/components/_portfolio/portrait/portrait'

export default component$(() => {
	return (
		<>
			<div class="row">
				<div class="column">
					<h1>portrait</h1>
					<p>this is the portrait main page</p>
					<Portrait />
				</div>
			</div>
		</>
	)
})

export const head: DocumentHead = {
	title: 'portrait',
}
