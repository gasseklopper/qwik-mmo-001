import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import HackerNews from '~/components/hackerNews/hackerNews'

export default component$(() => {
	return (
		<div class="row">
			<div class="column">
				<HackerNews />
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'hacker-news',
}
