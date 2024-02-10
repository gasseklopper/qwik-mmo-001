import {
	FunctionComponent,
	JSXNode,
	QwikIntrinsicElements,
	Slot,
	component$,
	useStyles$,
} from '@builder.io/qwik'
import styles from './intro.scss?inline'

export interface GridProps {
	variant?: 'bodytext' | 'subline' | 'eyebrow' | 'browLine'
	columnOne?:
		| JSXNode<string | FunctionComponent<Record<string, any>>>
		| undefined
	columnTwo?:
		| JSXNode<string | FunctionComponent<Record<string, any>>>
		| undefined
}

type ExtendedDivlement = QwikIntrinsicElements['div'] & {
	'aria-label'?: string
}

export type ExtendedGridProps = ExtendedDivlement & GridProps

const mainClass = 'grid'

export default component$(
	({ class: className, ...rest }: ExtendedGridProps) => {
		useStyles$(styles)

		const componentVariant = rest.variant || 'bodytext'
		const componentClass = className || ''

		return (
			<div class={`${mainClass} ${componentClass} ${componentVariant} row`} {...rest}>
				{Slot && (
					<div class="column">
						<Slot />
					</div>
				)}
				<>
					<div class="column large-6">{rest.columnOne}</div>
					<div class="column large-6">{rest.columnTwo}</div>
				</>
			</div>
		)
	}
)

export const Column1Text = component$(() => {
	return (
		<div class="row">
			<div class="column">
				<p>
					It is a cruel, ironical art, photography. The dragging of captured
					moments into the future; moments that should have been allowed to be
					evaporate into the past; should exist only in memories, glimpsed
					through the fog of events that came after. Photographs force us to see
					people before their future weighed them down... A portrait is not a
					likeness. The moment an emotion or fact is transformed into a
					photograph it is no longer a fact but an opinion. There is no such
					thing as inaccuracy in a photograph. All photographs are accurate.
					None of them is the truth. No matter how much crap you gotta plow
					through to stay alive as a photographer, no matter how many bad
					assignments, bad days, bad clients, snotty subjects, obnoxious
					handlers, wigged-out art directors, technical disasters, failures of
					the mind, body, and will, all the shouldas, couldas, and wouldas that
					befuddle our brains and creep into our dreams, always remember to make
					room to shoot what you love. It’s the only way to keep your heart
					beating as a photographer. For me the noise of Time is not sad: I love
					bells, clocks, watches — and I recall that at first photographic
					implements were related to techniques of cabinetmaking and the
					machinery of precision: cameras, in short, were clocks for seeing, and
					perhaps in me someone very old still hears in the photographic
					mechanism the living sound of the wood. I don't just look at the thing
					itself or at the reality itself; I look around the edges for those
					little askew moments-kind of like what makes up our lives-those
					slightly awkward, lovely moments.
				</p>
			</div>
		</div>
	)
})
