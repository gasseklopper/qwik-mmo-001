import { createDOM } from '@builder.io/qwik/testing' // import the createDOM method
import { describe, expect, it, vi, beforeAll } from 'vitest'
import Debounced from './debounced'

beforeAll(() => {
	// mock useStore to start with count of 1
	vi.mock('@builder.io/qwik', async () => {
		const qwik = await vi.importActual<typeof import('@builder.io/qwik')>(
			'@builder.io/qwik'
		)
		return {
			...qwik, // return most of the module unchanged
			// leverage bind to set the initial state of useStore
			useStore: qwik.useStore.bind('initialState', {
				count: 1,
				debounced: 1,
			}),
		}
	})
})

describe('Counter component', function () {
	it('should render', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(<Debounced />)

		// get the div that displays the count from our container
		const countElement = screen.querySelector('.count_child')
		const countDebouncedElement = screen.querySelector('.count_grandChild')

		// assert the displayed count is "1" which is the test mocked value
		expect(countElement?.textContent).toBe('1')
		expect(countDebouncedElement?.textContent).toBe('1')

		// eslint-disable-next-line qwik/no-use-after-await
		await userEvent('.increment', 'click')

		// assert the displayed count is now incremented by 2
		expect(countElement?.textContent).toBe('2')
		// expect(countDebouncedElement?.textContent).toBe('2')
		setTimeout(() => {
			expect(countDebouncedElement?.textContent).toBe('2')
		}, 1000)
	})
})
