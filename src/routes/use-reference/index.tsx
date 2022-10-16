
import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import UseReference from '~/components/useReference/useReference';

export default component$(() => {
  return (
    <>
		<UseReference />
    </>
  );
});

export const head: DocumentHead = {
  title: 'use-reference',
};
