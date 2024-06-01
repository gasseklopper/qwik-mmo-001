import {
	component$,
	useStyles$,
	useSignal,
	useVisibleTask$,
} from '@builder.io/qwik'
import styles from './section_hero_001.scss?inline'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
// import Image from '../__libary/atoms/image/image'

export default component$(() => {
	useStyles$(styles)
	const contentRef = useSignal<HTMLDivElement>()
	// eslint-disable-next-line qwik/no-use-visible-task
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

			gsap
				.timeline({
					scrollTrigger: {
						trigger: item,
						start: `top ${gsap.utils.random(100, 700)}`,
						end: 'bottom top',
						scrub: true,
					},
				})
				.set(image, {
					transformOrigin: `2% ${gsap.utils.random(0, 1) > 0.5 ? 0 : 1}%`,
				})
				.to(image, {
					ease: 'back',
					scale: 3,
				})

		})
	})

	function getRandomValueR() {
		return Math.floor(Math.random() * 100) + 1; // Adjust the range as needed
	}
	function getRandomValueC() {
		return Math.floor(Math.random() * 7) + 1; // Adjust the range as needed
	}
	console.log("eee", getRandomValueR())
	console.log("eee", getRandomValueC())

	return (
		<>
			<div class="content" ref={contentRef}>
				<div class="grid">
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r: ${getRandomValueR()}; --c: ${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_02.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_03.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_04.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_05.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_06.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_07.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_08.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_09.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_010.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_011.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_012.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_013.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_014.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_015.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_016.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_017.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_018.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_019.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_020.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_02.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_03.jpg);"
						></div>
					</div>

					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_04.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_05.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_06.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_07.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_08.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_09.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_010.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_011.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_012.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_013.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_014.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_015.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_016.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_017.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_018.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_019.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_020.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_01.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_02.jpg);"
						></div>
					</div>
					<div class="grid__item" style={`--r:${getRandomValueR()}; --c:${getRandomValueC()}`}>
						<div
							class="grid__item-img"
							style="background-image:url(../../assets/images/photography/black/Template_index_03.jpg);"
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
						From the dawn of civilisation onwards crowds have always undergone
						the influence of illusions. It is to the creators of illusions that
						they have raised more temples, statues, and altars than to any other
						class of men.{' '}
					</p>
				</div>
			</div>
		</>
	)
})
