import * as LucideIcons from '@qwikest/icons/lucide'
import type {
	IntrinsicSVGElements,
} from '@builder.io/qwik'
import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './icon.scss?inline'

type LucideIconName = keyof typeof LucideIcons;

// IconProps type
type IconProps = {
	iconName: LucideIconName
}

type ExtendedIconElement = IntrinsicSVGElements['svg'] & {
	'aria-label'?: string
}

// Combine QwikIntrinsicElements and IconProps type
export type ExtendedIconProps = ExtendedIconElement & IconProps

export default component$(({ ...props }: ExtendedIconProps) => {
	useStyles$(styles)

	// Dynamically select Lucide icon based on the propName prop
	const IconComponent = LucideIcons[props.iconName]

	return <IconComponent {...props}/>
})
