import { component$, useStore, useWatch$ } from '@builder.io/qwik'
import {
	QwikCity,
	RouterOutlet,
	ServiceWorkerRegister,
} from '@builder.io/qwik-city'
import { RouterHead } from './components/router-head/router-head'
import  './global.css';

export default component$(() => {
	/*
	 * The root of a QwikCity site always start with the <QwikCity> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Dont remove the `<head>` and `<body>` elements.
	 */
	const theme = useStore({ variant: "dark" })

	return (
		<QwikCity>
			<head>
				<meta
					charSet="utf-8"
					name="description"
					content="Halten Sie bei Ihren Meta Descriptions die Länge von 140 bis 160 Zeichen ein, damit Google sie vollständig anzeigt. Verwenden Sie auch Ihr Keyword!"
				/>
				<script
					type="module"
					src="/src/main.js"
				></script>
				<script>

				</script>
				<RouterHead />
			</head>
			<body lang="en"
				data-theme={theme.variant}
				document:onLoad$={() => {
					theme.variant = "light"
				}}>
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCity>
	)
})
