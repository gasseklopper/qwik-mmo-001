import { component$, useStore } from '@builder.io/qwik'

export default component$(() => {
	const store = useStore({
		indexId: 1,
	})
	const indexId = 1
	const imgUrl = `../../assets/images/photography/black/Template_index_0${store.indexId}.jpg`
	const imgWidth = 941
	const imgHeight = 557
	const imgAlt = `hero image ${indexId} jpg`

	return (
		<div>
			<h1 class="h1">qwik SLIDER</h1>
			<div class="slider">
				<div class="controls">
					<div class="next">
						<button
							onClick$={() => {
								if (store.indexId === 20) {
									store.indexId = 1
								} else {
									store.indexId++
								}
							}}
						>
							next
						</button>
					</div>
					<div class="previous">
						<button
							onClick$={() => {
								if (store.indexId === 1) {
									store.indexId = 20
								} else {
									store.indexId--
								}
							}}
						>
							previous
						</button>
					</div>
				</div>
				<div class="images">
					<div class="item">
						<img src="" alt="" class="image" />
						<img
							src={imgUrl}
							width={imgWidth}
							height={imgHeight}
							alt={imgAlt}
						/>
					</div>
				</div>
			</div>
		</div>
	)
})
