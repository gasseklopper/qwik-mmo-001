import { component$, Slot, useStyles$, useSignal, useVisibleTask$, useContext, $ } from '@builder.io/qwik'
import Footer from '~/components/footer/footer'
import Header from '~/components/header/header'
import styles from '~/index.scss?inline'
import { AppContext, AppState, GlobalMenuStore, GlobalStore } from '~/globalContext'
import { Settings } from '~/components/__libary/02_Molecules/settings/component'
import { setPreference } from '~/components/theme-toggle/theme-toggle'
import Button from '~/components/__libary/01_Atoms/button/button'
import { calcWinsize } from '~/utils/utils'
import { Switcher } from '~/components/__libary/02_Molecules/switcher/switcher'
// import { themeStorageKey } from '~/'

export type CursorPreference = 'noAnimation' | 'animation'

export default component$(() => {
	useStyles$(styles)
	// CONTEXT--
	const globalMenuStore = useContext(GlobalMenuStore)
	const globalState = useContext(GlobalStore)
	const appState = useContext<AppState>(AppContext);
	console.log('settings global', globalState.settings)
	console.log('appContext layout', appState.layout)
	console.log('appContext direction', appState.direction)
	console.log('appContext stopScrollTop', appState.stopScrollTop)
	// REFS--
	const outputRef = useSignal<Element>()
	const settingsRef = useSignal<Element>()

	// STATES--
	// const isPrefersReducedMotion = useSignal()
	// const isSettingsOpen = useSignal<boolean>(globalState.settings)
	// const isCursorAnimation = useSignal<boolean>(true)

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


	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		let winsize = calcWinsize();


		const handleResize = () => {
			winsize = calcWinsize();
			console.log('winsize', winsize);
		};

		window.addEventListener('resize', handleResize);
	})

	const handleOnClick = $(() => {
		globalState.isSettingsOpen = !globalState.isSettingsOpen
		globalState.settings = globalState.isSettingsOpen
	})

	// const transitionDuration = '300ms';

	const onClick$ = $(() => {
		globalState.theme = globalState.theme === 'miami' ? 'dark' : 'miami'
		setPreference(globalState.theme)
	})

	// const onClickDirection$ = $(() => {
	// 	appState.direction = !appState.direction
	// 	// setPreference(globalState.theme)
	// })

	// const animateCursor = $(() => {
	// 	isCursorAnimation.value = !isCursorAnimation.value
	// 	console.log('cursor mode')
	// })

	// const getCursorPreference = (): CursorPreference => {
	// 	const themeStorageKey = 'theme-preference'
	// 	if (localStorage.getItem(themeStorageKey)) {
	// 		return localStorage.getItem(themeStorageKey) as CursorPreference
	// 	} else {
	// 		return window.matchMedia('(prefers-color-scheme: dark)').matches
	// 			? 'noAnimation'
	// 			: 'animation'
	// 	}
	// }

	// const checkMotionPreference = $(() => {
	// 	isPrefersReducedMotion.value = window.matchMedia("(prefers-reduced-motion: reduce)").matches
	// 	localStorage.setItem('prefers-reduced-motion', 'reduce')
	// })

	const staticProps = {
		dispatch: $((action: any) => {
			console.log('Dispatch action:', action);
		}),
		cursor1: { value: null },
		cursor2: { value: null },
		switcherDir: 'left',
		overlayType: "false"
	};

	const handleClickOutside = $((event: any) => {
		if (settingsRef.value && !settingsRef.value.contains(event.target) && globalState.isSettingsOpen &&
			globalState.settings) {
			handleOnClick();
		}
	});

	useVisibleTask$(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	})

	return (
		<>
			{/* <Cursor /> */}

			<Settings.Root
				spaceBetweenSlides={30}
				carouselWidth={500}
				carouselHeight={500}
				ref={settingsRef}
				class="settings"
				style={{
					transform: globalState.settings ? `translate3d(0px, 0px, 0px)` : `translate3d(400px, 0px, 0px)`,
					transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 100ms',
					height: `${500}px`,
					width: `${500}px`
				}}
			>
				<Settings.View>
					<Settings.Button class="settings__button">
						<button onClick$={handleOnClick}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"></path></svg></button>
					</Settings.Button>
					<Settings.Container class="settings__container">
						<h1>Settings</h1>
						<Button
							buttonLabel={`Toggle Theme`}
							buttonVariant="primary"
							buttonSize="small"
							onClick$={onClick$}
						/>
						<Switcher {...staticProps} />
					</Settings.Container>
				</Settings.View>
			</Settings.Root>
			<Header />
			<main id='main' class="test container" ref={outputRef}>
				<div class="container">
					<Slot />
				</div>
			</main>
			<Footer />
		</>
	)
})
