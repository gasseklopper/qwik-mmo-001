import {
  type PropsOf,
  type Signal,
  Slot,
  component$,
  useContextProvider,
  useSignal,
} from '@builder.io/qwik';
import { type CarouselContext } from './carousel-context.type';
import CarouselContextId from './carousel-context-id';
import { VisuallyHidden } from '~/utils/visually-hidden';

export type CarouselRootProps = PropsOf<'section'> & {
  spaceBetweenSlides?: number;
  carouselHeight?: number;
  carouselWidth?: number;
  'bind:currSlideIndex'?: Signal<number>;
};

export type ExtendedImageCarouselRootProps = CarouselRootProps

export const Carousel = component$(
  ({
    spaceBetweenSlides = 0,
    carouselHeight = 0,
    carouselWidth = 0,
    'bind:currSlideIndex': givenSlideIndexSig,
    ...props
  }: ExtendedImageCarouselRootProps) => {
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

    const context: CarouselContext = {
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

    useContextProvider(CarouselContextId, context);

    return (
      <section aria-roledescription="carousel" role="group" {...props} style={{ height: `${carouselHeight}px`, width: `${carouselWidth}px` }}>
        <VisuallyHidden aria-live="polite" aria-atomic="true">
          Slide {context.currentIndexSig.value} of
          {context.numSlidesSig.value}
        </VisuallyHidden>
        <Slot />
      </section>
    );
  },
);
