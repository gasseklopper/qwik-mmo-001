import { component$ } from '@builder.io/qwik'
import {
	Link,
	useNavigate,
	DocumentHead,
	routeLoader$,
} from '@builder.io/qwik-city'

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
