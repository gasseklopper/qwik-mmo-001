import { component$, useStore, $ } from '@builder.io/qwik'
import Button from '../__libary/atoms/button/button'

const TestButtonDataMock = {
	label: 'testtesttesttesttesttesttest',
	variant: 'primary',
	size: 'medium',
	class: 'increment',
	onClick: $(() => {
		console.log('test')
	}),
	number: 12331,
}

const IncrementButton = {
	label: 'Increment',
	variant: 'primary',
	size: 'medium',
	class: 'increment',
	number: 12331,
}

const DecremntButton = {
	label: 'decrement',
	variant: 'primary',
	size: 'medium',
	class: 'decrement',
	number: 12331,
}

const ResetButton = {
	label: 'reset',
	variant: 'primary',
	size: 'medium',
	class: 'reset',
	number: 12331,
}

export default component$(() => {
	const store = useStore({ count: 0 })

	const increment = $(() => {
		store.count++
	})
	const decrement = $(() => {
		store.count--
	})
	const reset = $(() => {
		store.count = 0
	})

	return (
		<div>
			<Button
				size={TestButtonDataMock.number}
				class={TestButtonDataMock.class}
				label={TestButtonDataMock.label}
				onClick$={TestButtonDataMock.onClick}
				aria-label={TestButtonDataMock.label}
			>
				{TestButtonDataMock.label}
			</Button>
			<div class="count_label">Count-- :</div>
			<div class="count">{store.count}</div>
			<hr />
			<Button
				class={IncrementButton.class}
				onClick$={increment}
				aria-label={IncrementButton.label}
			>
				{IncrementButton.label}
			</Button>
			<Button
				class={DecremntButton.class}
				onClick$={decrement}
				aria-label={DecremntButton.label}
			>
				{DecremntButton.label}
			</Button>
			<Button
				class={ResetButton.class}
				onClick$={reset}
				aria-label={ResetButton.label}
			>
				{ResetButton.label}
			</Button>
		</div>
	)
})
