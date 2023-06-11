import { component$, useStore, $ } from '@builder.io/qwik'

export default component$(
	(props: {
		dice: [number, number, number, number, number]
		roll: { count: number }
		ruleNumber: { value: string }
		points: { value: number }
		keepDice: {
			value1: boolean
			value2: boolean
			value3: boolean
			value4: boolean
			value5: boolean
		}
	}) => {
		const store: { dice: number[] } = useStore({ dice: props.dice })
		const roll: { count: number } = useStore({ count: props.roll.count })
		const ruleNumber: { value: string } = useStore({
			value: props.ruleNumber.value,
		})
		const points: { value: number } = useStore({
			value: props.points.value,
		})
		const keepDice: {
			value1: boolean
			value2: boolean
			value3: boolean
			value4: boolean
			value5: boolean
		} = useStore(props.keepDice)

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

		const resetGame = $(async () => {
			points.value = 0
			await reset()
		})

		const setDices = $((a: { target: { value: string } }) => {
			if (a.target.value === '1') keepDice.value1 = !keepDice.value1
			if (a.target.value === '2') keepDice.value2 = !keepDice.value2
			if (a.target.value === '3') keepDice.value3 = !keepDice.value3
			if (a.target.value === '4') keepDice.value4 = !keepDice.value4
			if (a.target.value === '5') keepDice.value5 = !keepDice.value5
		})

		const setRuleNumber = $((a: any) => {
			ruleNumber.value = a.target.value
		})

		const submit = $(() => {
			let extractedDiceRollTable = [0, 0, 0, 0, 0, 0]

			const submitDiceRoll = (elem: any) => {
				elem.forEach((item: number) => {
					for (let index = 0; index <= store.dice.length; index++) {
						if (item - 1 == index) {
							extractedDiceRollTable[item - 1]++
						}
					}
				})
				return extractedDiceRollTable
			}

			const equalsCheck = (a: any[], b: string | any[]) =>
				a.length === b.length && a.every((v, i) => v === b[i])

			if (roll.count >= 1 && roll.count <= 3) {
				// Rule 1-6
				// Ones, Twos, Threes, Fours, Fives, Sixes: The player scores the sum of the dice that reads one, two, three, four, five or six, respectively. For example, 1, 1, 2, 4, 4 placed on “fours” gives 8 points.
				if (ruleNumber.value === '1') {
					points.value +=
						store.dice.filter(
							(rolledDie) =>
								rolledDie ===
								(Number(ruleNumber.value) as Number)
						).length * Number(ruleNumber.value)
				}
				if (ruleNumber.value === '2') {
					points.value +=
						store.dice.filter(
							(rolledDie) =>
								rolledDie ===
								(Number(ruleNumber.value) as Number)
						).length * Number(ruleNumber.value)
				}
				if (ruleNumber.value === '3') {
					points.value +=
						store.dice.filter(
							(rolledDie) =>
								rolledDie ===
								(Number(ruleNumber.value) as Number)
						).length * Number(ruleNumber.value)
				}
				if (ruleNumber.value === '4') {
					points.value +=
						store.dice.filter(
							(rolledDie) =>
								rolledDie ===
								(Number(ruleNumber.value) as Number)
						).length * Number(ruleNumber.value)
				}
				if (ruleNumber.value === '5') {
					points.value +=
						store.dice.filter(
							(rolledDie) =>
								rolledDie ===
								(Number(ruleNumber.value) as Number)
						).length * Number(ruleNumber.value)
				}
				if (ruleNumber.value === '6') {
					points.value +=
						store.dice.filter(
							(rolledDie) =>
								rolledDie ===
								(Number(ruleNumber.value) as Number)
						).length * Number(ruleNumber.value)
				}
				// Pair: The player scores the sum of the two highest matching dice. For example, 3, 3, 3, 4, 4 placed on “pair” gives 8.
				if (ruleNumber.value === '7') {
					const wurst = submitDiceRoll(store.dice)
					let test = 0
					wurst.filter((elem, index) => {
						if (elem >= 2) {
							test = index + 1
						}
					})
					points.value += 2 * test
				}
				// Two pairs: If there are two pairs of dice with the same number, the player scores the sum of these dice. If not, the player scores 0. For example, 1, 1, 2, 3, 3 placed on “two pairs” gives 8.
				if (ruleNumber.value === '8') {
					const wurst = submitDiceRoll(store.dice)
					const array2 = [3, 2, 0, 0, 0, 0]
					const array3 = [2, 2, 1, 0, 0, 0]
					if (
						wurst.sort().join(',') === array2.sort().join(',') ||
						wurst.sort().join(',') === array3.sort().join(',')
					) {
						const test = store.dice.reduce(function upps(
							total: number,
							num: number
						) {
							return total + num
						})
						let test1 = 0
						let test2 = 0
						wurst.filter((elem, index) => {
							if (elem === 3) {
								test1 = index + 1
							}
						})
						wurst.filter((elem, index) => {
							if (elem === 1) {
								test2 = index + 1
							}
						})
						points.value += test - test1 - test2
					} else {
						points.value += 0
					}
				}
				// Three of a kind: If there are three dice with the same number, the player scores the sum of these dice. Otherwise, the player scores 0. For example, 3, 3, 3, 4, 5 places on “three of a kind” gives 9.
				if (ruleNumber.value === '9') {
					const wurst = submitDiceRoll(store.dice)
					let test = 0
					wurst.filter((elem, index) => {
						if (elem >= 3) {
							test = index + 1
						}
					})
					points.value += 3 * test
				}
				// Four of a kind: If there are four dice with the same number, the player scores the sum of these dice. Otherwise, the player scores 0. For example, 2, 2, 2, 2, 5 places on “four of a kind” gives 8.
				if (ruleNumber.value === '10') {
					const wurst = submitDiceRoll(store.dice)
					let test = 0
					wurst.filter((elem, index) => {
						if (elem >= 4) {
							test = index + 1
						}
					})
					points.value += 4 * test
				}
				// Small straight: If the dice read 1,2,3,4,5, the player scores 15 (the sum of all the dice), otherwise 0.
				if (ruleNumber.value === '11') {
					const wurst = submitDiceRoll(store.dice)
					if (equalsCheck([1, 1, 1, 1, 1, 0], wurst)) {
						points.value += 15
					} else {
						points.value += 0
					}
				}
				// Large straight: If the dice read 2,3,4,5,6, the player scores 20 (the sum of all the dice), otherwise 0.
				if (ruleNumber.value === '12') {
					const wurst = submitDiceRoll(store.dice)
					if (equalsCheck([0, 1, 1, 1, 1, 1], wurst)) {
						points.value += 20
					} else {
						points.value += 0
					}
				}
				// Full house: If the dice are two of a kind and three of a kind, the player scores the sum of all the dice. For example, 1,1,2,2,2 placed on “full house” gives 8. 4,4,4,4,4 is not “full house”.
				if (ruleNumber.value === '13') {
					const array2 = [3, 2, 0, 0, 0, 0]
					const wurst = submitDiceRoll(store.dice)
					if (wurst.sort().join(',') === array2.sort().join(',')) {
						points.value += store.dice.reduce(function upps(
							total: number,
							num: number
						) {
							return total + num
						})
					} else {
						points.value += 0
					}
				}
				// Yahtzee: If all dice are the have the same number, the player scores 50 points, otherwise 0.
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
				// Chance: The player gets the sum of all dice, no matter what they read.The practitioner can feel free to create new categories as well.
				if (ruleNumber.value === '15') {
					points.value += store.dice.reduce(function upps(
						total: number,
						num: number
					) {
						return total + num
					})
				}
				extractedDiceRollTable = [0, 0, 0, 0, 0, 0]
				reset()
			}
		})

		return (
			<div class="yatzee_layout">
				<div class="layout_top">
					<h1 class="h1">Yatzee</h1>
					<div class="dice_label">Dice: </div>
					<div class="dice h2">{store.dice}</div>
					<div class="countRoll_label">roll.count: </div>
					<div class="countRoll">{roll.count}</div>
					<div class="pointsValue_label">points.value: </div>
					<div class="pointsValue">{points.value}</div>
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
							onClick$={(e: any) => setDices(e)}
							checked={keepDice.value1}
						/>
						<label for="1">1</label>
						<input
							type="checkbox"
							id="2"
							name="dice_2"
							value="2"
							onClick$={(e: any) => setDices(e)}
							checked={keepDice.value2}
						/>
						<label for="2">2</label>
						<input
							type="checkbox"
							id="3"
							name="dice_3"
							value="3"
							onClick$={(e: any) => setDices(e)}
							checked={keepDice.value3}
						/>
						<label for="3">3</label>
						<input
							type="checkbox"
							id="4"
							name="dice_4"
							value="4"
							onClick$={(e: any) => setDices(e)}
							checked={keepDice.value4}
						/>
						<label for="4">4</label>
						<input
							type="checkbox"
							id="5"
							name="dice_5"
							value="5"
							onClick$={(e: any) => setDices(e)}
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
							onClick$={(e: any) => setRuleNumber(e)}
							checked={ruleNumber.value === '1'}
						/>
						<label for="ones">ones</label>
						<input
							type="radio"
							id="twos"
							name="drone"
							value="2"
							onClick$={(e: any) => setRuleNumber(e)}
						/>
						<label for="twos">twos</label>
						<input
							type="radio"
							id="threes"
							name="drone"
							value="3"
							onClick$={(e: any) => setRuleNumber(e)}
						/>
						<label for="threes">threes</label>
						<input
							type="radio"
							id="fours"
							name="drone"
							value="4"
							onClick$={(e: any) => setRuleNumber(e)}
						/>
						<label for="fours">fours</label>
						<input
							type="radio"
							id="fives"
							name="drone"
							value="5"
							onClick$={(e: any) => setRuleNumber(e)}
						/>
						<label for="fives">fives</label>
						<input
							type="radio"
							id="sixes"
							name="drone"
							value="6"
							onClick$={(e: any) => setRuleNumber(e)}
						/>
						<label for="sixes">sixes</label>
						<hr />
						<input
							type="radio"
							id="pair"
							name="drone"
							value="7"
							onClick$={(e: any) => setRuleNumber(e)}
						/>
						<label for="pair">pair</label>
						<input
							type="radio"
							id="twoPairs"
							name="drone"
							value="8"
							onClick$={(e: any) => setRuleNumber(e)}
						/>
						<label for="twoPairs">twoPairs</label>
						<input
							type="radio"
							id="triptychon"
							name="drone"
							value="9"
							onClick$={(e: any) => setRuleNumber(e)}
							checked={ruleNumber.value === '9'}
						/>
						<label for="triptychon">triptychon</label>
						<input
							type="radio"
							id="fourOfAKind"
							name="drone"
							value="10"
							onClick$={(e: any) => setRuleNumber(e)}
						/>
						<label for="fourOfAKind">fourOfAKind</label>
						<input
							type="radio"
							id="smallStraight"
							name="drone"
							value="11"
							onClick$={(e: any) => setRuleNumber(e)}
						/>
						<label for="smallStraight">smallStraight</label>
						<input
							type="radio"
							id="largeStraight"
							name="drone"
							value="12"
							onClick$={(e: any) => setRuleNumber(e)}
						/>
						<label for="largeStraight">largeStraight</label>
						<input
							type="radio"
							id="fullHouse"
							name="drone"
							value="13"
							onClick$={(e: any) => setRuleNumber(e)}
						/>
						<label for="fullHouse">fullHouse</label>
						<input
							type="radio"
							id="yatzee"
							name="drone"
							value="14"
							onClick$={(e: any) => setRuleNumber(e)}
						/>
						<label for="yatzee">yatzee</label>
						<input
							type="radio"
							id="chance"
							name="drone"
							value="15"
							onClick$={(e: any) => setRuleNumber(e)}
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
	}
)
