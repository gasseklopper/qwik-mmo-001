import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './friends.scss?inline'

export interface HeadlineProps {
	tag?: any
	text?: string
	size?: string
	variant?: string
}

export default component$<HeadlineProps>(({ tag = 'div', text = '', size = '', variant = '' }) => {
	useStyles$(styles)
console.log('data tag', tag)
console.log('data', text)
console.log('data', size)
console.log('data', variant)
	return (
		<div>
			test
		</div>
	)
})
