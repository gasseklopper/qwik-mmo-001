import {
	component$,
	useContext,
} from '@builder.io/qwik'
import { GlobalMenuStore } from '../../../../globalContext'
import { baseClassMainMenu } from '~/components/header/header'

export const MenuOverlay = component$(() => {
	const globalMenuStore = useContext(GlobalMenuStore)
	return (
		<div
			class={[
				`${baseClassMainMenu}__overlay`,
				globalMenuStore.showOverlay ? 'visible' : '',
				{ objectSyntax: true },
			]}
		></div>
	)
})