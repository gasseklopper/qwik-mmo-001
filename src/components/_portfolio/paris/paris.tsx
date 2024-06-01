import { component$, useStyles$, useVisibleTask$, $, useSignal, useStore } from '@builder.io/qwik'
import styles from './paris.scss?inline'

export default component$(() => {
	useStyles$(styles)

	return (
		<section class={['test', 'paris']}>
			<GalleryStaticTwo />
			<Column1Text />
			<Column3 />
			<GalleryStatic />
		</section>
	)
})

export const GalleryStatic = component$(() => {
	return (
		<div class="row">
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6685.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6687.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6697.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6699.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6702.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6704.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6705.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6707.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6711.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6714.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6717.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6722.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6730.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6756.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6757.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6759.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6771.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6772.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6778.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6779.jpg" alt="" width={800}
					height={800} />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/paris/IMG_6781.jpg" alt="" width={800}
					height={800} />
			</div>
		</div>
	)
})

export const Column3 = component$(() => {
	return (
		<div class="row">
			<div class="column large-12">
				<img src="../../assets/images/photography/paris/IMG_6763.jpg" alt="" width={800}
					height={800} />
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
				<img src="../../assets/images/photography/paris/IMG_6763.jpg" alt="" width={800}
					height={800} />
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
				<div class="column large-3">
					<div
						class="gallery__firstImage"
						style="background-image:url(../../assets/images/photography/paris/IMG_6733.jpg);"
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
									src="../../assets/images/photography/paris/IMG_6687.jpg"
									alt=""
									width={800}
									height={800}
								/>
								<img
									class="gallery__images-slider"
									src="../../assets/images/photography/paris/IMG_6699.jpg"
									alt=""
									width={800}
									height={800}
								/>
								<img
									class="gallery__images-slider"
									src="../../assets/images/photography/paris/IMG_6697.jpg"
									alt=""
									width={800}
									height={800}
								/>
								<img
									class="gallery__images-slider"
									src="../../assets/images/photography/paris/IMG_6702.jpg"
									alt=""
									width={800}
									height={800}
								/>
								<img
									class="gallery__images-slider"
									src="../../assets/images/photography/paris/IMG_6704.jpg"
									alt=""
									width={800}
									height={800}
								/>
								<img
									class="gallery__images-slider"
									src="../../assets/images/photography/paris/IMG_6705.jpg"
									alt=""
									width={800}
									height={800}
								/>
								<img
									class="gallery__images-slider"
									src="../../assets/images/photography/paris/IMG_6707.jpg"
									alt=""
									width={800}
									height={800}
								/>
								<img
									class="gallery__images-slider"
									src="../../assets/images/photography/paris/IMG_6711.jpg"
									alt=""
									width={800}
									height={800}
								/>
								<img
									class="gallery__images-slider"
									src="../../assets/images/photography/paris/IMG_6714.jpg"
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
							style="background-image:url(../../assets/images/photography/paris/IMG_6717.jpg);"
						></div>
						<div
							class="gallery__item-img"
							style="background-image:url(../../assets/images/photography/paris/IMG_6722.jpg);"
						></div>
					</div>
				</div>
			</div>
		</section>
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
