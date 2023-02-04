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

// export const TestSlider = component$((props) => {
export const TestSlider = component$(() => {
	useStyles$(css)

	const sliderConfig = useStore({
		indexId: 0,
		sliderItems: 2,
		width: 941,
		sliderStartWidth: 1,
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

	const images = [
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_01.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_02.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_03.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_04.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_05.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_06.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_07.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_08.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_09.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_010.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_011.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_012.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_013.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_014.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_015.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_016.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_017.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_018.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_019.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_020.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
	]

	const refSlides = useSignal<HTMLDivElement>()

	useClientEffect$(() => {
		gsap.registerPlugin(Observer)
		// total number of slides
		const totalSlides = refSlides.value!.querySelectorAll('.slide').length
		const slidesArr: Element[] = []
		refSlides.value!.querySelectorAll('.slide').forEach((slide) => {
			slidesArr.push(slide)
		})
		console.log('totalSlides', totalSlides)
		console.log('slidesArr', slidesArr)

		// current slide position
		// let current = -1

		// check if animation is in progress
		sliderConfig.isAnimating = false

		const setCurrentSlide = (position: number) => {
			if (sliderConfig.current !== -1) {
				slidesArr[sliderConfig.current].classList.remove(
					'slide--current'
				)
			}
			sliderConfig.current = position
			slidesArr[sliderConfig.current].classList.add('slide--current')
		}

		const next = () => {
			const newPosition =
				sliderConfig.current < totalSlides - 1
					? sliderConfig.current + 1
					: 0
			navigate(newPosition)
		}

		const prev = () => {
			const newPosition =
				sliderConfig.current < totalSlides - 1
					? sliderConfig.current + 1
					: 0
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
					duration: 2.6,
					ease: 'power3.inOut',
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
					[
						currentSlide.querySelector('.slide__inner'),
						upcomingSlide.querySelector('.slide__inner'),
					],
					{
						transformOrigin:
							direction === 'next' ? '50% 0%' : '50% 100%',
					},
					'start'
				)
				// Place coming slide either above (translate -100%) or below (translate 100%) and the slide__inner to the opposite translate.
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
				// 	currentSlide.querySelector('.slide'),
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
				// Upcoming slide translates to 0
				// .to(
				// 	[
				// 		upcomingSlide.querySelector('.slide'),
				// 		upcomingSlide.querySelector('.slide__inner'),
				// 	],
				// 	{
				// 		yPercent: 0,
				// 	},
				// 	'start'
				// )
				.to(
					upcomingSlide.querySelector('.slide__img-inner'),
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

			<div class="slides" ref={refSlides}>
				{images.map((item: any, itemIndex: number) => {
					return (
						<div class="slide" key={itemIndex}>
							<div class="slide__inner">
								{/* <div class="slide__content">
									<div
										class="slide__content-img"
										style={`background-image: url(${item.imgUrl});`}
									></div>
									<h2>No choice</h2>
									<p>
										Fall into line, you will do as you’re
										told. No choice fatigue, your blood is
										running cold. We lose control, the world
										will fall apart.
									</p>
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
		</>
	)
})
