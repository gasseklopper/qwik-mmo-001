import {
	component$,
	useStyles$,
	useVisibleTask$,
	$,
	useStore,
} from '@builder.io/qwik'
import styles from './hatting.scss?inline'
import Flip from 'gsap/dist/Flip'
import { gsap } from 'gsap'

export default component$(() => {
	useStyles$(styles)
	const store = useStore({ left: true })

	useVisibleTask$(() => {
		// gsap.registerPlugin(Flip)
		// const leftHand = document.querySelector('.left')
		// const rightHand = document.querySelector('.right')
		// gsap.to('.hatting__ball', {
		// 	keyframes: {
		// 		'0%': { yPercent: 0, scaleX: 1, scaleY: 1 },
		// 		'7%': { yPercent: 5, scaleX: 0.9, scaleY: 1.1 },
		// 		'25%': { yPercent: 100, scaleX: 0.9 },
		// 		'50%': { yPercent: 100, scaleX: 1, scaleY: 1 },
		// 		'60%': { scaleX: 1.6, scaleY: 0.4 },
		// 		'65%': { yPercent: 100, scaleX: 1, scaleY: 1 },
		// 		'100%': { yPercent: 0, scaleX: 1, scaleY: 1 },
		// 		easeEach: 'sine.out',
		// 	},
		// 	duration: 0.8,
		// 	repeat: -1,
		// 	transformOrigin: 'center bottom',
		// })
		// document.body.addEventListener('click', () => {
		// 	let state = Flip.getState('.card')
		// 	deleteAndReplace()
		// 	Flip.from(state, {
		// 		duration: 1,
		// 		ease: 'sine.out',
		// 		spin: 1,
		// 		targets: '.card',
		// 	})
		// })
		// function deleteAndReplace() {
		// 	let newParent
		// 	let oldCard = document.querySelector('.card')
		// 	oldCard!.remove()
		// 	store.left ? (newParent = rightHand) : (newParent = leftHand)
		// 	newParent!.insertAdjacentHTML(
		// 		'afterbegin',
		// 		'<div class="hatting__ball card" data-flip-id="rememberMe">ball</div>'
		// 	)
		// 	store.left = !store.left
		// }
	})

	const handleButtonClick = $(() => {
		gsap.registerPlugin(Flip)

		const leftHand = document.querySelector('.hatting__left')
		const middleHand = document.querySelector('.hatting__middle')
		const rightHand = document.querySelector('.hatting__right')
		let state = Flip.getState('.card')

		deleteAndReplace()

		Flip.from(state, {
			duration: 1,
			ease: 'sine.out',
			spin: 1,
			// position: 'absolute',
			targets: '.card',
		})

		// like a lot of frameworks do 🙃
		function deleteAndReplace() {
			let newParent
			let oldCard = document.querySelector('.hatting__ball')

			oldCard!.remove()

			store.left ? (newParent = rightHand) : (newParent = leftHand)

			newParent!.insertAdjacentHTML(
				'afterbegin',
				'<div class="hatting__ball card" data-flip-id="rememberMe">ball</div>'
			)

			store.left = !store.left
		}

		function reparentCard() {
			store.left
				? rightHand!.append(...leftHand!.childNodes)
				: leftHand!.append(...rightHand!.childNodes)
			store.left = !store.left
		}
	})

	return (
		<div class="hatting">
			<div class="hatting__left">
				<div class="hatting__hatt-one">hat one</div>
				<div class="hatting__ball card" data-flip-id="rememberMe">
					ball
				</div>
			</div>
			<div class="hatting__middle">
				<div class="hatting__hatt-two">hat two</div>
			</div>
			<div class="hatting__right">
				<div class="hatting__hatt-three">hat three</div>
			</div>
			<h1>hatting</h1>
			<div class="hatting__controls">
				<button onClick$={handleButtonClick}>change ball parent</button>
			</div>
			{/* <div class="hatting">
				<div class="hatting__hatt right">
					<div class="hatting__hatt-one">hat one</div>
					<div class="hatting__ball" data-flip-id="rememberMe">
						ball
					</div>
				</div>
				<div class="hatting__hatt">
					<div class="hatting__hatt-two">hat one</div>
				</div>
				<div class="hatting__hatt left">
					<div class="hatting__hatt-three">hat three</div>
				</div>
			</div> */}
		</div>
	)
})
