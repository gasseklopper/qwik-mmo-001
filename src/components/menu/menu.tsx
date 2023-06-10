/* eslint-disable no-mixed-spaces-and-tabs */
import { component$, useStyles$ } from '@builder.io/qwik'
import { useContent, Link, useLocation } from '@builder.io/qwik-city'
import styles from './menu.css?inline'

export default component$(() => {
	useStyles$(styles)

	const { menu } = useContent()
	const { url } = useLocation()

	return (
		<aside class="menu">
			{menu
				? menu.items?.map((item) => (
						<>
							<h5>{item.text}</h5>
							<ul>
								{item.items?.map((item, index) => (
									<li key={index}>
										<Link
											href={item.href}
											class={{
												'is-active':
													url.pathname === item.href,
											}}
										>
											{item.text}
										</Link>
									</li>
								))}
							</ul>
						</>
				  ))
				: null}
		</aside>
	)
})
