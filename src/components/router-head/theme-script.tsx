export const themeStorageKey = 'theme-preference'
export const cursorAnimationKey = 'theme-cursor-preference'
export const layoutKey = 'theme-layout-preference'
export const isSettingsOpenKey = 'theme-settings-preference'
export const motionPreferenceKey = 'theme-motion-preference'

export const ThemeScript = () => {
    const themeScript = `
        document.firstElementChild
            .setAttribute('data-theme',
                localStorage.getItem('${themeStorageKey}') ??
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'miami')
            )`
    return <script dangerouslySetInnerHTML={themeScript} />
}

export const CursorAnimationScript = () => {
    const Script = `
        document.firstElementChild
            .setAttribute('data-cursor',
                localStorage.getItem('${cursorAnimationKey}') ??
                (window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'false' : 'true')
            )`
    return <script dangerouslySetInnerHTML={Script} />
}

export const LayoutScript = () => {
    const Script = `
        document.firstElementChild
            .setAttribute('data-layout',
                localStorage.getItem('${layoutKey}') 
            )`
    return <script dangerouslySetInnerHTML={Script} />
}

export const ReduceMotionScript = () => {
    const reduceMotion = `
        document.firstElementChild
            .setAttribute('cursor-animation',
                localStorage.getItem('123') ??
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'lights2')
            )`
    return <script dangerouslySetInnerHTML={reduceMotion} />
}
