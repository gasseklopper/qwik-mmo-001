import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import FlipCart from '~/components/flipCart/flipCart'

export default component$(() => {
	return (
		<div class="row">
			<div class="column">
				<FlipCart />
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'flipCart',
}
