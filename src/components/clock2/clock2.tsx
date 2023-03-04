import { component$, useStyles$, useClientEffect$ } from '@builder.io/qwik'
import styles from './clock2.css?inline'

export default component$(() => {
	useStyles$(styles)

	useClientEffect$(() => {
		const track = document.getElementById('image-track')

		const handleOnDown = (e: MouseEvent | Touch) =>
			(track.dataset.mouseDownAt = e.clientX)

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const handleOnUp = (_e: MouseEvent | Touch) => {
			track!.dataset.mouseDownAt = '0'
			track!.dataset.prevPercentage = track!.dataset.percentage
		}

		const handleOnMove = (e: MouseEvent | Touch) => {
			if (track!.dataset.mouseDownAt === '0') return

			const mouseDelta =
					parseFloat(track.dataset.mouseDownAt) - e.clientX,
				maxDelta = window.innerWidth / 2

			const percentage = (mouseDelta / maxDelta) * -100,
				nextPercentageUnconstrained =
					parseFloat(track.dataset.prevPercentage) + percentage,
				nextPercentage = Math.max(
					Math.min(nextPercentageUnconstrained, 0),
					-100
				)

			track.dataset.percentage = nextPercentage

			track!.animate(
				{
					transform: `translate(${nextPercentage}%, -50%)`,
				},
				{ duration: 1200, fill: 'forwards' }
			)

			for (const image of track!.getElementsByClassName('image')) {
				image.animate(
					{
						objectPosition: `${100 + nextPercentage}% center`,
					},
					{ duration: 1200, fill: 'forwards' }
				)
			}
		}

		/* -- Had to add extra lines for touch events -- */

		window.onmousedown = (e) => handleOnDown(e)

		window.ontouchstart = (e) => handleOnDown(e.touches[0])

		window.onmouseup = (e) => handleOnUp(e)

		window.ontouchend = (e) => handleOnUp(e.touches[0])

		window.onmousemove = (e) => handleOnMove(e)

		window.ontouchmove = (e) => handleOnMove(e.touches[0])
	})

	return (
		<>
			<div
				id="image-track"
				data-mouse-down-at="0"
				data-prev-percentage="0"
			>
				<img
					class="image"
					src="../../assets/images/photography/black/Template_index_01.jpg"
					draggable="false"
				/>
				<img
					class="image"
					src="../../assets/images/photography/black/Template_index_02.jpg"
					draggable="false"
				/>
				<img
					class="image"
					src="../../assets/images/photography/black/Template_index_03.jpg"
					draggable="false"
				/>
				<img
					class="image"
					src="../../assets/images/photography/black/Template_index_04.jpg"
					draggable="false"
				/>
				<img
					class="image"
					src="../../assets/images/photography/black/Template_index_05.jpg"
					draggable="false"
				/>
				<img
					class="image"
					src="../../assets/images/photography/black/Template_index_06.jpg"
					draggable="false"
				/>
				<img
					class="image"
					src="../../assets/images/photography/black/Template_index_07.jpg"
					draggable="false"
				/>
				<img
					class="image"
					src="../../assets/images/photography/black/Template_index_08.jpg"
					draggable="false"
				/>
			</div>
		</>
	)
})
