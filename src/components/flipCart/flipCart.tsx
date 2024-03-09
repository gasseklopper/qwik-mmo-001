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
import styles from './flipCart.scss?inline'
import Flip from 'gsap/dist/Flip'
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
		gsap.registerPlugin(Flip)

		const reducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches


		const pageItems = document.querySelector('.content .items')

		const cart = document.querySelector('.cart')
		const cartBtnWrapper = cart!.querySelector('.btn-cart-wrapper')
		const cartBtn = cart!.querySelector('.btn-cart')
		const cartCount = cart!.querySelector('.count')
		const cartItems = cart!.querySelector('.items')
		const cartEmptyText = cart!.querySelector('.empty-text')

		console.log('test items', cartItems)

		const setInCartClass = (
			item: {
				parentNode: { classList: { toggle: (arg0: string, arg1: any) => any } }
			},
			inCart: boolean
		) => item.parentNode.classList.toggle('in-cart', inCart)

		const setActiveItemClass = (
			item: {
				parentNode: { classList: { toggle: (arg0: string, arg1: any) => any } }
			},
			isActive: boolean
		) => item.parentNode.classList.toggle('active', isActive)

		const updateCart = (item: any) => {
			const hasItems = cartItems!.children.length > 0

			cartCount!.innerText = hasItems ? cartItems!.children.length : null
			cartEmptyText!.hidden = hasItems
			cartItems!.hidden = !hasItems
		}

		const cartBtnAnimation = () => {
			gsap
				.timeline()
				.fromTo(
					cartBtn,
					{ yPercent: 0, rotation: 0 },
					{
						duration: 0.75,
						ease: 'power4.out',
						yPercent: 20,
						rotation: -5,
						clearProps: 'all',
					}
				)
				.fromTo(
					cartCount,
					{ rotation: 0 },
					{
						duration: 1.3,
						ease: 'power4.out',
						rotation: 720,
						y: -30,
					},
					'<'
				)
				.to(
					cartCount,
					{
						duration: 0.8,
						ease: 'elastic.out(1, 0.3)',
						y: 0,
						clearProps: 'all',
					},
					'-=0.6'
				)
		}

		const addToCart = (item: any) => {
			const state = Flip.getState(item)

			setInCartClass(item, true)
			setActiveItemClass(item, true)
			cartBtnWrapper!.appendChild(item)

			Flip.from(state, {
				duration: reducedMotion ? 0 : 0.5,
				ease: 'back.in(0.8)',
				onComplete: () => {
					setActiveItemClass(item, false)
					cartItems!.appendChild(item)

					gsap.fromTo(
						item,
						{ y: -12 },
						{
							y: 0,
							duration: reducedMotion ? 0 : 1,
							ease: 'elastic.out(1, 0.3)',
						}
					)

					updateCart(item)
					!reducedMotion && cartBtnAnimation()
				},
			})
		}

		const removeFromCart = (item: any) => {
			let state = Flip.getState(item)

			document
				.querySelector(`[data-product-id="${item.dataset.productId}"]`)!
				.appendChild(item)
			updateCart(item)
			setActiveItemClass(item, true)

			Flip.from(state, {
				duration: reducedMotion ? 0 : 0.5,
				ease: 'power4.out',
				onComplete: () => {
					setActiveItemClass(item, false)
					setInCartClass(item, false)
				},
			})
		}

		pageItems!.addEventListener('click', (e) => {
			if (e.target!.classList.contains('btn-item')) {
				addToCart(e.target)
			}
		})

		cartItems!.addEventListener('click', (e) => {
			if (e.target!.classList.contains('btn-item')) {
				removeFromCart(e.target)
			}
		})
	})

	const position = useSignal<{ x: number; y: number }>()

	const handleItemClick = $((e: any) => {
		position.value = { x: e.x, y: e.y }
		console.log('handleItemClick', e)
	})

	const handleCartClick = $(() => {
		store.cartOpen = !store.cartOpen
	})

	return (
		<>
			<main class="content">
				<ul class="items">
					{store.cartItems.map((story: any, index: number) => (
						<li class="item" data-product-id={story.id} key={index}>
							<button
								class="btn-item"
								data-product-id={story.id}
								onClick$={(event) => handleItemClick(event)}
							>
								<img src={`${story.image}${index + 1}`} alt="" />
								{story.id}
							</button>
						</li>
					))}
				</ul>
			</main>
			<aside class={`cart ${store.cartOpen ? 'open' : ''}`}>
				<div class="btn-cart-wrapper ">
					<button class={`btn-cart`} onClick$={handleCartClick}>
						<svg
							class="icon"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="192"
							height="192"
							fill="var(--surface4)"
							viewBox="0 0 256 256"
						>
							<rect width="256" height="256" fill="var(--surface4)"></rect>
							<path
								d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16"
								fill="none"
								stroke="var(--text1)"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="16"
							></path>
							<circle
								cx="80"
								cy="204"
								r="20"
								fill="none"
								stroke="var(--text1)"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="16"
							></circle>
							<circle
								cx="184"
								cy="204"
								r="20"
								fill="none"
								stroke="var(--text1)"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="16"
							></circle>
							<path
								d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48"
								fill="none"
								stroke="var(--text1)"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="16"
							></path>
						</svg>
					</button>
					<div class="count"></div>
					<p>
						Clicked at: ({position.value?.x}, {position.value?.y})
					</p>
				</div>
				<div class="items-wrapper">
					<div class="empty-text">Your cart is empty</div>
					<div class="items"></div>
				</div>
			</aside>
		</>
	)
})
