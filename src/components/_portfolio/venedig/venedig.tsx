import { $, component$, useSignal, useStyles$ } from '@builder.io/qwik'
import styles from './venedig.scss?inline'
import { Carousel } from '~/components/__libary/02_Molecules/carousel/component'

export default component$(() => {
	useStyles$(styles)
	const currentIndexSig = useSignal<number>(0);

	const slideImageMetadata = [
		{
			id: '10',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/venedig/IMG_1523.jpg',
			download_url: 'https://picsum.photos/id/10/2500/1667',
		},
		{
			id: '11',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/venedig/IMG_1840.jpg',
			download_url: 'https://picsum.photos/id/11/2500/1667',
		},
		{
			id: '12',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/venedig/IMG_1841.jpg',
			download_url: 'https://picsum.photos/id/12/2500/1667',
		},
		{
			id: '13',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/venedig/IMG_1846.jpg',
			download_url: 'https://picsum.photos/id/13/2500/1667',
		},
		{
			id: '14',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/venedig/IMG_1854.jpg',
			download_url: 'https://picsum.photos/id/14/2500/1667',
		},
		{
			id: '15',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/venedig/IMG_1857.jpg',
			download_url: 'https://picsum.photos/id/15/2500/1667',
		},
		{
			id: '16',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/venedig/IMG_1858.jpg',
			download_url: 'https://picsum.photos/id/16/2500/1667',
		},
		{
			id: '17',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/venedig/IMG_1859.jpg',
			download_url: 'https://picsum.photos/id/17/2500/1667',
		},
		{
			id: '18',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/venedig/IMG_1862.jpg',
			download_url: 'https://picsum.photos/id/18/2500/1667',
		},
		{
			id: '19',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/venedig/IMG_1869.jpg',
			download_url: 'https://picsum.photos/id/19/2500/1667',
		},
		{
			id: '19',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/venedig/IMG_1882.jpg',
			download_url: 'https://picsum.photos/id/19/2500/1667',
		},
		{
			id: '19',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/venedig/IMG_1903.jpg',
			download_url: 'https://picsum.photos/id/19/2500/1667',
		},
		{
			id: '19',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/venedig/IMG_1905.jpg',
			download_url: 'https://picsum.photos/id/19/2500/1667',
		},
		{
			id: '19',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/venedig/IMG_1939.jpg',
			download_url: 'https://picsum.photos/id/19/2500/1667',
		},
		{
			id: '19',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/venedig/IMG_2039.jpg',
			download_url: 'https://picsum.photos/id/19/2500/1667',
		},
		{
			id: '19',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/venedig/IMG_2063.jpg',
			download_url: 'https://picsum.photos/id/19/2500/1667',
		},
		{
			id: '19',
			author: 'Paul Jarvis',
			width: 2500,
			height: 1667,
			url: '../../assets/images/photography/venedig/IMG_2094.jpg',
			download_url: 'https://picsum.photos/id/19/2500/1667',
		},
	];

	return (
		<section class={['test', 'venedig']}>
			<div class="row">
				<div class="column medium-12">
					<Carousel.Root
						bind:currSlideIndex={currentIndexSig}
						spaceBetweenSlides={30}
						carouselWidth={600}
						carouselHeight={900}
						class="carousel--primary"
					>
						<div class="carousel__controls">
							<h2>
								THERE
								IS A
								GALLERY
							</h2>
							<div class="carousel__buttons">
								<Carousel.Prev class="carousel__prev-button">Previous image</Carousel.Prev>
								<Carousel.Next class="carousel__next-button">Next image</Carousel.Next>
							</div>
						</div>
						<Carousel.View>
							<Carousel.Container class="carousel__container">
								{slideImageMetadata.map((data) => (
									<Carousel.Slide key={data.id} class="carousel__slide">
										<img
											class="carousel__img"
											width="1"
											height="320"
											src={`${data.url}`}
											alt={data.author}
										/>
									</Carousel.Slide>
								))}
							</Carousel.Container>
						</Carousel.View>
						<div>
							<Carousel.Pagination
								class="carousel__pagination"
								renderBullet$={$((i: number) => {
									return (
										<div
											class={`carousel__pagination-bullet ${currentIndexSig.value === i ? 'carousel__pagination-underline' : ''
												}`}
											onClick$={() => (currentIndexSig.value = i)}
										>
											{i}
										</div>
									);
								})}
							/>
						</div>
					</Carousel.Root>
				</div>
			</div>
			<Column3 />
			<GalleryStatic />
			<Column4 />
		</section>
	)
})

export const GalleryStatic = component$(() => {
	return (
		<div class="row">
			<div class="column large-3">
				<img
					src="../../assets/images/photography/venedig/IMG_2063.jpg"
					alt=""
					width={800}
					height={800}
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/venedig/IMG_1905.jpg"
					alt=""
					width={800}
					height={800}
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/venedig/IMG_1903.jpg"
					alt=""
					width={800}
					height={800}
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/venedig/IMG_1869.jpg"
					alt=""
					width={800}
					height={800}
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/venedig/IMG_2039.jpg"
					alt=""
					width={800}
					height={800}
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/venedig/IMG_1939.jpg"
					alt=""
					width={800}
					height={800}
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/venedig/IMG_1523.jpg"
					alt=""
					width={800}
					height={800}
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/venedig/IMG_2094.jpg"
					alt=""
					width={800}
					height={800}
				/>
			</div>
		</div>
	)
})

