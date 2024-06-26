import {
	component$,
	useVisibleTask$,
	useSignal,
	useStore,
} from '@builder.io/qwik'

export default component$(() => {
	const store = useStore({
		width: 0,
		height: 0,
	})

	const outputRef = useSignal<Element>()
	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		if (outputRef.value) {
			const rect = outputRef.value.getBoundingClientRect()
			store.width = Math.round(rect.width)
			store.height = Math.round(rect.height)
		}
	})

	return (
		<main>
			<aside
				style={{ border: '1px solid black', width: '100px' }}
				ref={outputRef}
			>
				Change text value here to stretch the box.
			</aside>
			<p>
				The above red box is {store.height} pixels high and{' '}
				{store.width} pixels wide.
			</p>
		</main>
	)
})
