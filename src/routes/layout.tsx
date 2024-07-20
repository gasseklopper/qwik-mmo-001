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

	const onClickDirection$ = $(() => {
		appState.direction = !appState.direction
		// setPreference(globalState.theme)
	})

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

	return (
		<>
			{/* <Cursor /> */}

			<Settings.Root
				spaceBetweenSlides={30}
				carouselWidth={500}
				carouselHeight={500}
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
						<button onClick$={handleOnClick}>Settings</button>
					</Settings.Button>
					<Settings.Container class="settings__container">
						<h1>Settings</h1>
						<Button
							buttonLabel={`Toggle Theme`}
							buttonVariant="primary"
							buttonSize="small"
							onClick$={onClick$}
						/>
						<Button
							buttonLabel={`Toggle RTL/LTR`}
							buttonVariant="primary"
							buttonSize="small"
							onClick$={onClickDirection$}
						/>
						<Switcher {...staticProps} />
					</Settings.Container>
				</Settings.View>
			</Settings.Root>
			<Header />
			<main class="test" ref={outputRef}>
				<Slot />
			</main>
			<Footer />
		</>
	)
})
