import {
	component$,
	useStyles$,
	useStore,
	useVisibleTask$,
	useSignal,
	$,
} from '@builder.io/qwik'
import styles from './gallery-3-Col.scss?inline'

/**
 *
 * IMAGE OBJECT
 *
		id: 1,
		imgUrl: '../../assets/images/photography/black/Template_index_01.jpg',
		imgWidth: 941,
		imgHeight: 557,
		imgAlt: 'hero image',
		content: {
			headline: 'headline 001',
			bodytext:
				'lorem 1 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
 */
export const images = [
	{
		id: 1,
		imgUrl: '../../assets/images/photography/black/Template_index_01.jpg',
		imgWidth: 941,
		imgHeight: 557,
		imgAlt: 'hero image',
		content: {
			headline: 'headline 001',
			bodytext:
				'lorem 1 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 2,
		imgUrl: '../../assets/images/photography/black/Template_index_02.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 002',
			bodytext:
				'lorem 2 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 3,
		imgUrl: '../../assets/images/photography/black/Template_index_03.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 003',
			bodytext:
				'lorem 3 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 4,
		imgUrl: '../../assets/images/photography/black/Template_index_04.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 004',
			bodytext:
				'lorem 4 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 5,
		imgUrl: '../../assets/images/photography/black/Template_index_05.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 005',
			bodytext:
				'lorem 5 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 6,
		imgUrl: '../../assets/images/photography/black/Template_index_06.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 006',
			bodytext:
				'lorem 6 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 7,
		imgUrl: '../../assets/images/photography/black/Template_index_07.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 007',
			bodytext:
				'lorem 7 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 8,
		imgUrl: '../../assets/images/photography/black/Template_index_08.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 008',
			bodytext:
				'lorem 8 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 9,
		imgUrl: '../../assets/images/photography/black/Template_index_09.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 009',
			bodytext:
				'lorem 9 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 10,
		imgUrl: '../../assets/images/photography/black/Template_index_010.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 010',
			bodytext:
				'lorem 10 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 11,
		imgUrl: '../../assets/images/photography/black/Template_index_011.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 011',
			bodytext:
				'lorem 11 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 12,
		imgUrl: '../../assets/images/photography/black/Template_index_012.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 012',
			bodytext:
				'lorem 12 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 13,
		imgUrl: '../../assets/images/photography/black/Template_index_013.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 013',
			bodytext:
				'lorem 13 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 14,
		imgUrl: '../../assets/images/photography/black/Template_index_014.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 014',
			bodytext:
				'lorem 14 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 15,
		imgUrl: '../../assets/images/photography/black/Template_index_015.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 015',
			bodytext:
				'lorem 15 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 16,
		imgUrl: '../../assets/images/photography/black/Template_index_016.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 016',
			bodytext:
				'lorem 16 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 17,
		imgUrl: '../../assets/images/photography/black/Template_index_017.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 017',
			bodytext:
				'lorem 17 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 18,
		imgUrl: '../../assets/images/photography/black/Template_index_018.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 018',
			bodytext:
				'lorem 18 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 19,
		imgUrl: '../../assets/images/photography/black/Template_index_019.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 019',
			bodytext:
				'lorem 19 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
	{
		id: 20,
		imgUrl: '../../assets/images/photography/black/Template_index_020.jpg',
		imgWidth: 941,
		imgHeight: 557,
		content: {
			headline: 'headline 020',
			bodytext:
				'lorem 20 ----- Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero quasi minus natus.',
		},
	},
]

export default component$(() => {
	useStyles$(styles)
	const outputRef = useSignal<any>()
	const imageContainerRef = useSignal<any>()
	const store = useStore({
		width: 0,
		height: 0,
		currentImage: 0,
		transformX: '1',
		transformY: '0px',
	})

	const forward = $(() => {
		if (store.currentImage === 4) {
			store.currentImage = 0
		} else {
			store.currentImage++
		}
		const images = outputRef.value!.querySelectorAll('.gallery__images-slider')
		const imageContainer = imageContainerRef.value!
		if (store.currentImage) {
			imageContainer.style.setProperty(
				'--demo-transformStart',
				`${(store.currentImage - 1) * -800}px`
			)
			imageContainer.style.setProperty(
				'--demo-transformEnd',
				`${(store.currentImage + 0) * -800}px`
			)
		}
		// console.log('imageContainer', imageContainer)
		// console.log('images', images)
		images.forEach((element: any) => {
			console.log('element', element)
			const color = 'green'
			element.style.setProperty('--demo-color-change', color)
		})
		console.log('forward')
	})

	const back = $(() => {
		console.log('store.currentImage', store.currentImage)
		if (store.currentImage === 0) {
			store.currentImage = 4
		} else {
			store.currentImage--
		}
		const images = outputRef.value!.querySelectorAll('.gallery__images-slider')
		const imageContainer = imageContainerRef.value!
		if (store.currentImage) {
			imageContainer.style.setProperty(
				'--demo-transformStart',
				`${(store.currentImage + 1) * -800}px`
			)
			imageContainer.style.setProperty(
				'--demo-transformEnd',
				`${(store.currentImage - 0) * -800}px`
			)
		}
		images.forEach((element: any) => {
			console.log('element', element)
			const color = 'blue'
			element.style.setProperty('--demo-color-change', color)
		})
		console.log('back')
	})

	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		if (outputRef.value) {
			console.log('outputRef.value', outputRef.value)
			const images = outputRef.value.querySelectorAll('.gallery__images-slider')
			console.log('test', images)
			console.log('test.length', images.length)
			const rect = outputRef.value.getBoundingClientRect()
			store.width = Math.round(rect.width)
			store.height = Math.round(rect.height)
		}
	})

	return (
		<section class={['test', 'gallery']}>
			<div>{store.currentImage}</div>
			<div class="row">
				<div class="column large-12">
					<div class={['superstroke']}></div>
				</div>
				{/* <p>
					The above red box is {store.height} pixels high and {store.width}{' '}
					pixels wide.
				</p> */}
				<div class="column large-3">
					<div
						class="gallery__firstImage"
						style="background-image:url(../../../assets/images/photography/blacker/photography_blackerthandays_001.jpg);"
					></div>
				</div>
				<div class="column large-7">
					{/* <Controls /> */}
					<div class="gallery__controls-wrapper">
						<div class="gallery__controls-slider">
							<div class="back">
								<button onClick$={back}>back</button>
							</div>
							<div class="forward">
								<button onClick$={forward}>forward</button>
							</div>
						</div>
					</div>
					<div
						class={['test', 'gallery__image-wrapper', { objectSyntax: true }]}
						style={{
							border: '1px solid red',
						}}
					>
						<div
							ref={imageContainerRef}
							class={[
								'gallery__images',
								store.currentImage === -1 ? 'transformX-1' : '',
								store.currentImage === 0 ? 'transformX0' : '',
								store.currentImage === 1 ? 'transformX1' : '',
								store.currentImage === 2 ? 'transformX2' : '',
								store.currentImage === 3 ? 'transformX3' : '',
								store.currentImage === 4 ? 'transformX4' : '',
								store.currentImage === 5 ? 'transformX5' : '',
								{ objectSyntax: true },
							]}
						>
							<div class="gallery__images-container" ref={outputRef}>
								<img
									class="gallery__images-slider"
									src="../../../assets/images/photography/blacker/photography_blackerthandays_001.jpg"
									alt=""
									width={800}
									height={800}
								/>
								<img
									class="gallery__images-slider"
									src="../../../assets/images/photography/blacker/photography_blackerthandays_002.jpg"
									alt=""
									width={800}
									height={800}
								/>
								<img
									class="gallery__images-slider"
									src="../../../assets/images/photography/blacker/photography_blackerthandays_003-min.jpg"
									alt=""
									width={800}
									height={800}
								/>
								<img
									class="gallery__images-slider"
									src="../../../assets/images/photography/blacker/photography_blackerthandays_010.jpg"
									alt=""
									width={800}
									height={800}
								/>
								<img
									class="gallery__images-slider"
									src="../../../assets/images/photography/blacker/photography_blackerthandays_004-min.jpg"
									alt=""
									width={800}
									height={800}
								/>
								<img
									class="gallery__images-slider"
									src="../../../assets/images/photography/blacker/photography_blackerthandays_011.jpg"
									alt=""
									width={800}
									height={800}
								/>
								<img
									class="gallery__images-slider"
									src="../../../assets/images/photography/blacker/photography_blackerthandays_012.jpg"
									alt=""
									width={800}
									height={800}
								/>
								<img
									class="gallery__images-slider"
									src="../../../assets/images/photography/blacker/photography_blackerthandays_014.jpg"
									alt=""
									width={800}
									height={800}
								/>
								<img
									class="gallery__images-slider"
									src="../../../assets/images/photography/blacker/photography_blackerthandays_016.jpg"
									alt=""
									width={800}
									height={800}
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="column large-2">
					<div class={['', 'gallery__rowsImage']}>
						<div
							class="gallery__item-img"
							style="background-image:url(../../../assets/images/photography/blacker/photography_blackerthandays_003-min.jpg);"
						></div>
						<div
							class="gallery__item-img"
							style="background-image:url(../../../assets/images/photography/blacker/photography_blackerthandays_005-min.jpg);"
						></div>
					</div>
				</div>
			</div>
		</section>
	)
})
