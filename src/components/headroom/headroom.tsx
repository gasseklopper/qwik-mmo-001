import type { QwikIntrinsicElements } from '@builder.io/qwik'
import { component$, Slot, $, useStore, useSignal, useVisibleTask$, useStyles$ } from '@builder.io/qwik'
import styles from './headroom.scss?inline'

function useScrollPosition(wrapperRef: { value: Element | undefined }) {
	const scrollPosition = useStore({
		x: 0,
		y: 0,
		scrollState: 'headroom--default',
		isScrollUp: false,
		isIdle: 'false',
		lastScrollY: 0
	})
	const scrollTicking = useSignal(false)

	const updateScrollState = $(() => {
		if (!wrapperRef.value) return

		scrollPosition.y = window.scrollY
		const scrollDiff = scrollPosition.y - scrollPosition.lastScrollY
		scrollPosition.isScrollUp = Boolean(scrollDiff < 0.1)
		const wrapperTop = wrapperRef.value.getBoundingClientRect().top
		scrollPosition.isIdle = 'false'

		if (scrollPosition.isScrollUp) {
			scrollPosition.scrollState = 'headroom--scrollFade'
		}

		if (scrollPosition.y <= 0) {
			scrollPosition.scrollState = 'headroom--unpinned'
		} else if (scrollDiff > 0 && wrapperTop <= 0) {
			scrollPosition.scrollState = 'headroom--pinned'
		} else if (scrollDiff < 0 && wrapperTop > 0) {
			scrollPosition.scrollState = 'headroom--unpinned'
		}

		setTimeout(() => {
			scrollPosition.lastScrollY = scrollPosition.y
		}, 200)

		setTimeout(() => {
			scrollPosition.isIdle = 'true'
		}, 1200)
	})

	const handleScroll = $(() => {
		if (!scrollTicking.value) {
			scrollTicking.value = true
			requestAnimationFrame(() => {
				updateScrollState()
				scrollTicking.value = false // reset tick so the next scroll can be handled
			})
		}
	})

	return { scrollPosition, handleScroll }
}

export interface HeadroomProps {
	bodytextSize?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
	bodytextVariant?: 'bodytext' | 'subline' | 'eyebrow'
	devMode?: boolean
	disable?: boolean
	scrollState?: string
}

export type ExtendedDivlement = QwikIntrinsicElements['div'] & {
	'aria-label'?: string
}

export type ExtendedHeadroomProps = ExtendedDivlement & HeadroomProps

export const Headroom = component$((props: ExtendedHeadroomProps) => {
	useStyles$(styles)
	const mainClass = 'headroom'
	const wrapperRef = useSignal<Element>()

	// Initialize scroll behavior
	const { scrollPosition, handleScroll } = useScrollPosition(wrapperRef)

	// Attach the scroll listener only after the component is visible on the client.
	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		// Now, we're on the client and wrapperRef should be set.
		window.addEventListener('scroll', handleScroll)
		// Cleanup on unmount.
		return () => window.removeEventListener('scroll', handleScroll)
	})


	// Optionally, alter the component's output when in dev mode
	const devModeBanner = mainClass ? (
		<div>
			isScrollUp=({String(scrollPosition.isScrollUp)})
			<br></br>
			scrollState={String(scrollPosition.scrollState)}
			<br></br>
			ScrollPoisitionY={String(scrollPosition.y)}
			<br></br>
			isIdle={String(scrollPosition.isIdle)}
			<br></br>
			lastScrollY={String(scrollPosition.lastScrollY)}
			<br></br>
			{/* ({String(scrollPosition.isScrollUp)}
						{scrollPosition.y}
						{scrollPosition.scrollState}) */}
		</div>
	) : null

	return (
		<div {...props} ref={wrapperRef} class={`${mainClass} ${props.class ?? ''} ${scrollPosition.scrollState}`}>
			<div class={`${mainClass}__wrapper`}>
				<div>
					{devModeBanner}
					<Slot />
				</div>
			</div>
		</div>
	)
})
