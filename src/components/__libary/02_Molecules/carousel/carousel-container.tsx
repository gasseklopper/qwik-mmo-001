import { component$, type PropsOf, Slot, useContext } from '@builder.io/qwik';
import CarouselContextId from './carousel-context-id';

type CarouselContainerProps = PropsOf<'div'>;

export const CarouselContainer = component$((props: CarouselContainerProps) => {
  const context = useContext(CarouselContextId);

  return (
    <div
      ref={context.containerRef}
      style={{
        transform: `translate3d(${context.slideOffsetSig.value}px, 0px, 0px)`,
        transitionDuration: `${context.transitionDurationSig.value}ms`,
        transitionDelay: '0ms',
        width: context.carouselWidth,
        height: context.carouselHeight,
      }}
      {...props}
    >
      <Slot />
    </div>
  );
});
