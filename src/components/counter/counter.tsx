import { component$, useStore } from '@builder.io/qwik'

export default component$(() => {
	const store = useStore({ count: 0 })

	return (
		<div>
			<div class="count_label">Count-- :</div>
			<div class="count">{store.count}</div>
			<button class="increment" onClick$={() => store.count++}>
				increment
			</button>
			<button class="decrement" onClick$={() => store.count--}>
				decrement
			</button>
			<button class="reset" onClick$={() => (store.count = 0)}>
				reset
			</button>
		</div>
	)
})
