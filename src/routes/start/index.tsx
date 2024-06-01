import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
// import MultiStepForm from '~/components/multiStepForm'

export default component$(() => {
	return (
		<div class="row">
			<div class="column">
				{/* <MultiStepForm /> */}
			</div>
			<div class="column">
				<h1>Welcome to Qwik Docs Starter</h1>
				<h2>Hallo Jessica und hallo Alexandra</h2>

				<ul>
					<li>This homepage uses a layout without a menu.</li>
					<li>
						<span>The </span>
						<a href="/docs">Documentation</a>
						<span>
							{' '}
							pages use multiple nested layouts, one of them providing a left
							menu.
						</span>
					</li>
					<li>
						Check out the <code>src/routes</code> directory to get started.
					</li>
					<li>
						Add integrations with <code>npm run qwik add</code>.
					</li>
					<li>
						More info about development in <code>README.md</code>
					</li>
					<li>
						<a href="/docs">Qwik City</a>
						<span> is the meta-framework for Qwik</span>
					</li>
				</ul>

				<h2>Commands</h2>

				<h2>Add Integrations</h2>

				<h2>Community</h2>

				<ul>
					<li>
						<span>Questions or just want to say hi? </span>
						<a href="https://qwik.builder.io/chat" target="_blank">
							Chat on discord!
						</a>
					</li>
					<li>
						<span>Follow </span>
						<a href="https://twitter.com/QwikDev" target="_blank">
							@QwikDev
						</a>
						<span> on Twitter</span>
					</li>
					<li>
						<span>Open issues and contribute on </span>
						<a href="https://github.com/BuilderIO/qwik" target="_blank">
							Github
						</a>
					</li>
					<li>
						<span>Watch </span>
						<a href="https://qwik.builder.io/media/" target="_blank">
							Presentations, Podcasts, Videos, etc.
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'start',
}
