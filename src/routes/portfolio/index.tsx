import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Link, useNavigate, routeLoader$ } from '@builder.io/qwik-city'

export const useServerTime = routeLoader$(() => {
	// This will re-execute in the server when the page refreshes.
	return Date.now()
})

export default component$(() => {
	const nav = useNavigate()
	const serverTime = useServerTime()

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
						<li>
							<a href="../portfolio/black">black</a>
						</li>
						<li>
							<a href="../portfolio/huricane">huricane</a>
						</li>
						<li>
							<a href="../portfolio/labor">labor</a>
						</li>
						<li>
							<a href="../portfolio/locked">locked</a>
						</li>
						<li>
							<a href="../portfolio/golfing">golfing</a>
						</li>
						<li>
							<a href="../portfolio/blacker">blacker</a>
						</li>
						<li>
							<a href="../portfolio/rippel">rippel</a>
						</li>
						<li>
							<a href="../portfolio/portrait">portrait</a>
						</li>
						<li>
							<a href="../portfolio/paris">paris</a>
						</li>
						<li>
							<Link href="../portfolio/venedig">Venedig (prefered)</Link>
							<button onClick$={() => nav('../portfolio/venedig')}>
								About
							</button>
						</li>
						<li>
							<Link reload>Refresh (better accesibility)</Link>
							<button onClick$={() => nav()}>Refresh</button>
							<p>Server time: {serverTime.value}</p>
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
