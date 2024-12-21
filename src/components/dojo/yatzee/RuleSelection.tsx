import { component$ } from '@builder.io/qwik'

export default component$(({ store, setRuleNumber }) => (
	<>
		<h2>active chosen rule</h2>
		<h2 class="chosenRule">{store.ruleNumber}</h2>
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
