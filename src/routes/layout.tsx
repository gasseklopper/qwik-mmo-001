import { component$, Slot, useStyles$, useSignal, useVisibleTask$, useContext, $, PropFunction, useContextProvider, useStore } from '@builder.io/qwik'
import Footer from '~/components/footer/footer'
import Header from '~/components/header/header'
import styles from '~/index.scss?inline'
import { AppContext, AppState, GlobalMenuStore, GlobalStore } from '~/globalContext'
import { Settings } from '~/components/__libary/02_Molecules/settings/component'
import { setPreference } from '~/components/theme-toggle/theme-toggle'
import Button from '~/components/__libary/01_Atoms/button/button'
import { calcWinsize, getMousePos } from '~/utils/utils'
import { gsap } from 'gsap'
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

	const onClickDirection$ = $(() => {
		appState.direction = !appState.direction
		// setPreference(globalState.theme)
	})

	const animateCursor = $(() => {
		isCursorAnimation.value = !isCursorAnimation.value
		console.log('cursor mode')
	})

	const getCursorPreference = (): CursorPreference => {
		const themeStorageKey = 'theme-preference'
		if (localStorage.getItem(themeStorageKey)) {
			return localStorage.getItem(themeStorageKey) as CursorPreference
		} else {
			return window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'noAnimation'
				: 'animation'
		}
	}

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
	};

	return (
		<>
			<div class="cursor" ref={cursorRef}>
				<svg width="122" height="122" viewBox="0 0 124 124">
					<circle class="cursor__inner" cx="61" cy="61" r="60" stroke="var(--text1)" stroke-width="2" ref={circleInnerRef} />
				</svg>
			</div>
			<Switcher {...staticProps} />
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
