import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Bodytext from '~/components/__libary/01_Atoms/bodytext/bodytext'
import Headlines from '~/components/__libary/01_Atoms/headlines/headlines'
import Intro from '~/components/__libary/04_Templates/intro/intro'
import Venedig from '~/components/_portfolio/venedig/venedig'

export default component$(() => {
	return (
		<>
			<Intro
				columnOne={
					<>
						<Headlines>Venedig</Headlines>
						<Bodytext>
							The image evokes a sense of nostalgia and melancholy, reflecting the transient nature of beauty and the inevitability of decay. The closed shutters can symbolize a barrier, perhaps representing the isolation felt by the city as it contends with the challenges of preservation and modernization. Yet, the enduring beauty of the architectural elements offers a counterpoint, suggesting resilience and continuity.
							In conclusion, this titular image of a Venetian window with its green shutters and wrought-iron balcony encapsulates the essence of Venice. It speaks to the city's rich architectural heritage, the interplay of decay and preservation, and the emotional depth that comes with centuries of history. Through its composition and details, it invites viewers to engage with Venice not just as a picturesque destination but as a living, breathing entity steeped in art, culture, and history
						</Bodytext>
					</>
				}
				columnTwo={
					<>
						<img
							src="../../assets/images/photography/venedig/IMG_1857.jpg"
							alt=""
							width={800}
							height={800}
						/>
					</>
				}
			></Intro>
			<Venedig />
		</>
	)
})

export const head: DocumentHead = {
	title: 'Venedig',
}
