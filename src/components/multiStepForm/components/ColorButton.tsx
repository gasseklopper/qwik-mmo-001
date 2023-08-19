import { component$, type PropFunction } from '@builder.io/qwik'
import clsx from 'clsx'

type ColorButtonProps = {
	type?: 'button' | 'submit'
	color: 'green' | 'yellow' | 'purple' | 'blue' | 'red'
	label: string
	onClick$: PropFunction<() => void>
	width?: 'auto'
}

/**
 * Button with a specified color that is used for demo purposes in our
 * playground.
 */
export const ColorButton = component$(
	({ type = 'button', color, label, onClick$, width }: ColorButtonProps) => (
		<button
			class={clsx(
				'h-14 rounded-2xl border-2 bg-white px-5 font-medium dark:bg-gray-900 md:h-16 md:text-lg lg:h-[70px] lg:px-6 lg:text-xl',
				color === 'green' &&
					'border-emerald-600/20 text-emerald-600 hover:bg-emerald-600/10 dark:border-emerald-400/20 dark:text-emerald-400 dark:hover:bg-emerald-400/10',
				color === 'yellow' &&
					'border-yellow-600/20 text-yellow-600 hover:bg-yellow-600/10 dark:border-amber-300/20 dark:text-amber-300 dark:hover:bg-amber-300/10',
				color === 'purple' &&
					'border-purple-600/20 text-purple-600 hover:bg-purple-600/10 dark:border-purple-400/20 dark:text-purple-400 dark:hover:bg-purple-400/10',
				color === 'blue' &&
					'border-sky-600/20 text-sky-600 hover:bg-sky-600/10 dark:border-sky-400/20 dark:text-sky-400 dark:hover:bg-sky-400/10',
				color === 'red' &&
					'border-red-600/20 text-red-600 hover:bg-red-600/10 dark:border-red-400/20 dark:text-red-400 dark:hover:bg-red-400/10',
				width !== 'auto' && 'w-full md:w-auto'
			)}
			type={type}
			preventdefault:click={type === 'submit'}
			onClick$={onClick$}
		>
			{label}
		</button>
	)
)
