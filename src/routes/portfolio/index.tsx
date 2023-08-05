import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
	return (
		<>
			<div class="row">
				<div class="column">
					<h1>Portfolio</h1>
					<p>this is the portfolio main page</p>
					<ul>
						<li>
							<a href="../portfolio/venedig">Venedig</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
})

export const head: DocumentHead = {
	title: 'Portfolio',
}
