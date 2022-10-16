import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import HackerNews from '~/components/hackerNews/hackerNews'

export default component$(() => {
	return (
		<>
			<HackerNews />
		</>
	)
})

export const head: DocumentHead = {
	title: 'hacker-news',
}
