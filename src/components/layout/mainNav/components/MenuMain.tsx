import { component$, useContext, $, } from '@builder.io/qwik'
import { GlobalMenuStore } from '../../../../globalContext'
import ButtonBurger from './buttonBurger'
import { MenuCards } from './MenuCards'
import { MenuHeaderItems } from './MenuHeaderItems'
import {
	baseClassMainMenu,
	baseClassMobileMenu,
} from '~/components/header/header'

export const MenuMain = component$(() => {
	const globalMenuStore = useContext(GlobalMenuStore)
	console.log(globalMenuStore)


	// Perfrorm navigation interaction
	// const showOverlay$ = $(() => {

	// 	globalMenuStore.showOverlay = true

	// })

	const hideMenu$ = $(() => {
		globalMenuStore.showOverlay = false
		globalMenuStore.showMenu = false
		globalMenuStore.isHoverId = 1
	})

	const toggleMobileMenu = $(() => {
		globalMenuStore.showMobileMenu = !globalMenuStore.showMobileMenu
		console.log('click mobile menu:', globalMenuStore.showMobileMenu)
	})

	return (
		<div class="container">
			{!globalMenuStore.showMobileMenu ? (
				<div
					class={`${baseClassMainMenu}__main`}
					// onMouseEnter$={showOverlay$}
					onMouseLeave$={hideMenu$}
				>
					<div class="row">
						<div class="column">
							<div class="mainNav">
								<div class={`${baseClassMainMenu}__main_inner`}>
									<MenuHeaderItems />
									<ButtonBurger onClick$={toggleMobileMenu}>
										open mobile menu
									</ButtonBurger>
								</div>
								<MenuCards />
							</div>
						</div>
					</div>
				</div>
			) : (
				<div class={`${baseClassMobileMenu}__main`}>
					<div class="row">
						<div class="column">
							<div class="mainNav">
								<div class={`${baseClassMobileMenu}__main_inner`}>
									<div class="global-menu">
										<div class="global-menu__wrap">
											<ButtonBurger onClick$={toggleMobileMenu}>
												close mobile menu
											</ButtonBurger>
											<MenuHeaderItems />
										</div>
									</div>

									<svg
										class="shape-overlays"
										viewBox="0 0 100 100"
										preserveAspectRatio="none"
									>
										<path class="shape-overlays__path"></path>
										<path class="shape-overlays__path"></path>
										<path class="shape-overlays__path"></path>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
})
