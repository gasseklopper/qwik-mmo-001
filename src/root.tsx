import { component$ } from '@builder.io/qwik'
import {
	QwikCity,
	RouterOutlet,
	ServiceWorkerRegister,
} from '@builder.io/qwik-city'
import { RouterHead } from './components/router-head/router-head'
import  './global.css';
import { QwikPartytown } from '~/components/partytown/partytown'

export default component$(() => {
	/*
	 * The root of a QwikCity site always start with the <QwikCity> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Dont remove the `<head>` and `<body>` elements.
	 */
	return (
		<QwikCity>
			<head>
				<meta
					charSet="utf-8"
					name="description"
					content="Halten Sie bei Ihren Meta Descriptions die Länge von 140 bis 160 Zeichen ein, damit Google sie vollständig anzeigt. Verwenden Sie auch Ihr Keyword!"
				/>
				<QwikPartytown />
				<script
					type="text/javascript"
					async=""
					src="https://j.6sc.co/6si.min.js"
				></script>
				<script
					type="module"
					async=""
					src="./src/index.js"
				></script>
				<script
					type="text/partytown"
					async=""
					src="https://j.6sc.co/6si.min.js"
				></script>
				<script
					type="text/partytown"
					src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scroll/16.1.3/smooth-scroll.min.js"
				></script>
				<RouterHead />
			</head>
			<body lang="en">
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCity>
	)
})
