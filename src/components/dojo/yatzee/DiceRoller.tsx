import type { QRL } from '@builder.io/qwik'
import { component$ } from '@builder.io/qwik'

interface DiceRollerProps {
	store: {
		dices: Record<string, number>
	}
	rollDice: QRL<() => void>
}

export default component$<DiceRollerProps>(({ store, rollDice }) => (
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