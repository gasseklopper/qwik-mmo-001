import { useSignal, useVisibleTask$, type QRL, type QwikIntrinsicElements } from '@builder.io/qwik'
import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './cursor.scss?inline'
import { type Size, type Variant } from '~/globalContext'
import { gsap } from 'gsap'
import { getMousePos } from '~/utils/utils'

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
		const cursorRef = useSignal<HTMLDivElement>()
		const circleInnerRef = useSignal<SVGElement>()


		useVisibleTask$(() => {
			let mouse = { x: 0, y: 0 };

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
				window.removeEventListener('mousemove', onMouseMove);
			};

		})
		// const componentVariant = `${mainClass}--${rest.buttonVariant}` || ''
		// const componentSize = `${mainClass}--${rest.buttonSize}` || ''
		// const componentBaseClass = rest.buttonBaseClass || mainClass
		// const componentClass = className || ''
		// const componentFit = rest.buttonFit ? `${mainClass}--fit` : ''

		return (
			<div class="cursor" ref={cursorRef}>
				<svg width="122" height="122" viewBox="0 0 124 124">
					<circle class="cursor__inner" cx="61" cy="61" r="60" stroke="var(--text1)" stroke-width="2" ref={circleInnerRef} />
				</svg>
			</div>
		)
	}
)
