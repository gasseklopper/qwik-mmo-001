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
				<Yatzee />
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
