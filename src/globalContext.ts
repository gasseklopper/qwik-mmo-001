import { createContextId } from '@builder.io/qwik'
import type { ThemePreference } from './utils/settingsHandler'

 // Gloabl Types (design system?)
 export type Size = 'large' | 'default' | 'small' | undefined
 export type Variant = 'primary' | 'secondary'
 export type Layout = 'box' | 'fullwidth' | string
 export type LayoutDirection = 'ltr' | 'rtl' | string

export interface SiteStore {
	isSettingsOpen: boolean
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
	mode: string | 'reduced';
	direction: LayoutDirection;
	layout: Layout;
	overlay: string;
	switcherDir: string;
	stopScrollTop: boolean;
  }

export const GlobalMenuStore = createContextId<MenuStore>('menu-store')
export const GlobalStore = createContextId<SiteStore>('site-store')
export const AppContext = createContextId<AppState>('app-state')
