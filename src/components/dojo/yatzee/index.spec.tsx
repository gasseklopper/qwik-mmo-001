import { createDOM } from '@builder.io/qwik/testing' // import the createDOM method
import { describe, expect, it } from 'vitest'
// import { describe, expect, it, vi, beforeAll } from 'vitest'
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
				diceRoll={[5, 5, 5, 5, 5]}
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
				diceRoll={[5, 5, 5, 5, 5]}
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
	it('should not reroll dices', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[5, 5, 5, 5, 5]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '1' }}
				points={{ value: 55 }}
				keepDice={{
					value1: true,
					value2: true,
					value3: true,
					value4: true,
					value5: true,
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
		await userEvent('.rollDice', 'click')

		// expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('2')
		expect(countElement?.textContent).toBe('5,5,5,5,5')
		expect(pointsValueElement?.textContent).toBe('55')

		// await userEvent('.reset', 'click')
		await userEvent('.rollDice', 'click')

		// expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('3')
		expect(countElement?.textContent).toBe('5,5,5,5,5')
		expect(pointsValueElement?.textContent).toBe('55')
	})
})

describe('Yatzee rule test with ui', function () {
	it('ones: score 4 rule 1', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[1, 1, 1, 1, 6]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '1' }}
				points={{ value: 0 }}
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
		expect(countElement?.textContent).toBe('1,1,1,1,6')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('0')

		await userEvent('.submit_button', 'click')

		// // expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('4')
	})
	it('twos: score 4 rule 2', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[2, 4, 5, 5, 2]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '2' }}
				points={{ value: 0 }}
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
		expect(countElement?.textContent).toBe('2,4,5,5,2')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('0')

		await userEvent('.submit_button', 'click')

		// // expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('4')
	})
	it('threes: score 3 rule 3', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[3, 4, 5, 5, 6]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '3' }}
				points={{ value: 0 }}
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
		expect(countElement?.textContent).toBe('3,4,5,5,6')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('0')

		await userEvent('.submit_button', 'click')

		// // expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('3')
	})
	it('fours: score 4 rule 4', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[3, 4, 5, 5, 6]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '4' }}
				points={{ value: 0 }}
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
		expect(countElement?.textContent).toBe('3,4,5,5,6')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('0')

		await userEvent('.submit_button', 'click')

		// // expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('4')
	})
	it('fives: score 15 rule 5', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[3, 5, 5, 5, 6]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '5' }}
				points={{ value: 0 }}
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
		expect(countElement?.textContent).toBe('3,5,5,5,6')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('0')

		await userEvent('.submit_button', 'click')

		// // expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('15')
	})
	it('sixes: score 6 rule 6', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[3, 3, 6, 4, 6]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '6' }}
				points={{ value: 0 }}
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
		expect(countElement?.textContent).toBe('3,3,6,4,6')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('0')

		await userEvent('.submit_button', 'click')

		// // expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('12')
	})
	it('Pair: score 8 rule 7', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[3, 3, 4, 4, 4]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '7' }}
				points={{ value: 0 }}
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
		expect(countElement?.textContent).toBe('3,3,4,4,4')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('0')

		await userEvent('.submit_button', 'click')

		// // expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('8')
	})
	it('Pair: score 8 rule 7', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[3, 3, 4, 4, 5]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '7' }}
				points={{ value: 0 }}
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
		expect(countElement?.textContent).toBe('3,3,4,4,5')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('0')

		await userEvent('.submit_button', 'click')

		// // expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('8')
	})
	it('Two pairs: score 12 rule 8', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[1, 1, 5, 5, 1]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '8' }}
				points={{ value: 0 }}
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
		expect(countElement?.textContent).toBe('1,1,5,5,1')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('0')

		await userEvent('.submit_button', 'click')

		// // expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('12')
	})
	it('Two pairs: score 16 rule 8', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[3, 3, 5, 5, 5]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '8' }}
				points={{ value: 0 }}
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
		expect(countElement?.textContent).toBe('3,3,5,5,5')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('0')

		await userEvent('.submit_button', 'click')

		// // expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('16')
	})
	it('Two pairs: score 14 rule 8', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[3, 3, 4, 4, 5]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '8' }}
				points={{ value: 0 }}
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
		expect(countElement?.textContent).toBe('3,3,4,4,5')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('0')

		await userEvent('.submit_button', 'click')

		// // expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('14')
	})
	it('Three of a kind: score 16 rule 9', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[4, 4, 4, 4, 4]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '9' }}
				points={{ value: 0 }}
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
		expect(countElement?.textContent).toBe('4,4,4,4,4')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('0')

		await userEvent('.submit_button', 'click')

		// // expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('12')
	})
	it('Four of a kind: score 16 rule 10', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[4, 4, 4, 4, 4]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '10' }}
				points={{ value: 0 }}
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
		expect(countElement?.textContent).toBe('4,4,4,4,4')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('0')

		await userEvent('.submit_button', 'click')

		// // expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('16')
	})
	it('Small straight: score 15 rule 11', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[1, 3, 4, 5, 2]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '11' }}
				points={{ value: 0 }}
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
		expect(countElement?.textContent).toBe('1,3,4,5,2')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('0')

		await userEvent('.submit_button', 'click')

		// // expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('15')
	})
	it('Large straight: score 20 rule 12', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[2, 3, 4, 5, 6]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '12' }}
				points={{ value: 0 }}
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
		expect(countElement?.textContent).toBe('2,3,4,5,6')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('0')

		await userEvent('.submit_button', 'click')

		// // expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('20')
	})
	it('Full house: score 20 rule 13', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[2, 5, 5, 2, 5]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '13' }}
				points={{ value: 0 }}
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
		expect(countElement?.textContent).toBe('2,5,5,2,5')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('0')

		await userEvent('.submit_button', 'click')

		// // expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('19')
	})
	it('yatzee score 50 rule 14', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[5, 5, 5, 5, 5]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '14' }}
				points={{ value: 0 }}
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
		expect(pointsValueElement?.textContent).toBe('0')

		await userEvent('.submit_button', 'click')

		// // expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('50')
	})
	it('chance score 15 rule 15', async () => {
		// create the component's DOM and get back the container and a render method
		const { screen, render, userEvent } = await createDOM()

		// call the render method with the JSX node of our Counter component as a parameter
		await render(
			<Yatzee
				diceRoll={[1, 2, 3, 4, 5]}
				roll={{ count: 1 }}
				ruleNumber={{ value: '15' }}
				points={{ value: 0 }}
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
		expect(countElement?.textContent).toBe('1,2,3,4,5')
		expect(rollCountElement?.textContent).toBe('1')
		expect(pointsValueElement?.textContent).toBe('0')

		await userEvent('.submit_button', 'click')

		// // expect after interaction of ui
		expect(rollCountElement?.textContent).toBe('0')
		expect(countElement?.textContent).toBe('0,0,0,0,0')
		expect(pointsValueElement?.textContent).toBe('15')
	})
})
