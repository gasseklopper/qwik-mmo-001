import { keyframes, createVar } from '@vanilla-extract/css'
import { style, styled } from 'styled-vanilla-extract/qwik'

export const bg_color = createVar()

const rotate = keyframes({
	'0%': { transform: 'rotate(0deg)' },
	'100%': { transform: 'rotate(360deg)' },
})

export const Label = styled.h3`
	user-select: none;
	padding: 10;
`

export const containerBase = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
	width: 120,
	height: 120,
	borderRadius: '20%',
	color: 'white',
	userSelect: 'none',
})

export const cssAnim = style([
	containerBase,
	{
		backgroundColor: bg_color,
		animation: `${rotate} linear 3s infinite`,
	},
])

export const gsapAnim = style([
	containerBase,
	{
		backgroundColor: bg_color,
	},
])

export const slides = style({
	width: '100%',
	height: '100vh',
	overflow: 'hidden',
	display: 'grid',
	gridTemplateRows: '100%',
	gridTemplateColumns: '100%',
	placeItems: 'center',
	backgroundColor: '#111',
})

export const slideBase = style({
	width: '100%',
	height: '104%',
	gridArea: '1 / 1 / -1 / -1',
	overflow: 'hidden',
	position: 'relative',
	willChange: 'transform',
})

export const slide = style([
	slideBase,
	{
		pointerEvents: 'none',
		opacity: '1',
	},
])

export const slideCurrent = style([
	slideBase,
	{
		pointerEvents: 'auto',
		opacity: '1',
	},
])

export const slideInner = style({
	width: '100%',
	height: '100%',
	display: 'grid',
	gridTemplateRows: '100%',
	gridTemplateColumns: '100%',
	// overflow: 'hidden',
	position: 'relative',
	willChange: 'transform',
})

export const slideImage = style({
	gridArea: '1 / 1 / -1 / -1',
	// overflow: 'hidden',
	position: 'relative',
	cursor: 'pointer',
	zIndex: '1',
})

export const slideImageInner = style({
	width: '100%',
	height: '100%',
	backgroundSize: 'cover',
	backgroundPosition: '50% 50%',
	backgroundRepeat: 'no-repeat',
	willChange: 'transform',
})

export const slideContent = style({
	width: '100%',
	height: '100%',
	backgroundSize: 'cover',
	backgroundPosition: '50% 50%',
	backgroundRepeat: 'no-repeat',
	willChange: 'transform',
})

export default 'CSS' // required 🤔
