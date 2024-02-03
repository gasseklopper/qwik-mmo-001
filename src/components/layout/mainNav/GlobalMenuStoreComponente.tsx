import { component$, useContext } from '@builder.io/qwik'
import { GlobalMenuStore } from '../../../globalContext'

export const GlobalMenuStoreComponente = component$(() => {
	const globalMenuStore = useContext(GlobalMenuStore)
	return (
		<div
			onClick$={() => {
				globalMenuStore.test = 'wurst'
			}}
		>
			{globalMenuStore.test}
		</div>
	)
})
