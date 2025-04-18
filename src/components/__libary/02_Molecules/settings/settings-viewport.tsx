import {
  component$,
  type PropsOf,
  Slot,
  useTask$,
  useContext,
} from '@builder.io/qwik'
import CarouselContextId from './settings-context-id'
import { isBrowser, isDev, isServer } from '@builder.io/qwik/build'

type CarouselViewportProps = PropsOf<'div'>

export const SettingsView = component$((props: CarouselViewportProps) => {
  const context = useContext(CarouselContextId)

  useTask$(({ track }) => {
    track(() => context.settingsContextVersion)

    if (isBrowser) {
      console.log('SettingsView mounted isBrowser')
    }
    if (isDev) {
      console.log('SettingsView mounted isDev')
    }
    if (isServer) {
      console.log('SettingsView mounted isServer')
    }
  })

  return (
    <div class="settings__view" {...props}>
      <Slot />
    </div>
  )
})
