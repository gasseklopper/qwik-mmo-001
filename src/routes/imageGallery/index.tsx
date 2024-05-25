import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import ImageGallery from '~/components/imageGallery/imageGallery'

export default component$(() => {
	return (
		<div class="row">
			<div class="column">
				<ImageGallery />
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'ImageGallery',
}
