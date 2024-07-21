import { $, useSignal, useVisibleTask$, type QRL, type QwikIntrinsicElements } from '@builder.io/qwik'
import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './scrollTop.scss?inline'
import { type Size, type Variant } from '~/globalContext'

// ButtonProps type
type ButtonProps = {
	buttonBaseClass?: string
	buttonLabel?: string
	buttonSize?: Size
	buttonVariant?: Variant
	buttonFit?: boolean
}

// holds available attributes of both
// native DOM elements and custom Qwik elements.
type ExtendedButtonElement = QwikIntrinsicElements['button'] & {
	'aria-label'?: string
	onClick$?: QRL<() => void>
}

// Combine QwikIntrinsicElements and ButtonProps type
export type ExtendedButtonProps = ExtendedButtonElement & ButtonProps

// Define baseClassDefault value for button component
// const mainClass = 'button'

export default component$(
	// ({ class: className, ...rest }: ExtendedButtonProps) => {
	() => {
		useStyles$(styles)
		const topScroll = useSignal<HTMLDivElement>()

		useVisibleTask$(() => {
			if (typeof window !== "undefined") {
				const scroll_top = topScroll.value;
				if (scroll_top) {
					// Function to handle scroll and set display style
					const handleScroll = () => {
						if (
							document.body.scrollTop > 590 ||
							document.documentElement.scrollTop > 590
						) {
							scroll_top.style.opacity = "1";
						} else {
							scroll_top.style.opacity = "0";
						}
					};

					// Initial check
					handleScroll();

					// Attach the scroll event listener
					window.addEventListener('scroll', handleScroll);

					// Clean up the event listener on component unmount
					return () => window.removeEventListener('scroll', handleScroll);
				}
			}
		});
		// const componentVariant = `${mainClass}--${rest.buttonVariant}` || ''
		// const componentSize = `${mainClass}--${rest.buttonSize}` || ''
		// const componentBaseClass = rest.buttonBaseClass || mainClass
		// const componentClass = className || ''
		// const componentFit = rest.buttonFit ? `${mainClass}--fit` : ''
		const goToTop = $(() => {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		});
		return (
			<button class="scroll-top"
				ref={topScroll}
				onClick$={() => goToTop()}
			>
				<svg stroke-width="0" viewBox="0 0 384 512" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
					<path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z">
					</path>
				</svg>
			</button>
		)
	}
)
