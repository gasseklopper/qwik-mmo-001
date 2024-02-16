import { createContextId } from '@builder.io/qwik'
import type { ThemePreference } from './components/theme-toggle/theme-toggle'

 // Gloabl Types (design system?)
 export type Size = 'large' | 'default' | 'small' | undefined
 export type Variant = 'primary' | 'secondary'

export interface SiteStore {
	theme: ThemePreference | 'auto'
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

export const GlobalMenuStore = createContextId<MenuStore>('menu-store')
export const GlobalStore = createContextId<SiteStore>('site-store')
