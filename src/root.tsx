import { component$, useClientEffect$ } from '@builder.io/qwik'
import {
	QwikCity,
	RouterOutlet,
	ServiceWorkerRegister,
} from '@builder.io/qwik-city'
import { RouterHead } from './components/router-head/router-head'
// import { ColorStuff } from './components/color-stuff/color-stuff'
import './global.css'

export default component$(() => {
	/*
	 * The root of a QwikCity site always start with the <QwikCity> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Dont remove the `<head>` and `<body>` elements.
	 */
	// useClientEffect$(
	// 	() => {
	// 		const theme = localStorage.getItem('color-scheme') || 'lights2'
	// 		document.body.className = theme
	// 	},
	// 	{
	// 		eagerness: 'load', // 'load' | 'visible' | 'idle'
	// 	}
	// )
	useClientEffect$(
		() => {
			const doc = document.firstElementChild
			const selectetdShema = localStorage.getItem('color-scheme')
			doc!.setAttribute('color-scheme', selectetdShema!)
			doc!.setAttribute('lang', 'de')
			if (!localStorage.getItem('color-scheme')) {
				console.log('not as ', localStorage.getItem('color-scheme'))
				if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
					doc!.setAttribute('color-scheme', 'dark')
					localStorage.setItem('color-scheme', 'dark')
				}
				if (
					window.matchMedia('(prefers-color-scheme: light)').matches
				) {
					doc!.setAttribute('color-scheme', 'lights2')
					localStorage.setItem('color-scheme', 'lights2')
				}
			}
		},
		{
			eagerness: 'visible', // 'load' | 'visible' | 'idle'
		}
	)
	return (
		<QwikCity>
			<head>
				<meta
					charSet="utf-8"
					name="description"
					content="Halten Sie bei Ihren Meta Descriptions die Länge von 140 bis 160 Zeichen ein, damit Google sie vollständig anzeigt. Verwenden Sie auch Ihr Keyword!"
				/>
				<link rel="preconnect" href="https://fonts.gstatic.com"></link>
				<link
					rel="preload"
					as="style"
					href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
				></link>
				<link
					href="https://fonts.googleapis.com/css?family=Montserrat"
					rel="stylesheet"
				></link>
				<RouterHead />
			</head>
			<body>
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCity>
	)
})
