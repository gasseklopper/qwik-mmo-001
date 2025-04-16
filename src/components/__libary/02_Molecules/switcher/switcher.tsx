import type { PropFunction} from '@builder.io/qwik';
import { component$, useVisibleTask$, useSignal, useContext } from '@builder.io/qwik';
import { AppContext } from '~/globalContext';
// import Button from '../../01_Atoms/button/button';

// Define the prop types
interface SwitcherProps {
    dispatch: PropFunction<(action: { type: string, value: string }) => void>;
    cursor1: { value: HTMLElement | null };
    cursor2: { value: HTMLElement | null };
    switcherDir: string;
    // overlayType: string;
}

// export const Switcher = component$<SwitcherProps>(({ dispatch, cursor1, cursor2, switcherDir }) => {
// export const Switcher = component$<SwitcherProps>(({ dispatch, switcherDir }) => {
export const Switcher = component$<SwitcherProps>(({ dispatch }) => {
    // const state = useStore({
    //     switcherOpen: false,
    //     cursorStyle: 2
    // });
    const globalState = useContext(AppContext)
    console.log('globalState sopScrollTop', globalState.stopScrollTop)
    const switcherIcon = useSignal<any>();
    const switcherItems = useSignal<any>();
    // const switcherOpen = useSignal<any>();
    // const switcherClose = useSignal<any>();
    // const cursorStyle = useSignal<any>();

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

            // setupButtonHandlers('.mode-type button', 'active', (button: { getAttribute: (arg0: string) => any; }) => {
            //     const mode = button.getAttribute('data-mode');
            //     document.body.classList.toggle('light', mode === 'light');
            //     dispatch({ type: 'setMode', value: mode === 'light' ? 'light' : '' });
            // });

            setupButtonHandlers('.layout-type button', 'active', (button: { getAttribute: (arg0: string) => any; }) => {
                const mode = button.getAttribute('data-mode');
                const smoothContent = document.getElementById('main');
                if (smoothContent) {
                    smoothContent.classList.toggle('container', mode === 'box');
                }
                dispatch({ type: 'setLayout', value: mode === 'box' ? 'box' : '' });
            });

            setupButtonHandlers('.direction-type button', 'active', (button: { getAttribute: (arg0: string) => any; }) => {
                const mode = button.getAttribute('data-mode');
                document.body.classList.toggle('dir-rtl', mode === 'rtl');
                dispatch({ type: 'setDirection', value: mode === 'rtl' ? 'rtl' : '' });
            });

            setupButtonHandlers('.cursor-type button', 'active', (button: { getAttribute: (arg0: string) => any; }) => {
                const mode = button.getAttribute('data-mode');
                document.body.classList.toggle('isAnimatedCursor', mode === 'rtl');
                dispatch({ type: 'setDirection', value: mode === 'rtl' ? 'rtl' : '' });
            });

            setupButtonHandlers('.cursor-type button', 'active', (button: { getAttribute: (arg0: string) => any; }) => {
                const mode = button.getAttribute('data-mode');
                const elem = document.getElementById('cursor-id');
                if (elem) {
                    elem.classList.toggle('cursor', mode === 'yes');
                }
                dispatch({ type: 'cursor', value: mode === 'yes' ? 'yes' : '' });
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

    // const openSwitcher = $(() => {
    //     state.switcherOpen = true;
    //     switcherOpen.value.style.display = 'none';
    //     switcherClose.value.style.display = 'flex';
    //     switcherIcon.value.style[switcherDir] = '280px';
    //     switcherItems.value.style[switcherDir] = '0';
    // });

    // const closeSwitcher = $(() => {
    //     state.switcherOpen = false;
    //     switcherClose.value.style.display = 'none';
    //     switcherOpen.value.style.display = 'flex';
    //     switcherIcon.value.style[switcherDir] = '0';
    //     switcherItems.value.style[switcherDir] = '-280px';
    // });

    // const cursor = $(() => {
    //     const cursorVal = cursorStyle.value.value;
    //     cursor1.value!.style.display = cursorVal == '1' ? 'none' : '';
    //     cursor2.value!.style.display = cursorVal == '1' ? 'none' : '';
    // });

    return (
        <>
            {/* <div class="switcher__area">
                <div class={`switcher__items ${switcherDir === "left" ? "switcher_left" : ""}`} ref={switcherItems}>
                    <div class="switcher__item">
                        <div class="switch__title-wrap"><h2 class="switcher__title text-white">Direction</h2></div>
                        <div class="switcher__btn direction-type wc-col-2">
                            <Button
                                buttonLabel={`Toggle LTR`}
                                buttonVariant="primary"
                                buttonSize="small"
                                data-mode="ltr"
                            />
                            <Button
                                buttonLabel={`Toggle RTL`}
                                buttonVariant="primary"
                                buttonSize="small"
                                data-mode="rtl"
                            />
                        </div>
                    </div>
                    <div class="switcher__item">
                        <div class="switch__title-wrap"><h2 class="switcher__title text-white">Layout</h2></div>
                        <div class="switcher__btn layout-type wc-col-2">
                            <Button
                                buttonLabel={`Toggle Box Layout`}
                                buttonVariant="primary"
                                buttonSize="small"
                                data-mode="box"
                            />
                            <Button
                                buttonLabel={`Toggle fullwidth Layout`}
                                buttonVariant="primary"
                                buttonSize="small"
                                data-mode="full"
                                class="active"
                            />
                        </div>
                    </div>
                    <div class="switcher__item">
                        <div class="switch__title-wrap"><h2 class="switcher__title text-white">Overlay</h2></div>
                        <div class="switcher__btn overlay-type wc-col-2">
                            <Button
                                buttonLabel={`Toggle Overlay on`}
                                buttonVariant="primary"
                                buttonSize="small"
                                data-mode="yes"
                            />
                            <Button
                                buttonLabel={`Toggle Overlay off`}
                                buttonVariant="primary"
                                buttonSize="small"
                                data-mode="no"
                            />
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
});
