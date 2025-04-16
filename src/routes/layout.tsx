import {
	component$,
	Slot,
	useStyles$,
	useSignal,
	useVisibleTask$,
	useContext,
} from '@builder.io/qwik'
import Footer from '~/components/footer/footer'
import Header from '~/components/header/header'
import styles from '~/index.scss?inline'
import { AppContext, GlobalMenuStore, GlobalStore } from '~/globalContext'
import { calcWinsize } from '~/utils/utils'
// import { Switcher } from '~/components/__libary/02_Molecules/switcher/switcher'
import {
	colorSchemeChangeListener,
	getColorPreference,
	getCursorPreference,
	getLayoutPreference,
	getOverlayPreference,
	setPreference,
} from '~/utils/settingsHandler'
import { Headroom } from '~/components/headroom/headroom'
// import { themeStorageKey } from '~/'

export default component$(() => {
	useStyles$(styles)
	// CONTEXT--
	const globalMenuStore = useContext(GlobalMenuStore)
	const globalState = useContext(GlobalStore)
	const appState = useContext(AppContext)
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
		}
	})

	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		let winsize = calcWinsize()

		const handleResize = () => {
			winsize = calcWinsize()
			console.log('winsize', winsize)
		}

		window.addEventListener('resize', handleResize)
	})



	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		globalState.theme = getColorPreference()
		return colorSchemeChangeListener((isDark) => {
			globalState.theme = isDark ? 'dark' : 'miami'
			setPreference(globalState.theme)
		})
	})

	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		appState.mode = getCursorPreference()
		console.log('appState.mode', appState.mode)
	})

	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		appState.layout = getLayoutPreference()
		console.log('appState.layout', appState.layout)
	})

	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		appState.overlay = getOverlayPreference()
		console.log('appState.overlay', appState.overlay)
	})

	// const transitionDuration = '300ms';


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

	// const staticProps = {
	// 	dispatch: $((action: any) => {
	// 		console.log('Dispatch action:', action);
	// 	}),
	// 	cursor1: { value: null },
	// 	cursor2: { value: null },
	// 	switcherDir: 'left',
	// 	overlayType: "false"
	// };

	return (
		<>
			<Headroom class='headroom2' devMode disable>
				<Header />
			</Headroom>

			<main id="main" class="test container" ref={outputRef}>
				<div class="container">

					<Slot />
				</div>
			</main>
			<Footer />
		</>
	)
})
