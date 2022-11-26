import {
	component$,
	useStore,
	useStyles$,
	$,
} from '@builder.io/qwik'
import styles from './color-sheme-toggle.css?inline'

export default component$(() => {
	useStyles$(styles)

	const store = useStore({
		theme: 'dark'
	})

	const toggleTheme = $(() => {
		if (store.theme === 'dark') {
			store.theme = 'lights2'
			document.firstElementChild!
					.setAttribute('color-scheme',
					store.theme
			)
		} else {
			store.theme = 'dark'
			document.firstElementChild!
				.setAttribute('color-scheme',
				store.theme
				)
		}}
	 );
	 const initialTheme = $((e: any) => {
		console.log('initial theme', e)
		document.firstElementChild!
		.setAttribute('color-scheme',
			'dark' ??
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'lights2')
		)}
	 );
	return (
		<div class="theme-toggle-container">
			<button onClick$={toggleTheme} document:onLoad$={initialTheme}>
				{store.theme}
			</button>
		</div>
	)
})
