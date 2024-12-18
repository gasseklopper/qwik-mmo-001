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

type RuleOptionsChoosed = Record<string, boolean>

export default component$((props: {}) => {
	const maxRoundCount = 3
	const store = useStore({
		dices: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 },
		roundCount: 1,
		keepDice: {
			value1: false,
			value2: false,
			value3: false,
			value4: false,
			value5: false,
		},
		ruleNumber: { value: '0' as RuleOption },
		ruleOptionsChoosed: {
			value: { '1': true, '2': true, '3': true },
		} as RuleOptionsChoosed,
		points: {
			sumPoints: 11,
			topPoints: 10,
			topBonusPoints: 0,
			bottomPoints: 1,
		},
	})

	const rollDice = $(() => {
		if (store.roundCount < maxRoundCount) {
			const internalRoll: Record<number, Dice> = { ...store.dices }

			// Iterate through the dice object
			for (const key in internalRoll) {
				if (store.keepDice[`value${key}`]) {
					// Keep the current dice value
					internalRoll[parseInt(key)] = store.dices[parseInt(key)]
				} else {
					// Roll a new dice value
					internalRoll[parseInt(key)] = Math.floor(Math.random() * 6) + 1
				}
			}

			store.roundCount++
			store.dices = internalRoll
		}
	})

	const reset = $(() => {
		store.roundCount = 0
		store.dices = {
			1: 0,
			2: 0,
			3: 0,
			4: 0,
			5: 0,
		} as Record<number, Dice>
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
		store.ruleOptionsChoosed = {
			value: {
				'1': false,
				'2': false,
				'3': false,
				'4': false,
				'5': false,
				'6': false,
				'7': false,
				'8': false,
				'9': false,
				'10': false,
				'11': false,
				'12': false,
				'13': false,
				'14': false,
				'15': false,
			},
		}
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
		if (!store.ruleOptionsChoosed.value[store.ruleNumber.value]) {
			console.log('Submitting rule', store.ruleNumber.value)
			store.ruleOptionsChoosed.value[store.ruleNumber.value] = true // Mark the rule as chosen
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
					{Object.entries(store.dices).map(([key, die]) => (
						<div className="column large-1" key={key}>
							<h3 className="dice">{die}</h3>
						</div>
					))}
					<div>{JSON.stringify(store.dices)}</div>
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
				<h2>already chosen rules</h2>
				<ul>
					{Array.from({ length: 15 }, (_, i) => `${i + 1}`).filter(
						(key) => store.ruleOptionsChoosed.value[key]
					).length > 0
						? Array.from({ length: 15 }, (_, i) => `${i + 1}`)
								.filter((key) => store.ruleOptionsChoosed.value[key])
								.map((key, index) => <li key={index}>{key}</li>)
						: 'no value'}
				</ul>
				<fieldset class="set_rule" disabled={store.roundCount === 0}>
					<form class="submitForm2">
						{[
							{ value: '1', label: 'ones' },
							{ value: '2', label: 'twos' },
							{ value: '3', label: 'threes' },
							{ value: '4', label: 'fours' },
							{ value: '5', label: 'fives' },
							{ value: '6', label: 'sixes' },
							{ value: '7', label: 'pair' },
							{ value: '8', label: 'twoPairs' },
							{ value: '9', label: 'triptychon' },
							{ value: '10', label: 'fourOfAKind' },
							{ value: '11', label: 'smallStraight' },
							{ value: '12', label: 'largeStraight' },
							{ value: '13', label: 'fullHouse' },
							{ value: '14', label: 'yatzee' },
							{ value: '15', label: 'chance' },
						].map(({ value, label }) => (
							<div key={value}>
								<input
									type="radio"
									id={label}
									name="drone"
									value={value}
									class={`test-rule-${value}`}
									onClick$={(e: any) => setRuleNumber(e)}
									checked={store.ruleNumber.value === value}
									disabled={store.ruleOptionsChoosed.value[value]}
								/>
								<label
									htmlFor={label}
									style={{
										textDecoration: store.ruleOptionsChoosed.value[value]
											? 'line-through'
											: 'none',
									}}
								>
									{label}
								</label>
							</div>
						))}
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
