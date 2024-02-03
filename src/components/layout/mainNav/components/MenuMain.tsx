import {
	component$,
	useContext,
	$,
} from '@builder.io/qwik'
import { GlobalMenuStore } from '../../../../globalContext'
import ButtonBurger from './buttonBurger'
import { MenuCards } from './MenuCards'
import { MenuHeaderItems } from './MenuHeaderItems'

export const MenuMain = component$(() => {
	const globalMenuStore = useContext(GlobalMenuStore)

	// Perfrorm navigation interaction
	const showOverlay$ = $(() => {
		globalMenuStore.showOverlay = true
	})

	const hideMenu$ = $(() => {
		globalMenuStore.showOverlay = false
		globalMenuStore.showMenu = false
		globalMenuStore.isHoverId = 1
	})
	
	return (
		<div
			class="header__main"
			onMouseEnter$={showOverlay$}
			onMouseLeave$={hideMenu$}
		>
			<div class="row">
				<div class="column">
					<div class="main-nav">
						<div class="header__main_inner">
							<MenuHeaderItems />
							<ButtonBurger />
						</div>
						<MenuCards />
					</div>
				</div>
			</div>
		</div>
	)
})