import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './footer.scss?inline'
import siteConfig from "~//config/siteConfig.json";
import navigation from "~/config/navigation.json";
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
	useStyles$(styles)

	return (
		<footer class={siteConfig.footer_info.isFixed ? 'fixed' : ''}>
			<ul>
				<>
					{navigation.footer.map((item, index) => (
						<li key={index}>
							<Link href={item.link}>{item.name}</Link>
						</li>
					))}
					{siteConfig.social.map((social, index) => (
						<li key={index}>
							<a href={social.link}>{social.name}</a>
						</li>
					))}
				</>
			</ul>
			<div class="promo">
				<a
					href={siteConfig.footer_info.promo.link}
				>
					{siteConfig.footer_info.promo.bodytext}
				</a>
			</div>
		</footer>
	)
})
