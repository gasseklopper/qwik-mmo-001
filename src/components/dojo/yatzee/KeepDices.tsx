import { component$ } from '@builder.io/qwik'

export default component$(({ store, setDices }) => (
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
