import { createDOM } from '@builder.io/qwik/testing' // import the createDOM method
import { describe, expect, it, vi, beforeAll } from 'vitest'
import Counter from './counter'

beforeAll(() => {
	// mock useStore to start with count of 1
	vi.mock('@builder.io/qwik', async () => {
		const qwik = await vi.importActual<typeof import('@builder.io/qwik')>(
			'@builder.io/qwik'
		)
		return {
			...qwik, // return most of the module unchanged
			// leverage bind to set the initial state of useStore
			useStore: qwik.useStore.bind('initialState', { count: 1 }),
		}
	})
})

describe('Counter component', function () {
	it('should render', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(<Counter />)

		// get the div that displays the count from our container
		const countElement = screen.querySelector('.count')

		// assert the displayed count is "1" which is the test mocked value
		expect(countElement?.textContent).toBe('1')

		// pass a selector that matches the increment button as a first parameter
		// and the name of the event we want to trigger ("click") as the second parameter

		await userEvent('.increment', 'click')
		await userEvent('.increment', 'click')

		// assert the displayed count is now incremented by 2
		expect(countElement?.textContent).toBe('3')

		await userEvent('.decrement', 'click')

		// assert the displayed count is now decremented by 1
		expect(countElement?.textContent).toBe('2')

		await userEvent('.reset', 'click')

		// assert the displayed count is now decremented by 1
		expect(countElement?.textContent).toBe('0')
	})
})
