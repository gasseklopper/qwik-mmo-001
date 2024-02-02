import {
	QwikIntrinsicElements,
	Slot,
	component$,
	useStore,
	useStyles$,
} from '@builder.io/qwik'
import styles from './modal.scss?inline'

export interface ModalProps {
	// headlineTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	// headlineClass?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	// weight?: 'regular' | 'bold'
	// variant?: 'bodytext' | 'subline' | 'eyebrow' | 'browLine'
}

type ExtendedModalElement = QwikIntrinsicElements['dialog'] & {
	'aria-label'?: string
}

export type ExtendedProductCategoryProps = ExtendedModalElement & ModalProps

const mainClass = 'modal'

export default component$(
	({ class: className, ...rest }: ExtendedProductCategoryProps) => {

		useStyles$(styles)
		const componentClass = className || ''

		const store = useStore({ open: false })



		// const ComponentTag = rest.headlineTag || 'h2'
		// const componentVariant = rest.variant || 'bodytext'
		// const componentWeight = rest.weight || 'regular'
		// const componentBaseClass = rest.headlineClass || rest.headlineTag || 'h2'

		return (
			<>
				<dialog {...rest} open={store.open} class={`${mainClass} ${componentClass}`}>
					test
					<Slot />
					<form>
						<button type='button'>OK</button>
						<button type='button' onClick$={() => store.open = false}>cancel</button>
					</form>
				</dialog>
				<button onClick$={() => store.open = true}>Show the dialog</button>
			</>
		)
	}
)
