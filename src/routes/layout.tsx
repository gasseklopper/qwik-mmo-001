import { component$, Slot, useStyles$, useSignal, useVisibleTask$, useContext, $ } from '@builder.io/qwik'
import Footer from '~/components/footer/footer'
import Header from '~/components/header/header'
import styles from '~/index.scss?inline'
// import {
// 	disableBodyScroll,
// 	enableBodyScroll,
// 	clearAllBodyScrollLocks,
// } from 'body-scroll-lock'
import { GlobalMenuStore, GlobalStore } from '~/globalContext'
import { Settings } from '~/components/__libary/02_Molecules/settings/component'
import { setPreference } from '~/components/theme-toggle/theme-toggle'
import Button from '~/components/__libary/01_Atoms/button/button'
import { calcWinsize, getMousePos } from '~/utils/utils'
import { gsap } from 'gsap'
// import { themeStorageKey } from '~/'


export default component$(() => {
	useStyles$(styles)
	// CONTEXT--
	const globalMenuStore = useContext(GlobalMenuStore)
	const globalState = useContext(GlobalStore)
	console.log('settings global', globalState.settings)
	// REFS--
	const outputRef = useSignal<Element>()
	const cursorRef = useSignal<HTMLDivElement>()
	const circleInnerRef = useSignal<SVGElement>()

	// STATES--
	const isPrefersReducedMotion = useSignal()
	const isSettingsOpen = useSignal<boolean>(globalState.settings)
	const isCursorAnimation = useSignal<boolean>(true)

	// isPrefersReducedMotion.value = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		if (outputRef.value) {
			console.log('menuStore.showOverlay', globalMenuStore.showOverlay)
			// disableBodyScroll(outputRef.value)
		}
	})

	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		// if (outputRef.value && menuStore.showOverlay == true) {
		// 	disableBodyScroll(outputRef.value)
		// } else if (outputRef.value && menuStore.showOverlay == false) {
		// 	enableBodyScroll(outputRef.value)
		// }
	})

	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		let winsize = calcWinsize();
		let mouse = { x: 0, y: 0 };

		const handleResize = () => {
			winsize = calcWinsize();
			console.log('winsize', winsize);
		};

		window.addEventListener('resize', handleResize);

		const onMouseMove = (ev: { clientX: any; clientY: any }) => {
			mouse = getMousePos(ev);
			const bounds = cursorRef.value!.getBoundingClientRect();
			const tx = mouse.x - bounds.width / 2;
			const ty = mouse.y - bounds.height / 2;

			gsap.to(cursorRef.value!, {
				duration: 0.9,
				ease: 'power3.easeOut',
				x: tx,
				y: ty,
				opacity: .4,
				onUpdate: () => {
					circleInnerRef.value!.setAttribute('r', '60');
				}
			});
		};

		window.addEventListener('mousemove', onMouseMove);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('mousemove', onMouseMove);
		};

	})

	const handleOnClick = $(() => {
		isSettingsOpen.value = !isSettingsOpen.value
		globalState.settings = isSettingsOpen.value
	})

	const transitionDuration = '300ms';

	const onClick$ = $(() => {
		globalState.theme = globalState.theme === 'miami' ? 'dark' : 'miami'
		setPreference(globalState.theme)
	})
	
	const animateCursor = $(() => {
		isCursorAnimation.value = !isCursorAnimation.value
		console.log('cursor mode')
	})

	// const checkMotionPreference = $(() => {
	// 	isPrefersReducedMotion.value = window.matchMedia("(prefers-reduced-motion: reduce)").matches
	// 	localStorage.setItem('prefers-reduced-motion', 'reduce')
	// })

	return (
		<>
			<div class="cursor" ref={cursorRef}>
				<svg class="" width="122" height="122" viewBox="0 0 124 124">
					<circle class="cursor__inner" cx="61" cy="61" r="60" stroke="var(--text1)" stroke-width="2" ref={circleInnerRef} />
				</svg>
			</div>
			<Settings.Root
				// bind:currSlideIndex={1}
				spaceBetweenSlides={30}
				carouselWidth={500}
				carouselHeight={500}
				class="settings"
				style={{
					// transform: `translate3d(400px, 0px, 0px)`,
					transform: globalState.settings ? `translate3d(0px, 0px, 0px)` : `translate3d(400px, 0px, 0px)`,
					transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 100ms',
					// animation: prefersReducedMotion ? 'none' : (isSettingsOpen.value ? `slideInBounce ${transitionDuration} ease-in-out 100ms` : `slideOutBounce ${transitionDuration} ease-in-out 100ms`),
					// animation: (globalState.settings ? `slideInBounce ${transitionDuration} ease-in-out 100ms` : `slideOutBounce ${transitionDuration} ease-in-out 100ms`),
					height: `${500}px`,
					width: `${500}px`

					// width: context.carouselWidth,
					// height: context.carouselHeight,
				}}
			>
				<Settings.View>
					<Settings.Button class="settings__button">
						<button onClick$={handleOnClick}>settings</button>
						<h3 class="settings__state-indicator">{isSettingsOpen.value ? 'true' : 'false'}</h3>
						<h3 class="settings__state-indicator">{isPrefersReducedMotion.value ? 'true' : 'false'}</h3>
						<h3 class="settings__state-indicator">{isCursorAnimation.value ? 'true' : 'false'}</h3>
					</Settings.Button>
					<Settings.Container class="settings__container">
						<h1>Settings</h1>
						<h2>animation modes</h2>
						<Button
							buttonLabel={`animated cursor`}
							buttonVariant="primary"
							buttonSize="small"
							onClick$={animateCursor}
							aria-label='test'
						/>
						{/* <button onClick$={checkMotionPreference}>Check Motion Preference</button> */}
						<h2>color modes</h2>
						{/* <ThemeToggle /> */}
						<Button
							buttonLabel={`miami`}
							buttonVariant="primary"
							buttonSize="small"
							onClick$={() => setPreference('miami')}
							aria-label='test'
						/>
						<Button
							buttonLabel={`dark`}
							buttonVariant="primary"
							buttonSize="small"
							onClick$={() => setPreference('dark')}
							aria-label='test'
						/>
						<Button
							buttonLabel={`light`}
							buttonVariant="primary"
							buttonSize="small"
							onClick$={() => setPreference('light')}
							aria-label='test'
						/>
						<Button
							buttonLabel={`dim`}
							buttonVariant="primary"
							buttonSize="small"
							onClick$={() => setPreference('dim')}
							aria-label='test'
						/>
						<Button
							buttonLabel={`sim`}
							buttonVariant="primary"
							buttonSize="small"
							onClick$={() => setPreference('sim')}
							aria-label='test'
						/>
						<Button
							buttonLabel={`lights2`}
							buttonVariant="primary"
							buttonSize="small"
							onClick$={() => setPreference('lights2')}
							aria-label='test'
						/>
						<Button
							buttonLabel={`${globalState.theme === 'miami' ? 'Dark' : 'Miami'} mode`}
							buttonVariant="primary"
							buttonSize="small"
							onClick$={onClick$}
							aria-label='test'
						/>
					</Settings.Container>
				</Settings.View>
			</Settings.Root>
			<Header />
			<main class="test 2" ref={outputRef}>
				{/* <div class="container"> */}
				<Slot />
				{/* </div> */}
			</main>
			<Footer />
		</>
	)
})
