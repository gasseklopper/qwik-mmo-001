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
	const store = useStore({ ball: true, left: 2, middle: 3, right: 1 })

	const handleButtonClick = $((hatId: any) => {
		gsap.registerPlugin(Flip)

		console.log(hatId)
		const leftHand = document.querySelector('.hatting__left')
		// const middleHand = document.querySelector('.hatting__middle')
		const rightHand = document.querySelector('.hatting__right')
		const state = Flip.getState('.card')

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
			const oldCard = document.querySelector('.hatting__ball')

			oldCard!.remove()

			store.ball ? (newParent = rightHand) : (newParent = leftHand)

			newParent!.insertAdjacentHTML(
				'afterbegin',
				'<div class="hatting__ball card" data-flip-id="rememberMe">ball</div>'
			)

			store.ball = !store.ball
		}

		// function reparentCard() {
		// 	store.left
		// 		? rightHand!.append(...leftHand!.childNodes)
		// 		: leftHand!.append(...rightHand!.childNodes)
		// 	store.left = !store.left
		// }
	})

	const handleHatOneClick = $((sideId: any) => {
		gsap.registerPlugin(Flip)

		console.log(sideId)

		const leftHand = document.querySelector('.hatting__left')
		const middleHand = document.querySelector('.hatting__middle')
		const rightHand = document.querySelector('.hatting__right')
		const hatThreeState = Flip.getState('.hatting__hatt-three')
		const hatTwoState = Flip.getState('.hatting__hatt-two')
		const hatOneState = Flip.getState('.hatting__hatt-one')

		function performCommonActions(
			hatState1: Flip.FlipState,
			hatState2: Flip.FlipState,
			targets: string
		) {
			console.log('hat beige -->', store.left, store.middle, store.right);
		
			Flip.from(hatState1, {
				duration: 0.6,
				ease: 'elastic.out(1, 0.9)',
				stagger: 0.01,
				targets: targets,
			});
		
			Flip.from(hatState2, {
				duration: 0.6,
				ease: 'elastic.out(1, 0.9)',
				stagger: 0.01,
				targets: targets,
			});
		
			// Update store.left and store.middle based on the condition
		}
		
		function performCommonActionsOneTwo() {
			performCommonActions(hatOneState, hatTwoState, '.hatting__hatt-one, .hatting__hatt-two');
		}
		
		function performCommonActionsOneThree() {
			performCommonActions(hatOneState, hatThreeState, '.hatting__hatt-one, .hatting__hatt-three');
		}
		
		function performCommonActionsTwoThree() {
			performCommonActions(hatTwoState, hatThreeState, '.hatting__hatt-two, .hatting__hatt-three');
		}
		
		if (sideId === 1) {
			console.log('sideId 1');
		
			if ((store.left === 1 && store.middle === 2) || (store.left === 2 && store.middle === 1)) {
				deleteAndReplaceOneTwo();
				performCommonActionsOneTwo();
				store.left = store.left === 1 ? 2 : 1;
				store.middle = store.middle === 2 ? 1 : 2;
			} else if ((store.left === 1 && store.middle === 3) || (store.left === 3 && store.middle === 1)) {
				deleteAndReplaceOneThree();
				performCommonActionsOneThree();
				store.left = store.left === 1 ? 3 : 1;
				store.middle = store.middle === 3 ? 1 : 3;
			} else if ((store.left === 2 && store.middle === 3) || (store.left === 3 && store.middle === 2)) {
				deleteAndReplaceTwoThree();
				performCommonActionsTwoThree();
				store.left = store.left === 2 ? 3 : 2;
				store.middle = store.middle === 3 ? 2 : 3;
			}
		} else if (sideId === 3) {
			console.log('sideId 3');
		
			if ((store.right === 1 && store.middle === 2) || (store.right === 2 && store.middle === 1)) {
				deleteAndReplaceRightOneTwo();
				performCommonActionsOneTwo();
				store.right = store.right === 1 ? 2 : 1;
				store.middle = store.middle === 2 ? 1 : 2;
			} else if ((store.right === 1 && store.middle === 3) || (store.right === 3 && store.middle === 1)) {
				deleteAndReplaceRightOneThree();
				performCommonActionsOneThree();
				store.right = store.right === 1 ? 3 : 1;
				store.middle = store.middle === 3 ? 1 : 3;
			} else if ((store.right === 2 && store.middle === 3) || (store.right === 3 && store.middle === 2)) {
				deleteAndReplaceRightTwoThree();
				performCommonActionsTwoThree();
				store.right = store.right === 2 ? 3 : 2;
				store.middle = store.middle === 3 ? 2 : 3;
			}
		} else if (sideId === 2) {
			console.log('sideId 2');
		}
		

		function deleteAndReplaceRightOneTwo() {
			let newParent
			const oldCard = document.querySelector('.hatting__hatt-one')

			oldCard!.remove()

			store.right === 2 ? (newParent = rightHand) : (newParent = middleHand)

			newParent!.insertAdjacentHTML(
				'afterbegin',
				'<div class="hatting__hatt-one" data-flip-id="rememberMe1">hat one</div>'
			)

			let newParent2
			const oldCard2 = document.querySelector('.hatting__hatt-two')

			oldCard2!.remove()

			store.right === 2 ? (newParent2 = middleHand) : (newParent2 = rightHand)

			newParent2!.insertAdjacentHTML(
				'afterbegin',
				'<div class="hatting__hatt-two" data-flip-id="rememberMe2">hat two</div>'
			)
		}

		function deleteAndReplaceOneTwo() {
			let newParent
			const oldCard = document.querySelector('.hatting__hatt-one')

			oldCard!.remove()

			store.left === 2 ? (newParent = leftHand) : (newParent = middleHand)

			newParent!.insertAdjacentHTML(
				'afterbegin',
				'<div class="hatting__hatt-one" data-flip-id="rememberMe1">hat one</div>'
			)

			let newParent2
			const oldCard2 = document.querySelector('.hatting__hatt-two')

			oldCard2!.remove()

			store.left === 2 ? (newParent2 = middleHand) : (newParent2 = leftHand)

			newParent2!.insertAdjacentHTML(
				'afterbegin',
				'<div class="hatting__hatt-two" data-flip-id="rememberMe2">hat two</div>'
			)
		}

		function deleteAndReplaceRightOneThree() {
			let newParent
			const oldCard = document.querySelector('.hatting__hatt-one')

			oldCard!.remove()

			store.right === 3 ? (newParent = rightHand) : (newParent = middleHand)

			newParent!.insertAdjacentHTML(
				'afterbegin',
				'<div class="hatting__hatt-one" data-flip-id="rememberMe1">hat one</div>'
			)

			let newParent2
			const oldCard2 = document.querySelector('.hatting__hatt-three')

			oldCard2!.remove()

			store.right === 3 ? (newParent2 = middleHand) : (newParent2 = rightHand)

			newParent2!.insertAdjacentHTML(
				'afterbegin',
				'<div class="hatting__hatt-three" data-flip-id="rememberMe3">hat three</div>'
			)
		}

		function deleteAndReplaceOneThree() {
			let newParent
			const oldCard = document.querySelector('.hatting__hatt-one')

			oldCard!.remove()

			store.left === 1 ? (newParent = middleHand) : (newParent = leftHand)

			newParent!.insertAdjacentHTML(
				'afterbegin',
				'<div class="hatting__hatt-one" data-flip-id="rememberMe1">hat one</div>'
			)

			let newParent2
			const oldCard2 = document.querySelector('.hatting__hatt-three')

			oldCard2!.remove()

			store.left === 1 ? (newParent2 = leftHand) : (newParent2 = middleHand)

			newParent2!.insertAdjacentHTML(
				'afterbegin',
				'<div class="hatting__hatt-three" data-flip-id="rememberMe3">hat three</div>'
			)
		}

		function deleteAndReplaceRightTwoThree() {
			let newParent
			const oldCard = document.querySelector('.hatting__hatt-two')

			oldCard!.remove()

			store.right === 3 ? (newParent = rightHand) : (newParent = middleHand)

			newParent!.insertAdjacentHTML(
				'afterbegin',
				'<div class="hatting__hatt-two" data-flip-id="rememberMe2">hat two</div>'
			)

			let newParent2
			const oldCard2 = document.querySelector('.hatting__hatt-three')

			oldCard2!.remove()

			store.right === 3 ? (newParent2 = middleHand) : (newParent2 = rightHand)

			newParent2!.insertAdjacentHTML(
				'afterbegin',
				'<div class="hatting__hatt-three" data-flip-id="rememberMe3">hat three</div>'
			)
		}

		function deleteAndReplaceTwoThree() {
			let newParent
			const oldCard = document.querySelector('.hatting__hatt-two')

			oldCard!.remove()

			store.left === 3 ? (newParent = leftHand) : (newParent = middleHand)

			newParent!.insertAdjacentHTML(
				'afterbegin',
				'<div class="hatting__hatt-two" data-flip-id="rememberMe2">hat two</div>'
			)

			let newParent2
			const oldCard2 = document.querySelector('.hatting__hatt-three')

			oldCard2!.remove()

			store.left === 3 ? (newParent2 = middleHand) : (newParent2 = leftHand)

			newParent2!.insertAdjacentHTML(
				'afterbegin',
				'<div class="hatting__hatt-three" data-flip-id="rememberMe3">hat three</div>'
			)
		}
	})

	return (
		<div class="hatting">
			<div
				class="hatting__left"
				onClick$={() => {
					handleHatOneClick(1)
				}}
			>
				<div class="hatting__hatt-two" data-flip-id="rememberMe2">
					hat two
				</div>
				<div class="hatting__ball card" data-flip-id="rememberMe">
					ball
				</div>
			</div>
			<div
				class="hatting__middle"
				onClick$={() => {
					handleHatOneClick(2)
				}}
			>
				<div class="hatting__hatt-three" data-flip-id="rememberMe3">
					hat three
				</div>
			</div>
			<div
				class="hatting__right"
				onClick$={() => {
					handleHatOneClick(3)
				}}
			>
				<div class="hatting__hatt-one" data-flip-id="rememberMe1">
					hat one
				</div>
			</div>
			<h1>hatting</h1>
			<div class="hatting__controls">
				<button onClick$={() => handleButtonClick(3)}>
					change ball parent
				</button>
			</div>
		</div>
	)
})
