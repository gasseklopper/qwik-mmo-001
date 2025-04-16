import {
	type PropsOf,
	Slot,
	component$,
	useContextProvider,
	useSignal,
	useStyles$,
} from '@builder.io/qwik'
import { type SettingsContext } from './settingsToggleButton-context.type'
import SettingsContextId from './settingsToggleButton-context-id'
import styles from './settingsToggleButton.scss?inline'

export type SettingsRootProps = PropsOf<'section'> & SettingsContext

export type ExtendedSettingsRootProps = SettingsRootProps

export const SettingsToggleButton = component$(
	({
		...props
	}: ExtendedSettingsRootProps) => {
		useStyles$(styles)
		const viewportRef = useSignal<HTMLDivElement>()
		const containerRef = useSignal<HTMLDivElement>()
		const settingsContextVersion = "0.01"

		const context: SettingsContext = {
			settingsContextVersion,
			viewportRef,
			containerRef,
		}

		useContextProvider(SettingsContextId, context)

		return (
			<section class='settingsToggleButton' role="region" aria-label="Settings Toggle Button"{...props}>
				<Slot />
			</section>
		)
	},
)
