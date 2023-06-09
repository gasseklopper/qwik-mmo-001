import { component$, useStore, useSignal, useTask$, $ } from '@builder.io/qwik'

export default component$(() => {
	const store: { dice: number[] } = useStore({ dice: [0, 0, 0, 0, 0] })
	const roll: { count: number } = useStore({ count: 0 })
	const ruleNumber: { value: string } = useStore({ value: '1' })
	const points: { value: number } = useStore({ value: 0 })
	const keepDice: {
		value1: boolean
		value2: boolean
		value3: boolean
		value4: boolean
		value5: boolean
	} = useStore({
		value1: false,
		value2: false,
		value3: false,
		value4: false,
		value5: false,
	})

	const rollDice = $(() => {
		if (roll.count < 3) {
			const internalRoll: number[] = []
			for (let index = 0; index < store.dice.length; index++) {
				if (keepDice.value1 && index === 0) {
					internalRoll[index] = store.dice[0]
				} else if (keepDice.value2 && index === 1) {
					internalRoll[index] = store.dice[1]
				} else if (keepDice.value3 && index === 2) {
					internalRoll[index] = store.dice[2]
				} else if (keepDice.value4 && index === 3) {
					internalRoll[index] = store.dice[3]
				} else if (keepDice.value5 && index === 4) {
					internalRoll[index] = store.dice[4]
				} else {
					internalRoll[index] = Math.floor(Math.random() * 6) + 1
				}
			}
			roll.count++
			return (store.dice = internalRoll)
		}
	})

	const reset = $(() => {
		ruleNumber.value = '1'
		roll.count = 0
		store.dice = [0, 0, 0, 0, 0]
		keepDice.value1 = false
		keepDice.value2 = false
		keepDice.value3 = false
		keepDice.value4 = false
		keepDice.value5 = false
	})

	const resetGame = $(() => {
		ruleNumber.value = '1'
		points.value = 0
		roll.count = 0
		store.dice = [0, 0, 0, 0, 0]
		keepDice.value1 = false
		keepDice.value2 = false
		keepDice.value3 = false
		keepDice.value4 = false
		keepDice.value5 = false
	})

	const setDices = $((a: any) => {
		if (a.target.value === '1') keepDice.value1 = !keepDice.value1
		if (a.target.value === '2') keepDice.value2 = !keepDice.value2
		if (a.target.value === '3') keepDice.value3 = !keepDice.value3
		if (a.target.value === '4') keepDice.value4 = !keepDice.value4
		if (a.target.value === '5') keepDice.value5 = !keepDice.value5
	})

	const setRuleNumber = $((a: any) => {
		ruleNumber.value = a.target.value
	})

	// const upps = $(function upps(total: number, num: number) {
	// 	return total - num
	// })

	const submit = $(() => {
		if (roll.count >= 1 && roll.count <= 3) {
			if (ruleNumber.value === '1') {
				points.value +=
					store.dice.filter(
						(rolledDie) =>
							rolledDie === (Number(ruleNumber.value) as Number)
					).length * Number(ruleNumber.value)
			}
			if (ruleNumber.value === '2') {
				points.value +=
					store.dice.filter(
						(rolledDie) =>
							rolledDie === (Number(ruleNumber.value) as Number)
					).length * Number(ruleNumber.value)
			}
			if (ruleNumber.value === '3') {
				points.value +=
					store.dice.filter(
						(rolledDie) =>
							rolledDie === (Number(ruleNumber.value) as Number)
					).length * Number(ruleNumber.value)
			}
			if (ruleNumber.value === '4') {
				points.value +=
					store.dice.filter(
						(rolledDie) =>
							rolledDie === (Number(ruleNumber.value) as Number)
					).length * Number(ruleNumber.value)
			}
			if (ruleNumber.value === '5') {
				points.value +=
					store.dice.filter(
						(rolledDie) =>
							rolledDie === (Number(ruleNumber.value) as Number)
					).length * Number(ruleNumber.value)
			}
			if (ruleNumber.value === '6') {
				points.value +=
					store.dice.filter(
						(rolledDie) =>
							rolledDie === (Number(ruleNumber.value) as Number)
					).length * Number(ruleNumber.value)
			}
			// yatzee rule
			if (ruleNumber.value === '14') {
				const test = store.dice.filter(
					(rolledDie) => rolledDie === store.dice[0]
				).length
				if (test === 5) {
					points.value += 50
				} else {
					points.value += 0
				}
			}
			// Chance rule
			if (ruleNumber.value === '15') {
				points.value += store.dice.reduce(function upps(
					total: number,
					num: number
				) {
					return total + num
				})
			}
			keepDice.value1 = false
			keepDice.value2 = false
			keepDice.value3 = false
			keepDice.value4 = false
			keepDice.value5 = false
			roll.count = 0
			ruleNumber.value = '1'
			store.dice = [0, 0, 0, 0, 0]
		}
	})

	return (
		<div class="yatzee_layout">
			<div class="layout_top">
				<h1 class="h1">Yatzee</h1>
				<div class="count_label">Dice: </div>
				<div class="count h2">{store.dice}</div>
				<div class="countRoll_label">roll.count: </div>
				<div class="countRoll">{roll.count}</div>
				<div class="countRoll_label">points.value: </div>
				<div class="countRoll">{points.value}</div>
				<div class="ruleNumber_label">ruleNumber.value: </div>
				<div class="ruleNumber h3">{ruleNumber.value}</div>
			</div>

			<button
				class="rollDice"
				onClick$={rollDice}
				disabled={roll.count >= 3}
			>
				roll Dice
			</button>

			<hr />

			<fieldset
				class="keep_dice"
				disabled={roll.count === 0 || roll.count === 3}
			>
				<form class="submitForm">
					<input
						type="checkbox"
						id="1"
						name="dice_1"
						value="1"
						onClick$={(e) => setDices(e)}
						checked={keepDice.value1}
					/>
					<label for="1">1</label>
					<input
						type="checkbox"
						id="2"
						name="dice_2"
						value="2"
						onClick$={(e) => setDices(e)}
						checked={keepDice.value2}
					/>
					<label for="2">2</label>
					<input
						type="checkbox"
						id="3"
						name="dice_3"
						value="3"
						onClick$={(e) => setDices(e)}
						checked={keepDice.value3}
					/>
					<label for="3">3</label>
					<input
						type="checkbox"
						id="4"
						name="dice_4"
						value="4"
						onClick$={(e) => setDices(e)}
						checked={keepDice.value4}
					/>
					<label for="4">4</label>
					<input
						type="checkbox"
						id="5"
						name="dice_5"
						value="5"
						onClick$={(e) => setDices(e)}
						checked={keepDice.value5}
					/>
					<label for="5">5</label>
				</form>
			</fieldset>

			<hr />

			<fieldset class="set_rule" disabled={roll.count === 0}>
				<form class="submitForm2">
					<input
						type="radio"
						id="ones"
						name="drone"
						value="1"
						onClick$={(e) => setRuleNumber(e)}
						checked={ruleNumber.value === '1'}
					/>
					<label for="ones">ones</label>
					<input
						type="radio"
						id="twos"
						name="drone"
						value="2"
						onClick$={(e) => setRuleNumber(e)}
					/>
					<label for="twos">twos</label>
					<input
						type="radio"
						id="threes"
						name="drone"
						value="3"
						onClick$={(e) => setRuleNumber(e)}
					/>
					<label for="threes">threes</label>
					<input
						type="radio"
						id="fours"
						name="drone"
						value="4"
						onClick$={(e) => setRuleNumber(e)}
					/>
					<label for="fours">fours</label>
					<input
						type="radio"
						id="fives"
						name="drone"
						value="5"
						onClick$={(e) => setRuleNumber(e)}
					/>
					<label for="fives">fives</label>
					<input
						type="radio"
						id="sixes"
						name="drone"
						value="6"
						onClick$={(e) => setRuleNumber(e)}
					/>
					<label for="sixes">sixes</label>
					<hr />
					<input
						type="radio"
						id="pair"
						name="drone"
						value="7"
						onClick$={(e) => setRuleNumber(e)}
					/>
					<label for="pair">pair</label>
					<input
						type="radio"
						id="twoPairs"
						name="drone"
						value="8"
						onClick$={(e) => setRuleNumber(e)}
					/>
					<label for="twoPairs">twoPairs</label>
					<input
						type="radio"
						id="triptychon"
						name="drone"
						value="9"
						onClick$={(e) => setRuleNumber(e)}
					/>
					<label for="triptychon">triptychon</label>
					<input
						type="radio"
						id="fourOfAKind"
						name="drone"
						value="10"
						onClick$={(e) => setRuleNumber(e)}
					/>
					<label for="fourOfAKind">fourOfAKind</label>
					<input
						type="radio"
						id="smallStraight"
						name="drone"
						value="11"
						onClick$={(e) => setRuleNumber(e)}
					/>
					<label for="smallStraight">smallStraight</label>
					<input
						type="radio"
						id="largeStraight"
						name="drone"
						value="12"
						onClick$={(e) => setRuleNumber(e)}
					/>
					<label for="largeStraight">largeStraight</label>
					<input
						type="radio"
						id="fullHouse"
						name="drone"
						value="12"
						onClick$={(e) => setRuleNumber(e)}
					/>
					<label for="fullHouse">fullHouse</label>
					<input
						type="radio"
						id="yatzee"
						name="drone"
						value="14"
						onClick$={(e) => setRuleNumber(e)}
					/>
					<label for="yatzee">yatzee</label>
					<input
						type="radio"
						id="chance"
						name="drone"
						value="15"
						onClick$={(e) => setRuleNumber(e)}
					/>
					<label for="chance">chance</label>
				</form>
			</fieldset>

			<hr />

			<div class="submit_container">
				<button onClick$={submit} disabled={roll.count === 0}>
					submit
				</button>
			</div>

			<hr />

			<div class="reset_container">
				<button class="reset" onClick$={reset}>
					reset
				</button>

				<button class="resetgame" onClick$={resetGame}>
					resetGame
				</button>
			</div>
		</div>
	)
})
