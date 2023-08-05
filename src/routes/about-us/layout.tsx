import { component$, useVisibleTask$ } from '@builder.io/qwik'
import { useContent, useLocation } from '@builder.io/qwik-city'
export default component$(() => {
	const { menu } = useContent()
	const { url } = useLocation()
	useVisibleTask$(() => {
		console.log('menu', menu!.items[1])
	})
	return (
		<div class="menu">
			{menu!
				? menu.items?.map((item, index) => (
						<>
							<h5>{item.text}</hS5>
							<ul>
								{item.items?.map((item) => (
									<li key={index}>
										<a
											href={item.href}
											class={{
												'is-active': url.pathname === item.href,
											}}
										>
											{item.text}
										</a>
									</li>
								))}
							</ul>
						</>
				  ))
				: null}
		</div>
	)
})
