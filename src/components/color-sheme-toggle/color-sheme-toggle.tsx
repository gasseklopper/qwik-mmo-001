import {
	component$,
	useStore,
	useStyles$,
	useClientEffect$,
	$,
} from '@builder.io/qwik'
import styles from './color-sheme-toggle.css?inline'

export default component$(() => {
	useStyles$(styles)

	const store = useStore({
		theme: '',
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
			console.log('runs in the browser')
			const selectetdShema = localStorage.getItem('color-scheme')
			store.theme = selectetdShema || ''
		},
		{
			eagerness: 'visible', // 'load' | 'visible' | 'idle'
		}
	)
	return (
		<div class="theme-toggle-container">
			<button class="button" onClick$={toggleTheme}>
				{store.theme}
			</button>
		</div>
	)
})
