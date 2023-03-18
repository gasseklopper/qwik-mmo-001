import {
	component$,
	useStyles$,
	useSignal,
	useVisibleTask$,
} from '@builder.io/qwik'
import styles from './section_hero_001.css?inline'
import ScrollTrigger from 'gsap'
import { gsap } from 'gsap'

export default component$(() => {
	useStyles$(styles)
	const contentRef = useSignal<HTMLDivElement>()

	useVisibleTask$(() => {
		gsap.registerPlugin(ScrollTrigger)

		const gridItems = [
			...contentRef.value!.querySelectorAll('.grid > .grid__item'),
		]

		const scrollFn = () => {
			requestAnimationFrame(scrollFn)
		}

		requestAnimationFrame(scrollFn)

		gridItems.forEach((item) => {
			const image = item.querySelector('.grid__item-img')

			gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: 'top 400',
					end: 'bottom top',
					scrub: true,
				},
			})
				.set(image, {
					transformOrigin: `${
						gsap.utils.random(0, 1) > 0.5 ? 0 : 100
					}% 100%`,
				})
				.to(image, {
					ease: 'none',
					scale: 0,
				})
		})
	})

	return (
		<>
			<img
				src="../../assets/images/photography/black/Template_index_01.jpg"
				alt=""
			/>
			<div class="content" ref={contentRef}>
				<div class="grid">
					<div class="grid__item" style="--r: 1;--c: 4;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 1;--c: 1;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 2;--c: 8;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 2;--c: 5;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 3;--c: 3;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 4;--c: 7;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 5;--c: 8;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 6;--c: 2;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 7;--c: 3;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 8;--c: 7;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 9;--c: 1;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 9;--c: 6;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 10;--c: 4;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 11;--c: 2;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 12;--c: 6;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 13;--c: 3;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 14;--c: 5;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 15;--c: 1;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 16;--c: 2;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 17;--c: 8;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 18;--c: 3;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 19;--c: 5;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 20;--c: 4;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>

					<div class="grid__item" style="--r: 21;--c: 2;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 22;--c: 7;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 23;--c: 1;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 24;--c: 5;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 25;--c: 4;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 26;--c: 2;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 27;--c: 3;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 28;--c: 6;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 29;--c: 5;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 30;--c: 4;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 31;--c: 1;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 32;--c: 6;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 33;--c: 3;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 34;--c: 5;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 35;--c: 1;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 36;--c: 8;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 37;--c: 6;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 38;--c: 3;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 39;--c: 5;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style="--r: 40;--c: 4;">
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
				</div>
				<div class="cover">
					<h2 class="cover__title">
						Thomas Vance<sup>&reg;</sup>
					</h2>
					<h3 class="cover__subtitle">並外れたファッション</h3>
				</div>
				<div class="footer">
					<p>
						From the dawn of civilisation onwards crowds have always
						undergone the influence of illusions. It is to the
						creators of illusions that they have raised more
						temples, statues, and altars than to any other class of
						men.{' '}
					</p>
				</div>
			</div>
		</>
	)
})
