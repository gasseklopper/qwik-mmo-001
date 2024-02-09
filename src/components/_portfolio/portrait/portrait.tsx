import { component$, useSignal, useStore, useStyles$, $, useVisibleTask$ } from '@builder.io/qwik'
import styles from './portrait.scss?inline'

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

	return (
		<section class={['test', 'portrait']}>
			<GalleryStaticTwo />
			<Column1Text />
			<Column3 />
			<GalleryStatic />
		</section>
	)
})

export const ButtonBurger = component$(() => {
	return (
		<button class="header__burger">
			<div class="header__icon"></div>
		</button>
	)
})

export const GalleryStatic = component$(() => {
	return (
		<div class="row">
			<div class="column large-3">
				<img
					src="../../assets/images/photography/portrait/Portrait_001.jpg"
					alt=""
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/portrait/Portrait_002.jpg"
					alt=""
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/portrait/Portrait_003.jpg"
					alt=""
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/portrait/Portrait_004.jpg"
					alt=""
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/portrait/Portrait_005.jpg"
					alt=""
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/portrait/Portrait_006.jpg"
					alt=""
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/portrait/Portrait_019.jpg"
					alt=""
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/portrait/Portrait_020.jpg"
					alt=""
				/>
			</div>
		</div>
	)
})


export const GalleryStaticTwo = component$(() => {
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
				<div class="column large-3">
					<div
						class="gallery__firstImage"
						style="background-image:url(../../assets/images/photography/portrait/Portrait_010.jpg);"
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
									src="../../assets/images/photography/portrait/Portrait_008.jpg"
									alt=""
								/>
								<img
									class="gallery__images-slider"
									src="../../assets/images/photography/portrait/Portrait_015.jpg"
									alt=""
								/>
								<img
									class="gallery__images-slider"
									src="../../assets/images/photography/portrait/Portrait_016.jpg"
									alt=""
								/>
								<img
									class="gallery__images-slider"
									src="../../assets/images/photography/portrait/Portrait_017.jpg"
									alt=""
								/>
								<img
									class="gallery__images-slider"
									src="../../assets/images/photography/portrait/Portrait_018.jpg"
									alt=""
								/>
								<img
									class="gallery__images-slider"
									src="../../assets/images/photography/portrait/Portrait_019.jpg"
									alt=""
								/>
								<img
									class="gallery__images-slider"
									src="../../assets/images/photography/portrait/Portrait_020.jpg"
									alt=""
								/>
								<img
									class="gallery__images-slider"
									src="../../assets/images/photography/portrait/Portrait_021.jpg"
									alt=""
								/>
								<img
									class="gallery__images-slider"
									src="../../assets/images/photography/portrait/Portrait_022.jpg"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="column large-2">
					<div class={['', 'gallery__rowsImage']}>
						<div
							class="gallery__item-img"
							style="background-image:url(../../assets/images/photography/portrait/Portrait_009.jpg);"
						></div>
						<div
							class="gallery__item-img"
							style="background-image:url(../../assets/images/photography/portrait/Portrait_018.jpg);"
						></div>
					</div>
				</div>
			</div>
		</section>
	)
})


export const Column3 = component$(() => {
	return (
		<div class="row">
			<div class="column large-12">
				<img
					src="../../assets/images/photography/portrait/Portrait_011.jpg"
					alt=""
				/>
			</div>
			<div class="column large-4">
				<p>
					Photographers tend not to photograph what they can’t see, which is the
					very reason one should try to attempt it. Otherwise we’re going to go
					on forever just photographing more faces and more rooms and more
					places. Photography has to transcend description. It has to go beyond
					description to bring insight into the subject, or reveal the subject,
					not as it looks, but how does it feel. The camera would miss it all.
					There are no bad pictures; that's just how your face looks sometimes.
					A picture is a secret about a secrets, the more it tells you the less
					you know, and feel. He was right. John Loengard, the picture editor at
					Life, always used to tell me, ”If you want something to look
					interesting, don’t light all of it.Taking pictures is savoring life
					intensely, every hundredth of a second. For me, the camera is a sketch
					book, an instrument of the best intuitions.
				</p>
			</div>
			<div class="column large-4">
				<p>
					Photography is a magical kind of art that allows people to preserve
					time and moments, and to describe the world the way they see it and
					loves. For me, the subject of the picture is always more important
					than the picture. A photograph is a click away. A good photographer is
					a hundred clicks away and a better one, a thousand clicks away for
					photography love photos and we make. I am a professional photographer
					by trade and an amateur photographer by vocation. If only I had
					thought of a Kodak! I could have flashed that glimpse of the
					Under-world in a second, and examined for more best and nice
					photographers. Women that can work a camera with ease often work men
					just as effortlessly for both require the same commitment to vanity
					and manipulations.
				</p>
			</div>
			<div class="column large-4">
				<img
					src="../../assets/images/photography/portrait/Portrait_021.jpg"
					alt=""
				/>
			</div>
		</div>
	)
})

export const Column1Text = component$(() => {
	return (
		<div class="row">
			<div class="column">
				<p>
					It is a cruel, ironical art, photography. The dragging of captured
					moments into the future; moments that should have been allowed to be
					evaporate into the past; should exist only in memories, glimpsed
					through the fog of events that came after. Photographs force us to see
					people before their future weighed them down... A portrait is not a
					likeness. The moment an emotion or fact is transformed into a
					photograph it is no longer a fact but an opinion. There is no such
					thing as inaccuracy in a photograph. All photographs are accurate.
					None of them is the truth. No matter how much crap you gotta plow
					through to stay alive as a photographer, no matter how many bad
					assignments, bad days, bad clients, snotty subjects, obnoxious
					handlers, wigged-out art directors, technical disasters, failures of
					the mind, body, and will, all the shouldas, couldas, and wouldas that
					befuddle our brains and creep into our dreams, always remember to make
					room to shoot what you love. It’s the only way to keep your heart
					beating as a photographer. For me the noise of Time is not sad: I love
					bells, clocks, watches — and I recall that at first photographic
					implements were related to techniques of cabinetmaking and the
					machinery of precision: cameras, in short, were clocks for seeing, and
					perhaps in me someone very old still hears in the photographic
					mechanism the living sound of the wood. I don't just look at the thing
					itself or at the reality itself; I look around the edges for those
					little askew moments-kind of like what makes up our lives-those
					slightly awkward, lovely moments.
				</p>
			</div>
		</div>
	)
})
