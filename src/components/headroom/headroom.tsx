import type { QwikIntrinsicElements } from '@builder.io/qwik'
import { component$, Slot, $, useStore, useOnWindow, useStyles$, useSignal } from '@builder.io/qwik'
import styles from './headroom.scss?inline'

function useScrollPosition(wrapperRef: { value: Element | undefined }) {
	const scrollPosition = useStore({ x: 0, y: 0, scrollState: 'headroom--default', isScrollUp: false, isIdle: 'false', lastScrollY: 0 })
	const scrollTicking = useSignal(false)

	const updateScrollState = $(() => {
		if (!wrapperRef.value) return

		scrollPosition.y = window.scrollY
		const scrollDiff = scrollPosition.y - scrollPosition.lastScrollY
		scrollPosition.isScrollUp = Boolean(scrollDiff < 0.1)
		const wrapperTop = wrapperRef.value.getBoundingClientRect().top

		scrollPosition.isIdle = 'false'

		if (scrollPosition?.isScrollUp) {
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

	scrollTicking.value = false


	const handleScroll = $(() => {
		if (!scrollTicking.value) {
			scrollTicking.value = true
			requestAnimationFrame(updateScrollState)
		}
	})

	useOnWindow('scroll', handleScroll)

	return scrollPosition
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
	const scrollPosition = useScrollPosition(wrapperRef)

	// const componentSize = props.bodytextSize || 'medium'
	// const componentVariant = props.bodytextVariant || 'bodytext'

	// useVisibleTask$(() => {
	// 	console.log('wrapperRef')
	// });
	return (
		<div {...props} ref={wrapperRef} class={`${mainClass} ${props.class} ${scrollPosition.scrollState}`}>
			<div class={`${mainClass}__wrapper`}>
				{props.devMode &&
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
				}
				<div>
					<button>burger</button>
				</div>
				<Slot />
			</div>
		</div>
	)
})