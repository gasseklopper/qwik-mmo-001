import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
export default component$(() => {
	return (
		<>
			<div class="row">
				<div class="column">
					<h1>About Me:</h1>
					<p>This page is at the root level, so it only uses the `/src/routes/layout.tsx` layout to wrap the page content.</p>
					<h2>More Info:</h2>
					<ul>
						<li>
							<a href="https://qwik.builder.io/qwikcity/layout/overview/">Layouts</a>
						</li>
						<li>
							<a href="https://qwik.builder.io/qwikcity/routing/overview/">Routing</a>
						</li>
						<li>
							<a href="https://qwik.builder.io/qwikcity/adaptors/overview/">Authoring Content</a>
						</li>
						<li>
							<a href="https://qwik.builder.io/qwikcity/adaptors/overview/">Server Adaptors and Middleware</a>
						</li>
						<li>
							<a href="https://qwik.builder.io/qwikcity/static-site-generation/overview/">Static Site Generation (SSG)</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
})

export const head: DocumentHead = {
	title: 'About Me',
}
