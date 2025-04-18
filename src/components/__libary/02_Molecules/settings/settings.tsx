import {
	type PropsOf,
	Slot,
	component$,
	useContextProvider,
	useSignal,
	useStyles$,
} from '@builder.io/qwik'
import { type SettingsContext } from './settings-context.type'
import SettingsContextId from './settings-context-id'
import styles from './settings.scss?inline'

export type SettingsRootProps = PropsOf<'section'> & SettingsContext

export type ExtendedSettingsRootProps = SettingsRootProps

export const Settings = component$(
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
			<section class='settings' role="region" aria-label="Settings"{...props}>
				<Slot />
			</section>
		)
	},
)
