import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Bodytext from '~/components/__libary/01_Atoms/bodytext/bodytext'
import Headlines from '~/components/__libary/01_Atoms/headlines/headlines'
import Intro from '~/components/__libary/04_Templates/intro/intro'

export default component$(() => {
	return (
		<>
			<Intro
				columnOne={
					<>
						<Headlines>Golfing</Headlines>
						<Bodytext>
							this is the Golfing main page Lorem ipsum dolor sit, amet
							consectetur adipisicing elit. Natus non adipisci nam cupiditate,
							quis quam porro! Adipisci mollitia fuga deserunt nemo nihil ea
							quod. Culpa quae velit amet expedita, sequi ducimus commodi ut
							sint voluptatum, magnam iste molestiae unde molestias
							exercitationem, at perspiciatis itaque nam vitae. Quidem, nam
							adipisci, explicabo neque molestiae sint cum, optio pariatur sed
							provident quos officia cupiditate? Inventore, eum! Quisquam
							dolorem repellendus facilis nostrum tempore quo, accusantium ut
							unde a eveniet earum? Maxime laudantium aliquam accusamus, ducimus
							tempore nulla vel, quas nisi odit recusandae qui quibusdam rem.
							Porro dolor officia cumque esse quis soluta quas quia.
						</Bodytext>
					</>
				}
				columnTwo={
					<>
						<img
							src="../../assets/images/photography/minigolf/minigolf_001.gif"
							alt=""
						/>
					</>
				}
			></Intro>
			<GalleryStatic />
		</>
	)
})

export const GalleryStatic = component$(() => {
	return (
		<div class="row">
			<div class="column large-6">
				<img
					src="../../assets/images/photography/minigolf/minigolf_002.gif"
					alt=""
				/>
			</div>
			<div class="column large-6">
	
			</div>
			<div class="column large-6">
	
			</div>
			<div class="column large-6">
			<img
					src="../../assets/images/photography/minigolf/minigolf_003.gif"
					alt=""
				/>
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'Blacker',
}
