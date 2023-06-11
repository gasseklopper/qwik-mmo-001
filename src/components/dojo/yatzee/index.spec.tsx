import { createDOM } from '@builder.io/qwik/testing' // import the createDOM method
import { describe, expect, it, vi, beforeAll } from 'vitest'
import Yatzee from '.'

// beforeAll(() => {
// 	// mock useStore to start with count of 1
// 	vi.mock('@builder.io/qwik', async () => {
// 		// eslint-disable-next-line @typescript-eslint/consistent-type-imports
// 		const qwik = await vi.importActual<typeof import('@builder.io/qwik')>(
// 			'@builder.io/qwik'
// 		)
// 		return {
// 			...qwik, // return most of the module unchanged
// 			// leverage bind to set the initial state of useStore
// 			useStore: qwik.useStore.bind('initialState', {
// 				dice: [5, 5, 5, 5, 5],
// 			}),
// 		}
// 	})
// })

describe('UI Test', function () {
	it('should reset dice roll', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				dice={[5, 5, 5, 5, 5]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '1' }}
				points={{ value: 55 }}
				keepDice={{
					value1: false,
					value2: false,
					value3: false,
					value4: false,
					value5: false,
				}}
			/>
		)

		// get the div that displays the count from our container
		const countElement = screen.querySelector('.dice')
		const rollCountElement = screen.querySelector('.countRoll')
		const pointsValueElement = screen.querySelector('.pointsValue')

		// expect before interaction of ui
		expect(countElement?.textContent).toBe('5,5,5,5,5')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('55')

		await userEvent('.reset', 'click')

		// assert the displayed count is now decremented by 1
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('55')
	})
	it('should reset game', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				dice={[5, 5, 5, 5, 5]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '1' }}
				points={{ value: 55 }}
				keepDice={{
					value1: false,
					value2: false,
					value3: false,
					value4: false,
					value5: false,
				}}
			/>
		)

		// get the div that displays game data
		const countElement = screen.querySelector('.dice')
		const rollCountElement = screen.querySelector('.countRoll')
		const pointsValueElement = screen.querySelector('.pointsValue')

		// expect before interaction of ui
		expect(countElement?.textContent).toBe('5,5,5,5,5')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('55')

		// await userEvent('.reset', 'click')
		await userEvent('.resetgame', 'click')

		// expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('0')
	})
})
