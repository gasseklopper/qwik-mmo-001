import { $, component$, useContext, useStyles$ } from '@builder.io/qwik'
import { themeStorageKey } from '../router-head/theme-script'
import themeToggle from './theme-toggle.css?inline'
import { GlobalStore } from '../../globalContext'
import Button from '../__libary/01_Atoms/button/button'

export type ThemePreference = 'dark' | 'miami' | 'light' | 'dim' | 'sim' | 'lights2'

export const colorSchemeChangeListener = (
	onColorSchemeChange: (isDark: boolean) => void
) => {
	const listener = ({ matches: isDark }: MediaQueryListEvent) => {
		onColorSchemeChange(isDark)
	}
	window
		.matchMedia('(prefers-color-scheme: dark)')
		.addEventListener('change', (event) => listener(event))

	return () =>
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.removeEventListener('change', listener)
}

export const setPreference = (theme: ThemePreference) => {
	localStorage.setItem(themeStorageKey, theme)
	reflectPreference(theme)
}

export const reflectPreference = (theme: ThemePreference) => {
	document.firstElementChild?.setAttribute('data-theme', theme)
}

export const getColorPreference = (): ThemePreference => {
	if (localStorage.getItem(themeStorageKey)) {
		return localStorage.getItem(themeStorageKey) as ThemePreference
	} else {
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'miami'
	}
}

export const ThemeToggle = component$(() => {
	useStyles$(themeToggle)
	const state = useContext(GlobalStore)

	const onClick$ = $(() => {
		state.theme = state.theme === 'miami' ? 'dark' : 'miami'
		setPreference(state.theme)
	})

	return (
		<div class="theme-toggle-container">
			<Button
				buttonLabel={`${state.theme === 'miami' ? 'Dark' : 'Miami'} mode`}
				buttonVariant="primary"
				buttonSize="small"
				onClick$={onClick$}
				aria-label='test'
			/>
		</div>
	)
})
