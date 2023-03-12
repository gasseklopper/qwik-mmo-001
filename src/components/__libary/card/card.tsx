import type { DocumentHead } from '@builder.io/qwik-city'
import { component$ } from '@builder.io/qwik'

export default component$(() => {
	return (
		<div class="">
			<div class="">
				<div class="">
					<div class="">
						<img
							src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
							class=""
							alt=""
						/>
						<button class=""></button>
					</div>
					<div class="">
						<div class="">
							<p class=""> Abstract Colors </p>
							<p class="">By Esthera Jackson </p>
						</div>
						<div class="">
							<span class="">+5</span>
							<span class="">
								<img
									class=""
									src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"
									alt=""
								/>
							</span>
							<span class="">
								<img
									class=""
									src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png"
									alt=""
								/>
							</span>
							<span class="">
								<img
									class=""
									src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png"
									alt=""
								/>
							</span>
						</div>
					</div>
					<div class=" ">
						<div class="">
							<p class="">
								Current Bid: 0.91 <span>ETH</span>
							</p>
						</div>
						<button class="">Place Bid</button>
					</div>
				</div>
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'Card',
}
