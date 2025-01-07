import { component$ } from '@builder.io/qwik'
export interface Store {
	roundCount: number
	dices: Record<number, Dice>
	keepDice: Record<string, boolean>
	ruleNumber: string
	ruleOptionsChoosed: {
		value: Record<string, boolean>
	}
	points: {
		sumPoints: number
		topPoints: number
		topBonusPoints: number
		bottomPoints: number
	}
}
export interface Dice {
	// Define the properties of Dice here
}

export interface RuleOption {
	// Define the properties of RuleOption here
}

export interface RuleOptionsChoosed {
	// Define the properties of RuleOptionsChoosed here
}

interface GameInfoProps {
	store: Store
}

export default component$(
	({ store }: GameInfoProps) => {
		return (
			<>
				<h2>Game info</h2>
				<div class="row">
					<div class="column large-4">
						<div>Round count</div>
						<div class="roundCount h2">{store.roundCount}</div>
					</div>
					<div class="column large-4">
						<div>Score sumPoints</div>
						<div class="sumPoints h2">{store.points.sumPoints}</div>
					</div>
					<div class="column large-4">
						<div>Score topPoints</div>
						<div class="topPoints h2">{store.points.topPoints}</div>
					</div>
					<div class="column large-4">
						<div>Score topBonusPoints</div>
						<div class="topBonusPoints h2">{store.points.topBonusPoints}</div>
					</div>
					<div class="column large-4">
						<div>Score bottomPoints</div>
						<div class="bottomPoints h2">{store.points.bottomPoints}</div>
					</div>
				</div>
			</>
		)
	}
)
