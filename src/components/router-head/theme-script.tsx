export const themeStorageKey = 'theme-preference'
export const cursorAnimationKey = 'theme-cursor-preference'
export const isSettingsOpenKey = 'theme-settings-preference'

export const ThemeScript = () => {
	const themeScript = `
        document.firstElementChild
            .setAttribute('data-theme',
                localStorage.getItem('${themeStorageKey}') ??
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'lights2')
            )`
	return <script dangerouslySetInnerHTML={themeScript} />
}

export const ReduceMotionScript = () => {
	const reduceMotion = `
        document.firstElementChild
            .setAttribute('cursor-animation',
                localStorage.getItem('${cursorAnimationKey}') ??
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'lights2')
            )`
	return <script dangerouslySetInnerHTML={reduceMotion} />
}


// export const IsOpenSettingsScript = () => {
// 	const script = `
//         document.firstElementChild
//             .setAttribute('is-settings-open',
//                 localStorage.getItem('${isSettingsOpenKey}') ??
//                 (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'lights2')
//             )`
// 	return <script dangerouslySetInnerHTML={script} />
// }
