
import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import UnsplashApi from '~/components/unsplashApi/unsplashApi';

export default component$(() => {
  return (
    <>
		<UnsplashApi />
    </>
  );
});

export const head: DocumentHead = {
  title: 'unsplash-api',
};
