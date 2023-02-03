import { assignInlineVars } from '@vanilla-extract/dynamic'
import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'
import {
	component$,
	useStore,
	$,
	useStyles$,
	useSignal,
	useClientEffect$,
} from '@builder.io/qwik'
import css, {
	cssAnim,
	gsapAnim,
	bg_color,
	Label,
	slides,
	slide,
	slideCurrent,
	slideInner,
	slideImage,
	slideImageInner,
} from './sliderHero.css'
import { createGlobalTheme } from '@vanilla-extract/css'

export const randomColor = () =>
	assignInlineVars({
		[bg_color]:
			'#' +
			(((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0'),
	})

export default component$(() => {
	return (
		<div>
			{/* <TestSlider1 /> */}
			<TestSlider />
			{/* <AnimatedButtons /> */}
		</div>
	)
})

export const TestSlider1 = component$(() => {
	useStyles$(css)

	const sliderConfig = useStore({
		indexId: 0,
		sliderItems: 19,
		activeAutoslide: false,
		durationAutoslide: 2000,
		width: 941,
		sliderStartWidth: 1,
	})

	const imageStore = useStore({
		id: 0,
		imgUrl: 'https://via.placeholder.com/941x557',
		imgWidth: 941,
		imgHeight: 557,
		imgAlt: 'hero image',
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

	if (images.length <= 1) {
		console.log(images.length)
	}

	const startAutoPlay = $(() => {
		if (sliderConfig.activeAutoslide === false) {
			sliderConfig.activeAutoslide = true

			const timerId = setInterval(function tick() {
				if (!sliderConfig.activeAutoslide) {
					clearInterval(timerId)
				} else {
					const timerProgressBar = setInterval(function tick2() {
						if (
							!sliderConfig.activeAutoslide ||
							sliderConfig.sliderStartWidth > 1
						) {
							clearInterval(timerProgressBar)
							sliderConfig.sliderStartWidth = 1
						} else {
							sliderConfig.sliderStartWidth++
							timerProgressBar
						}
					}, 100)
					if (sliderConfig.indexId === sliderConfig.sliderItems) {
						sliderConfig.indexId = 0
					} else {
						sliderConfig.indexId++
						sliderConfig.sliderStartWidth = 0
					}
					imageStore.imgUrl = images[sliderConfig.indexId].imgUrl
				}
			}, sliderConfig.durationAutoslide)
		}
	})

	const stopAutoPlay = $(() => {
		sliderConfig.activeAutoslide = false
	})

	const indexCheckIncrement = $(() => {
		if (sliderConfig.indexId === sliderConfig.sliderItems) {
			sliderConfig.indexId = 0
		} else {
			sliderConfig.indexId++
		}
		imageStore.imgUrl = images[sliderConfig.indexId].imgUrl
	})

	const indexCheckDecrement = $(() => {
		if (sliderConfig.indexId === 0) {
			sliderConfig.indexId = sliderConfig.sliderItems
		} else {
			sliderConfig.indexId--
		}
		imageStore.imgUrl = images[sliderConfig.indexId].imgUrl
	})

	return (
		<div>
			<h1 class="h1">qwik SLIDER</h1>
			<div class="slider">
				<div class="slider__controls">
					<div class="slider__next">
						<button onClick$={indexCheckIncrement}>next</button>
					</div>
					<div class="slider__previous">
						<button onClick$={indexCheckDecrement}>previous</button>
					</div>
					<button onClick$={startAutoPlay} id="start">
						Start
					</button>
					<button onClick$={stopAutoPlay} id="stop">
						Stop
					</button>
					<div class="slider__overview">
						{images.map((_items: any, itemIndex: number) => {
							if (itemIndex <= sliderConfig.sliderItems) {
								return (
									<button
										key={itemIndex}
										onClick$={() => (
											(sliderConfig.indexId = itemIndex),
											(imageStore.imgUrl =
												images[itemIndex].imgUrl)
										)}
										class={
											sliderConfig.indexId === itemIndex
												? 'slider__overview-item slider__overview-item--active'
												: 'slider__overview-item'
										}
									></button>
								)
							}
						})}
					</div>
					<div
						class="slider__autoPlay-progressBar"
						style={`width: ${sliderConfig.sliderStartWidth}px;`}
					></div>
				</div>
				<div class="slider__images">
					<div class="slider__item">
						<img src="" alt="" class="slider__image" />
						<img
							src={imageStore.imgUrl}
							width={imageStore.imgWidth}
							height={imageStore.imgHeight}
							alt={imageStore.imgAlt}
						/>
					</div>
				</div>
			</div>
			<TestSlider />
			<AnimatedButtons />
		</div>
	)
})

// export const TestSlider = component$((props) => {
export const TestSlider = component$(() => {
	useStyles$(css)

	const sliderConfig = useStore({
		indexId: 0,
		sliderItems: 19,
		width: 941,
		sliderStartWidth: 1,
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
	const ref = useSignal<HTMLDivElement>()
	const refNext = useSignal<HTMLDivElement>()
	const refPrev = useSignal<HTMLDivElement>()
	const refImageInner = useSignal<HTMLDivElement>()
	const refPrevImageInner = useSignal<HTMLDivElement>()
	const refNextImageInner = useSignal<HTMLDivElement>()
	const refNextInner = useSignal<HTMLDivElement>()

	useClientEffect$(() => {
		gsap.registerPlugin(Observer)

		// const setCurrentSlide = (position) => {
		const setCurrentSlide = () => {
			console.log('set current slide')
			// if (current !== -1) {
			// 	slidesArr[current].DOM.el.classList.remove('slide--current')
			// }
			// current = position
			// slidesArr[current].DOM.el.classList.add('slide--current')
			// DOM.navigationItems[current].classList.add(
			// 	'frame__nav-button--current'
			// )
		}

		// const navigate = (newPosition) => {
		const navigate = (prev: boolean) => {
			console.log('prev', prev)

			// // navigation direction
			// const direction =
			// 	current < newPosition
			// 		? current === 0 && newPosition === totalSlides - 1
			// 			? 'prev'
			// 			: 'next'
			// 		: current === totalSlides - 1 && newPosition === 0
			// 		? 'next'
			// 		: 'prev'
			// const currentSlide = slidesArr[current]
			// current = newPosition
			// const upcomingSlide = slidesArr[current]
			gsap.timeline({
				defaults: {
					duration: 1.6,
					ease: 'power3.inOut',
				},
				onComplete: () => {
					refNext.value!.classList.remove('slide--current-test')
					imageStore.id = sliderConfig.indexId
				},
			})
				.addLabel('start', 0)
				.set(
					[refImageInner.value!, refNextImageInner.value!],
					{
						transformOrigin: prev ? '50% 0%' : '50% 100%',
					},
					'start'
				)
				// Place coming slide either above (translate -100%) or below (translate 100%) and the slide__inner to the opposite translate.
				.set(
					refNext.value!,
					{
						yPercent: !prev ? -100 : 100,
					},
					'start'
				)
				.set(
					refNextInner.value!,
					{
						yPercent: !prev ? -100 : 100,
					},
					'start'
				)
				// 	// Add current class
				.add(() => {
					// imageStore.id = sliderConfig.indexId
					refNext.value!.classList.add('slide--current-test')
				}, 'start')
				// Current slide moves either up or down (translate 100% or -100%)
				.to(
					ref,
					{
						yPercent: prev ? -100 : 100,
					},
					'start'
				)
				.to(
					refNextImageInner,
					{
						scaleY: 2,
					},
					'start'
				)
				// Upcoming slide translates to 0
				.to(
					[refNext.value!, refNextInner.value!],
					{
						yPercent: 0,
					},
					'start'
				)
				.to(
					refNextImageInner,
					{
						ease: 'power2.inOut',
						startAt: { scaleY: 2 },
						scaleY: 1,
					},
					'start'
				)
		}

		const next = () => {
			// const newPosition = current < totalSlides - 1 ? current + 1 : 0
			// const newPosition = 1
			// navigate(newPosition)
			if (sliderConfig.indexId === sliderConfig.sliderItems) {
				sliderConfig.indexId = 0
			} else {
				sliderConfig.indexId++
			}
			const prev = false
			navigate(prev)
		}

		const prev = () => {
			//   const newPosition = current > 0 ? current - 1 : totalSlides - 1
			// const newPosition = 2
			// navigate(newPosition)
			if (sliderConfig.indexId === 0) {
				sliderConfig.indexId = sliderConfig.sliderItems
			} else {
				sliderConfig.indexId--
			}
			// imageStore.id = sliderConfig.indexId
			const prev = true
			navigate(prev)
		}

		const initEvents = () => {
			Observer.create({
				type: 'wheel,touch,pointer',
				onDown: () => {
					console.log('prev')
					prev()
				},
				onUp: () => {
					console.log('next')
					next()
				},
				// invert the mouse wheel delta
				wheelSpeed: -1,
				tolerance: 10,
			})
		}

		// Set current slide
		// setCurrentSlide(0)
		setCurrentSlide()

		// Initialize the events
		initEvents()
	})

	// useClientEffect$(() => {
	// 	const tl = gsap.timeline({
	// 		repeat: -1,
	// 		yoyo: true,
	// 	})
	// 	tl.to(ref.value!, {
	// 		rotate: 359,
	// 		scale: 0.5,
	// 		duration: 2,
	// 		ease: 'none',
	// 	})

	// 	return () => {
	// 		tl?.kill()
	// 	}
	// })

	return (
		<>
			<div class="slider__next">
				<button onClick$={indexCheckIncrement}>next</button>
			</div>
			<div class="slider__previous">
				<button onClick$={indexCheckDecrement}>previous</button>
			</div>
			<div class={slides}>
				{images.map((items: any, itemIndex: number) => {
					if (itemIndex <= sliderConfig.sliderItems) {
						return (
							<>
								{itemIndex === imageStore.id + 1 && (
									<div ref={refNext} class={slide}>
										<div
											ref={refNextInner}
											class={slideInner}
										>
											<div class="slide__content">
												<div
													class="slide__content-img"
													style={`background-image: url(${items.imgUrl});`}
												></div>
												<h2>No choice</h2>
												<p>
													Fall into line, you will do
													as you’re told. No choice
													fatigue, your blood is
													running cold. We lose
													control, the world will fall
													apart.
												</p>
											</div>
											<div class={slideImage}>
												<div
													ref={refNextImageInner}
													class={slideImageInner}
													style={`background-image: url(${items.imgUrl});`}
												></div>
											</div>
										</div>
									</div>
								)}
								{itemIndex === imageStore.id - 1 ||
									(itemIndex === 0 &&
										itemIndex === imageStore.id - 1 && (
											<div ref={refPrev} class={slide}>
												<div class={slideInner}>
													<div class="slide__content">
														<div
															class="slide__content-img"
															style={`background-image: url(${items.imgUrl});`}
														></div>
														<h2>No choice</h2>
														<p>
															Fall into line, you
															will do as you’re
															told. No choice
															fatigue, your blood
															is running cold. We
															lose control, the
															world will fall
															apart.
														</p>
													</div>
													<div class={slideImage}>
														<div
															ref={
																refPrevImageInner
															}
															class={
																slideImageInner
															}
															style={`background-image: url(${items.imgUrl});`}
														></div>
													</div>
												</div>
											</div>
										))}
								{itemIndex === imageStore.id && (
									<div ref={ref} class={slide}>
										<div class={slideInner}>
											<div class="slide__content">
												<div
													class="slide__content-img"
													style={`background-image: url(${items.imgUrl});`}
												></div>
												<h2>No choice</h2>
												<p>
													Fall into line, you will do
													as you’re told. No choice
													fatigue, your blood is
													running cold. We lose
													control, the world will fall
													apart.
												</p>
											</div>
											<div class={slideImage}>
												<div
													ref={refImageInner}
													class={slideImageInner}
													style={`background-image: url(${items.imgUrl});`}
												></div>
											</div>
										</div>
									</div>
								)}
							</>
						)
					}
				})}
			</div>
		</>
	)
})

export const AnimatedButtons = component$(() => {
	const ref = useSignal<HTMLDivElement>()
	useStyles$(css)

	const bgStyle = useSignal(randomColor())

	const newColor = $(() => {
		bgStyle.value = randomColor()
	})

	useClientEffect$(() => {
		const tl = gsap.timeline({
			repeat: -1,
			yoyo: true,
		})
		tl.to(ref.value!, {
			rotate: 359,
			scale: 0.5,
			duration: 2,
			ease: 'none',
		})

		return () => {
			tl?.kill()
		}
	})

	return (
		<div style={bgStyle.value} onMouseDown$={newColor}>
			<Label>CSS Animation</Label>
			<div class={cssAnim}>CLICK ME!</div>
			<Label>GSAP Animation</Label>
			<div ref={ref} class={gsapAnim}>
				CLICK ME!
			</div>
		</div>
	)
})
