import {
  component$,
  type PropsOf,
  Slot,
  useTask$,
  useContext,
} from '@builder.io/qwik'
import CarouselContextId from './settingsToggleButton-context-id'
import { isBrowser, isDev, isServer } from '@builder.io/qwik/build'

type CarouselViewportProps = PropsOf<'div'>

export const SettingsViewToggleButton = component$((props: CarouselViewportProps) => {
  const context = useContext(CarouselContextId)

  useTask$(({ track }) => {
    track(() => context.settingsContextVersion)

    if (isBrowser) {
      console.log('SsettingsToggleButtonView mounted isBrowser')
    }
    if (isDev) {
      console.log('SsettingsToggleButtonView mounted isDev')
    }
    if (isServer) {
      console.log('SsettingsToggleButtonView mounted isServer')
    }
  })

  return (
    <div class="settingsToggleButton settingsToggleButton__view" {...props}>
      <Slot />
    </div>
  )
})
