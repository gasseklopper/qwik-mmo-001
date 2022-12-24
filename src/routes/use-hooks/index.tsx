import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import UsingContext from '~/components/usingContext/usingContext'
import UseStyles from '~/components/useStyles/useStyles'
import UseReference from '~/components/useReference/useReference'

export default component$(() => {
	return (
		<>
			<UsingContext />
			<UseStyles />
			<UseReference />
		</>
	)
})

export const head: DocumentHead = {
	title: 'use-hooks',
}
