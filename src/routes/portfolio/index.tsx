import { component$, useStyles$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Link, useNavigate, routeLoader$ } from '@builder.io/qwik-city'
import Bodytext from '~/components/__libary/01_Atoms/bodytext/bodytext'
import styles from './index-portfolio.scss?inline'

export const useServerTime = routeLoader$(() => {
	// This will re-execute in the server when the page refreshes.
	return Date.now()
})

export default component$(() => {
	useStyles$(styles)

	const nav = useNavigate()
	const serverTime = useServerTime()

	return (
		<>
			<div class="port_box">
				<div class="row">
					<div class="column large-2">
						<div class="port_box__layout_intro">
							<div class="port_box__intro_text h1">Portfolio</div>
						</div>
					</div>
					<div class="column large-2">
						<div class="port_box__layout port_box__layout_001">
							<div class="port_box__number h1">1</div>
							<a href="../portfolio/black">
								<div class="port_box__title h2">Black</div>
							</a>
							<p class="port_box__description">s/w pictures</p>
						</div>
						<div class="port_box__layout port_box__layout_002">
							<div class="port_box__number h1">2</div>
							<a href="../portfolio/blacker">
								<div class="port_box__title h2">Darker Days</div>
							</a>
							<p class="port_box__description">overpainting</p>
							<div class="port_box__image">
								<a href="../portfolio/blacker">
									<img
										src="../../assets/images/photography/blacker/photography_blackerthandays_002.jpg"
										alt=""
									/>
								</a>
							</div>
						</div>
					</div>
					<div class="column large-4">
						<div class="port_box__layout port_box__layout_003">
							<div class="port_box__number h1">3</div>
							<a href="../portfolio/blingbling">
								<div class="port_box__title h2">Bling Bling!</div>
							</a>
							<p class="port_box__description">Painting with light</p>
							<div class="port_box__image">
								<a href="../portfolio/blingbling">
									<image
										src="/assets/images/photography/blingbling/bling_bling_009.gif"
										alt="/assets/images/photography/blingbling/bling_bling_009.gif"
									/>
								</a>
							</div>
						</div>
					</div>

					<div class="column large-4">
						<div class="row">
							<div class="column large-6">
								<div class="port_box__layout port_box__layout_004">
									<div class="port_box__number h1">4</div>
									<a href="../portfolio/labor">
										<div class="port_box__title h2">Labor</div>
									</a>
									<p class="port_box__description">s/w pictures</p>
									<div class="port_box__image">
										<a href="../portfolio/labor">
											<img
												src="/assets/images/photography/labor/labor_001.gif"
												alt="/assets/images/photography/labor/labor_001.gif"
											/>
										</a>
									</div>
								</div>
							</div>
							<div class="column large-6">
								<div class="port_box__layout port_box__layout_005">
									<div class="port_box__number h1">5</div>
									<a href="../portfolio/huricane">
										<div class="port_box__title h2">hurricane</div>
									</a>
									<p class="port_box__description">
										a storms comes over germany
									</p>
								</div>
								<div class="port_box__layout port_box__layout_006">
									<div class="port_box__number h1">6</div>
									<a href="../portfolio/locked">
										<div class="port_box__title h2">locked</div>
									</a>
									<p class="port_box__description">walking</p>
								</div>
							</div>
							<div class="column large-12">
								<div class="port_box__layout port_box__layout_007">
									<div class="port_box__number h1">7</div>
									<a class="port_box__title h2" href="../portfolio/paris">
										Paris
									</a>
									<p class="port_box__description">People</p>
									<div class="port_box__image">
										<a class="port_box__title h2" href="../portfolio/paris">
											<img
												src="/assets/images/photography/paris/IMG_6685.jpg"
												alt="/assets/images/photography/paris/IMG_6685.jpg"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="column large-12"></div>
					<div class="column large-12"></div>
				</div>
			</div>
			<div class="portfolio">
				<div class="row">
					<div class="column">
						<h1>Portfolio</h1>
						<p>this is the portfolio main page</p>
						<ul>
							<li>
								<div class="portfolio__card">
									<a href="../portfolio/venedig">
										<img
											src="../../assets/images/photography/blingbling/bling_bling_006.gif"
											alt=""
										/>
									</a>
									<a href="../portfolio/venedig">Venedig</a>
									<Bodytext>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									</Bodytext>
								</div>
							</li>
							<li>
								<div class="portfolio__card">
									<a href="../portfolio/blingbling">
										{' '}
										<img
											src="../../assets/images/photography/blingbling/bling_bling_006.gif"
											alt=""
										/>
									</a>
									<a href="../portfolio/blingbling">bling_bling_001.gif</a>
									<Bodytext>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									</Bodytext>
								</div>
							</li>
							<li>
								<div class="portfolio__card">
									<a href="../portfolio/black">
										<img
											src="../../assets/images/photography/blingbling/bling_bling_006.gif"
											alt=""
										/>
									</a>
									<a href="../portfolio/black">black</a>
									<Bodytext>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									</Bodytext>
								</div>
							</li>
							<li>
								<div class="portfolio__card">
									<a href="../portfolio/huricane">
										<img
											src="../../assets/images/photography/blingbling/bling_bling_006.gif"
											alt=""
										/>
									</a>
									<a href="../portfolio/huricane">huricane</a>
									<Bodytext>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									</Bodytext>
								</div>
							</li>
							<li>
								<div class="portfolio__card">
									<a href="../portfolio/labor">
										<img
											src="../../assets/images/photography/blingbling/bling_bling_006.gif"
											alt=""
										/>
									</a>
									<a href="../portfolio/labor">labor</a>
									<Bodytext>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									</Bodytext>
								</div>
							</li>
							<li>
								<div class="portfolio__card">
									<a href="../portfolio/locked">
										<img
											src="../../assets/images/photography/blingbling/bling_bling_006.gif"
											alt=""
										/>
									</a>
									<a href="../portfolio/locked">locked</a>
									<Bodytext>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									</Bodytext>
								</div>
							</li>
							<li>
								<div class="portfolio__card">
									<a href="../portfolio/golfing">
										<img
											src="../../assets/images/photography/blingbling/bling_bling_006.gif"
											alt=""
										/>
									</a>
									<a href="../portfolio/golfing">golfing</a>
									<Bodytext>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									</Bodytext>
								</div>
							</li>
							<li>
								<div class="portfolio__card">
									<a href="../portfolio/blacker">
										<img
											src="../../assets/images/photography/blingbling/bling_bling_006.gif"
											alt=""
										/>
									</a>
									<a href="../portfolio/blacker">blacker</a>
									<Bodytext>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									</Bodytext>
								</div>
							</li>
							<li>
								<div class="portfolio__card">
									<a href="../portfolio/rippel">
										<img
											src="../../assets/images/photography/blingbling/bling_bling_006.gif"
											alt=""
										/>
									</a>
									<a href="../portfolio/rippel">rippel</a>
									<Bodytext>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									</Bodytext>
								</div>
							</li>
							<li>
								<div class="portfolio__card">
									<a href="../portfolio/portrait">
										<img
											src="../../assets/images/photography/blingbling/bling_bling_006.gif"
											alt=""
										/>
									</a>
									<a href="../portfolio/portrait">portrait</a>
									<Bodytext>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									</Bodytext>
								</div>
							</li>
							<li>
								<div class="portfolio__card">
									<a href="../portfolio/paris">
										<img
											src="../../assets/images/photography/blingbling/bling_bling_006.gif"
											alt=""
										/>
									</a>
									<a href="../portfolio/paris">paris</a>
									<Bodytext>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									</Bodytext>
								</div>
							</li>
							<li>
								<div class="portfolio__card">
									<Link href="../portfolio/venedig">Venedig (prefered)</Link>
									<button onClick$={() => nav('../portfolio/venedig')}>
										About
									</button>
								</div>
							</li>
							<li>
								<div class="portfolio__card">
									<Link reload>Refresh (better accesibility)</Link>
									<button onClick$={() => nav()}>Refresh</button>
									<p>Server time: {serverTime.value}</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
})

export const head: DocumentHead = {
	title: 'Portfolio',
}
