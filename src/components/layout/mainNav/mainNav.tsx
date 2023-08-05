import {
	component$,
	useStyles$,
	useContext,
	useVisibleTask$,
	useStore,
	$,
	useSignal,
} from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import {
	colorSchemeChangeListener,
	getColorPreference,
	setPreference,
	ThemeToggle,
} from '../../theme-toggle/theme-toggle'
import styles from './main-nav.scss?inline'
import { GlobalStore, GlobalMenuStore } from '../../../globalContext'
import Logo from './components/logo'
import ButtonBurger from './components/buttonBurger'
import type { MenuDataItem } from './menuTypes'
import menuDataJson from './data/menuItems.json'
import menuItemsCardsJson from './data/menuItemsCards.json'

export default component$(() => {
	// Use Styles
	useStyles$(styles)

	// Use Context
	const globalStore = useContext(GlobalStore)

	useVisibleTask$(() => {
		globalStore.theme = getColorPreference()
		return colorSchemeChangeListener((isDark) => {
			globalStore.theme = isDark ? 'dark' : 'lights2'
			setPreference(globalStore.theme)
		})
	})

	return (
		<div class="navigation">
			<header class="header">
				<GlobalMenuStoreTest />
				<MenuOverlay />
				<MenuTopBar />
				<MenuMain />
			</header>
		</div>
	)
})

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
							<HeaderItems />
							<ButtonBurger />
						</div>
						<MenuCards />
					</div>
				</div>
			</div>
		</div>
	)
})

export const MenuTopBar = component$(() => {
	return (
		<div class="header__top-bar">
			<Logo />
			<ThemeToggle />
		</div>
	)
})

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

export const GlobalMenuStoreTest = component$(() => {
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

export const MenuCards = component$(() => {
	const globalMenuStore = useContext(GlobalMenuStore)
	const targetRef = useSignal<Element>()
	const store: {
		activeItemCard: any
	} = useStore({ activeItemCard: 0 })

	console.log('STORE', store)
	useVisibleTask$(() => {
		// if (targetRef.value) {
		// 	disableBodyScroll(targetRef.value)
		// }
		// enableBodyScroll(targetRef)
	})
	// const targetElemen = null
	// menuItemsCards
	return (
		<div
			ref={targetRef}
			// style={{ border: '1px solid red', width: '100px' }}
			class={{
				header__menu: true,
				visible: globalMenuStore.showMenu,
			}}
			onMouseEnter$={() => (globalMenuStore.isHover = true)}
			// onMouseLeave$={() => (
			// 	// (globalMenuStore.isHover = false),
			// 	// enableBodyScroll(targetRef.value)
			// )}
		>
			{menuItemsCardsJson.length && (
				<>
					{menuItemsCardsJson.map((item: any, index: number) => (
						<div
							key={index}
							class={[
								{
									header__menu_inner: true,
									visible: globalMenuStore.isHoverId === item.id,
									test: globalMenuStore.isHoverId === item.id,
								},
							]}
							data-header-menu-id="ui-page"
						>
							<div class="row">
								<div class="column small-5">
									{item.links.map((item: any, index: number) => (
										<a
											key={index}
											href={item.url}
											title={item.label}
											class={[
												'header__subitem',
												{
													initial: store.activeItemCard == index,
												},
											]}
											data-header-description-id="0"
											data-btattached="true"
											onMouseOver$={() => (store.activeItemCard = index)}
											onMouseOut$={() => (store.activeItemCard = index)}
										>
											<span class="header__arrow">›</span>
											<span>{item.label}</span>
										</a>
									))}
								</div>
								<div class="column small-1"></div>
								<div class="column small-5">
									{item.links.map((item: any, index: number) => (
										<div
											key={index}
											class={[
												{
													header__description: true,
													rte: true,
												},
												store.activeItemCard == index ? 'visible' : '',
											]}
											data-header-description-id={index}
										>
											<p>{item.text}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</>
			)}
		</div>
	)
})

export const HeaderItems = component$(() => {
	const { url } = useLocation()

	const globalMenuStore = useContext(GlobalMenuStore)
	const store: {
		activeItemCard: any
	} = useStore({
		activeItemCard: 0,
	})

	return (
		<nav class="header__items">
			{menuDataJson.length && (
				<>
					{menuDataJson.map((item: MenuDataItem) => (
						<a
							key={item.id}
							href={item.href}
							class={{
								header__item: true,
								visible: globalMenuStore.showMenu,
								active: url.pathname.startsWith(item.href),
								hover:
									store.activeItemCard == item.id && globalMenuStore.showMenu,
							}}
							aria-label={item.label}
							data-header-menu-id={item.id}
							data-btattached="true"
							onMouseEnter$={() => (
								(store.activeItemCard = item.id),
								(globalMenuStore.showMenu = item.showMenu),
								(globalMenuStore.isHoverId = item.id)
							)}
						>
							{item.label}
						</a>
					))}
				</>
			)}
		</nav>
	)
})
