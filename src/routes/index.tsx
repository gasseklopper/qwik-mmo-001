import { $, component$, useSignal, useStyles$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Image from '~/components/__libary/01_Atoms/image/image'
import styles from './index.scss?inline'
import { Carousel } from '~/components/__libary/02_Molecules/carousel/component';

// import Section_hero_001 from '~/components/section_hero_001/section_hero_001'
// import Section_hero_002 from '~/components/section_hero_002/section_hero_002'
// import Section_intro from '~/components/section_intro/section_intro'

export default component$(() => {
	useStyles$(styles)
	const currentIndexSig = useSignal<number>(0);
	const currentIndexSig2 = useSignal<number>(0);
	const currentIndexSig3 = useSignal<number>(0);

	const slideImageMetadata = [
		{
			id: '10',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/black/Black_004.jpg',
			download_url: 'https://picsum.photos/id/10/2500/1667',
		},
		{
			id: '11',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/black/Black_005.jpg',
			download_url: 'https://picsum.photos/id/11/2500/1667',
		},
		{
			id: '12',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/black/Black_006.jpg',
			download_url: 'https://picsum.photos/id/12/2500/1667',
		},
		{
			id: '13',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/black/Black_007.jpg',
			download_url: 'https://picsum.photos/id/13/2500/1667',
		},
		{
			id: '14',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/black/Black_008.jpg',
			download_url: 'https://picsum.photos/id/14/2500/1667',
		},
		{
			id: '15',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/black/Black_009.jpg',
			download_url: 'https://picsum.photos/id/15/2500/1667',
		},
		{
			id: '16',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/black/Black_010.jpg',
			download_url: 'https://picsum.photos/id/16/2500/1667',
		},
		{
			id: '17',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/black/Black_011.jpg',
			download_url: 'https://picsum.photos/id/17/2500/1667',
		},
		{
			id: '18',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/black/Black_012.jpg',
			download_url: 'https://picsum.photos/id/18/2500/1667',
		},
		{
			id: '19',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/black/Black_022.jpg',
			download_url: 'https://picsum.photos/id/19/2500/1667',
		},
	];


	return (
		<>
			<div class="row">
				<div class="column medium-2">
					<Image
						src={'../../assets/images/photography/blacker/photography_blackerthandays_016-min.jpg'}
						height={104}
						width={185}
						alt='test'
					/>
					<Image
						src={'../../assets/images/photography/black/Black_001-min.jpg'}
						height={104}
						width={185}
						alt='test3'
					/>
				</div>
				<div class="column medium-2">
					<Image
						src={'../../assets/images/photography/black/Black_001-min.jpg'}
						height={104}
						width={185}
						alt='test3'
					/>
					<Image
						src={'../../assets/images/photography/blacker/photography_blackerthandays_016-min.jpg'}
						height={104}
						width={185}
						alt='test'
					/>
				</div>
				<div class="column medium-4"><h2>Product</h2><h2>Engineer</h2></div>
				<div class="column medium-2">
					<Image
						src={'../../assets/images/photography/blacker/photography_blackerthandays_016-min.jpg'}
						height={104}
						width={185}
						alt='test'
					/>
					<Image
						src={'../../assets/images/photography/black/Black_001-min.jpg'}
						height={104}
						width={185}
						alt='test3'
					/>
				</div>
				<div class="column medium-2">
					<Image
						src={'../../assets/images/photography/black/Black_001-min.jpg'}
						height={104}
						width={185}
						alt='test3'
					/>
					<Image
						src={'../../assets/images/photography/blacker/photography_blackerthandays_016-min.jpg'}
						height={104}
						width={185}
						alt='test'
					/>
				</div>
			</div>
			<div class="row">
				<div class="column small-12">
					<div class="intro">
						<h1>Markus Morley</h1>
						<Image
							src={'../../assets/images/photography/blacker/photography_blackerthandays_016-min.jpg'}
							height={704}
							width={1251}
							alt='test mmo'
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
						src={'../../assets/images/photography/blacker/photography_blackerthandays_016-min.jpg'}
						height={461}
						width={820}
						alt='test2'
					/>
				</div>
			</div>
			<div class="row">
				<div class="column medium-9">
					<Image
						src={'../../assets/images/photography/black/Black_001-min.jpg'}
						height={461}
						width={820}
						alt='test2 mmmo'
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
				<div class="column medium-12">
					<Carousel.Root
						bind:currSlideIndex={currentIndexSig}
						spaceBetweenSlides={30}
						carouselWidth={1300}
						carouselHeight={500}
						class="carousel"
					>
						<div class="carousel__buttons">
							<Carousel.Prev class="carousel__prev-button">Previous image</Carousel.Prev>
							<Carousel.Next class="carousel__next-button">Next image</Carousel.Next>
						</div>
						<Carousel.View>
							<Carousel.Container class="carousel__container">
								{slideImageMetadata.map((data) => (
									<Carousel.Slide key={data.id} class="carousel__slide">
										<img
											class="carousel__img"
											width="1111"
											height="320"
											src={`${data.url}`}
											alt={data.author}
										/>
									</Carousel.Slide>
								))}
							</Carousel.Container>
						</Carousel.View>
						<div>
							<Carousel.Pagination
								class="carousel__pagination"
								renderBullet$={$((i: number) => {
									return (
										<div
											class={`carousel__pagination-bullet ${currentIndexSig.value === i ? 'carousel__pagination-underline' : ''
												}`}
											onClick$={() => (currentIndexSig.value = i)}
										>
											{i}
										</div>
									);
								})}
							/>
						</div>
					</Carousel.Root>
				</div>
				<div class="column medium-12">
					<Carousel.Root
						bind:currSlideIndex={currentIndexSig3}
						spaceBetweenSlides={30}
						carouselWidth={800}
						carouselHeight={455}
						class="carousel--primary"
					>
						<div class="carousel__controls">
							<h2>
								THERE
								IS A
								GALLERY
							</h2>
							<div class="carousel__buttons">
								<Carousel.Prev class="carousel__prev-button">Previous image</Carousel.Prev>
								<Carousel.Next class="carousel__next-button">Next image</Carousel.Next>
							</div>
						</div>
						<Carousel.View>
							<Carousel.Container class="carousel__container">
								{slideImageMetadata.map((data) => (
									<Carousel.Slide key={data.id} class="carousel__slide">
										<img
											class="carousel__img"
											width="140"
											height="320"
											src={`${data.url}`}
											alt={data.author}
										/>
									</Carousel.Slide>
								))}
							</Carousel.Container>
						</Carousel.View>

						<div>
							<Carousel.Pagination
								class="carousel__pagination"
								renderBullet$={$((i: number) => {
									return (
										<div
											class={`carousel__pagination-bullet ${currentIndexSig3.value === i ? 'carousel__pagination-underline' : ''
												}`}
											onClick$={() => (currentIndexSig3.value = i)}
										>
											{i}
										</div>
									);
								})}
							/>
						</div>
					</Carousel.Root>
				</div>
				<div class="column medium-12">
					<Carousel.Root
						bind:currSlideIndex={currentIndexSig2}
						spaceBetweenSlides={30}
						carouselWidth={300}
						carouselHeight={100}
						class="carousel"
					>
						<div class="carousel__buttons">
							<Carousel.Prev class="carousel__prev-button">Previous image</Carousel.Prev>
							<Carousel.Next class="carousel__next-button">Next image</Carousel.Next>
						</div>
						<Carousel.View>
							<Carousel.Container class="carousel__container">
								{slideImageMetadata.map((data) => (
									<Carousel.Slide key={data.id} class="carousel__slide">
										<img
											class="carousel__img"
											width="640"
											height="320"
											src={`https://picsum.photos/id/${data.id}/640/320`}
											alt={data.author}
										/>
									</Carousel.Slide>
								))}
							</Carousel.Container>
						</Carousel.View>
						<div>
							<Carousel.Pagination
								class="carousel__pagination"
								renderBullet$={$((i: number) => {
									return (
										<div
											class={`carousel__pagination-bullet ${currentIndexSig2.value === i ? 'carousel__pagination-underline' : ''
												}`}
											onClick$={() => (currentIndexSig2.value = i)}
										>
											{i}
										</div>
									);
								})}
							/>
						</div>
					</Carousel.Root>
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
