import {
	component$,
	useContext,
} from '@builder.io/qwik'
import { GlobalMenuStore } from '../../../../globalContext'

export const MenuOverlay = component$(() => {
	const globalMenuStore = useContext(GlobalMenuStore)
	return (
		<div
			class={[
				'header__overlay',
				globalMenuStore.showOverlay ? 'visible' : '',
				{ objectSyntax: true },
			]}
		></div>
	)
})