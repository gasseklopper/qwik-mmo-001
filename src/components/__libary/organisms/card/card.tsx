import type { DocumentHead } from '@builder.io/qwik-city'
import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './card.scss?inline'
import Headline from '../../atoms/headline/headline'
import BodyText from '../../atoms/bodytext/bodytext'
import Img from '../../atoms/image/image'
import Friends from '../../molecules/friends/friends'

export default component$(() => {
	useStyles$(styles)

	return (
		<div class="card">
			<div class="">
				<div class="">
					<div class="card__image">
						<Img
							src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
							alt="alt text"
							variant=""
							size=""
						/>
						{/* <Button
							label="lorem ipsum"
							variant="primary-button"
							size="small"
							onClick$={() => 1}
						/> */}
					</div>
					<div class="card__header">
						<Headline tag="h4" text="lorem ipsum" size="h2" />
						{/* <Button label="lorem ipsum" variant="primary-button" size="small" /> */}
					</div>
					<div class="card__content">
						<Friends />
					</div>
					<div class="card__footer">
						<div class="">
							<BodyText tag="p" text="Current Bid: 0.91" size="" />
							<BodyText tag="span" text="ETH" size="" />
						</div>
						{/* <Button label="Place Bid" variant="primary-button" size="small" /> */}
					</div>
				</div>
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'Card',
}
