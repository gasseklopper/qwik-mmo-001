import { component$, useStyles$, $, useContext } from '@builder.io/qwik'
import styles from './gallery-3-Col.scss?inline'
import { GalleryContext } from './context'

export default component$(() => {
	const theme = useContext(GalleryContext)
	useStyles$(styles)
	const forward = $(() => {
		theme.first = 'forward'
		console.log('forward')
	})

	const back = $(() => {
		theme.first = 'back'
		console.log('back')
	})

	return (
		<div class="gallery__controls-wrapper">
			<div class="gallery__controls-slider">
				<div class="back">
					<button onClick$={back}>back</button>
				</div>
				<div class="forward">
					<button onClick$={forward}>forward</button>
				</div>
			</div>
		</div>
	)
})
