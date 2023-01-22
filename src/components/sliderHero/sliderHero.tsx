import { component$, useStore, $, useStyles$ } from '@builder.io/qwik'
import styles from './sliderHero.scss?inline'

export default component$(() => {
	useStyles$(styles)

	const sliderConfig = useStore({
		indexId: 0,
		sliderItems: 19,
		activeAutoslide: true,
		durationAutoslide: 2000,
	})

	const imageStore = useStore({
		id: 0,
		imgUrl: 'https://via.placeholder.com/941x557',
		imgWidth: 941,
		imgHeight: 557,
		imgAlt: 'hero image',
	})

	const images = [
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_01.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_02.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_03.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_04.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_05.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_06.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_07.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_08.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_09.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_010.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_011.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_012.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_013.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_014.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_015.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_016.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_017.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_018.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_019.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
		{
			id: 1,
			imgUrl: '../../assets/images/photography/black/Template_index_020.jpg',
			imgWidth: 941,
			imgHeight: 557,
			imgAlt: 'hero image',
		},
	]

	if (images.length <= 1) {
		console.log(images.length)
	}

	const startAutoPlay = $(() => {
		sliderConfig.activeAutoslide = true
		const timerId = setInterval(function tick() {
			if (!sliderConfig.activeAutoslide) {
				clearInterval(timerId)
			} else {
				if (sliderConfig.indexId === sliderConfig.sliderItems) {
					sliderConfig.indexId = 0
				} else {
					sliderConfig.indexId++
				}
				imageStore.imgUrl = images[sliderConfig.indexId].imgUrl
			}
		}, sliderConfig.durationAutoslide)
	})

	const stopAutoPlay = $(() => {
		sliderConfig.activeAutoslide = false
	})

	const indexCheckIncrement = $(() => {
		if (sliderConfig.indexId === sliderConfig.sliderItems) {
			sliderConfig.indexId = 0
		} else {
			sliderConfig.indexId++
		}
		imageStore.imgUrl = images[sliderConfig.indexId].imgUrl
	})

	const indexCheckDecrement = $(() => {
		if (sliderConfig.indexId === 0) {
			sliderConfig.indexId = sliderConfig.sliderItems
		} else {
			sliderConfig.indexId--
		}
		imageStore.imgUrl = images[sliderConfig.indexId].imgUrl
	})

	return (
		<div>
			<h1 class="h1">qwik SLIDER</h1>
			<div class="slider">
				<div class="slider__controls">
					<div class="slider__next">
						<button onClick$={indexCheckIncrement}>next</button>
					</div>
					<div class="slider__previous">
						<button onClick$={indexCheckDecrement}>previous</button>
					</div>
					<button onClick$={startAutoPlay} id="start">
						Start
					</button>
					<button onClick$={stopAutoPlay} id="stop">
						Stop
					</button>
					<div class="slider__overview">
						{images.map((_items: any, itemIndex: number) => {
							if (itemIndex <= sliderConfig.sliderItems) {
								return (
									<button
										key={itemIndex}
										onClick$={() => (
											(sliderConfig.indexId = itemIndex),
											(imageStore.imgUrl =
												images[itemIndex].imgUrl)
										)}
										class={
											sliderConfig.indexId === itemIndex
												? 'slider__overview-item slider__overview-item--active'
												: 'slider__overview-item'
										}
									></button>
								)
							}
						})}
					</div>
				</div>
				<div class="slider__images">
					<div class="slider__item">
						<img src="" alt="" class="slider__image" />
						<img
							src={imageStore.imgUrl}
							width={imageStore.imgWidth}
							height={imageStore.imgHeight}
							alt={imageStore.imgAlt}
						/>
					</div>
				</div>
			</div>
		</div>
	)
})
