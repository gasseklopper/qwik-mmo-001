import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import LinkList from '~/components/linkList/linkList'

export default component$(() => {
	return (
		<div class="row">
			<div class="column">
				<LinkList />
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'link List',
}
