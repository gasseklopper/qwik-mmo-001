import type { PropFunction } from '@builder.io/qwik'
import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './button.scss?inline'

export interface ButtonProps {
	onClick$?: PropFunction<() => any>
	label: string
	size?: string
	variant?: string
}

export default component$((props: ButtonProps) => {
	useStyles$(styles)

	return (
		<button
			class={`${props.size} ${props.variant}`}
			onClick$={props.onClick$}
			onDblclick$={async () => {
				if (props.onClick$) {
					const nu = await props?.onClick$()
					console.log('double clicked', nu)
				}
			}}
		>
			{props.label}
		</button>
	)
})
