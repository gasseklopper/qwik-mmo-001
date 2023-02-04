/* eslint-disable no-mixed-spaces-and-tabs */
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
				'lorem 1 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 2 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 3 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 4 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 5 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 6 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 7 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 8 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 9 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 10 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 11 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 12 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 13 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 14 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 15 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 16 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 17 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 18 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 19 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
				'lorem 20 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus rem, quas et omnis incidunt harum qui? Corporis et incidunt minima amet animi suscipit sequi ab, mollitia cum necessitatibus, maiores aperiam harum nisi quia quo, totam voluptatibus sed quidem. Id, earum magni.',
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
	})

	const imageStore = useStore({
		id: 0,
	})

	const indexCheckIncrement = $(() => {
		if (sliderConfig.indexId === sliderConfig.sliderItems) {
			sliderConfig.indexId = 0
		} else {
			sliderConfig.indexId++
		}
		imageStore.id = sliderConfig.indexId
	})

	const indexCheckDecrement = $(() => {
		if (sliderConfig.indexId === 0) {
			sliderConfig.indexId = sliderConfig.sliderItems
		} else {
			sliderConfig.indexId--
		}
		imageStore.id = sliderConfig.indexId
	})

	const refSlides = useSignal<HTMLDivElement>()

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
			console.log('next sliderConfig.current', sliderConfig.current)
			const newPosition =
				sliderConfig.current < totalSlides - 1
					? sliderConfig.current + 1
					: 0
			navigate(newPosition)
		}

		const prev = () => {
			console.log('sliderConfig.current', sliderConfig.current)
			const newPosition =
				sliderConfig.current === 0 || sliderConfig.current === -1
					? totalSlides - 1
					: sliderConfig.current - 1
			navigate(newPosition)
		}

		const navigate = (newPosition: number) => {
			console.log('newPosition', newPosition)
			sliderConfig.isAnimating = true

			const direction =
				sliderConfig.current < newPosition
					? sliderConfig.current === 0 &&
					  newPosition === totalSlides - 1
						? 'prev'
						: 'next'
					: sliderConfig.current === totalSlides - 1 &&
					  newPosition === 0
					? 'next'
					: 'prev'

			const currentSlide = slidesArr[sliderConfig.current]
			sliderConfig.current = newPosition
			const upcomingSlide = slidesArr[sliderConfig.current]

			gsap.timeline({
				defaults: {
					duration: 1.1,
				},
				onComplete: () => {
					currentSlide.classList.remove('slide--current')
					upcomingSlide.classList.remove('slide--next')
					upcomingSlide.classList.add('slide--current')
					sliderConfig.isAnimating = false
				},
			})
				.addLabel('start', 0)

				// .set(
				// 	[
				// 		currentSlide.querySelector('.slide__inner'),
				// 		upcomingSlide.querySelector('.slide__inner'),
				// 	],
				// 	{
				// 		transformOrigin:
				// 			direction === 'next' ? '50% 0%' : '50% 100%',
				// 	},
				// 	'start'
				// )
				// // Place coming slide either above (translate -100%) or below (translate 100%) and the slide__inner to the opposite translate.
				// .set(
				// 	upcomingSlide.querySelector('.slide'),
				// 	{
				// 		yPercent: direction === 'next' ? 100 : -100,
				// 	},
				// 	'start'
				// )
				// .set(
				// 	upcomingSlide.querySelector('.slide__inner'),
				// 	{
				// 		yPercent: direction === 'next' ? -100 : 100,
				// 	},
				// 	'start'
				// )
				// Add current class
				.add(() => {
					upcomingSlide.classList.add('slide--next')
				}, 'start')
				// Current slide moves either up or down (translate 100% or -100%)
				// .to(
				// 	currentSlide.querySelector('.slide__inner'),
				// 	{
				// 		yPercent: direction === 'next' ? -100 : 100,
				// 	},
				// 	'start'
				// )
				// .to(
				// 	currentSlide.querySelector('.slide__inner'),
				// 	{
				// 		scaleY: 2,
				// 	},
				// 	'start'
				// )
				// // Upcoming slide translates to 0
				// .to(
				// 	[
				// 		upcomingSlide.querySelector('.slide__inner'),
				// 		upcomingSlide.querySelector('.slide__inner'),
				// 	],
				// 	{
				// 		yPercent: 0,
				// 	},
				// 	'start'
				// )
				.to(
					upcomingSlide.querySelector('.slide__inner'),
					{
						ease: 'power2.inOut',
						startAt: { yPercent: 100 },
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
					!sliderConfig.isAnimating && prev()
				},
				onUp: () => {
					console.log('next')
					console.log(
						'sliderConfig.isAnimating',
						sliderConfig.isAnimating
					)
					!sliderConfig.isAnimating && next()
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
			<div class="slider__next">
				<button onClick$={indexCheckIncrement}>next</button>
			</div>
			<div class="slider__previous">
				<button onClick$={indexCheckDecrement}>previous</button>
			</div>
			<div class="navigation">
				{images.map((item: any, itemIndex: number) => {
					if (sliderConfig.current === 19) {
						if (itemIndex === 19) {
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
										<p>{images[0].content.headline}</p>
									</div>
								</>
							)
						}
					}
					if (itemIndex === sliderConfig.current) {
						return (
							<div class="navigation__item" key={itemIndex}>
								<p>{item.content.headline}</p>
							</div>
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
								<div class="slide__content">
									<div
										class="slide__content-img"
										style={`background-image: url(${item.imgUrl});`}
									></div>
									<h2>{item.content.headline}</h2>
									<p>{item.content.bodytext}</p>
								</div>
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
		</>
	)
})
