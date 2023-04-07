import { createContextId } from '@builder.io/qwik'
import type { ThemePreference } from './components/theme-toggle/theme-toggle'

export interface SiteStore {
	theme: ThemePreference | 'auto'
}

export interface MenuStore {
	isHover: boolean
	showOverlay: boolean
	showMenu: boolean
	showMenuInner: boolean
	isHoverId: number
}

export const GlobalMenuStore = createContextId<MenuStore>('menu-store')
export const GlobalStore = createContextId<SiteStore>('site-store')
