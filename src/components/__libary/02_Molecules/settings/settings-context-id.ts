import { createContextId } from '@builder.io/qwik';
import { type SettingsContext } from './settings-context.type';

const CarouselContextId = createContextId<SettingsContext>('carousel-context');

export default CarouselContextId;
