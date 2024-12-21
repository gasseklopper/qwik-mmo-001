import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import UsingContext from '~/components/usingContext/usingContext'
import UseStyles from '~/components/useStyles/useStyles'
import UseReference from '~/components/useReference/useReference'
import Counter from '~/components/counter/counter'
import Debounced from '~/components/debounced/debounced'
import Yatzee from '~/components/dojo/yatzee'
import StartNew from '~/components/dojo/yatzee'

export default component$(() => {
	return (
		<div class="row">
			<div class="column">
				{/* <Yatzee
					diceRoll={[0, 0, 0, 0, 0]}
					ruleOptionsChoosed={['1', '2']}
					roll={{ count: 0 }}
					ruleNumber={{ value: '0' }}
					game={{ index: 1, round: 3 }}
					player={{ index: 1 }}
					sumPoints={{ value: 0 }}
					bottomPoints={{ value: 55 }}
					topPoints={{ value: 55 }}
					topBonus={{ value: false }}
					keepDice={{
						value1: false,
						value2: false,
						value3: false,
						value4: false,
						value5: false,
					}}
				/> */}
				<StartNew
					dices={{ '1': 1, '2': 4, '3': 3, '4': 4, '5': 5 }}
					ruleNumber="5"
					ruleOptionsChoosed={{
						'1': true,
						'2': true,
						'3': true,
						'4': true,
					}}
				></StartNew>
				{/* <UsingContext />
				<UseStyles />
				<UseReference />
				<Counter />
				<Debounced /> */}
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'use-hooks',
}
