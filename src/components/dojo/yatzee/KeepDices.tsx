import type { QRL} from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik'

interface KeepDicesProps {
	store: {
		roundCount: number
		keepDice: Record<string, boolean>
	}
	setDices: QRL<(e: Event) => void>
}

export default component$<KeepDicesProps>(({ store, setDices }) => (
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
						<label for={num.toString()}>{num}</label>
					</div>
				))}
			</form>
		</fieldset>
	</>
))