export const Column3 = component$(() => {
	return (
		<div class="row">
			<div class="column large-4">
				<p>
					The images presented offer a striking and intimate exploration of Venice, shedding light on the city's more neglected and somber aspects. Each frame encapsulates a fragment of Venice's worn beauty, where decay and history blend seamlessly into a melancholic tapestry.
					The first image on the left captures a dilapidated doorway, its bricks exposed and eroded by time. The weathered door, with its peeling paint and rough texture, stands as a silent witness to the countless stories that have passed through its threshold. This image speaks to the passage of time and the inevitability of decay, inviting the viewer to ponder the lives that once animated this now quiet space.
				</p>
			</div>
			<div class="column large-4">
				<p>
					Moving to the center-left, the second image reveals a window with colorful garments hanging to dry. The juxtaposition of vibrant fabrics against the aged, crumbling wall creates a poignant contrast. This scene evokes a sense of resilience and continuity, suggesting that life persists amidst the decay. The bright colors inject a note of hope and human presence, adding a layer of warmth to the otherwise muted tones of the surroundings.
					The third image, positioned center-right, focuses on another window, this one tightly shuttered. The closed window, with its cracked façade, seems to hold secrets and memories within. It exudes a sense of abandonment and isolation, echoing the silence that often accompanies forgotten places. The viewer is left to wonder about the lives concealed behind those shutters, and the events that led to their closure.
				</p>
			</div>
			<div class="column large-4">
				<p>
					Finally, the image on the far right presents a moody scene of water meeting stone. The reflection of the murky canal water against the weathered stone structures hints at Venice's intricate relationship with its aquatic environment. The play of light and shadow on the water's surface adds a sense of depth and mystery, symbolizing the city’s hidden depths and the layers of history submerged within its canals.
					Together, these images form a compelling narrative of Venice's quieter, less glamorous side. They highlight the beauty in decay, the persistence of life amidst hardship, and the profound connection between the city's architecture and its watery foundation. Through these photographs, Venice is portrayed not just as a picturesque tourist destination, but as a living, breathing entity marked by the passage of time and the endurance of its people.
				</p>
			</div>
		</div>
	)
})

export const Column4 = component$(() => {
	return (
		<div class="row">
			<div class="column large-4">
				<p>
					The additional images in this series delve further into the essence of Venice's waterside, presenting compositions that underscore the city's intimate and often uneasy relationship with water. These photographs, imbued with both aesthetic and emotional depth, highlight the stark beauty and subtle melancholy that permeate Venice's aquatic landscape.
					In the first image, we encounter an intriguing composition where the stark contrast between the dark, tangled roots and the pale, smooth surface below creates a visual tension. The roots, seemingly suspended in mid-air, evoke a sense of mystery and organic chaos. This image invites contemplation on the hidden life beneath Venice's surface, suggesting the complexity and interconnectedness of natural and man-made elements. The starkness of the white background against the dark roots emphasizes a theme of exposure and concealment, reflecting Venice's delicate balance between beauty and decay.
				</p>
			</div>
			<div class="column large-4">
				<p>
					The second image captures a segment of Venice's canal, where the vibrant blue-green water contrasts sharply with the textured, time-worn stones of the canal's edge. The composition focuses on the interplay of light and shadow, water and stone, creating a dynamic visual dialogue. The water's reflective quality adds a layer of depth and movement, while the stones' rough texture speaks to the enduring nature of Venice's architecture. This image evokes a sense of timelessness, highlighting the city's ability to endure and adapt despite the relentless encroachment of water.
					In the third image, the focus shifts to the intersection of stone steps and water, where the aged, weather-beaten surfaces meet the calm, murky canal. The vertical lines of the steps lead the eye downwards into the depths of the water, symbolizing a descent into Venice's hidden layers. The moss and algae clinging to the stone hint at the slow, inevitable encroachment of nature, reminding us of the persistent threat of rising tides. This composition captures a moment of stillness and contemplation, encouraging the viewer to reflect on the passage of time and the forces that shape Venice's landscape.
				</p>
			</div>
			<div class="column large-4">
				<p>
					The final image presents a broader view of the canal, where the water's surface is littered with debris. This scene introduces an element of environmental concern, highlighting the pollution that mars Venice's iconic waterways. The dark, polluted water contrasts with the stone embankments, emphasizing the impact of human activity on this fragile ecosystem. This image evokes a sense of melancholy and urgency, reminding us of the pressing need to preserve and protect Venice's unique environment.
					Together, these images form a powerful narrative about Venice's intricate relationship with water. The compositions draw attention to the city's vulnerability and resilience, capturing moments of beauty, decay, and environmental challenge. Through these photographs, Venice emerges as a living entity, constantly shaped and reshaped by the water that both sustains and threatens it. The series invites viewers to reflect on the delicate balance between human habitation and natural forces, and the ongoing struggle to maintain this balance in a city defined by its watery landscape.
				</p>
			</div>
			<div class="column large-4">
				<img
					src="../../assets/images/photography/venedig/IMG_1840.jpg"
					alt=""
					width={800}
					height={800}
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
