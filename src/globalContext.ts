import { createContextId } from '@builder.io/qwik'
import type { ThemePreference } from './components/theme-toggle/theme-toggle'

 // Gloabl Types (design system?)
 export type Size = 'large' | 'default' | 'small' | undefined
 export type Variant = 'primary' | 'secondary'

export interface SiteStore {
	theme: ThemePreference | 'auto'
	settings: boolean
}

export interface MenuStore {
	isHover: boolean
	showOverlay: boolean
	showMenu: boolean
	showMenuInner: boolean
	isHoverId: number
	test: string
	showMobileMenu: boolean
}

export interface AppState {
	mode: string;
	direction: boolean;
	layout: string;
	overlay: string;
	switcherDir: string;
	stopScrollTop: boolean;
  }

export const GlobalMenuStore = createContextId<MenuStore>('menu-store')
export const GlobalStore = createContextId<SiteStore>('site-store')
export const AppContext = createContextId<AppState>('app-state')
