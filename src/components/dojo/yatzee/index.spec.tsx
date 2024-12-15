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

// describe('UI Test', function () {
// 	it('should disable used rule options in UI', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[1, 1, 1, 5, 5]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={[
// 					'0',
// 					'1',
// 					'3',
// 					'4',
// 					'5',
// 					'6',
// 					'7',
// 					'8',
// 					'9',
// 					'10',
// 					'11',
// 					'12',
// 					'13',
// 					'14',
// 					'15',
// 				]}
// 				ruleNumber={{ value: '2' }}
// 				game={{
// 					index: 1,
// 					round: 14,
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 55 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays the count from our container
// 		const gameRound = screen.querySelector('.gameRound')
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')
// 		const rulesOptionsChossed = screen.querySelector('.ruleOptionsChoosed')
// 		const rule1 = screen.querySelector('.test-rule-1')
// 		const rule2 = screen.querySelector('.test-rule-2')
// 		const rule3 = screen.querySelector('.test-rule-3')
// 		const rule4 = screen.querySelector('.test-rule-4')
// 		const rule5 = screen.querySelector('.test-rule-5')
// 		const rule6 = screen.querySelector('.test-rule-6')
// 		const rule7 = screen.querySelector('.test-rule-7')
// 		const rule8 = screen.querySelector('.test-rule-8')
// 		const rule9 = screen.querySelector('.test-rule-9')
// 		const rule10 = screen.querySelector('.test-rule-10')
// 		const rule11 = screen.querySelector('.test-rule-11')
// 		const rule12 = screen.querySelector('.test-rule-12')
// 		const rule13 = screen.querySelector('.test-rule-13')
// 		const rule14 = screen.querySelector('.test-rule-14')
// 		const rule15 = screen.querySelector('.test-rule-15')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('1,1,1,5,5')
// 		expect(gameRound?.textContent).toBe('14')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('55')
// 		expect(rulesOptionsChossed?.textContent).toBe(
// 			'0,1,3,4,5,6,7,8,9,10,11,12,13,14,15'
// 		)
// 		expect(rule1).toHaveProperty('disabled', true)
// 		expect(rule2).toHaveProperty('disabled', false)
// 		expect(rule3).toHaveProperty('disabled', true)
// 		expect(rule4).toHaveProperty('disabled', true)
// 		expect(rule5).toHaveProperty('disabled', true)
// 		expect(rule6).toHaveProperty('disabled', true)
// 		expect(rule7).toHaveProperty('disabled', true)
// 		expect(rule8).toHaveProperty('disabled', true)
// 		expect(rule9).toHaveProperty('disabled', true)
// 		expect(rule10).toHaveProperty('disabled', true)
// 		expect(rule11).toHaveProperty('disabled', true)
// 		expect(rule12).toHaveProperty('disabled', true)
// 		expect(rule13).toHaveProperty('disabled', true)
// 		expect(rule14).toHaveProperty('disabled', true)
// 		expect(rule15).toHaveProperty('disabled', true)

// 		await userEvent('.submit_button', 'click')

