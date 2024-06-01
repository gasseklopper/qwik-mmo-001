import { component$, useStyles$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Link, routeLoader$ } from '@builder.io/qwik-city'
import styles from './index-portfolio.scss?inline'
import ImgBlacker from './../../../public/assets/images/photography/blacker/photography_blackerthandays_002.jpg?jsx';
import ImgBlack from './../../../public/assets/images/photography/black/Template_index_016.jpg?jsx';
import ImgParis from './../../../public/assets/images/photography/paris/IMG_6685.jpg?jsx';
import ImgPortrait from './../../../public/assets/images/photography/portrait/Portrait_008.jpg?jsx';
import ImgVenedig from './../../../public/assets/images/photography/venedig/IMG_1905.jpg?jsx';

export const useServerTime = routeLoader$(() => {
	// This will re-execute in the server when the page refreshes.
	return Date.now()
})

export default component$(() => {
	useStyles$(styles)

	return (
		<>
			<div class="port_box">
				<div class="row">
					{/* Headline Column 1*/}
					<div class="column large-2">
						<div class="port_box__layout_intro">
							<div class="port_box__intro_text h1">Portfolio</div>
						</div>
					</div>
					{/* Column 2*/}
					<div class="column large-2">
						<div class="port_box__layout port_box__layout_001">
							<div class="port_box__number h1">1</div>
							<Link href='/portfolio/black'><div class="port_box__title h2">Black</div></Link>
							<p class="port_box__description">s/w pictures</p>
							<Link href='/portfolio/black'>
								<ImgBlack />
							</Link>
						</div>
						<div class="port_box__layout port_box__layout_002">
							<div class="port_box__number h1">2</div>
							<Link href='/portfolio/blacker'>
								<div class="port_box__title h2">Darker Days</div>
							</Link>
							<p class="port_box__description">overpainting</p>
							<div class="port_box__image">
								<Link href='/portfolio/blacker'>
									<ImgBlacker />
								</Link>
							</div>
						</div>
						<div class="port_box__layout port_box__layout_001">
							<div class="port_box__number h1">9</div>
							<Link href='/portfolio/golfing'><div class="port_box__title h2">golfing</div></Link>
							<p class="port_box__description">golfing</p>
						</div>
						<div class="port_box__layout port_box__layout_001">
							<div class="port_box__number h1">11</div>
							<Link href='/portfolio/rippel'><div class="port_box__title h2">rippel</div></Link>
							<p class="port_box__description">rippel</p>
						</div>
					</div>
					{/* Column 3*/}
					<div class="column large-4">
						<div class="port_box__layout port_box__layout_003">
							<div class="port_box__number h1">3</div>
							<Link href='/portfolio/blingbling'>
								<div class="port_box__title h2">Bling Bling!</div>
							</Link>
							<p class="port_box__description">Painting with light</p>
							<div class="port_box__image">
								<Link href='/portfolio/blingbling'>

									<img
										src="/assets/images/photography/blingbling/bling_bling_009.gif"
										alt="/assets/images/photography/blingbling/bling_bling_009.gif"
										width={300}
										height={300}
									/>
								</Link>
							</div>
						</div>
						<div class="port_box__layout port_box__layout_003">
							<div class="port_box__number h1">8</div>
							<Link href='/portfolio/venedig'>
								<div class="port_box__title h2">Venedig</div>
							</Link>
							<p class="port_box__description">Painting with light</p>
							<div class="port_box__image">
								<Link href='/portfolio/venedig'>
									<ImgVenedig />
								</Link>
							</div>
						</div>
					</div>
					{/* Column 4*/}
					<div class="column large-4">
						<div class="row">
							<div class="column large-6">
								<div class="port_box__layout port_box__layout_004">
									<div class="port_box__number h1">4</div>
									<Link href='/portfolio/labor'>
										<div class="port_box__title h2">Labor</div>
									</Link>
									<p class="port_box__description">s/w pictures</p>
									<div class="port_box__image">
										<Link href='/portfolio/labor'>
											<img
												src="/assets/images/photography/labor/labor_001.gif"
												alt="/assets/images/photography/labor/labor_001.gif"
												width={300}
												height={300}
											/>
										</Link>
									</div>
								</div>
							</div>
							<div class="column large-6">
								<div class="port_box__layout port_box__layout_005">
									<div class="port_box__number h1">5</div>
									<Link href='/portfolio/huricane'>
										<div class="port_box__title h2">hurricane</div>
									</Link>
									<p class="port_box__description">
										a storms comes over germany
									</p>
								</div>
								<div class="port_box__layout port_box__layout_006">
									<div class="port_box__number h1">6</div>
									<Link href='/portfolio/locked'>
										<div class="port_box__title h2">locked</div>
									</Link>
									<p class="port_box__description">walking</p>
								</div>
							</div>
							<div class="column large-12">
								<div class="port_box__layout port_box__layout_007">
									<div class="port_box__number h1">7</div>
									<Link class="port_box__title h2" href='/portfolio/paris'>
										Paris
									</Link>
									<p class="port_box__description">People</p>
									<div class="port_box__image">
										<Link class="port_box__title h2" href='/portfolio/paris'>
											<ImgParis />
										</Link>
									</div>
								</div>
							</div>
							<div class="column large-12">
								<div class="port_box__layout port_box__layout_007">
									<div class="port_box__number h1">10</div>
									<div class="port_box__image">
										<Link class="port_box__title h2" href='/portfolio/portrait'>
											<ImgPortrait />
										</Link>
									</div>
									<Link class="port_box__title h2" href='/portfolio/portrait'>
										portrait
									</Link>
									<p class="port_box__description">People</p>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
})

export const head: DocumentHead = {
	title: 'Portfolio',
}
