import { component$, useStore, $ } from '@builder.io/qwik'

type Dice = 0 | 1 | 2 | 3 | 4 | 5 | 6
type RuleOption =
	| '0'
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| '11'
	| '12'
	| '13'
	| '14'
	| '15'
	| undefined

type RuleOptionsChoosed = [
	RuleOption?,
	RuleOption?,
	RuleOption?,
	RuleOption?,
	RuleOption?,
	RuleOption?,
	RuleOption?,
	RuleOption?,
	RuleOption?,
	RuleOption?,
	RuleOption?,
	RuleOption?,
	RuleOption?,
	RuleOption?,
	RuleOption?,
	RuleOption?,
]

export default component$((props: {}) => {
	const maxRoundCount = 3
	const store = useStore({
		dice: [1, 2, 3, 4, 5],
		roundCount: 1,
		keepDice: {
			value1: false,
			value2: false,
			value3: false,
			value4: false,
			value5: false,
		},
		ruleNumber: { value: 0 },
		ruleOptionsChoosed: { value: ['1', '2', '3'] },
		points: {
			sumPoints: 11,
			topPoints: 10,
			topBonusPoints: 0,
			bottomPoints: 1,
		},
	})

	const rollDice = $(() => {
		if (store.roundCount < maxRoundCount) {
			const internalRoll: Dice[] = []
			store.dice.map((element, index) => {
				if (store.keepDice.value1 && index === 0) {
					internalRoll[index] = element
				} else if (store.keepDice.value2 && index === 1) {
					internalRoll[index] = element
				} else if (store.keepDice.value3 && index === 2) {
					internalRoll[index] = element
				} else if (store.keepDice.value4 && index === 3) {
					internalRoll[index] = element
				} else if (store.keepDice.value5 && index === 4) {
					internalRoll[index] = element
				} else {
					internalRoll[index] = (Math.floor(Math.random() * 6) + 1) as Dice
				}
			})
			store.roundCount++
			store.dice = internalRoll
		}
	})

	const reset = $(() => {
		store.roundCount = 0
		store.dice = Array(5).fill(0) as Dice[]
		store.keepDice = {
			value1: false,
			value2: false,
			value3: false,
			value4: false,
			value5: false,
		}
	})

	const resetGame = $(() => {
		reset()
		store.ruleOptionsChoosed = { value: [] }
		store.points = {
			sumPoints: 0,
			topPoints: 0,
			topBonusPoints: 0,
			bottomPoints: 0,
		}
	})

	const setDices = $((a: { target: { value: string } }) => {
		if (a.target.value === '1') store.keepDice.value1 = !store.keepDice.value1
		if (a.target.value === '2') store.keepDice.value2 = !store.keepDice.value2
		if (a.target.value === '3') store.keepDice.value3 = !store.keepDice.value3
		if (a.target.value === '4') store.keepDice.value4 = !store.keepDice.value4
		if (a.target.value === '5') store.keepDice.value5 = !store.keepDice.value5
	})

	const setRuleNumber = $((a: { target: { value: RuleOption } }) => {
		store.ruleNumber.value = a.target.value
	})

	const submit = $(() => {
		if (!store.ruleOptionsChoosed.value.includes(store.ruleNumber.value)) {
			console.log('Submitting rule', store.ruleNumber.value)
			store.ruleOptionsChoosed.value.push(store.ruleNumber.value)
		} else {
			console.log('Rule already chosen')
		}
	})

	return (
		<>
			<div>
				<div className="row">
					<div className="column large-12">
						<button onClick$={rollDice}>Roll Dice</button>
					</div>
				</div>
				<div className="row">
					{store.dice.map((die, index) => (
						<div className="column large-1" key={index}>
							<h3>{die}</h3>
						</div>
					))}
				</div>
				<h2>Game info</h2>
				<div className="row">
					<div className="column large-4">
						<div>Round count</div>
						<div>{store.roundCount}</div>
					</div>
					<div className="column large-4">
						<div>Score sumPoints</div>
						<div>{store.points.sumPoints}</div>
					</div>
					<div className="column large-4">
						<div>Score topPoints</div>
						<div>{store.points.topPoints}</div>
					</div>
					<div className="column large-4">
						<div>Score topBonusPoints</div>
						<div>{store.points.topBonusPoints}</div>
					</div>
					<div className="column large-4">
						<div>Score bottomPoints</div>
						<div>{store.points.bottomPoints}</div>
					</div>
				</div>

				<hr />
				<h2>Keep dices</h2>
				<fieldset
					class="keep_dice"
					disabled={store.roundCount === 0 || store.roundCount === 3}
				>
					<form class="submitForm">
						<input
							type="checkbox"
							id="1"
							name="dice_1"
							value="1"
							onClick$={(e: any) => setDices(e)}
							checked={store.keepDice.value1}
						/>
						<label for="1">1</label>
						<input
							type="checkbox"
							id="2"
							name="dice_2"
							value="2"
							onClick$={(e: any) => setDices(e)}
							checked={store.keepDice.value2}
						/>
						<label for="2">2</label>
						<input
							type="checkbox"
							id="3"
							name="dice_3"
							value="3"
							onClick$={(e: any) => setDices(e)}
							checked={store.keepDice.value3}
						/>
						<label for="3">3</label>
						<input
							type="checkbox"
							id="4"
							name="dice_4"
							value="4"
							onClick$={(e: any) => setDices(e)}
							checked={store.keepDice.value4}
						/>
						<label for="4">4</label>
						<input
							type="checkbox"
							id="5"
							name="dice_5"
							value="5"
							onClick$={(e: any) => setDices(e)}
							checked={store.keepDice.value5}
						/>
						<label for="5">5</label>
					</form>
				</fieldset>

				<hr />
				<h2>active chosen rule</h2>
				<h2>{store.ruleNumber.value}</h2>
				<h2>active chosen rule</h2>
				<ul>
					{store.ruleOptionsChoosed.value.length
						? store.ruleOptionsChoosed.value.map((die, index) => (
								<li key={index}>{die}</li>
							))
						: 'no value'}
				</ul>
				<fieldset class="set_rule" disabled={store.roundCount === 0}>
					<form class="submitForm2">
						<input
							type="radio"
							id="ones"
							name="drone"
							value="1"
							class="test-rule-1"
							onClick$={(e: any) => setRuleNumber(e)}
							checked={store.ruleNumber.value === '1'}
							disabled={store.ruleOptionsChoosed.value.includes('1')}
						/>
						<label
							for="ones"
							style={{
								textDecoration: store.ruleOptionsChoosed.value.includes('1')
									? 'line-through'
									: 'none',
							}}
						>
							ones
						</label>
						<input
							type="radio"
							class="test-rule-2"
							id="twos"
							name="drone"
							value="2"
							onClick$={(e: any) => setRuleNumber(e)}
							disabled={store.ruleOptionsChoosed.value.includes('2')}
							checked={store.ruleNumber.value === '2'}
						/>
						<label
							for="twos"
							style={{
								textDecoration: store.ruleOptionsChoosed.value.includes('2')
									? 'line-through'
									: 'none',
							}}
						>
							twos
						</label>
						<input
							type="radio"
							class="test-rule-3"
							id="threes"
							name="drone"
							value="3"
							onClick$={(e: any) => setRuleNumber(e)}
							disabled={store.ruleOptionsChoosed.value.includes('3')}
							checked={store.ruleNumber.value === '3'}
						/>
						<label
							for="threes"
							style={{
								textDecoration: store.ruleOptionsChoosed.value.includes('3')
									? 'line-through'
									: 'none',
							}}
						>
							threes
						</label>
						<input
							type="radio"
							class="test-rule-4"
							id="fours"
							name="drone"
							value="4"
							onClick$={(e: any) => setRuleNumber(e)}
							disabled={store.ruleOptionsChoosed.value.includes('4')}
							checked={store.ruleNumber.value === '4'}
						/>
						<label
							for="fours"
							style={{
								textDecoration: store.ruleOptionsChoosed.value.includes('4')
									? 'line-through'
									: 'none',
							}}
						>
							fours
						</label>
						<input
							type="radio"
							class="test-rule-5"
							id="fives"
							name="drone"
							value="5"
							onClick$={(e: any) => setRuleNumber(e)}
							disabled={store.ruleOptionsChoosed.value.includes('5')}
							checked={store.ruleNumber.value === '5'}
						/>
						<label
							for="fives"
							style={{
								textDecoration: store.ruleOptionsChoosed.value.includes('5')
									? 'line-through'
									: 'none',
							}}
						>
							fives
						</label>
						<input
							type="radio"
							class="test-rule-6"
							id="sixes"
							name="drone"
							value="6"
							onClick$={(e: any) => setRuleNumber(e)}
							disabled={store.ruleOptionsChoosed.value.includes('6')}
							checked={store.ruleNumber.value === '6'}
						/>
						<label
							for="sixes"
							style={{
								textDecoration: store.ruleOptionsChoosed.value.includes('6')
									? 'line-through'
									: 'none',
							}}
						>
							sixes
						</label>
						<hr />
						<input
							type="radio"
							class="test-rule-7"
							id="pair"
							name="drone"
							value="7"
							onClick$={(e: any) => setRuleNumber(e)}
							disabled={store.ruleOptionsChoosed.value.includes('7')}
							checked={store.ruleNumber.value === '7'}
						/>
						<label
							for="pair"
							style={{
								textDecoration: store.ruleOptionsChoosed.value.includes('7')
									? 'line-through'
									: 'none',
							}}
						>
							pair
						</label>
						<input
							type="radio"
							class="test-rule-8"
							id="twoPairs"
							name="drone"
							value="8"
							onClick$={(e: any) => setRuleNumber(e)}
							disabled={store.ruleOptionsChoosed.value.includes('8')}
							checked={store.ruleNumber.value === '8'}
						/>
						<label
							for="twoPairs"
							style={{
								textDecoration: store.ruleOptionsChoosed.value.includes('8')
									? 'line-through'
									: 'none',
							}}
						>
							twoPairs
						</label>
						<input
							type="radio"
							class="test-rule-9"
							id="triptychon"
							name="drone"
							value="9"
							onClick$={(e: any) => setRuleNumber(e)}
							checked={store.ruleNumber.value === '9'}
							disabled={store.ruleOptionsChoosed.value.includes('9')}
						/>
						<label
							for="triptychon"
							style={{
								textDecoration: store.ruleOptionsChoosed.value.includes('9')
									? 'line-through'
									: 'none',
							}}
						>
							triptychon
						</label>
						<input
							type="radio"
							class="test-rule-10"
							id="fourOfAKind"
							name="drone"
							value="10"
							onClick$={(e: any) => setRuleNumber(e)}
							disabled={store.ruleOptionsChoosed.value.includes('10')}
							checked={store.ruleNumber.value === '10'}
						/>
						<label
							for="fourOfAKind"
							style={{
								textDecoration: store.ruleOptionsChoosed.value.includes('10')
									? 'line-through'
									: 'none',
							}}
						>
							fourOfAKind
						</label>
						<input
							type="radio"
							class="test-rule-11"
							id="smallStraight"
							name="drone"
							value="11"
							onClick$={(e: any) => setRuleNumber(e)}
							disabled={store.ruleOptionsChoosed.value.includes('11')}
							checked={store.ruleNumber.value === '11'}
						/>
						<label
							for="smallStraight"
							style={{
								textDecoration: store.ruleOptionsChoosed.value.includes('11')
									? 'line-through'
									: 'none',
							}}
						>
							smallStraight
						</label>
						<input
							type="radio"
							class="test-rule-12"
							id="largeStraight"
							name="drone"
							value="12"
							onClick$={(e: any) => setRuleNumber(e)}
							disabled={store.ruleOptionsChoosed.value.includes('12')}
							checked={store.ruleNumber.value === '12'}
						/>
						<label
							for="largeStraight"
							style={{
								textDecoration: store.ruleOptionsChoosed.value.includes('12')
									? 'line-through'
									: 'none',
							}}
						>
							largeStraight
						</label>
						<input
							type="radio"
							class="test-rule-13"
							id="fullHouse"
							name="drone"
							value="13"
							onClick$={(e: any) => setRuleNumber(e)}
							disabled={store.ruleOptionsChoosed.value.includes('13')}
							checked={store.ruleNumber.value === '13'}
						/>
						<label
							for="fullHouse"
							style={{
								textDecoration: store.ruleOptionsChoosed.value.includes('13')
									? 'line-through'
									: 'none',
							}}
						>
							fullHouse
						</label>
						<input
							type="radio"
							class="test-rule-14"
							id="yatzee"
							name="drone"
							value="14"
							onClick$={(e: any) => setRuleNumber(e)}
							disabled={store.ruleOptionsChoosed.value.includes('14')}
							checked={store.ruleNumber.value === '14'}
						/>
						<label
							for="yatzee"
							style={{
								textDecoration: store.ruleOptionsChoosed.value.includes('14')
									? 'line-through'
									: 'none',
							}}
						>
							yatzee
						</label>
						<input
							type="radio"
							class="test-rule-15"
							id="chance"
							name="drone"
							value="15"
							onClick$={(e: any) => setRuleNumber(e)}
							disabled={store.ruleOptionsChoosed.value.includes('15')}
							checked={store.ruleNumber.value === '15'}
						/>
						<label
							for="chance"
							style={{
								textDecoration: store.ruleOptionsChoosed.value.includes('15')
									? 'line-through'
									: 'none',
							}}
						>
							chance
						</label>
					</form>
				</fieldset>
				<hr />
				<h2>Submit</h2>
				<button onClick$={submit}>Submit</button>
				<hr />
				<div className="row">
					<div className="column large-12">
						<button onClick$={rollDice}>Roll Dice</button>
					</div>
					<div className="column large-6">
						<button onClick$={reset}>Reset Round</button>
					</div>
					<div className="column large-6">
						<button onClick$={resetGame}>Reset Game</button>
					</div>
				</div>
				<hr />
			</div>
		</>
	)
})
