import { component$, useStore, useVisibleTask$, $, useSignal, PropFunction, useContext } from '@builder.io/qwik';
import { AppContext } from '~/globalContext';

// Define the prop types
interface SwitcherProps {
    dispatch: PropFunction<(action: { type: string, value: string }) => void>;
    cursor1: { value: HTMLElement | null };
    cursor2: { value: HTMLElement | null };
    switcherDir: string;
    // overlayType: string;
}

export const Switcher = component$<SwitcherProps>(({ dispatch, cursor1, cursor2, switcherDir }) => {
    const state = useStore({
        switcherOpen: false,
        cursorStyle: 2
    });
    const globalState = useContext(AppContext)
    console.log('globalState sopScrollTop', globalState.stopScrollTop)
    const switcherIcon = useSignal<any>();
    const switcherItems = useSignal<any>();
    const switcherOpen = useSignal<any>();
    const switcherClose = useSignal<any>();
    const cursorStyle = useSignal<any>();

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        if (typeof window !== "undefined") {
            switcherIcon.value.style.zIndex = "1000";
            switcherItems.value.style.zIndex = "1000";

            const setupButtonHandlers = (selector: string, className: string, handler: { (button: any): void; (button: any): void; (button: any): void; (button: any): void; (arg0: any): void; }) => {
                const buttons = document.querySelectorAll(selector);
                buttons.forEach(button => {
                    button.addEventListener('click', () => {
                        buttons.forEach(b => b.classList.remove('active'));
                        button.classList.add('active');
                        handler(button);
                    });
                });
            };

            setupButtonHandlers('.mode-type button', 'active', (button: { getAttribute: (arg0: string) => any; }) => {
                const mode = button.getAttribute('data-mode');
                document.body.classList.toggle('light', mode === 'light');
                dispatch({ type: 'setMode', value: mode === 'light' ? 'light' : '' });
            });

            setupButtonHandlers('.layout-type button', 'active', (button: { getAttribute: (arg0: string) => any; }) => {
                const mode = button.getAttribute('data-mode');
                const smoothContent = document.getElementById('smooth-content');
                if (smoothContent) {
                    smoothContent.classList.toggle('box-layout', mode === 'box');
                }
                dispatch({ type: 'setLayout', value: mode === 'box' ? 'box' : '' });
            });

            setupButtonHandlers('.direction-type button', 'active', (button: { getAttribute: (arg0: string) => any; }) => {
                const mode = button.getAttribute('data-mode');
                document.body.classList.toggle('dir-rtl', mode === 'rtl');
                dispatch({ type: 'setDirection', value: mode === 'rtl' ? 'rtl' : '' });
            });

            setupButtonHandlers('.overlay-type button', 'active', (button: { getAttribute: (arg0: string) => any; }) => {
                const mode = button.getAttribute('data-mode');
                const overlayContainer = document.getElementById('overlay-container');
                if (overlayContainer) {
                    overlayContainer.classList.toggle('noise-overlay', mode === 'yes');
                }
                dispatch({ type: 'noise-overlay', value: mode === 'yes' ? 'yes' : '' });
            });
        }
    });

    const openSwitcher = $(() => {
        state.switcherOpen = true;
        switcherOpen.value.style.display = 'none';
        switcherClose.value.style.display = 'flex';
        switcherIcon.value.style[switcherDir] = '280px';
        switcherItems.value.style[switcherDir] = '0';
    });

    const closeSwitcher = $(() => {
        state.switcherOpen = false;
        switcherClose.value.style.display = 'none';
        switcherOpen.value.style.display = 'flex';
        switcherIcon.value.style[switcherDir] = '0';
        switcherItems.value.style[switcherDir] = '-280px';
    });

    const cursor = $(() => {
        const cursorVal = cursorStyle.value.value;
        cursor1.value!.style.display = cursorVal == '1' ? 'none' : '';
        cursor2.value!.style.display = cursorVal == '1' ? 'none' : '';
    });

    return (
        <>
            <div class="switcher__area">
                <div class={`switcher__icon ${switcherDir === "left" ? "switcher_left" : ""}`} ref={switcherIcon}>
                    <button id="switcher_open" ref={switcherOpen} onClick$={openSwitcher}>fagear</button>
                    <button id="switcher_close" ref={switcherClose} onClick$={closeSwitcher}>faxmark</button>
                </div>
                <div class={`switcher__items ${switcherDir === "left" ? "switcher_left" : ""}`} ref={switcherItems}>
                    <div class="switcher__item">
                        <div class="switch__title-wrap"><h2 class="switcher__title text-white">Cursor</h2></div>
                        <div class="switcher__btn">
                            <select value={state.cursorStyle} name="cursor-style" id="cursor_style" ref={cursorStyle} onChange$={cursor}>
                                <option value="1">default</option>
                                <option value="2">animated</option>
                            </select>
                        </div>
                    </div>
                    <div class="switcher__item">
                        <div class="switch__title-wrap"><h2 class="switcher__title text-white">Mode</h2></div>
                        <div class="switcher__btn mode-type wc-col-2">
                            <button data-mode="light">Light</button>
                            <button class="active" data-mode="dark">Dark</button>
                        </div>
                    </div>
                    <div class="switcher__item">
                        <div class="switch__title-wrap"><h2 class="switcher__title text-white">Direction</h2></div>
                        <div class="switcher__btn direction-type wc-col-2">
                            <button class="active" data-mode="ltr">LTR</button>
                            <button data-mode="rtl">RTL</button>
                        </div>
                    </div>
                    <div class="switcher__item">
                        <div class="switch__title-wrap"><h2 class="switcher__title text-white">Layout</h2></div>
                        <div class="switcher__btn layout-type wc-col-2">
                            <button data-mode="box">Box</button>
                            <button class="active" data-mode="full">Full</button>
                        </div>
                    </div>
                    <div class="switcher__item">
                        <div class="switch__title-wrap"><h2 class="switcher__title text-white">Overlay</h2></div>
                        <div class="switcher__btn overlay-type wc-col-2">
                            <button data-mode="yes">Yes</button>
                            <button class="active" data-mode="no">No</button>
                        </div>
                    </div>
                    <div class="switcher__item">
                        <div class="switch__title-wrap"><h2 class="switcher__title text-white">Direction</h2></div>
                        <div class="switcher__btn direction-type wc-col-2">
                            <button class="active" data-mode="yes">LTR</button>
                            <button data-mode="no">RTL</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});
