import * as LucideIcons from '@qwikest/icons/lucide'
import {
	SVGProps,
	type IntrinsicSVGElements,
} from '@builder.io/qwik'
import { component$, useStyles$ } from '@builder.io/qwik'
import styles from './icon.scss?inline'

type LucideIconName = keyof typeof LucideIcons;

// IconProps type
type IconProps = {
	iconName: LucideIconName
}

type ExtendedIconElement = SVGProps<SVGSVGElement> & {
	'aria-label'?: string
}

// Combine QwikIntrinsicElements and IconProps type
export type ExtendedIconProps = ExtendedIconElement & IconProps

const mainClass = 'icon'

export default component$(({class: className, ...rest}: ExtendedIconProps) => {
	useStyles$(styles)

	const componentClass = className || ''
	const IconComponent = LucideIcons[rest.iconName]

	return <IconComponent {...rest} class={`${mainClass} ${componentClass}`}/>
})
