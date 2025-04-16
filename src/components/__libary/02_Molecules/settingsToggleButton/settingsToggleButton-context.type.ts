import { type Signal } from '@builder.io/qwik';

export interface SettingsContext {
	settingsContextVersion?: string
	/*
    refs
    (I don't like adding sig to refs
    because we know they are signals in qwik)
  */
	viewportRef?: Signal<HTMLDivElement | undefined>
	containerRef?: Signal<HTMLDivElement | undefined>
}
