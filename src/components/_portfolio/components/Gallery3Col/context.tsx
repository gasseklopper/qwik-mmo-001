import {
	component$,
	useStore,
	useContextProvider,
	createContextId,
	useContext,
} from '@builder.io/qwik'
import QwikTextField from '~/components/QwikTextField/index'
import Gallery from './gallery'

// interface GalleryStore {
// 	first: string
// 	last: string
// 	username: string
// 	email: string
// 	password: string
// }

export const GalleryContext = createContextId<any>('gallery')

export const Stores = component$(() => {
	const gallery = useStore({
		first: 'first',
		last: 'last',
		password: 'password',
		email: 'email',
		username: 'username',
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
