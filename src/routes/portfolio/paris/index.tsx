import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Paris from '~/components/_portfolio/paris/paris'

export default component$(() => {
	return (
		<>
			<div class="row">
				<div class="column">
					<h1>paris</h1>
					<p>this is the paris main page</p>
					<Paris />
				</div>
			</div>
		</>
	)
})

export const head: DocumentHead = {
	title: 'paris',
}
