import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import InputContext from '~/components/inputContext/inputContext'
import './style.css'

export default component$(() => {
	return (
		<div className="input-context">
			<InputContext />
		</div>
	)
})

export const head: DocumentHead = {
	title: 'Input Context',
}
