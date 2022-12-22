import { component$, useStore } from '@builder.io/qwik'

export const DebouncedInput = component$(() => {
  const state = useStore({
    value: '',
    debouncedValue: '',
  });

  useTask$(({ track }) => {
    track(() => state.value);
    const debounced = setTimeout(() => {
      state.debouncedValue = state.value;
    }, 1000);
    return () => clearTimeout(debounced);
  });

  return (
    <>
      <input value={state.value} onInput$={(ev) => (state.value = (ev.target as HTMLInputElement).value))} />
      <span>{state.debouncedValue}</span>
    </>
  );
});
