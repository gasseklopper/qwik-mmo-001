import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Bodytext from '~/components/__libary/01_Atoms/bodytext/bodytext'
import Headlines from '~/components/__libary/01_Atoms/headlines/headlines'
import Intro from '~/components/__libary/04_Templates/intro/intro'

export default component$(() => {
	return (
		<>
			<Column3></Column3>
		</>
	)
})

export const Column3 = component$(() => {
	return (
		<div class="row">
			<div class="column large-6">
				<img src="../../assets/images/photography/black/Black_001.jpg" alt="" />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/black/Black_002.jpg" alt="" />
			</div>
			<div class="column large-3"></div>
			<div class="column large-6">
				<img src="../../assets/images/photography/black/Black_003.jpg" alt="" />
			</div>
			<div class="column large-3"></div>
			<div class="column large-3"></div>
			<div class="column large-6">
				<>
					<Headlines>huricane</Headlines>
					<Bodytext>
						this is the huricane main page Lorem ipsum dolor sit, amet
						consectetur adipisicing elit. Natus non adipisci nam cupiditate,
						quis quam porro! Adipisci mollitia fuga deserunt nemo nihil ea quod.
						Culpa quae velit amet expedita, sequi ducimus commodi ut sint
						voluptatum, magnam iste molestiae unde molestias exercitationem, at
						perspiciatis itaque nam vitae. Quidem, nam adipisci, explicabo neque
						molestiae sint cum, optio pariatur sed provident quos officia
						cupiditate? Inventore, eum! Quisquam dolorem repellendus facilis
						nostrum tempore quo, accusantium ut unde a eveniet earum? Maxime
						laudantium aliquam accusamus, ducimus tempore nulla vel, quas nisi
						odit recusandae qui quibusdam rem. Porro dolor officia cumque esse
						quis soluta quas quia.
					</Bodytext>
				</>
			</div>
			<div class="column large-3"></div>
			<div class="column large-6">
				<img src="../../assets/images/photography/black/Black_011.jpg" alt="" />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/black/Black_012.jpg" alt="" />
			</div>
			<div class="column large-3"></div>
			<div class="column large-6">
				<img src="../../assets/images/photography/black/Black_013.jpg" alt="" />
			</div>
			<div class="column large-1"></div>
			<div class="column large-1"></div>
			<div class="column large-4">
				<img src="../../assets/images/photography/black/Black_016.jpg" alt="" />
			</div>
			<div class="column large-4">
				<img src="../../assets/images/photography/black/Black_014.jpg" alt="" />
			</div>
			<div class="column large-4">
				<img src="../../assets/images/photography/black/Black_018.jpg" alt="" />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/black/Template_index_01.jpg" alt="" />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/black/Template_index_02.jpg" alt="" />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/black/Template_index_03.jpg" alt="" />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/black/Template_index_04.jpg" alt="" />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/black/Template_index_05.jpg" alt="" />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/black/Template_index_06.jpg" alt="" />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/black/Template_index_07.jpg" alt="" />
			</div>
			<div class="column large-6">
				<img src="../../assets/images/photography/black/Template_index_08.jpg" alt="" />
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'Locker',
}
