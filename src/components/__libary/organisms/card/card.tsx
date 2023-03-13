import type { DocumentHead } from '@builder.io/qwik-city'
import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './card.scss?inline'
import Headline from '../../atoms/headline/headline'

export default component$(() => {
	useStyles$(styles)
	return (
		<div class="card">
			<div class="">
				<div class="">
					<div class="card__image">
						<img
							src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
							class=""
							alt=""
						/>
						<button class=""></button>
					</div>
					<div class="card__header">
						<Headline tag="h4" text="lorem ipsum" size="h2" />
						<button class="">test</button>
					</div>
					<div class="card__content">
						<div class="card__friends">
							<div class="rounded-full z-10">
								<img
									class="image"
									src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"
									alt=""
								/>
							</div>
							<div class="rounded-full z-09">
								<img
									class="image"
									src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png"
									alt=""
								/>
							</div>
							<div class="rounded-full z-08">
								<img
									class="image"
									src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png"
									alt=""
								/>
							</div>
							<div class="rounded-full z-07">+5</div>
						</div>
					</div>
					<div class="card__footer">
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