// 		// assert the displayed count is now decremented by 1
// 		expect(gameRound?.textContent).toBe('15')
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('55')
// 		expect(rulesOptionsChossed?.textContent).toBe(
// 			'0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,2'
// 		)
// 		expect(rule1).toHaveProperty('disabled', true)
// 		expect(rule2).toHaveProperty('disabled', true)
// 		expect(rule3).toHaveProperty('disabled', true)
// 		expect(rule4).toHaveProperty('disabled', true)
// 		expect(rule5).toHaveProperty('disabled', true)
// 		expect(rule6).toHaveProperty('disabled', true)
// 		expect(rule7).toHaveProperty('disabled', true)
// 		expect(rule8).toHaveProperty('disabled', true)
// 		expect(rule9).toHaveProperty('disabled', true)
// 		expect(rule10).toHaveProperty('disabled', true)
// 		expect(rule11).toHaveProperty('disabled', true)
// 		expect(rule12).toHaveProperty('disabled', true)
// 		expect(rule13).toHaveProperty('disabled', true)
// 		expect(rule14).toHaveProperty('disabled', true)
// 		expect(rule15).toHaveProperty('disabled', true)
// 	})
// 	it('should show rule options choosed in UI', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[1, 1, 1, 5, 5]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={['0']}
// 				ruleNumber={{ value: '1' }}
// 				game={{
// 					index: 1,
// 					round: 15,
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 55 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays the count from our container
// 		const gameRound = screen.querySelector('.gameRound')
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')
// 		const rulesOptionsChossed = screen.querySelector('.ruleOptionsChoosed')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('1,1,1,5,5')
// 		expect(gameRound?.textContent).toBe('15')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('55')
// 		expect(rulesOptionsChossed?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// assert the displayed count is now decremented by 1
// 		expect(gameRound?.textContent).toBe('15')
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('58')
// 		expect(rulesOptionsChossed?.textContent).toBe('0,1')
// 	})
// 	it('should increment add points "3" at 15 round submit but not increment round', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[1, 1, 1, 5, 5]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={['0']}
// 				ruleNumber={{ value: '1' }}
// 				game={{
// 					index: 1,
// 					round: 15,
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 55 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays the count from our container
// 		const gameRound = screen.querySelector('.gameRound')
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')
// 		const rulesOptionsChossed = screen.querySelector('.ruleOptionsChoosed')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('1,1,1,5,5')
// 		expect(gameRound?.textContent).toBe('15')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('55')
// 		expect(rulesOptionsChossed?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// assert the displayed count is now decremented by 1
// 		expect(gameRound?.textContent).toBe('15')
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('58')
// 		expect(rulesOptionsChossed?.textContent).toBe('0,1')
// 	})
// 	it('should increment add points "4" at 14 round submit and increment round to 15', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[1, 1, 1, 1, 5]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={['0']}
// 				ruleNumber={{ value: '1' }}
// 				game={{
// 					index: 1,
// 					round: 14,
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 55 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays the count from our container
// 		const gameRound = screen.querySelector('.gameRound')
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('1,1,1,1,5')
// 		expect(gameRound?.textContent).toBe('14')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('55')

// 		await userEvent('.submit_button', 'click')

// 		// assert the displayed count is now decremented by 1
// 		expect(gameRound?.textContent).toBe('15')
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('59')
// 	})
// 	it('should increment game.round by one', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[5, 5, 5, 5, 5]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={['0']}
// 				ruleNumber={{ value: '1' }}
// 				game={{
// 					index: 1,
// 					round: 1,
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 55 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays the count from our container
// 		const gameRound = screen.querySelector('.gameRound')
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('5,5,5,5,5')
// 		expect(gameRound?.textContent).toBe('1')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('55')

// 		await userEvent('.submit_button', 'click')

// 		// assert the displayed count is now decremented by 1
// 		expect(gameRound?.textContent).toBe('2')
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('55')
// 	})
// 	it('should reset dice roll and show Round "1"', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[5, 5, 5, 5, 5]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={['0']}
// 				ruleNumber={{ value: '1' }}
// 				game={{
// 					index: 1,
// 					round: 1,
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 55 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays the count from our container
// 		const gameRound = screen.querySelector('.gameRound')
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('5,5,5,5,5')
// 		expect(gameRound?.textContent).toBe('1')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('55')

// 		await userEvent('.reset', 'click')

// 		// assert the displayed count is now decremented by 1
// 		expect(gameRound?.textContent).toBe('1')
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('55')
// 	})
// 	it('should reset dice roll and show GameIndex "1"', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[5, 5, 5, 5, 5]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={['0']}
// 				ruleNumber={{ value: '1' }}
// 				game={{
// 					index: 1,
// 					round: 1,
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 55 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays the count from our container
// 		const gameIndex = screen.querySelector('.game')
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('5,5,5,5,5')
// 		expect(gameIndex?.textContent).toBe('1')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('55')

// 		await userEvent('.reset', 'click')

// 		// assert the displayed count is now decremented by 1
// 		expect(gameIndex?.textContent).toBe('1')
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('55')
// 	})
// 	it('should reset dice roll and show PlayerIndex "1"', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[5, 5, 5, 5, 5]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={['0']}
// 				ruleNumber={{ value: '1' }}
// 				game={{
// 					index: 1,
// 					round: 1,
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 55 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays the count from our container
// 		const playerIndex = screen.querySelector('.player')
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('5,5,5,5,5')
// 		expect(playerIndex?.textContent).toBe('1')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('55')

// 		await userEvent('.reset', 'click')

