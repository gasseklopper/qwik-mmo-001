import {
	component$,
	useStyles$,
	useContext,
} from '@builder.io/qwik'
import styles from './mainNav.scss?inline'
import { GlobalMenuStore } from '../../../globalContext'
import { MenuMain } from './components/MenuMain'
import { MenuTopBar } from './components/MenuTopBar'
import { MenuOverlay } from './components/MenuOverlay'
import { GlobalMenuStoreComponente } from './GlobalMenuStoreComponente'
import { baseClassMainMenu, baseClassMobileMenu } from '~/components/header/header'

export default component$(() => {
	useStyles$(styles)

	const globalMenuStore = useContext(GlobalMenuStore)
	// const globalAppStore = useContext(AppContext)


	// useVisibleTask$(() => {
	// 	globalAppStore.mode = getMotionPreference()
	// 	return colorSchemeChangeListener((isDark) => {
	// 		globalStore.theme = isDark ? 'dark' : 'miami'
	// 		setPreference(globalStore.theme)
	// 	})
	// })

	return (
		<div class="navigation">
			<header
				class={
					globalMenuStore.showMobileMenu
						? `${baseClassMobileMenu}`
						: `${baseClassMainMenu}`
				}
			>
				{!globalMenuStore.showMobileMenu && (
					<>
						<GlobalMenuStoreComponente />
						<MenuOverlay />
						<MenuTopBar />
					</>
				)}
				<MenuMain />
			</header>
		</div>
	)
})
