import { component$, useTask$, useStore } from '@builder.io/qwik'

interface State {
	count: number
	debounced: number
}

export default component$(() => {
	const store = useStore<State>({
		count: 0,
		debounced: 0,
	})

	useTask$(({ track }) => {
		// track changes in store.count
		track(() => store.count)

		const timer = setTimeout(() => {
			store.debounced = store.count
		}, 3001)
		return () => {
			clearTimeout(timer)
		}
	})

	console.log('<App> renders')
	return (
		<div>
			<Child state={store} />
			<button class="increment" onClick$={() => store.count++}>
				+
			</button>
		</div>
	)
})

export const Child = component$((props: { state: State }) => {
	console.log('<Child> render')
	return (
		<div>
			<div>Count:</div>
			<div class="count_child">{props.state.count}</div>
			<GrandChild state={props.state} />
		</div>
	)
})

export const GrandChild = component$((props: { state: State }) => {
	console.log('<GrandChild> render')
	return (
		<>
			<div>Count Debounced:</div>
			<div class="count_grandChild">{props.state.debounced}</div>
		</>
	)
})
