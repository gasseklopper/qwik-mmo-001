import { cursorAnimationKey, themeStorageKey } from "~/components/router-head/theme-script"

export type ThemePreference = 'dark' | 'miami' | 'light' | 'dim' | 'sim' | 'lights2'
export type CursorPreference = 'reduce' | 'no-preference' | string

export const colorSchemeChangeListener = (
    onColorSchemeChange: (isDark: boolean) => void
) => {
    const listener = ({ matches: isDark }: MediaQueryListEvent) => {
        onColorSchemeChange(isDark)
    }
    window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (event) => listener(event))

    return () =>
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .removeEventListener('change', listener)
}

export const setPreference = (theme: ThemePreference) => {
    localStorage.setItem(themeStorageKey, theme)
    reflectPreference(theme)
}


export const setCursorPreference = (preference: CursorPreference) => {
    localStorage.setItem(cursorAnimationKey, preference)
    reflectCursorPreference(preference)
}

export const reflectPreference = (theme: ThemePreference) => {
    document.firstElementChild?.setAttribute('data-theme', theme)
}

export const reflectCursorPreference = (preference: CursorPreference) => {
    document.firstElementChild?.setAttribute('data-cursor', preference)


}

export const getColorPreference = (): ThemePreference => {
    if (localStorage.getItem(themeStorageKey)) {
        return localStorage.getItem(themeStorageKey) as ThemePreference
    } else {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'miami'
    }
}

export const getCursorPreference = (): any => {
    if (localStorage.getItem(cursorAnimationKey)) {
        return localStorage.getItem(cursorAnimationKey)
    } else {
        return window.matchMedia('(prefers-reduced-motion: no-preference)').matches
            ? 'reduce'
            : 'reduce'
    }
}