// 		// assert the displayed count is now decremented by 1
// 		expect(playerIndex?.textContent).toBe('1')
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('55')
// 	})
// 	it('should reset dice roll', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[5, 5, 5, 5, 5]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={['0']}
// 				ruleNumber={{ value: '1' }}
// 				game={{
// 					index: 1,
// 					round: 1,
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 55 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays the count from our container
// 		const playerIndex = screen.querySelector('.player')
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('5,5,5,5,5')
// 		expect(playerIndex?.textContent).toBe('1')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('55')

// 		await userEvent('.reset', 'click')

// 		// assert the displayed count is now decremented by 1
// 		expect(playerIndex?.textContent).toBe('1')
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('55')
// 	})
// 	it('should reset game', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[5, 5, 5, 5, 5]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={['0']}
// 				ruleNumber={{ value: '1' }}
// 				game={{
// 					index: 1,
// 					round: 1,
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 55 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('5,5,5,5,5')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('55')

// 		// await userEvent('.reset', 'click')
// 		await userEvent('.resetgame', 'click')

// 		// expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('0')
// 	})
// 	it('should keep dices', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[5, 5, 5, 5, 5]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={['0']}
// 				ruleNumber={{ value: '1' }}
// 				game={{
// 					index: 1,
// 					round: 1,
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 55 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: true,
// 					value2: true,
// 					value3: true,
// 					value4: true,
// 					value5: true,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('5,5,5,5,5')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('55')

// 		// await userEvent('.reset', 'click')
// 		await userEvent('.rollDice', 'click')

// 		// expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('2')
// 		expect(countElement?.textContent).toBe('5,5,5,5,5')
// 		expect(pointsValueElement?.textContent).toBe('55')

// 		// await userEvent('.reset', 'click')
// 		await userEvent('.rollDice', 'click')

// 		// expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('3')
// 		expect(countElement?.textContent).toBe('5,5,5,5,5')
// 		expect(pointsValueElement?.textContent).toBe('55')
// 	})
// })

