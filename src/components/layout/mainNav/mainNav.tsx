import {
	component$,
	useStyles$,
	useContext,
	useVisibleTask$,
} from '@builder.io/qwik'
import {
	colorSchemeChangeListener,
	getColorPreference,
	setPreference,
} from '../../theme-toggle/theme-toggle'
import styles from './mainNav.scss?inline'
import { GlobalMenuStore, GlobalStore } from '../../../globalContext'
import { MenuMain } from './components/MenuMain'
import { MenuTopBar } from './components/MenuTopBar'
import { MenuOverlay } from './components/MenuOverlay'
import { GlobalMenuStoreComponente } from './GlobalMenuStoreComponente'
import { baseClassMainMenu, baseClassMobileMenu } from '~/components/header/header'

export default component$(() => {
	useStyles$(styles)

	const globalStore = useContext(GlobalStore)
	const globalMenuStore = useContext(GlobalMenuStore)
	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		globalStore.theme = getColorPreference()
		return colorSchemeChangeListener((isDark) => {
			globalStore.theme = isDark ? 'dark' : 'miami'
			setPreference(globalStore.theme)
		})
	})

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
