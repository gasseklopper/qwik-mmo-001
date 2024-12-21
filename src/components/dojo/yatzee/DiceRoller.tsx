import { component$ } from '@builder.io/qwik'

export default component$(({ store, rollDice }) => (
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
