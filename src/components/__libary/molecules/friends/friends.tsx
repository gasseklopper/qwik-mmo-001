import { component$, useStyles$ } from '@builder.io/qwik'
import Image from '../../01_Atoms/image/image'
import styles from './friends.scss?inline'

export interface HeadlineProps {
	tag?: any
	text?: string
	size?: string
	variant?: string
}

export default component$(() => {
	useStyles$(styles)

	return (
		<div class="card__friends">
			<div class="rounded-full z-10">
				<Image
					src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"
					alt="alt text"
					imageVariant="image"
				/>
			</div>
			<div class="rounded-full z-09">
				<Image
					src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png"
					alt="alt text"
					imageVariant="image"
				/>
			</div>
			<div class="rounded-full z-08">
				<Image
					src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png"
					alt="alt text"
					imageVariant="image"
				/>
			</div>
			<div class="rounded-full z-07">+5</div>
		</div>
	)
})
