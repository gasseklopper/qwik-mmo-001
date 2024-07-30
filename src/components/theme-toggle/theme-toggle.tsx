import { $, component$, useContext, useStyles$ } from '@builder.io/qwik'
import themeToggle from './theme-toggle.css?inline'
import { GlobalStore } from '../../globalContext'
import Button from '../__libary/01_Atoms/button/button'
import { setPreference } from '~/utils/settingsHandler'



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
