import { assignInlineVars } from '@vanilla-extract/dynamic'
import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer.js'

import {
	component$,
	useStore,
	$,
	useStyles$,
	useSignal,
	useClientEffect$,
} from '@builder.io/qwik'
import css, { cssAnim, gsapAnim, bg_color, Label } from './sliderHero.css'

export const randomColor = () =>
	// an excellent optimization by @wmertens
	assignInlineVars({
		[bg_color]:
			'#' +
			(((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0'),
	})

export default component$(() => {
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
						className="slider__autoPlay-progressBar"
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
			<TestSlider2 />
		</div>
	)
})

export const TestSlider = component$((props) => {
	useClientEffect$(() => {
		gsap.registerPlugin(Observer)
		Observer.create({
			type: 'wheel,touch,pointer',
			onDown: () => console.log('test1'),
			onUp: () => console.log('test2'),
			// invert the mouse wheel delta
			wheelSpeed: -1,
			tolerance: 10,
		})
	})
	return (
		<div class="slides">
			<div class="slide">
				<div class="slide__inner">
					<div class="slide__img">
						<div
							class="slide__img-inner"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg)"
						></div>
					</div>
					<div class="slide__content">
						<div
							class="slide__content-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg)"
						></div>
						<h2>Stronger</h2>
						<p>
							You strung me along, I thought I was strong, but now
							you have pushed me under. I’ve opened my eyes, and
							counted the lies, now it is clearer to me. You are
							just a user, and an abuser, and I refuse to take it.
						</p>
					</div>
				</div>
			</div>
			<div class="slide">
				<div class="slide__inner">
					<div class="slide__content">
						<div
							class="slide__content-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_02.jpg)"
						></div>
						<h2>No choice</h2>
						<p>
							Fall into line, you will do as you’re told. No
							choice fatigue, your blood is running cold. We lose
							control, the world will fall apart.
						</p>
					</div>
					<div class="slide__img">
						<div
							class="slide__img-inner"
							style="background-image:url(../../assets/images/photography/black/Template_index_02.jpg)"
						></div>
					</div>
				</div>
			</div>
			<div class="slide">
				<div class="slide__inner">
					<div class="slide__content">
						<div
							class="slide__content-img"
							style="background-image:url(img/3.jpg)"
						></div>
						<h2>Owned no longer</h2>
						<p>
							We need a transmutation. One we all conceive. We
							need a revolution. So long as we stay free.
						</p>
					</div>
					<div class="slide__img">
						<div
							class="slide__img-inner"
							style="background-image:url(img/3.jpg)"
						></div>
					</div>
				</div>
			</div>
			<div class="slide">
				<div class="slide__inner">
					<div class="slide__content">
						<div
							class="slide__content-img"
							style="background-image:url(img/4.jpg)"
						></div>
						<h2>Assert control</h2>
						<p>
							Cornered, I’m exhausted with fear. Our love and
							compassion dissolved. And demons, have materialised
							in me. Can’t fight them, they’re taking control.
						</p>
					</div>
					<div class="slide__img">
						<div
							class="slide__img-inner"
							style="background-image:url(img/4.jpg)"
						></div>
					</div>
				</div>
			</div>
			<div class="slide">
				<div class="slide__inner">
					<div class="slide__content">
						<div
							class="slide__content-img"
							style="background-image:url(img/5.jpg)"
						></div>
						<h2>Cold &amp; detached</h2>
						<p>
							Fate has brought us here to face. Our hopes and
							dreams erased. Either kill or be killed.
						</p>
					</div>
					<div class="slide__img">
						<div
							class="slide__img-inner"
							style="background-image:url(img/5.jpg)"
						></div>
					</div>
				</div>
			</div>
		</div>
	)
})

export const TestSlider2 = component$((props) => {
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
