import { component$, useStyles$, useVisibleTask$ } from '@builder.io/qwik'
import styles from './section_hero_002.scss?inline'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import LocomotiveScroll from 'locomotive-scroll'
import { ScrollToOptions as LocoScrollToOptions } from 'locomotive-scroll' // Adjust the import based on your actual setup

export default component$(() => {
	useStyles$(styles)

	useVisibleTask$(() => {
		gsap.registerPlugin(ScrollTrigger)

		const smoothScrollElement = document.querySelector('.smooth-scroll')

		if (smoothScrollElement instanceof HTMLElement) {
			const locoScroll = new LocomotiveScroll({
				el: smoothScrollElement,
				smooth: true,
				lerp: 0.08,
			})

			locoScroll.on('scroll', ScrollTrigger.update)

			const pinType =
				smoothScrollElement.style && smoothScrollElement.style.transform
					? 'transform'
					: 'fixed'

			const options: LocoScrollToOptions =
				// Specify options like behavior, duration, disableLerp, etc.
				{ duration: 0, disableLerp: true }

			ScrollTrigger.scrollerProxy('.smooth-scroll', {
				scrollTop(value) {
					const scrollValue = (locoScroll as any).scroll.instance.scroll.y

					return arguments.length
						? locoScroll.scrollTo(value!, options)
						: scrollValue
				},
				getBoundingClientRect() {
					return {
						top: 0,
						left: 0,
						width: window.innerWidth,
						height: window.innerHeight,
					}
				},
				pinType,
			})

			const scrollFn = () => {
				requestAnimationFrame(scrollFn)
			}

			requestAnimationFrame(scrollFn)

			// const vw = (coef: number) => window.innerWidth * (coef / 100)
			const vh = (coef: number) => window.innerHeight * (coef / 100)

			const heroScroller = gsap.timeline({
				paused: true,
				scrollTrigger: {
					trigger: '.hero-header.h-1',
					scroller: '.smooth-scroll',
					pin: '.pin-wrapper',
					start: 'top 10%',
					scrub: true,
					end: `${vh(100)}`,
				},
			})

			heroScroller
				.to(
					['.hero-header.h-1', '.hero-header.h-3'],
					{
						scale: 2,
						y: vh(150),
						xPercent: -150,
					},
					'heroScroll'
				)
				.to(
					'.hero-header.h-2',
					{
						scale: 2,
						y: vh(150),
						xPercent: 150,
					},
					'heroScroll'
				)
				.to(
					'#heroImage',
					{
						scaleY: 2.5,
					},
					'heroScroll'
				)
				.to(
					'#heroImage .image',
					{
						scaleX: 2.5,
						xPercent: 50,
					},
					'heroScroll'
				)

			ScrollTrigger.addEventListener('refresh', () => {
				// Assuming locoScroll is defined somewhere
				locoScroll.update()
			})
			ScrollTrigger.refresh()
		}
	})

	function getRandomValueR() {
		return Math.floor(Math.random() * 100) + 1 // Adjust the range as needed
	}

	function getRandomValueC() {
		return Math.floor(Math.random() * 7) + 1 // Adjust the range as needed
	}

	console.log('eee', getRandomValueR())
	console.log('eee', getRandomValueC())

	return (
		<>
			<div class="smooth-scroll">
				<div class="hero-scroller">
					<div class="section">
						<div class="section-wrapper">
							<div class="content">
								<h1 class="hero-header h-1">Markus Morley</h1>
								<h1 class="hero-header h-1">Product</h1>
								<h1 class="hero-header h-2">______i___</h1>
								<h1 class="hero-header h-2">______n___</h1>
								<h1 class="hero-header h-3">______k___</h1>
							</div>
							<div class="pin-wrapper">
								<div class="image-wrapper" id="heroImage">
									<img
										class="image"
										src="../../assets/images/photography/black/Template_index_01.jpg"
										width={800}
										height={800}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="section copy">
					<div class="section-wrapper">
						<div class="content">
							<p class="h1">
								Welcome to my digital realm, where lines of code dance to create
								immersive experiences and interfaces. I am Markus Morley, a
								coder of digital dreams, a resident of the enigmatic cityscape
								of Frankfurt am Main. In this Lynchian narrative of design and
								development, I traverse the realms of UX prototypes, frontend
								components born from atomic design, and the orchestration of
								large-scale digital projects. Just like a David Lynch movie, my
								work is a blend of intrigue, complexity, and a touch of the
								surreal. Beyond the digital canvas, I am a fervent photographer,
								drawing inspiration from the chiaroscuro mastery of Caravaggio
								and the thought-provoking compositions of Jeff Wall. In the
								words of Elliott Erwitt, "To me, photography is an art of
								observation. It’s about finding something interesting in an
								ordinary place… I’ve found it has little to do with the things
								you see and everything to do with the way you see them." Join me
								on this surreal journey as I unfold my story through a resume,
								where dates and roles intertwine like the plot twists of a Lynch
								film. From creative development at hauserlacour.de to my current
								role as a Product Engineer at sinner schrader com, each chapter
								adds a layer to my narrative. Amidst the binary poetry, my
								education reveals a canvas rich in visual communication, with
								studies in photography, painting, and digital media at HFG,
								Offenbach a.M. and a journey through the lens at the Peter
								Behrens Schule in Darmstadt. Step into the mysterious world of
								exhibitions, where my visual tales find their place – from
								Matias Hidalgo's "New Talents" in Vogue.it to the echo of my
								photography in the halls of Kunstverein Lola Montez, Frankfurt.
								So, let us navigate this Lynchian landscape together, where each
								line of code and every captured image holds a story waiting to
								be told. Welcome to my portfolio – a digital odyssey through the
								surreal, the intricate, and the art of observation
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
})
