
import ImgPhotographyBlackerthandays001 from '~/media/assets/images/photography/blacker/photography_blackerthandays_001.jpg?jsx';
import { $, component$, useSignal, useStyles$, useVisibleTask$ } from '@builder.io/qwik'
import { Link, type DocumentHead } from '@builder.io/qwik-city'
import Image from '~/components/__libary/01_Atoms/image/image'
import styles from './index.scss?inline'
import { Carousel } from '~/components/__libary/02_Molecules/carousel/component';
import hasFadeAnim from '~/utils/hasFadeAnim';
import hasFadeAnim2 from '~/utils/hasFadeAnim2';
import imgAnimReveal from '~/utils/imgAnimReveal';


// import Section_hero_001 from '~/components/section_hero_001/section_hero_001'
// import Section_hero_002 from '~/components/section_hero_002/section_hero_002'
// import Section_intro from '~/components/section_intro/section_intro'

export default component$(() => {
	useStyles$(styles);
	const currentIndexSig = useSignal<number>(0);
	const currentIndexSig2 = useSignal<number>(0);
	const currentIndexSig3 = useSignal<number>(0);

	const fadeAnim1 = useSignal<any>("");
	const fadeAnim2 = useSignal<any>("");
	const fadeAnim3 = useSignal<any>("");
	const fadeAnim4 = useSignal<any>("");
	const fadeAnim5 = useSignal<any>("");
	const fadeAnim6 = useSignal<any>("");
	const fadeAnim7 = useSignal<any>("");
	const imgAnim = useSignal<any>("");
	const fadeAnimSecondary = useSignal<any>("");

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

	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		hasFadeAnim(fadeAnim1.value);
		hasFadeAnim(fadeAnim2.value);
		hasFadeAnim(fadeAnim3.value);
		hasFadeAnim(fadeAnim4.value);
		hasFadeAnim(fadeAnim5.value);
		hasFadeAnim(fadeAnim6.value);
		hasFadeAnim(fadeAnim7.value);
		imgAnimReveal(imgAnim.value);
		hasFadeAnim2(fadeAnimSecondary.value);
	})

	return (
		<>
			<section class="pd-hero" id="top">
				<div class="area">
					<div class="container g-0 line">
						<div class="row">
							<div class="col-md-6">
								<div class="left">
									<div class="pb-20">
										<h1 class="typed_title wc-color-white" style="opacity: 1; transform: translate(0px, 0px);" ref={fadeAnim1}>
											Hi 🖐 I’m <span id="typed_list"
												style="clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); height: 1px; overflow: hidden; position: absolute; white-space: nowrap; width: 1px;"><span>Michel</span><span>Designer</span></span><span
													id="typed">Markus</span><span class="typed-cursor" aria-hidden="true">|</span></h1>
									</div>
									<div class="pb-30 blade">
										<h2 class="title" data-delay=".7" style="perspective: 400px;">
											<div
												style="display: block; text-align: start; position: relative; translate: none; rotate: none; scale: none; transform-origin: 286.5px 45px; transform: translate3d(0px, 0px, 0px); opacity: 1;">
												A Digital </div>
											<div
												style="display: block; text-align: start; position: relative; translate: none; rotate: none; scale: none; transform-origin: 286.5px 45px; transform: translate3d(0px, 0px, 0px); opacity: 1;">
												<span>Product</span> </div>
											<div
												style="display: block; text-align: start; position: relative; translate: none; rotate: none; scale: none; transform-origin: 286.5px 45px; transform: translate3d(0px, 0px, 0px); opacity: 1;">
												Engineer</div>
										</h2>
									</div>
									<div
										data-fade-from="top"
										data-delay="1"
										data-ease="bounce"
										ref={fadeAnim2}
										style="opacity: 1; transform: translate(0px, 0px);">
										<Link class="btn-hover-mask" data-text="View My Works" href="/portfolio">View My Works</Link>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="right">
									<div class="text">
										<div
											data-on-scroll="0"
											data-delay="1.2"
											ref={fadeAnim3}
										>
											<img alt="Shape Image" width="37" height="37" decoding="async"
												data-nimg="1" class="mb-30"
												src={'../../assets/images/common/shape-9.png'}
												style="color: transparent;" /></div>
										<div
											class="cf-text"
											data-delay="1.2"
											ref={fadeAnim7}
										>
											<p>A Freelance UI/UX Designer and Developer <span>based in Germany</span>. I strives to
												build immersive and beautiful web applications through carefully crafted
												user-centric design.</p>
										</div>
									</div>
									<div
										class="experience" data-on-scroll="0" data-delay="2" ref={fadeAnim4}
										style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);"
									>
										<div class="social-wrapper">
											<h3 class="follow-me">Follow Me</h3>
											<ul class="social">
												<li><a target="_blank" href="https://www.facebook.com/"><svg stroke="currentColor"
													fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em"
													width="1em" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
													</path>
												</svg></a></li>
												<li><a target="_blank" href="https://twitter.com/"><svg stroke="currentColor"
													fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em"
													width="1em" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
													</path>
												</svg></a></li>
												<li><a target="_blank" href="https://www.instagram.com/"><svg stroke="currentColor"
													fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em"
													width="1em" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
													</path>
												</svg></a></li>
												<li><a target="_blank" href="https://dribbble.com/"><svg stroke="currentColor"
													fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em"
													width="1em" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z">
													</path>
												</svg></a></li>
												<li><a target="_blank" href="https://www.behance.net/"><svg stroke="currentColor"
													fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em"
													width="1em" xmlns="http://www.w3.org/2000/svg">
													<path
														d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
													</path>
												</svg></a></li>
											</ul>
										</div>
										<div class="work-process">
											<p class="image-link"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
												viewBox="0 0 384 512" height="1em" width="1em"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z">
												</path>
											</svg></p><span>work Process</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							class="hero-shape"
							data-on-scroll="0"
							data-delay="2.5"
							data-fade-from="right"
							data-fade-offset="100"
							ref={fadeAnim5}
							style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);"><img
								alt="Shape Image" width="429" height="214" decoding="async" data-nimg="1"
								src={'../../assets/images/common/shape-8.png'}
								style="color: transparent;" /></div>
						<div
							class="img_anim_reveal" ref={imgAnim}
						>
							<ImgPhotographyBlackerthandays001
								style={{ height: "auto" }}
								class="jh-img"
								alt="about-thumb"></ImgPhotographyBlackerthandays001>
						</div>
					</div>
				</div>
			</section>
			<div class="row" ref={fadeAnimSecondary}>
				<div class="column medium-2"  >
					<Image
						src={'../../assets/images/photography/blacker/photography_blackerthandays_016-min.jpg'}
						height={104}
						width={185}
						alt='test'
					/>
				</div>
				<div class="column medium-2"  >
					<Image
						src={'../../assets/images/photography/black/Black_001-min.jpg'}
						height={104}
						width={185}
						alt='test3'
					/>
				</div>
				<div class="column medium-4"><h2>Product</h2><h2></h2></div>
				<div class="column medium-2">
					<Image
						src={'../../assets/images/photography/black/Black_001-min.jpg'}
						height={104}
						width={185}
						alt='test3'
					/>
				</div>
				<div class="column medium-2">
					<Image
						src={'../../assets/images/photography/blacker/photography_blackerthandays_016-min.jpg'}
						height={104}
						width={185}
						alt='test'
					/>
				</div>

				<div class="column medium-2">
					<Image
						src={'../../assets/images/photography/blacker/photography_blackerthandays_016-min.jpg'}
						height={104}
						width={185}
						alt='test'
					/>
				</div>
				<div class="column medium-2">
					<Image
						src={'../../assets/images/photography/black/Black_001-min.jpg'}
						height={104}
						width={185}
						alt='test3'
					/>
				</div>
				<div class="column medium-4"><h2></h2><h2>Engineer</h2></div>
				<div class="column medium-2">
					<Image
						src={'../../assets/images/photography/black/Black_001-min.jpg'}
						height={104}
						width={185}
						alt='test3'
					/>
				</div>
				<div class="column medium-2">
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
					<div class="hero-shape" data-on-scroll="0" data-delay="2.5" data-fade-from="right" data-fade-offset="100"
						style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);"><img
							alt="Shape Image" width="429" height="214" decoding="async" data-nimg="1"
							src={'../../assets/images/common/shape-8.png'}
							style="color: transparent;" /></div>
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
