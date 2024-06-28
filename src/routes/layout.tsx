import { component$, Slot, useStyles$, useSignal, useVisibleTask$, useContext, useStore, $ } from '@builder.io/qwik'
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
import { ThemeToggle, setPreference } from '~/components/theme-toggle/theme-toggle'
import Button from '~/components/__libary/01_Atoms/button/button'


export default component$(() => {
	useStyles$(styles)
	const globalMenuStore = useContext(GlobalMenuStore)
	const state = useContext(GlobalStore)
	// auth check getUser
	const outputRef = useSignal<Element>()
	const isSettingsOpen = useSignal<boolean>(true)
	// auth check getUser
	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		if (outputRef.value) {
			console.log('menuStore.showOverlay', globalMenuStore.showOverlay)
			// disableBodyScroll(outputRef.value)
		}
		// if (outputRef.value && menuStore.showOverlay == true) {
		// 	disableBodyScroll(outputRef.value)
		// } else if (outputRef.value && menuStore.showOverlay == false) {
		// 	enableBodyScroll(outputRef.value)
		// }
	})

	const handleOnClick = $(() => {
		isSettingsOpen.value = !isSettingsOpen.value
	})

	// const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	const transitionDuration = '300ms';

	const bounceKeyframes = `
  @keyframes slideInBounce {
    0% {
      transform: translate3d(400px, 0, 0);
    }
    60% {
      transform: translate3d(-20px, 0, 0);
    }
    80% {
      transform: translate3d(10px, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slideOutBounce {
    0% {
      transform: translate3d(0, 0, 0);
    }
    20% {
      transform: translate3d(-10px, 0, 0);
    }
    40% {
      transform: translate3d(20px, 0, 0);
    }
    100% {
      transform: translate3d(400px, 0, 0);
    }
  }
`;
	const onClick$ = $(() => {
		state.theme = state.theme === 'miami' ? 'dark' : 'miami'
		setPreference(state.theme)
	})
	return (
		<>
			<Settings.Root
				// bind:currSlideIndex={1}
				spaceBetweenSlides={30}
				carouselWidth={500}
				carouselHeight={500}
				class="settings"
				style={{
					// transform: `translate3d(400px, 0px, 0px)`,
					transform: isSettingsOpen.value ? `translate3d(0px, 0px, 0px)` : `translate3d(400px, 0px, 0px)`,
					transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 100ms',
					animation: (isSettingsOpen.value ? `slideInBounce ${transitionDuration} ease-in-out 100ms` : `slideOutBounce ${transitionDuration} ease-in-out 100ms`),
					background: 'var(--surface4)',
					height: `${500}px`,
					width: `${500}px`

					// width: context.carouselWidth,
					// height: context.carouselHeight,
				}}
			>
				<Settings.View>
					<Settings.Button class="settings__button">
						<button onClick$={handleOnClick}>settings</button>
						<h2 >{isSettingsOpen.value ? 'true' : 'false'}</h2>
					</Settings.Button>
					<Settings.Container class="settings__container">
						<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, excepturi doloribus.</h1>
						{/* <ThemeToggle /> */}
						<Button
							buttonLabel={`miami mode`}
							buttonVariant="primary"
							buttonSize="small"
							onClick$={() => setPreference('miami')}
							aria-label='test'
						/>
						<Button
							buttonLabel={`dark mode`}
							buttonVariant="primary"
							buttonSize="small"
							onClick$={() => setPreference('dark')}
							aria-label='test'
						/>
						<Button
							buttonLabel={`light mode`}
							buttonVariant="primary"
							buttonSize="small"
							onClick$={() => setPreference('light')}
							aria-label='test'
						/>
						<Button
							buttonLabel={`dim mode`}
							buttonVariant="primary"
							buttonSize="small"
							onClick$={() => setPreference('dim')}
							aria-label='test'
						/>
						<Button
							buttonLabel={`sim mode`}
							buttonVariant="primary"
							buttonSize="small"
							onClick$={() => setPreference('sim')}
							aria-label='test'
						/>
						<Button
							buttonLabel={`${state.theme === 'miami' ? 'Dark' : 'Miami'} mode`}
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
