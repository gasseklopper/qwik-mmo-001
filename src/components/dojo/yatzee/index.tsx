import { component$, useStore, $ } from '@builder.io/qwik'
import type { Dice, RuleOption, RuleOptionsChoosed } from './yathzeeTypes'
import DiceRoller from './DiceRoller'
import GameInfo from './GameInfo'
import KeepDices from './KeepDices'
import RuleSelection from './RuleSelection'
import Actions from './Actions'

export default component$(
	(
		props: {
			dices: Record<number, Dice>
			roundCount?: number
			keepDice?: Record<string, boolean>
			ruleNumber: RuleOption
			ruleOptionsChoosed?: RuleOptionsChoosed
			points?: {
				sumPoints?: number
				topPoints?: number
				topBonusPoints?: number
				bottomPoints?: number
			}
		} = { dices: { 1: 1, 2: 4, 3: 3, 4: 4, 5: 5 } }
	) => {
		const maxRoundCount = 3
		const store = useStore({
			dices: props.dices,
			roundCount: props.roundCount || 0,
			keepDice: props.keepDice || {
				value1: false,
				value2: false,
				value3: false,
				value4: false,
				value5: false,
			},
			ruleNumber: props.ruleNumber,
			ruleOptionsChoosed: {
				value: {
					'1': true,
					'2': true,
					'3': true,
					...(props.ruleOptionsChoosed || {}),
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
			// store.ruleNumber = '0'
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
			console.log('Setting rule number', a.target.value)
			store.ruleNumber = a.target.value
			console.log('Rule number set', store.ruleNumber)
		})

		const submit = $(() => {
			if (!store.ruleOptionsChoosed.value[store.ruleNumber]) {
				console.log('Submitting rule', store.ruleNumber)
				store.ruleOptionsChoosed.value[store.ruleNumber] = true
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
