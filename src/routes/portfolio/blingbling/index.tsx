import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Bodytext from '~/components/__libary/01_Atoms/bodytext/bodytext'
import Headlines from '~/components/__libary/01_Atoms/headlines/headlines'

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
				<img
					src="../../assets/images/photography/blingbling/bling_bling_001.gif"
					alt=""
					width={800}
					height={800}
				/>
			</div>
			<div class="column large-6">
				<img
					src="../../assets/images/photography/blingbling/bling_bling_001.gif"
					alt=""
					width={800}
					height={800}
				/>
			</div>
			<div class="column large-4">
				<img
					src="../../assets/images/photography/blingbling/bling_bling_002.gif"
					alt=""
					width={800}
					height={800}
				/>
			</div>
			<div class="column large-4">
				<img
					src="../../assets/images/photography/blingbling/bling_bling_003.gif"
					alt=""
					width={800}
					height={800}
				/>
			</div>
			<div class="column large-4">
				<img
					src="../../assets/images/photography/blingbling/bling_bling_004.gif"
					alt=""
					width={800}
					height={800}
				/>
			</div>
			<div class="column large-5"></div>
			<div class="column large-6">
				<>
					<Headlines>blingbling</Headlines>
					<Bodytext>
						this is the blingbling main page Lorem ipsum dolor sit, amet
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
				<img src="../../assets/images/photography/blingbling/bling_bling_005.gif" alt="" width={800}
					height={800} />

			</div>
			<div class="column large-6">
				<img
					src="../../assets/images/photography/blingbling/bling_bling_006.gif"
					alt=""
					width={800}
					height={800}
				/>
			</div>

			<div class="column large-6">
				<img
					src="../../assets/images/photography/blingbling/bling_bling_004.gif"
					alt=""
					width={800}
					height={800}
				/>
			</div>
			<div class="column large-1"></div>
			<div class="column large-1"></div>
			<div class="column large-4">
				<img
					src="../../assets/images/photography/blingbling/bling_bling_008.gif"
					alt=""
					width={800}
					height={800}
				/>
			</div>
			<div class="column large-4">
				<img
					src="../../assets/images/photography/blingbling/bling_bling_007.gif"
					alt=""
					width={800}
					height={800}
				/>
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'Locker',
}
