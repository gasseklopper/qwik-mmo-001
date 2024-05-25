import {
	component$,
	useStyles$,
	useVisibleTask$,
	$,
	useStore,
	eventQrl,
	event$,
	useSignal,
} from '@builder.io/qwik'
import styles from './imageGallery.scss?inline'
import Observer from 'gsap/dist/Observer'
import { gsap } from 'gsap'

const ProductCardDataMock = [
	{
		id: 1,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: [],
		buttonLabel: '1',
	},
	{
		id: 2,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '2',
	},
	{
		id: 3,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '3',
	},
	{
		id: 4,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '4',
	},
	{
		id: 5,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '5',
	},
	{
		id: 6,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '6',
	},
	{
		id: 7,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '7',
	},
	{
		id: 8,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '8',
	},
	{
		id: 9,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '9',
	},
	{
		id: 10,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '10',
	},
	{
		id: 11,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '11',
	},
	{
		id: 12,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '12',
	},
	{
		id: 13,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '13',
	},
	{
		id: 14,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '14',
	},
	{
		id: 15,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '15',
	},
	{
		id: 16,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '16',
	},
	{
		id: 17,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '17',
	},
	{
		id: 18,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '18',
	},
	{
		id: 19,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '19',
	},
	{
		id: 20,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '20',
	},
	{
		id: 21,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '21',
	},
	{
		id: 22,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '22',
	},
	{
		id: 23,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '23',
	},
	{
		id: 24,
		title: 'title--testtesttesttesttesttesttest',
		image: 'https://picsum.photos/201/300?random=',
		stars: 5,
		size: 'default',
		price: 22234,
		currency: 'AUD',
		label: 'label--test',
		category: ['category--test1', 'category--test2', 'category--test3'],
		buttonLabel: '24',
	},
]

export default component$(() => {
	const store = useStore({ cartOpen: false, cartItems: ProductCardDataMock })

	useStyles$(styles)

	useVisibleTask$(() => {
		gsap.registerPlugin(gsap)
		gsap.registerPlugin(Observer)

		const reducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches

	})

	const position = useSignal<{ x: number; y: number }>()

	const handleItemClick = $((e: any) => {
		position.value = { x: e.x, y: e.y }
		console.log('handleItemClick', e)
	})

	const slideshowPrevClick = $(() => {
		store.cartOpen = !store.cartOpen

		/** Direction constants */
		const NEXT = 1;
		const PREV = -1;

		/**
		 * Slideshow Class
		 * Manages slideshow functionality including navigation and animations.
		 * @export
		 */
		 class Slideshow {

			/**
			 * Holds references to relevant DOM elements.
			 * @type {Object}
			 */
			DOM: object = {
				el: null,            // Main slideshow container
				slides: null,        // Individual slides
				slidesInner: null    // Inner content of slides (usually images)
			};
			/**
			 * Index of the current slide being displayed.
			 * @type {number}
			 */
			current: number = 0;
			/**
			 * Total number of slides.
			 * @type {number}
			 */
			slidesTotal: number = 0;

			/**  
			 * Flag to indicate if an animation is running.
			 * @type {boolean}
			 */
			isAnimating: boolean = false;

			/**
			 * Slideshow constructor.
			 * Initializes the slideshow and sets up the DOM elements.
			 * @param {HTMLElement} DOM_el - The main element holding all the slides.
			 */
			constructor(DOM_el: Element | null) {
				// Initialize DOM elements
				this.DOM.el = DOM_el;
				this.DOM.slides = [...this.DOM.el.querySelectorAll('.slide')];
				this.DOM.slidesInner = this.DOM.slides.map((item: { querySelector: (arg0: string) => any }) => item.querySelector('.slide__img'));

				// Set initial slide as current
				this.DOM.slides[this.current].classList.add('slide--current');

				// Count total slides
				this.slidesTotal = this.DOM.slides.length;
			}

			/**
			 * Navigate to the next slide.
			 * @returns {void}
			 */
			next(): void {
				this.navigate(NEXT);
			}

			/**
			 * Navigate to the previous slide.
			 * @returns {void}
			 */
			prev(): void {
				this.navigate(PREV);
			}

			/**
			 * Navigate through slides.
			 * @param {number} direction - The direction to navigate. 1 for next and -1 for previous.
			 * @returns {boolean} - Return false if the animation is currently running.
			 */
			navigate(direction: number): boolean {
				// Check if animation is already running
				if (this.isAnimating) return false;
				this.isAnimating = true;

				// Update the current slide index based on direction
				const previous = this.current;
				this.current = direction === 1 ?
					this.current < this.slidesTotal - 1 ? ++this.current : 0 :
					this.current > 0 ? --this.current : this.slidesTotal - 1

				// Get the current and upcoming slides and their inner elements
				const currentSlide = this.DOM.slides[previous];
				const currentInner = this.DOM.slidesInner[previous];
				const upcomingSlide = this.DOM.slides[this.current];
				const upcomingInner = this.DOM.slidesInner[this.current];

				// Animation sequence using GSAP
				gsap
					.timeline({
						defaults: {
							duration: 1.5,
							ease: 'power4.inOut'
						},
						onStart: () => {
							// Add class to the upcoming slide to mark it as current
							this.DOM.slides[this.current].classList.add('slide--current');
						},
						onComplete: () => {
							// Remove class from the previous slide to unmark it as current
							this.DOM.slides[previous].classList.remove('slide--current');
							// Reset animation flag
							this.isAnimating = false;
						}
					})
					// Defining animation steps
					.addLabel('start', 0)
					.to(currentSlide, {
						yPercent: -direction * 100
					}, 'start')
					.to(currentInner, {
						yPercent: direction * 30,
					}, 'start')
					.fromTo(upcomingSlide, {
						yPercent: direction * 100
					}, {
						yPercent: 0
					}, 'start')
					.fromTo(upcomingInner, {
						yPercent: -direction * 30
						//yPercent: 0
					}, {
						yPercent: 0
					}, 'start');
			}

		}

		const slides = document.querySelector('.slides');

		const slideshow = new Slideshow(slides);

		Observer.create({
			type: 'wheel,touch,pointer',
			onDown: () => slideshow.prev(),
			onUp: () => slideshow.next(),
			// invert the mouse wheel delta
			wheelSpeed: -1,
			tolerance: 10
		});
		console.log('slideshowPrevClick')
	})

	const slideshowNextClick = $(() => {
		store.cartOpen = !store.cartOpen
		console.log('slideshowNextClick')
	})

	return (
		<>
			<div class="slides">
				<div class="slide">
					<div class="slide__img" style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg)"></div>
				</div>
				<div class="slide">
					<div class="slide__img" style="background-image:url(../../assets/images/photography/black/Template_index_02.jpg)"></div>
				</div>
				<div class="slide">
					<div class="slide__img" style="background-image:url(../../assets/images/photography/black/Template_index_03.jpg)"></div>
				</div>
				<div class="slide">
					<div class="slide__img" style="background-image:url(../../assets/images/photography/black/Template_index_04.jpg)"></div>
				</div>
				<div class="slide">
					<div class="slide__img" style="background-image:url(../../assets/images/photography/black/Template_index_05.jpg)"></div>
				</div>
			</div>
			<div class="frame">
				<nav class="slides-nav">
					<button onClick$={slideshowPrevClick} class="slides-nav__item slides-nav__item--prev">&larr;</button>
					<button onClick$={slideshowNextClick} class="slides-nav__item slides-nav__item--next">&rarr;</button>
				</nav>
			</div>
		</>
	)
})
