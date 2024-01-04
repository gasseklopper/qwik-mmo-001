import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Card from '~/components/__libary/organisms/card/card'
import SampleContentTypography from '~/components/__libary/sample_content_typography/sample_content_typography'
import SampleContent from '~/components/__libary/sample_content/sample_content'
import PageLanding from '~/components/__libary/page_landing/page_landing'
// import Clock from '~/components/clock/clock'
// import Clock2 from '~/components/clock2/clock2'
export default component$(() => {
	return (
		<>
			<SampleContentTypography />
			<div class="row">
				<div class="column large-4">
					<Card />
				</div>
				<div class="column large-4">
					<Card />
				</div>
				<div class="column large-4">
					<Card />
				</div>
			</div>
			<SampleContent />
			<PageLanding />
			{/* <Clock2 />
			<Clock /> */}
		</>
	)
})

export const head: DocumentHead = {
	title: 'Clock',
}
