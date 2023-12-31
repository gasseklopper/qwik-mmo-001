import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import TheLiesOfChatGPT from '~/components/theLiesOfChatGPT/theLiesOfChatGPT'

export default component$(() => {
	return (
		<div class="row">
			<div class="column">
				<TheLiesOfChatGPT/>
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'The Lies of ChatgPt ',
}
