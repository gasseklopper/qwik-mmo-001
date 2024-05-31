import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './footer.scss?inline'

export default component$(() => {
	useStyles$(styles)

	return (
		<footer>
			<ul>
				<li>
					<a href="/home">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="https://www.instagram.com/yelrom_/">Instgram</a>
				</li>
				<li>
					<a href="https://www.behance.net/markusmorley">Behance</a>
				</li>
				<li>
					<a href="https://github.com/gasseklopper">Github</a>
				</li>
			</ul>
			<div class="promo">
				<a
					href="https://www.markusmorley.de/"
					target="_blank"
				>
					Made with ♡ by Markus Morley
				</a>
			</div>
		</footer>
	)
})
