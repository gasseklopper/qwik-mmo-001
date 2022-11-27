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
		theme: 'lights2'
	})

	const toggleTheme = $(() => {
		if (store.theme === 'dark') {
			document.firstElementChild!
					.setAttribute('color-scheme',
					store.theme = 'lights2'
			)
		} else {
			document.firstElementChild!
				.setAttribute('color-scheme',
				store.theme = 'dark'
				)
		}}
	 );
	 const initialTheme = $((e: any) => {
		console.log('initial theme', e)
		document.firstElementChild!
		.setAttribute('color-scheme',
			store.theme ??
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'lights2')
		)}
	 );
	return (
		<div class="theme-toggle-container" document:onLoad$={initialTheme}>
			<button onClick$={toggleTheme} >
				{store.theme}
			</button>
		</div>
	)
})
