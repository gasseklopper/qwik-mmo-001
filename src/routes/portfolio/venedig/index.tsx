import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Venedig from '~/components/venedig/venedig'

export default component$(() => {
	return (
		<>
			<div class="row">
				<div class="column">
					<h1>Venedig</h1>
					<p>this is the Venedig main page</p>
					<Venedig />
				</div>
			</div>
		</>
	)
})

export const head: DocumentHead = {
	title: 'Venedig',
}
