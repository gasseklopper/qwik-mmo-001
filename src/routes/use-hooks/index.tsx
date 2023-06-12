import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import UsingContext from '~/components/usingContext/usingContext'
import UseStyles from '~/components/useStyles/useStyles'
import UseReference from '~/components/useReference/useReference'
import Counter from '~/components/counter/counter'
import Debounced from '~/components/debounced/debounced'
import Yatzee from '~/components/dojo/yatzee'

export default component$(() => {
	return (
		<div class="row">
			<div class="column">
				<Yatzee
					diceRoll={[0, 0, 0, 0, 0]}
					roll={{ count: 0 }}
					ruleNumber={{ value: '1' }}
					points={{ value: 0 }}
					keepDice={{
						value1: false,
						value2: false,
						value3: false,
						value4: false,
						value5: false,
					}}
				/>
				<UsingContext />
				<UseStyles />
				<UseReference />
				<Counter />
				<Debounced />
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'use-hooks',
}
