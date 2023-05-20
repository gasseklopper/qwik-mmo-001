import {
	component$,
	useVisibleTask$,
	// useStore,
	useSignal,
} from '@builder.io/qwik'

export default component$(() => {
	const width = useSignal(12)
	const height = useSignal(12)

	const outputRef = useSignal<Element>()
	useVisibleTask$(() => {
		console.log('test', outputRef.value)
		if (outputRef.value) {
			const rect = outputRef.value.getBoundingClientRect()
			width.value = Math.round(rect.width)
			height.value = Math.round(rect.height)
		}
	})

	return (
		<main>
			<aside style={{ border: '1px solid black', width: '100px' }}>
				Change text value here to stretch the box.
			</aside>
			<p>
				The above red box is {height.value} pixels high and{' '}
				{width.value} pixels wide.
			</p>
		</main>
	)
})
