import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import UnsplashApi from '~/components/unsplashApi/unsplashApi'
import AutoComplete from '~/components/autoComplete/autoComplete'

export default component$(() => {
	return (
		<>
			<AutoComplete />
			<UnsplashApi />
		</>
	)
})

export const head: DocumentHead = {
	title: 'api-fetching',
}
