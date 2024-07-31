import { cursorAnimationKey, motionPreferenceKey, themeStorageKey } from "~/components/router-head/theme-script";

// Define the types for theme and cursor preferences
export type ThemePreference = 'dark' | 'miami' | 'light' | 'dim' | 'sim' | 'lights2';
export type CursorPreference = 'reduce' | 'no-preference' | string;
export type MotionPreference = 'reduce' | 'no-preference' | string;

/**
 * Listens for changes in the color scheme preference (dark mode)
 * and triggers the provided callback function when a change is detected.
 *
 * @param onColorSchemeChange - Callback function to execute when the color scheme changes.
 * @returns A function to remove the event listener.
 */
export const colorSchemeChangeListener = (
    onColorSchemeChange: (isDark: boolean) => void
) => {
    const listener = ({ matches: isDark }: MediaQueryListEvent) => {
        onColorSchemeChange(isDark);
    };
    window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (event) => listener(event));

    return () =>
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .removeEventListener('change', listener);
};

/**
 * Sets the theme preference in local storage and updates the HTML attribute to reflect the preference.
 *
 * @param theme - The selected theme preference.
 */
export const setPreference = (theme: ThemePreference) => {
    localStorage.setItem(themeStorageKey, theme);
    document.firstElementChild?.setAttribute('data-theme', theme);
};

/**
 * Sets the cursor animation preference in local storage and updates the HTML attribute to reflect the preference.
 *
 * @param preference - The selected cursor animation preference.
 */
export const setCursorPreference = (preference: CursorPreference) => {
    localStorage.setItem(cursorAnimationKey, preference);
    document.firstElementChild?.setAttribute('data-cursor', preference);
};

/**
 * Retrieves the saved theme preference from local storage, or defaults to
 * the system's dark mode preference if no preference is saved.
 *
 * @returns The current theme preference.
 */
export const getColorPreference = (): ThemePreference => {
    const savedPreference = localStorage.getItem(themeStorageKey);
    if (savedPreference) {
        return savedPreference as ThemePreference;
    } else {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'miami';
    }
};

/**
 * Retrieves the saved cursor animation preference from local storage, or defaults to
 * 'reduce' if no preference is saved.
 *
 * @returns The current cursor animation preference.
 */
export const getCursorPreference = (): CursorPreference => {
    const savedPreference = localStorage.getItem(cursorAnimationKey);
    if (savedPreference) {
        return savedPreference as CursorPreference;
    } else {
        return window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? 'reduce' : 'reduce';
    }
};

/**
 * Retrieves the saved cursor animation preference from local storage, or defaults to
 * 'reduce' if no preference is saved.
 *
 * @returns The current cursor animation preference.
 */
export const getMotionPreference = (): CursorPreference => {
    const savedPreference = localStorage.getItem(motionPreferenceKey);
    if (savedPreference) {
        return savedPreference as MotionPreference;
    } else {
        return window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? 'reduce' : 'no-preference';
    }
};
