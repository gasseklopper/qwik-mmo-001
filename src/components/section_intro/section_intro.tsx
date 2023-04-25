import {
	component$,
	useStyles$,
	useSignal,
	useVisibleTask$,
} from '@builder.io/qwik'
import { gsap } from 'gsap'
import styles from './section_intro.scss?inline'

export default component$(() => {
	useStyles$(styles)
	const introRef = useSignal<HTMLDivElement>()
	useVisibleTask$(() => {
		const overlay = introRef.value!.querySelector('.intro__overlay')

		gsap.timeline({})
			.set(overlay, {
				transformOrigin: `${
					gsap.utils.random(0, 1) > 0.5 ? 0 : 100
				}% 100%`,
			})
			.to(overlay, {
				ease: 'none',
				scaleX: 0,
				duration: 0.7,
			})
	})
	return (
		<>
			<div class="container_full">
				<div class="intro" ref={introRef}>
					<div class="intro__overlay"></div>
					<div class="intro__image_container">
						<div class="intro__image_wrapper">
							<img
								class="intro__image"
								src="../../assets/images/photography/intro/bg-image-02.jpg"
								alt=""
							/>
						</div>
					</div>
					<div class="intro__content">
						<div class="intro__surname">Markus</div>
						<div class="intro__name">Morley</div>
						<div class="intro__description">
							Creative Web Developer/Engineer
						</div>
					</div>
				</div>
			</div>
		</>
	)
})
