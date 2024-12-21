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

const DiceRoller = $(({ store, rollDice }) => (
	<>
		<div class="row">
			<div class="column large-12">
				<button onClick$={rollDice}>Roll Dice</button>
			</div>
		</div>
		<div class="row">
			{Object.entries(store.dices).map(([key, die]) => (
				<div class="column large-1" key={key}>
					<h3 class="dice">{die}</h3>
				</div>
			))}
			<div class="diceString">{JSON.stringify(store.dices)}</div>
		</div>
	</>
))

const GameInfo = $(({ store }) => (
	<>
		<h2>Game info</h2>
		<div class="row">
			<div class="column large-4">
				<div>Round count</div>
				<div class="roundCount h2">{store.roundCount}</div>
			</div>
			<div class="column large-4">
				<div>Score sumPoints</div>
				<div>{store.points.sumPoints}</div>
			</div>
			<div class="column large-4">
				<div>Score topPoints</div>
				<div>{store.points.topPoints}</div>
			</div>
			<div class="column large-4">
				<div>Score topBonusPoints</div>
				<div>{store.points.topBonusPoints}</div>
			</div>
			<div class="column large-4">
				<div>Score bottomPoints</div>
				<div>{store.points.bottomPoints}</div>
			</div>
		</div>
	</>
))

const KeepDices = $(({ store, setDices }) => (
	<>
		<h2>Keep dices</h2>
		<fieldset
			class="keep_dice"
			disabled={store.roundCount === 0 || store.roundCount === 3}
		>
			<form class="submitForm">
				{[1, 2, 3, 4, 5].map((num) => (
					<div key={num}>
						<input
							type="checkbox"
							id={num.toString()}
							name={`dice_${num}`}
							value={num.toString()}
							onClick$={(e: any) => setDices(e)}
							checked={store.keepDice[`value${num}`]}
						/>
						<label htmlFor={num.toString()}>{num}</label>
					</div>
				))}
			</form>
		</fieldset>
	</>
))

const RuleSelection = $(({ store, setRuleNumber }) => (
	<>
		<h2>active chosen rule</h2>
		<h2>{String(store.ruleNumber.value)}</h2>
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
	</>
))

const Actions = $(({ rollDice, reset, resetGame, submit }) => (
	<>
		<h2>Submit</h2>
		<button onClick$={submit}>Submit</button>
		<hr />
		<div class="row">
			<div class="column large-12">
				<button onClick$={rollDice}>Roll Dice</button>
			</div>
			<div class="column large-6">
				<button onClick$={reset}>Reset Round</button>
			</div>
			<div class="column large-6">
				<button onClick$={resetGame}>Reset Game</button>
			</div>
		</div>
		<hr />
	</>
))

export default component$(
	(
		props: {
			dices?: Record<number, Dice>
			roundCount?: number
			keepDice?: Record<string, boolean>
			ruleNumber?: RuleOption
			ruleOptionsChoosed?: RuleOptionsChoosed
			points?: {
				sumPoints?: number
				topPoints?: number
				topBonusPoints?: number
				bottomPoints?: number
			}
		} = {}
	) => {
		const maxRoundCount = 3
		const store = useStore({
			dices: props.dices || { 1: 1, 2: 4, 3: 3, 4: 4, 5: 5 },
			roundCount: props.roundCount || 0,
			keepDice: props.keepDice || {
				value1: false,
				value2: false,
				value3: false,
				value4: false,
				value5: false,
			},
			ruleNumber: props.ruleNumber || '0',
			ruleOptionsChoosed: {
				value: {
					'1': true,
					'2': true,
					'3': true,
				},
			},
			points: props.points || {
				sumPoints: 0,
				topPoints: 0,
				topBonusPoints: 0,
				bottomPoints: 0,
			},
		})

		const rollDice = $(() => {
			if (store.roundCount < maxRoundCount) {
				const internalRoll: Record<number, Dice> = { ...store.dices }

				for (const key in internalRoll) {
					if (store.keepDice[`value${key}`]) {
						internalRoll[parseInt(key)] = store.dices[parseInt(key)]
					} else {
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
			store.ruleNumber.value = '0'
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
			const valueKey = `value${a.target.value}`
			store.keepDice[valueKey] = !store.keepDice[valueKey]
		})

		const setRuleNumber = $((a: { target: { value: RuleOption } }) => {
			store.ruleNumber.value = a.target.value
		})

		const submit = $(() => {
			if (!store.ruleOptionsChoosed.value[store.ruleNumber.value]) {
				console.log('Submitting rule', store.ruleNumber.value)
				store.ruleOptionsChoosed.value[store.ruleNumber.value] = true
			} else {
				console.log('Rule already chosen')
			}
		})

		return (
			<>
				<div>
					<DiceRoller store={store} rollDice={rollDice} />
					<GameInfo store={store} />
					<KeepDices store={store} setDices={setDices} />
					<RuleSelection store={store} setRuleNumber={setRuleNumber} />
					<Actions
						rollDice={rollDice}
						reset={reset}
						resetGame={resetGame}
						submit={submit}
					/>
				</div>
			</>
		)
	}
)
