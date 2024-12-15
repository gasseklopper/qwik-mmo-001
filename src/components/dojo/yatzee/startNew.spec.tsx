import { createDOM } from '@builder.io/qwik/testing' // import the createDOM method
import { describe, expect, it } from 'vitest'
// import { describe, expect, it, vi, beforeAll } from 'vitest'
import StartNew from '.'

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
	it('should disable used rule options in UI', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<StartNew
				diceRoll={[1, 1, 1, 5, 5]}
				roll={{ count: 1 }}
				ruleOptionsChoosed={[
					'0',
					'1',
					'3',
					'4',
					'5',
					'6',
					'7',
					'8',
					'9',
					'10',
					'11',
					'12',
					'13',
					'14',
					'15',
				]}
				ruleNumber={{ value: '2' }}
				game={{
					index: 1,
					round: 14,
				}}
				player={{ index: 1 }}
				sumPoints={{ value: 55 }}
				bottomPoints={{ value: 55 }}
				topPoints={{ value: 55 }}
				topBonus={{ value: false }}
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
		const gameRound = screen.querySelector('.gameRound')

		const countElement = screen.querySelectorAll('.dice')
		console.log('countElement', countElement.length)
		const rollCountElement = screen.querySelector('.countRoll')
		const pointsValueElement = screen.querySelector('.pointsValue')
		const rulesOptionsChossed = screen.querySelector('.ruleOptionsChoosed')
		const rule1 = screen.querySelector('.test-rule-1')
		const rule2 = screen.querySelector('.test-rule-2')
		const rule3 = screen.querySelector('.test-rule-3')
		const rule4 = screen.querySelector('.test-rule-4')
		const rule5 = screen.querySelector('.test-rule-5')
		const rule6 = screen.querySelector('.test-rule-6')
		const rule7 = screen.querySelector('.test-rule-7')
		const rule8 = screen.querySelector('.test-rule-8')
		const rule9 = screen.querySelector('.test-rule-9')
		const rule10 = screen.querySelector('.test-rule-10')
		const rule11 = screen.querySelector('.test-rule-11')
		const rule12 = screen.querySelector('.test-rule-12')
		const rule13 = screen.querySelector('.test-rule-13')
		const rule14 = screen.querySelector('.test-rule-14')
		const rule15 = screen.querySelector('.test-rule-15')

		// expect before interaction of ui
		// expect(countElement?.textContent).toBe('1,1,1,5,5')
		// expect(gameRound?.textContent).toBe('14')
		// expect(rollCountElement?.textContent).toBe('1')
		// expect(pointsValueElement?.textContent).toBe('55')
		// expect(rulesOptionsChossed?.textContent).toBe(
		// 	'0,1,3,4,5,6,7,8,9,10,11,12,13,14,15'
		// )
		// expect(rule1).toHaveProperty('disabled', true)
		// expect(rule2).toHaveProperty('disabled', false)
		// expect(rule3).toHaveProperty('disabled', true)
		// expect(rule4).toHaveProperty('disabled', true)
		// expect(rule5).toHaveProperty('disabled', true)
		// expect(rule6).toHaveProperty('disabled', true)
		// expect(rule7).toHaveProperty('disabled', true)
		// expect(rule8).toHaveProperty('disabled', true)
		// expect(rule9).toHaveProperty('disabled', true)
		// expect(rule10).toHaveProperty('disabled', true)
		// expect(rule11).toHaveProperty('disabled', true)
		// expect(rule12).toHaveProperty('disabled', true)
		// expect(rule13).toHaveProperty('disabled', true)
		// expect(rule14).toHaveProperty('disabled', true)
		// expect(rule15).toHaveProperty('disabled', true)

		// await userEvent('.submit_button', 'click')

		// assert the displayed count is now decremented by 1
		// expect(gameRound?.textContent).toBe('0')
		// expect(rollCountElement?.textContent).toBe('0')
		// expect(countElement?.textContent).toBe('0,0,0,0,0')
		// expect(pointsValueElement?.textContent).toBe('55')
		// expect(rulesOptionsChossed?.textContent).toBe(
		// 	'0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,2'
		// )
		// expect(rule1).toHaveProperty('disabled', true)
		// expect(rule2).toHaveProperty('disabled', true)
		// expect(rule3).toHaveProperty('disabled', true)
		// expect(rule4).toHaveProperty('disabled', true)
		// expect(rule5).toHaveProperty('disabled', true)
		// expect(rule6).toHaveProperty('disabled', true)
		// expect(rule7).toHaveProperty('disabled', true)
		// expect(rule8).toHaveProperty('disabled', true)
		// expect(rule9).toHaveProperty('disabled', true)
		// expect(rule10).toHaveProperty('disabled', true)
		// expect(rule11).toHaveProperty('disabled', true)
		// expect(rule12).toHaveProperty('disabled', true)
		// expect(rule13).toHaveProperty('disabled', true)
		// expect(rule14).toHaveProperty('disabled', true)
		// expect(rule15).toHaveProperty('disabled', true)
	})
})
