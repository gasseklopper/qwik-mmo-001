import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './venedig.scss?inline'

export default component$(() => {
	useStyles$(styles)

	return (
		<section class={['test', 'venedig']}>
			<GalleryStatic />
			<Column3 />
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
					src="../../assets/images/photography/venedig/IMG_2063.jpg"
					alt=""
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/venedig/IMG_1905.jpg"
					alt=""
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/venedig/IMG_1903.jpg"
					alt=""
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/venedig/IMG_1869.jpg"
					alt=""
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/venedig/IMG_2039.jpg"
					alt=""
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/venedig/IMG_1939.jpg"
					alt=""
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/venedig/IMG_1523.jpg"
					alt=""
				/>
			</div>
			<div class="column large-3">
				<img
					src="../../assets/images/photography/venedig/IMG_2094.jpg"
					alt=""
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
					src="../../assets/images/photography/venedig/IMG_1840.jpg"
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
