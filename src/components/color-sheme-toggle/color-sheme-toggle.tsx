import {
	component$,
	useStore,
	useStyles$,
	useClientEffect$,
	$,
} from '@builder.io/qwik'
import styles from './color-sheme-toggle.scss?inline'

export default component$(() => {
	useStyles$(styles)

	const store = useStore({
		theme: 'idle',
	})

	const toggleTheme = $(() => {
		if (store.theme === 'dark') {
			document.firstElementChild!.setAttribute(
				'color-scheme',
				(store.theme = 'lights2')
			)
			localStorage.setItem('color-scheme', 'lights2')
		} else {
			document.firstElementChild!.setAttribute(
				'color-scheme',
				(store.theme = 'dark')
			)
			localStorage.setItem('color-scheme', 'dark')
		}
	})

	useClientEffect$(
		() => {
			const selectetdShema = localStorage.getItem('color-scheme')
			store.theme = selectetdShema || ''
		},
		{
			eagerness: 'visible', // 'load' | 'visible' | 'idle'
		}
	)
	return (
		<div class="theme-toggle-container">
			<button
				data-text={
					store.theme === 'lights2'
						? 'switch to dark mode'
						: 'switch to light mode'
				}
				class={
					store.theme === 'lights2' ? 'button dark' : 'button light'
				}
				onClick$={toggleTheme}
			>
				<span>{store.theme}</span>
			</button>
		</div>
	)
})
