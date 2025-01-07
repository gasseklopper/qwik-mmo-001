import type { QRL} from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik'

interface ActionsProps {
	rollDice: QRL<() => void>
	reset: QRL<() => void>
	resetGame: QRL<() => void>
	submit: QRL<() => void>
}

export default component$<ActionsProps>(({ rollDice, reset, resetGame, submit }) => (
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