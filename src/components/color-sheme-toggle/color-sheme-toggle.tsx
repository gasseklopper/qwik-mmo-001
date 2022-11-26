import {
	component$,
	useStore,
	useStyles$,
	$,
} from '@builder.io/qwik'
import styles from './color-sheme-toggle.css?inline'

export default component$(() => {
	useStyles$(styles)

	// document.firstElementChild!
    //         .setAttribute('data-theme',
    //             'dark' ??
    //             (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    //         )

	const store = useStore({
		theme: 'dark'
	})

	const toggleTheme = $(() => {
		if (store.theme === 'dark') {
			store.theme = 'light'
			document.firstElementChild!
					.setAttribute('data-theme',
					store.theme
			)
		} else {
			store.theme = 'dark'
			document.firstElementChild!
				.setAttribute('data-theme',
				store.theme
				)
		}}
	 );
	 const initialTheme = $((e: any) => {
		console.log('initial theme', e)
		document.firstElementChild!
		.setAttribute('data-theme',
			'dark' ??
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
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
