import { gsap } from 'gsap/dist/gsap'
import { Observer } from 'gsap/dist/Observer'
import {
	component$,
	useStore,
	$,
	useStyles$,
	useSignal,
	useClientEffect$,
} from '@builder.io/qwik'
import css from './sliderHero.css?inline'

export default component$(() => {
	return (
		<div>
			<TestSlider />
		</div>
	)
})

export const images = [
	{
		id: 1,
		imgUrl: '../../assets/images/photography/black/Template_index_01.jpg',
		imgWidth: 941,
		imgHeight: 557,
		imgAlt: 'hero image',
		content: {
			headline: 'headline 001',
			bodytext:
				'lorem 1 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 2,
		imgUrl: '../../assets/images/photography/black/Template_index_02.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 002',
			bodytext:
				'lorem 2 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 3,
		imgUrl: '../../assets/images/photography/black/Template_index_03.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 003',
			bodytext:
				'lorem 3 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 4,
		imgUrl: '../../assets/images/photography/black/Template_index_04.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 004',
			bodytext:
				'lorem 4 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 5,
		imgUrl: '../../assets/images/photography/black/Template_index_05.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 005',
			bodytext:
				'lorem 5 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 6,
		imgUrl: '../../assets/images/photography/black/Template_index_06.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 006',
			bodytext:
				'lorem 6 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 7,
		imgUrl: '../../assets/images/photography/black/Template_index_07.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 007',
			bodytext:
				'lorem 7 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 8,
		imgUrl: '../../assets/images/photography/black/Template_index_08.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 008',
			bodytext:
				'lorem 8 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 9,
		imgUrl: '../../assets/images/photography/black/Template_index_09.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 009',
			bodytext:
				'lorem 9 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 10,
		imgUrl: '../../assets/images/photography/black/Template_index_010.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 010',
			bodytext:
				'lorem 10 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 11,
		imgUrl: '../../assets/images/photography/black/Template_index_011.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 011',
			bodytext:
				'lorem 11 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 12,
		imgUrl: '../../assets/images/photography/black/Template_index_012.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 012',
			bodytext:
				'lorem 12 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 13,
		imgUrl: '../../assets/images/photography/black/Template_index_013.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 013',
			bodytext:
				'lorem 13 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 14,
		imgUrl: '../../assets/images/photography/black/Template_index_014.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 014',
			bodytext:
				'lorem 14 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 15,
		imgUrl: '../../assets/images/photography/black/Template_index_015.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 015',
			bodytext:
				'lorem 15 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 16,
		imgUrl: '../../assets/images/photography/black/Template_index_016.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 016',
			bodytext:
				'lorem 16 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 17,
		imgUrl: '../../assets/images/photography/black/Template_index_017.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 017',
			bodytext:
				'lorem 17 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 18,
		imgUrl: '../../assets/images/photography/black/Template_index_018.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 018',
			bodytext:
				'lorem 18 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 19,
		imgUrl: '../../assets/images/photography/black/Template_index_019.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 019',
			bodytext:
				'lorem 19 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 20,
		imgUrl: '../../assets/images/photography/black/Template_index_020.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 020',
			bodytext:
				'lorem 20 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
]

export const TestSlider = component$(() => {
	useStyles$(css)

	const sliderConfig = useStore({
		indexId: 0,
		width: 941,
		isAnimating: false,
		current: -1,
		isModalOpen: true,
	})

	const refSlides = useSignal<HTMLDivElement>()
	const modal = useSignal<any>()

	const openModal = $(() => {
		modal.value.showModal()
		sliderConfig.isModalOpen = true
	})

	const closeModal = $(() => {
		modal.value.close()
		sliderConfig.isModalOpen = false
	})

	useClientEffect$(() => {
		gsap.registerPlugin(Observer)

		// total number of slides
		const totalSlides = refSlides.value!.querySelectorAll('.slide').length

		const slidesArr: Element[] = []
		refSlides.value!.querySelectorAll('.slide').forEach((slide) => {
			slidesArr.push(slide)
		})

		sliderConfig.isAnimating = false

		const setCurrentSlide = (position: number) => {
			if (sliderConfig.current !== -1) {
				slidesArr[sliderConfig.current].classList.remove(
					'slide--current'
				)
			}
			sliderConfig.current = position
		}

		const next = () => {
			console.log('next sliderConfig.current -->', sliderConfig.current)
			const newPosition =
				sliderConfig.current < totalSlides - 1
					? sliderConfig.current + 1
					: 0
			navigate(newPosition)
		}

		const prev = () => {
			console.log('sliderConfig.current -->', sliderConfig.current)
			const newPosition =
				sliderConfig.current === 0 || sliderConfig.current === -1
					? totalSlides - 1
					: sliderConfig.current - 1
			navigate(newPosition)
		}

		const navigate = (newPosition: number) => {
			console.log('newPosition', newPosition)
			sliderConfig.isAnimating = true

			const currentSlide = slidesArr[sliderConfig.current]
			sliderConfig.current = newPosition
			const upcomingSlide = slidesArr[sliderConfig.current]

			gsap.timeline({
				defaults: {
					duration: 1.8,
				},
				onComplete: () => {
					currentSlide.classList.remove('slide--current')
					upcomingSlide.classList.remove('slide--next')
					upcomingSlide.classList.add('slide--current')
					sliderConfig.isAnimating = false
				},
			})
				.addLabel('start', 0)
				.set(
					upcomingSlide.querySelector('.slide__img'),
					{
						scaleY: 0.1,
					},
					'start'
				)
				// Add current class
				.add(() => {
					upcomingSlide.classList.add('slide--next')
				}, 'start')
				.to(
					currentSlide.querySelector('.slide__img'),
					{
						scaleY: 1.7,
					},
					'start'
				)
				.to(
					upcomingSlide.querySelector('.slide__img'),
					{
						scaleY: 1,
					},
					'start'
				)
				.to(
					currentSlide.querySelector('.slide__inner'),
					{
						ease: 'power1.inOut',
						duration: 1.8,
						startAt: { yPercent: 0 },
						yPercent: -100,
					},
					'start'
				)
				.to(
					upcomingSlide.querySelector('.slide__inner'),
					{
						ease: 'power2.inOut',
						duration: 1.5,
						startAt: { yPercent: 65 },
						yPercent: 0,
					},
					'start'
				)
		}

		const initEvents = () => {
			Observer.create({
				type: 'wheel,touch,pointer',
				onDown: () => {
					console.log('prev')
					console.log(
						'sliderConfig.isAnimating',
						sliderConfig.isAnimating
					)

					!sliderConfig.isAnimating &&
						sliderConfig.isModalOpen &&
						prev()
				},
				onUp: () => {
					console.log('next')
					console.log(
						'sliderConfig.isAnimating',
						sliderConfig.isAnimating
					)
					!sliderConfig.isAnimating &&
						sliderConfig.isModalOpen &&
						next()
				},
				// invert the mouse wheel delta
				wheelSpeed: -1,
				tolerance: 10,
			})
		}

		// Set current slide
		setCurrentSlide(0)

		// Initialize the events
		initEvents()
	})

	return (
		<>
			<div class="">
				<button onClick$={openModal}>open</button>
			</div>
			<dialog ref={modal}>
				<div class="">
					<button onClick$={closeModal}>close</button>
				</div>
			</dialog>

			<div class="sliderContainer">
				<div class="navigation">
					{images.map((item: any, itemIndex: number) => {
						if (sliderConfig.current === 19) {
							if (itemIndex === 19) {
								return (
									<>
										<div
											class="navigation__item frame__nav-button"
											key={itemIndex}
										>
											<p class="h1">
												{images[19].content.headline}
											</p>
											<p class="frame__nav-button">
												{images[19].content.bodytext}
											</p>
										</div>
										<div
											class="navigation__item"
											key={itemIndex}
										>
											<p>{images[0].content.headline}</p>
										</div>
									</>
								)
							}
						}
						if (itemIndex === sliderConfig.current - 1) {
							return (
								<div class="navigation__item" key={itemIndex}>
									<p>{item.content.headline}</p>
								</div>
							)
						}
						if (sliderConfig.current === 0) {
							if (itemIndex === 0) {
								return (
									<>
										<div
											class="navigation__item"
											key={itemIndex}
										>
											<p>{images[19].content.headline}</p>
										</div>
										<div
											class="navigation__item"
											key={itemIndex}
										>
											<p class="h1 frame__nav-button">
												{images[0].content.headline}
											</p>
											<p class="frame__nav-button">
												{images[0].content.bodytext}
											</p>
										</div>
									</>
								)
							}
						}
						if (itemIndex === sliderConfig.current) {
							return (
								<>
									<div
										class="navigation__item"
										key={itemIndex}
									></div>
									<p class="h1 frame__nav-button">
										{item.content.headline}
									</p>
									<p class="frame__nav-button">
										{item.content.bodytext}
									</p>
								</>
							)
						}
						if (itemIndex === sliderConfig.current + 1) {
							return (
								<div class="navigation__item" key={itemIndex}>
									<p>{item.content.headline}</p>
								</div>
							)
						}
					})}
				</div>
				<div class="slides" ref={refSlides}>
					{images.map((item: any, itemIndex: number) => {
						return (
							<div
								class={
									itemIndex !== 0
										? 'slide'
										: 'slide slide--current '
								}
								key={itemIndex}
							>
								<div class="slide__inner">
									{/* <div class="slide__content">
											<div
												class="slide__content-img"
												style={`background-image: url(${item.imgUrl});`}
											></div>
											<h2>{item.content.headline}</h2>
											<p>{item.content.bodytext}</p>
										</div> */}
									<div class="slide__img">
										<div
											class="slide__img-inner"
											style={`background-image: url(${item.imgUrl});`}
										></div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
})
