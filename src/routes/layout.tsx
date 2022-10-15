import { component$, Slot } from '@builder.io/qwik';
import Footer from '~/components/footer/footer';
import Clock from '~/components/clock/clock';
import Counter from '~/components/counter/counter';
import AutoComplete from '~/components/autoComplete/autoComplete';
import Debounced from '~/components/debounced/debounced';
import Header from '~/components/header/header';

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
		<Counter />
		<Clock />
		<AutoComplete />
		<Debounced />
      </main>
      <Footer />
    </>
  );
});
