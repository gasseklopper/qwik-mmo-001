import {
	component$,
	useStore,
	useContextProvider,
	createContextId,
	useContext,
} from '@builder.io/qwik'
import Gallery from './gallery'

export const GalleryContext = createContextId<any>('gallery')

export const Stores = component$(() => {
	const gallery = useStore({
		slides: 'test',
		currentSlide: '1',
	})
	useContextProvider(GalleryContext, gallery)
	return (
		<>
			<Child />
			<Gallery />
		</>
	)
})

const Child = component$(() => {
	const gallery = useContext(GalleryContext)

	return (
		<>
			<div>Theme is {gallery.first}</div>
		</>
	)
})
