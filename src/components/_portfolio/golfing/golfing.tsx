import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './golfing.scss?inline'

export default component$(() => {
	useStyles$(styles)

	return (
		<section class={['test', 'venedig']}>
			<Column3 />
		</section>
	)
})



export const Column3 = component$(() => {
	return (
		<div class="row">
			<div class="column large-12">
				<img
					src="../../assets/images/photography/minigolf/minigolf_002.gif"
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
					src="../../assets/images/photography/minigolf/minigolf_001.gif"
					alt=""
				/>
			</div>
		</div>
	)
})
