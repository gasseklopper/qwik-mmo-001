import { type QwikIntrinsicElements, component$, useStyles$, useSignal, Signal, QwikJSX, $, Slot, JSXChildren, JSXNode } from '@builder.io/qwik'
import styles from './gallery.scss?inline'
import Image from '~/components/__libary/01_Atoms/image/image'

type propTypes = {
	interval: number,
	wrap: boolean,
};

type defaultProps = {
	interval: 5000,
	wrap: true,
};

export interface ImageProps {
	imageBaseClass?: string
	imageVariant?: string
	// srcList?: string[]
	interval: number
	wrap: boolean
}

type ExtendedImageElement = QwikIntrinsicElements['img'] & {
	'aria-label'?: string
	loading?: 'eager' | 'lazy' | undefined
}

export type ExtendedImageProps = ExtendedImageElement & ImageProps

const mainClass = 'image'

export default component$(({ class: className, interval, wrap, ...props }: ExtendedImageProps) => {
	useStyles$(styles)
	const componentClass = className || ''
	const componentBaseClass = props.imageBaseClass || ''

	let activeIndex = useSignal(0)
	const isPaused = useSignal(false)
	const items = props.srcList || [];
	const totalItems = items.length;

	const srcList = props.srcList || []

	console.log('test', srcList)


	const handleNext = $(() => {
		const newIndex = activeIndex.value + 1;
		activeIndex.value = wrap ? (newIndex + totalItems) % totalItems : Math.max(newIndex, 0);
	})

	const handlePrev = $(() => {
		const newIndex = activeIndex.value - 1;
		activeIndex.value = wrap ? (newIndex + totalItems) % totalItems : Math.max(newIndex, 0);
	})

	// const handlePause = () => setIsPaused(true);
	// const handleResume = () => setIsPaused(false);

	return (
		<div
			class="carousel"
			// ref={carouselRef}
			// onMouseEnter$={handlePause}
			// onMouseLeave$={handleResume}
		>
			<div class="carousel-inner">
				{items.map((item: string | number | boolean | Function | RegExp | JSXChildren[] | Promise<JSXChildren> | Signal<JSXChildren> | JSXNode<unknown> | null | undefined, index: string | number | Signal<number> | null | undefined) => (
					<div
						class={`carousel-item ${index === activeIndex ? 'active' : ''}`}
						key={index}
					>
						{item}
					</div>
				))}
				<Slot/>
			</div>
			<button class="carousel-control-prev" onClick$={handlePrev}>
				<span class="carousel-control-prev-icon" aria-hidden="true" />
				<span class="sr-only">Previous</span>
			</button>
			<button class="carousel-control-next" onClick$={handleNext}>
				<span class="carousel-control-next-icon" aria-hidden="true" />
				<span class="sr-only">Next</span>
			</button>
		</div>
	);

	// return (
	// 	<div class="gallery">
	// 		{/* {srcList.length && (
	// 			<div class="gallery__wrapper">
	// 				<div class="gallery__images-wrapper">
	// 					<div class="gallery__images">
	// 						{srcList.map((item: any, index: number) => (
	// 							<div class="gallery__image">
	// 								<Image
	// 									src={'../../assets/images/photography/black/Black_001-min.jpg'}
	// 									height={461}
	// 									width={820}
	// 									alt='test2 mmmo'
	// 								/>
	// 							</div>
	// 						))}
	// 					</div>
	// 				</div>
	// 				<div class="gallery__navigation">
	// 					<h2>
	// 						THERE
	// 						IS A
	// 						GALLERY
	// 					</h2>
	// 					<button>next</button>
	// 					<button>prev</button>
	// 				</div>
	// 			</div>
	// 		)} */}
	// 		<>
	// 			<div class="slideshow-container">

	// 				<div class="mySlides fade">
	// 					<div class="numbertext">1 / 3</div>
	// 					<img src="../../assets/images/photography/black/Black_001-min.jpg" style="width:100%" />
	// 					<div class="text">Caption Text</div>
	// 				</div>

	// 				<div class="mySlides fade">
	// 					<div class="numbertext">2 / 3</div>
	// 					<img src="../../assets/images/photography/black/Black_001-min.jpg" style="width:100%" />
	// 					<div class="text">Caption Two</div>
	// 				</div>

	// 				<div class="mySlides fade">
	// 					<div class="numbertext">3 / 3</div>
	// 					<img src="../../assets/images/photography/black/Black_001-min.jpg" style="width:100%" />
	// 					<div class="text">Caption Three</div>
	// 				</div>

	// 				<a class="prev" onclick="plusSlides(-1)">❮</a>
	// 				<a class="next" onclick="plusSlides(1)">❯</a>

	// 			</div>
	// 			<div style="text-align:center">
	// 				<span class="dot" onclick="currentSlide(1)"></span>
	// 				<span class="dot" onclick="currentSlide(2)"></span>
	// 				<span class="dot" onclick="currentSlide(3)"></span>
	// 			</div>
	// 		</>
	// 	</div>
	// )
})