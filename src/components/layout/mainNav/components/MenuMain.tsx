import { component$, useContext, $, useSignal, } from '@builder.io/qwik'
import { AppContext, GlobalMenuStore, GlobalStore } from '../../../../globalContext'
import ButtonBurger from './buttonBurger'
import { MenuCards } from './MenuCards'
import { MenuHeaderItems } from './MenuHeaderItems'
import {
	baseClassMainMenu,
	baseClassMobileMenu,
} from '~/components/header/header'
import { Modal } from '@qwik-ui/headless'
import Button from '~/components/__libary/01_Atoms/button/button'
import { setCursorPreference, setLayoutDirectionPreference, setLayoutPreference, setOverlayPreference, setPreference } from '~/utils/settingsHandler'

export const MenuMain = component$(() => {
	const globalMenuStore = useContext(GlobalMenuStore)
	const globalState = useContext(GlobalStore)
	const appState = useContext(AppContext)

	const hideMenu$ = $(() => {
		globalMenuStore.showOverlay = false
		globalMenuStore.showMenu = false
		globalMenuStore.isHoverId = 1
	})

	const toggleMobileMenu = $(() => {
		globalMenuStore.showMobileMenu = !globalMenuStore.showMobileMenu
		console.log('click mobile menu:', globalMenuStore.showMobileMenu)
	})


	const onClick$ = $(() => {
		globalState.theme = globalState.theme === 'miami' ? 'dark' : 'miami'
		setPreference(globalState.theme)
	})

	const onClickCursorPreference$ = $(() => {
		// globalState.theme = globalState.theme === 'miami' ? 'dark' : 'miami'
		appState.mode = appState.mode === 'reduce' ? 'no-preference' : 'reduce'
		setCursorPreference(appState.mode)
	})

	const onClickLayoutPreference$ = $(() => {
		appState.layout = appState.layout === 'box' ? 'fullwidth' : 'box'
		setLayoutPreference(appState.layout)
	})

	const onClickLayoutDirectionPreference$ = $(() => {
		appState.direction = appState.direction === 'ltr' ? 'rtl' : 'ltr'
		setLayoutDirectionPreference(appState.direction)
	})

	const onClickOverlayPreference$ = $(() => {
		console.log('appState.overlay', appState.overlay)
		appState.overlay = appState.overlay === 'on' ? 'off' : 'on'
		setOverlayPreference(appState.overlay)
		console.log('appState.overlay', appState.overlay)
	})

	const isOpen = useSignal(false)

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
									<div>
										<button onClick$={() => (isOpen.value = true)} style={{ margin: '20px', zIndex: 100000, position: 'relative' }}>
											Open Settings
										</button>

										<Modal.Root bind:show={isOpen}>
											<Modal.Panel class={isOpen.value ? 'settings-modal modal-animation closing' : 'settings-modal modal-animation'}>
												<div >
													<Modal.Title>Settings</Modal.Title>
													<Modal.Description>
														Adjust your preferences below.
													</Modal.Description>
													<>
														<h2>Settings</h2>
														<h3>Toggle Theme</h3>
														<Button
															buttonLabel={`Toggle Theme`}
															buttonVariant="primary"
															buttonSize="small"
															onClick$={onClick$}
														/>
														<h3>Toggle Cursor</h3>
														<Button
															buttonLabel={`Toggle cursor`}
															buttonVariant="primary"
															buttonSize="small"
															onClick$={onClickCursorPreference$}
														/>
														<h3>Toggle Box Layout</h3>
														<Button
															buttonLabel={`Toggle Box Layout`}
															buttonVariant="primary"
															buttonSize="small"
															onClick$={onClickLayoutPreference$}
														/>
														<h3>Toggle Layout Direction</h3>
														<Button
															buttonLabel={`Toggle Layout Direction`}
															buttonVariant="primary"
															buttonSize="small"
															onClick$={onClickLayoutDirectionPreference$}
														/>
														<h3>Toggle Overlay</h3>
														<Button
															buttonLabel={`Toggle Overlay`}
															buttonVariant="primary"
															buttonSize="small"
															onClick$={onClickOverlayPreference$}
														/>
													</>
													<footer>
														<Modal.Close>Close</Modal.Close>
													</footer>
												</div>
											</Modal.Panel>
										</Modal.Root>
									</div>
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
