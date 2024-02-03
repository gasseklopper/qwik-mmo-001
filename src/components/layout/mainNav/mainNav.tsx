import {
	component$,
	useStyles$,
	useContext,
	useVisibleTask$,
} from '@builder.io/qwik'
import {
	colorSchemeChangeListener,
	getColorPreference,
	setPreference
} from '../../theme-toggle/theme-toggle'
import styles from './main-nav.scss?inline'
import { GlobalStore } from '../../../globalContext'
import { MenuMain } from './components/MenuMain'
import { MenuTopBar } from './components/MenuTopBar'
import { MenuOverlay } from './components/MenuOverlay'
import { GlobalMenuStoreComponente } from './GlobalMenuStoreComponente'

export default component$(() => {
	// Use Styles
	useStyles$(styles)

	// Use Context
	const globalStore = useContext(GlobalStore)

	useVisibleTask$(() => {
		globalStore.theme = getColorPreference()
		return colorSchemeChangeListener((isDark) => {
			globalStore.theme = isDark ? 'dark' : 'miami'
			setPreference(globalStore.theme)
		})
	})

	return (
		<div class="navigation">
			<header class="header">
				<GlobalMenuStoreComponente />
				<MenuOverlay />
				<MenuTopBar />
				<MenuMain />
			</header>
		</div>
	)
})
