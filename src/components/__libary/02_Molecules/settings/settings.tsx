import {
    type PropsOf,
    type Signal,
    Slot,
    component$,
    useContextProvider,
    useSignal,
    useStyles$,
} from '@builder.io/qwik';
import { type SettingsContext } from './settings-context.type';
import SettingsContextId from './settings-context-id';
import { VisuallyHidden } from '~/utils/visually-hidden';
import styles from './settings.scss?inline'

export type SettingsRootProps = PropsOf<'section'> & {
    spaceBetweenSlides?: number;
    carouselHeight?: number;
    carouselWidth?: number;
    'bind:currSlideIndex'?: Signal<number>;
};

export type ExtendedSettingsRootProps = SettingsRootProps

export const Settings = component$(
    ({
        spaceBetweenSlides = 0,
        carouselHeight = 0,
        carouselWidth = 0,
        'bind:currSlideIndex': givenSlideIndexSig,
        ...props
    }: ExtendedSettingsRootProps) => {
        useStyles$(styles)
        const defaultIndexSig = useSignal(0);
        const currentIndexSig = givenSlideIndexSig ? givenSlideIndexSig : defaultIndexSig;

        const slideOffsetSig = useSignal<number>(0);
        const numSlidesSig = useSignal<number>(0);
        const transitionDurationSig = useSignal<number>(0);
        const viewportRef = useSignal<HTMLDivElement>();
        const containerRef = useSignal<HTMLDivElement>();
        const isDraggingSig = useSignal<boolean>(false);
        const initialX = useSignal<number>(0);
        const initialTransformX = useSignal<number>(0);
        const slideRefsArray = useSignal<Array<Signal>>([]);

        const context: SettingsContext = {
            slideOffsetSig,
            currentIndexSig,
            numSlidesSig,
            transitionDurationSig,
            viewportRef,
            containerRef,
            spaceBetweenSlides,
            isDraggingSig,
            initialX,
            initialTransformX,
            slideRefsArray,
            carouselHeight,
            carouselWidth,
        };

        useContextProvider(SettingsContextId, context);

        return (
            <section aria-roledescription="carousel" role="group"  {...props}>
                <VisuallyHidden aria-live="polite" aria-atomic="true">
                    Slide {context.currentIndexSig.value} of
                    {context.numSlidesSig.value}
                </VisuallyHidden>
                <Slot />
            </section>
        );
    },
);
