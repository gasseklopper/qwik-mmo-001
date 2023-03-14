import { $, component$, useContext, useStyles$ } from '@builder.io/qwik'
import { themeStorageKey } from '../router-head/theme-script'
import themeToggle from './theme-toggle.css?inline'
import { GlobalStore } from '../../context'
import Button from '../__libary/atoms/button/button'

export type ThemePreference = 'dark' | 'lights2'

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
			: 'lights2'
	}
}

export const ThemeToggle = component$(() => {
	useStyles$(themeToggle)
	const state = useContext(GlobalStore)

	const onClick$ = $(() => {
		state.theme = state.theme === 'lights2' ? 'dark' : 'lights2'
		setPreference(state.theme)
	})

	return (
		<div class="theme-toggle-container">
			<Button
				label={`${state.theme === 'lights2' ? 'Dark' : 'Light'} mode`}
				variant={state.theme}
				size="small"
				onClick$={onClick$}
			/>
		</div>
	)
})
