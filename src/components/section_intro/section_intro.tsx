import ImgTemplateIndex016 from '~/media/assets/images/photography/black/Template_index_016.jpg?jsx'
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
	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		const overlay = introRef.value!.querySelector('.intro__overlay')

		gsap
			.timeline({})
			.set(overlay, {
				transformOrigin: `${gsap.utils.random(0, 1) > 0.5 ? 0 : 100}% 100%`,
			})
			.to(overlay, {
				ease: 'power1',
				scaleX: 0,
				duration: 1.2,
			})
	})
	return (
		<>
			<div class="container_full">
				<div class="intro" ref={introRef}>
					<div class="intro__overlay"></div>
					<div class="intro__image_container">
						<div class="intro__image_wrapper">
							<ImgTemplateIndex016 class="intro__image" alt="" />
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
