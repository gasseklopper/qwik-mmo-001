import { component$, useStyles$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Image from '~/components/__libary/01_Atoms/image/image'
import styles from './index.scss?inline'

// import Section_hero_001 from '~/components/section_hero_001/section_hero_001'
// import Section_hero_002 from '~/components/section_hero_002/section_hero_002'
// import Section_intro from '~/components/section_intro/section_intro'

export default component$(() => {
	useStyles$(styles)

	return (
		<>
			<div class="row">
				<div class="column medium-2">
					<Image
						src={'../../assets/images/photography/blacker/photography_blackerthandays_016.jpg'}
						height={1680}
						width={1820}
						alt='test'
					/>
					<Image
						src={'../../assets/images/photography/black/Black_001.jpg'}
						height={1080}
						width={820}
						alt='test3'
					/>
				</div>
				<div class="column medium-2">
					<Image
						src={'../../assets/images/photography/black/Black_001.jpg'}
						height={1080}
						width={820}
						alt='test3'
					/>
					<Image
						src={'../../assets/images/photography/blacker/photography_blackerthandays_016.jpg'}
						height={1680}
						width={1820}
						alt='test'
					/>
				</div>
				<div class="column medium-4"><h2>there are products</h2></div>
				<div class="column medium-2">
					<Image
						src={'../../assets/images/photography/blacker/photography_blackerthandays_016.jpg'}
						height={1680}
						width={1820}
						alt='test'
					/>
					<Image
						src={'../../assets/images/photography/black/Black_001.jpg'}
						height={1080}
						width={820}
						alt='test3'
					/>
				</div>
				<div class="column medium-2">
					<Image
						src={'../../assets/images/photography/black/Black_001.jpg'}
						height={1080}
						width={820}
						alt='test3'
					/>
					<Image
						src={'../../assets/images/photography/blacker/photography_blackerthandays_016.jpg'}
						height={1680}
						width={1820}
						alt='test'
					/>
				</div>
			</div>
			<div class="row">
				<div class="column small-12">
					<div class="intro">
						<h1>Morley</h1>
						<Image
							src={'../../assets/images/photography/blacker/photography_blackerthandays_016.jpg'}
							height={1680}
							width={1820}
							alt='test'
						/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="column medium-6">
					<div class="blog-item-column">
						<div class="blog-item-column__content">
							<div class="blog-item blog-item--column-view">
								<div class="blog-item__combo">
									<div class="blog-item__headline">
										HTML5
									</div>
									<div class="blog-item__content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua.
									</div>
								</div>
								<div class="blog-item__action">
									<button>read more</button>
								</div>
							</div>
							<div class="blog-item blog-item--column-view">
								<div class="blog-item__combo">
									<div class="blog-item__headline">
										HTML5
									</div>
									<div class="blog-item__content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua.
									</div>
								</div>
								<div class="blog-item__action">
									<button>read more</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="column medium-6">
					<div class="blog-item-row">
						<div class="blog-item-row__headline">
							<h1>
								THERE ARE FEATURES
							</h1>
						</div>
						<div class="blog-item-row__content">
							<div class="blog-item">
								<div class="blog-item__combo">
									<div class="blog-item__headline">
										HTML5
									</div>
									<div class="blog-item__content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua.
									</div>
								</div>
								<div class="blog-item__action">
									<button>read more</button>
								</div>
							</div>
							<div class="blog-item">
								<div class="blog-item__combo">
									<div class="blog-item__headline">
										HTML5
									</div>
									<div class="blog-item__content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua.
									</div>
								</div>
								<div class="blog-item__action">
									<button>read more</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="column medium-3">
					<h2>
						THERE ARE FEATURES
					</h2>
				</div>
				<div class="column medium-9">
					<Image
						src={'../../assets/images/photography/blacker/photography_blackerthandays_016.jpg'}
						height={1080}
						width={820}
						alt='test2'
					/>
				</div>
			</div>
			<div class="row">
				<div class="column medium-9">
					<Image
						src={'../../assets/images/photography/black/Black_001.jpg'}
						height={1080}
						width={820}
						alt='test2'
					/>
				</div>
				<div class="column medium-3">
					<h2>
						THERE
						IS A
						GALLERY
					</h2>
					<button>next</button>
					<button>prev</button>
				</div>
			</div>
			<div class="row">
				<div class="column medium-4">
					<div class="blog-item-row">
						<div class="blog-item-row__headline">
						</div>
						<div class="blog-item-row__content2">
							<div class="blog-item">
								<div class="blog-item__combo">
									<div class="blog-item__headline">
										HTML5
									</div>
									<div class="blog-item__content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua.
									</div>
								</div>
								<div class="blog-item__action">
									<button>read more</button>
								</div>
							</div>
							<div class="blog-item">
								<div class="blog-item__combo">
									<div class="blog-item__headline">
										HTML5
									</div>
									<div class="blog-item__content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua.
									</div>
								</div>
								<div class="blog-item__action">
									<button>read more</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="column medium-4">
					<h2>
						WE DO
						THINGS
					</h2>
				</div>
				<div class="column medium-4">
					<div class="blog-item-row">
						<div class="blog-item-row__headline">
						</div>
						<div class="blog-item-row__content2">
							<div class="blog-item">
								<div class="blog-item__combo">
									<div class="blog-item__headline">
										HTML5
									</div>
									<div class="blog-item__content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua.
									</div>
								</div>
								<div class="blog-item__action">
									<button>read more</button>
								</div>
							</div>
							<div class="blog-item">
								<div class="blog-item__combo">
									<div class="blog-item__headline">
										HTML5
									</div>
									<div class="blog-item__content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua.
									</div>
								</div>
								<div class="blog-item__action">
									<button>read more</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <Section_hero_002 />
			<Section_intro />
			<Section_hero_001 /> */}
		</>
	)
})

export const head: DocumentHead = {
	title: 'Welcome to Qwik testing',
}
