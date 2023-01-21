import { component$, useStore, $ } from '@builder.io/qwik'

export default component$(() => {
	const store = useStore({
		indexId: 0,
		imgUrl: '../../assets/images/photography/black/Template_index_01.jpg',
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

	const indexCheckIncrement = $(() => {
		if (store.indexId === 19) {
			store.indexId = 0
		} else {
			store.indexId++
		}
		store.imgUrl = images[store.indexId].imgUrl
	})

	const indexCheckDecrement = $(() => {
		if (store.indexId === 0) {
			store.indexId = 19
		} else {
			store.indexId--
		}
		store.imgUrl = images[store.indexId].imgUrl
	})

	return (
		<div>
			<h1 class="h1">qwik SLIDER</h1>
			<div class="slider">
				<div class="controls">
					<div class="next">
						<button onClick$={indexCheckIncrement}>next</button>
					</div>
					<div class="previous">
						<button onClick$={indexCheckDecrement}>previous</button>
					</div>
				</div>
				<div class="images">
					<div class="item">
						<img src="" alt="" class="image" />
						<img
							src={store.imgUrl}
							// width={store.imgWidth}
							// height={store.imgHeight}
							alt={store.imgAlt}
						/>
					</div>
				</div>
			</div>
			<h1 class="h1">qwik SLIDER</h1>
			<div class="slider">
				<div class="controls">
					<div class="next">
						<button onClick$={indexCheckIncrement}>next</button>
					</div>
					<div class="previous">
						<button onClick$={indexCheckDecrement}>previous</button>
					</div>
				</div>
				<div class="images">
					<div class="item">
						<img src="" alt="" class="image" />
						<img
							src={store.imgUrl}
							width={store.imgWidth}
							height={store.imgHeight}
							alt={store.imgAlt}
						/>
					</div>
				</div>
			</div>
		</div>
	)
})
