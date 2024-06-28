import { component$, type PropsOf, Slot, useContext } from '@builder.io/qwik';
import CarouselContextId from './settings-context-id';

type CarouselContainerProps = PropsOf<'div'>;

export const SettingsButton = component$((props: CarouselContainerProps) => {
  const context = useContext(CarouselContextId);

  return (
    <div
      ref={context.containerRef}
      {...props}
    >
      <Slot />
    </div>
  );
});