// describe('Yatzee rule test with ui', function () {
// 	it('ones: score 4 rule 1', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[1, 1, 1, 1, 6]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={["0"]}
// 				ruleNumber={{ value: '1' }}
// 				game={{
// 					index: 1,
// 					round: 1
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 0 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const playerIndex = screen.querySelector('.player')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('1,1,1,1,6')
// 		expect(playerIndex?.textContent).toBe('1')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// // expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(playerIndex?.textContent).toBe('1')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('4')
// 	})
// 	it('twos: score 4 rule 2', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[2, 4, 5, 5, 2]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={["0"]}
// 				ruleNumber={{ value: '2' }}
// 				game={{
// 					index: 1,
// 					round: 1
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 0 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('2,4,5,5,2')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// // expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('4')
// 	})
// 	it('threes: score 3 rule 3', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[3, 4, 5, 5, 6]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={["0"]}
// 				ruleNumber={{ value: '3' }}
// 				game={{
// 					index: 1,
// 					round: 1
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 0 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('3,4,5,5,6')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// // expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('3')
// 	})
// 	it('fours: score 4 rule 4', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[3, 4, 5, 5, 6]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={["0"]}
// 				ruleNumber={{ value: '4' }}
// 				game={{
// 					index: 1,
// 					round: 1
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 0 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('3,4,5,5,6')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// // expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('4')
// 	})
// 	it('fives: score 15 rule 5', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[3, 5, 5, 5, 6]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={["0"]}
// 				ruleNumber={{ value: '5' }}
// 				game={{
// 					index: 1,
// 					round: 1
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 0 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('3,5,5,5,6')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// // expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('15')
// 	})
// 	it('sixes: score 6 rule 6', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[3, 3, 6, 4, 6]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={["0"]}
// 				ruleNumber={{ value: '6' }}
// 				game={{
// 					index: 1,
// 					round: 1
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 0 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('3,3,6,4,6')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// // expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('12')
// 	})
// 	it('Pair: score 8 rule 7', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[3, 3, 4, 4, 4]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={["0"]}
// 				ruleNumber={{ value: '7' }}
// 				game={{
// 					index: 1,
// 					round: 1
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 0 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('3,3,4,4,4')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// // expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('8')
// 	})
// 	it('Pair: score 8 rule 7', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[3, 3, 4, 4, 5]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={["0"]}
// 				ruleNumber={{ value: '7' }}
// 				game={{
// 					index: 1,
// 					round: 1
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 0 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('3,3,4,4,5')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// // expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('8')
// 	})
// 	it('Two pairs: score 12 rule 8', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[1, 1, 5, 5, 1]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={["0"]}
// 				ruleNumber={{ value: '8' }}
// 				game={{
// 					index: 1,
// 					round: 1
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 0 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('1,1,5,5,1')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// // expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('12')
// 	})
// 	it('Two pairs: score 16 rule 8', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[3, 3, 5, 5, 5]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={["0"]}
// 				ruleNumber={{ value: '8' }}
// 				game={{
// 					index: 1,
// 					round: 1
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 0 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('3,3,5,5,5')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// // expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('16')
// 	})
// 	it('Two pairs: score 14 rule 8', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[3, 3, 4, 4, 5]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={["0"]}
// 				ruleNumber={{ value: '8' }}
// 				game={{
// 					index: 1,
// 					round: 1
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 0 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('3,3,4,4,5')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// // expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('14')
// 	})
// 	it('Three of a kind: score 16 rule 9', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[4, 4, 4, 4, 4]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={["0"]}
// 				ruleNumber={{ value: '9' }}
// 				game={{
// 					index: 1,
// 					round: 1
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 0 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('4,4,4,4,4')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// // expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('12')
// 	})
// 	it('Four of a kind: score 16 rule 10', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[4, 4, 4, 4, 4]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={["0"]}
// 				ruleNumber={{ value: '10' }}
// 				game={{
// 					index: 1,
// 					round: 1
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 0 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('4,4,4,4,4')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// // expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('16')
// 	})
// 	it('Small straight: score 15 rule 11', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[1, 3, 4, 5, 2]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={["0"]}
// 				ruleNumber={{ value: '11' }}
// 				game={{
// 					index: 1,
// 					round: 1
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 0 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('1,3,4,5,2')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// // expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('15')
// 	})
// 	it('Large straight: score 20 rule 12', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[2, 3, 4, 5, 6]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={["0"]}
// 				ruleNumber={{ value: '12' }}
// 				game={{
// 					index: 1,
// 					round: 1
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 0 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('2,3,4,5,6')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// // expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('20')
// 	})
// 	it('Full house: score 20 rule 13', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[2, 5, 5, 2, 5]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={["0"]}
// 				ruleNumber={{ value: '13' }}
// 				game={{
// 					index: 1,
// 					round: 1
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 0 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('2,5,5,2,5')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// // expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('19')
// 	})
// 	it('yatzee score 50 rule 14', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[5, 5, 5, 5, 5]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={["0"]}
// 				ruleNumber={{ value: '14' }}
// 				game={{
// 					index: 1,
// 					round: 1
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 0 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('5,5,5,5,5')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// // expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('50')
// 	})
// 	it('chance score 15 rule 15', async () => {
// 		// create the component's DOM and get back the container and a render method
// 		const { screen, render, userEvent } = await createDOM()

// 		// call the render method with the JSX node of our Counter component as a parameter
// 		await render(
// 			<Yatzee
// 				diceRoll={[1, 2, 3, 4, 5]}
// 				roll={{ count: 1 }}
// 				ruleOptionsChoosed={["0"]}
// 				ruleNumber={{ value: '15' }}
// 				game={{
// 					index: 1,
// 					round: 1
// 				}}
// 				player={{ index: 1 }}
// 				sumPoints={{ value: 0 }}
// 				bottomPoints={{ value: 55 }}
// 				topPoints={{ value: 55 }}
// 				topBonus={{ value: false }}
// 				keepDice={{
// 					value1: false,
// 					value2: false,
// 					value3: false,
// 					value4: false,
// 					value5: false,
// 				}}
// 			/>
// 		)

// 		// get the div that displays game data
// 		const countElement = screen.querySelector('.dice')
// 		const rollCountElement = screen.querySelector('.countRoll')
// 		const pointsValueElement = screen.querySelector('.pointsValue')

// 		// expect before interaction of ui
// 		expect(countElement?.textContent).toBe('1,2,3,4,5')
// 		expect(rollCountElement?.textContent).toBe('1')
// 		expect(pointsValueElement?.textContent).toBe('0')

// 		await userEvent('.submit_button', 'click')

// 		// // expect after interaction of ui
// 		expect(rollCountElement?.textContent).toBe('0')
// 		expect(countElement?.textContent).toBe('0,0,0,0,0')
// 		expect(pointsValueElement?.textContent).toBe('15')
// 	})
// })
