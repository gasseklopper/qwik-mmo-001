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

export default 'CSS' // required 🤔

// .slider {
// 	&__overview {
// 		display: flex;
// 	}

// 	&__overview-item {
// 		height: 20px;
// 		width: 20px;
// 		margin-right: 8px;
// 		background-color: var(--text1);

// 		&--active {
// 			border: 5px solid var(--surface6);
// 		}
// 	}

// 	&__autoPlay-progressBar {
// 		height: 20px;
// 		background-color: aqua;
// 	}
// }

// .go {
// 	color: green;
// }

// .stop {
// 	color: red;
// }

// .slides {
// 	width: 100%;
// 	height: 100vh;
// 	overflow: hidden;
// 	display: grid;
// 	grid-template-rows: 100%;
// 	grid-template-columns: 100%;
// 	place-items: center;
// 	// background-color: yellow;
// }

// .slide {
// 	width: 100%;
// 	height: 104%;
// 	grid-area: 1 / 1 / -1 / -1;
// 	pointer-events: none;
// 	opacity: 0;
// 	overflow: hidden;
// 	position: relative;
// 	will-change: transform;
// }

// .slide--current {
// 	pointer-events: auto;
// 	opacity: 1;
// 	// background-color: green;
// }

// .slide__inner {
// 	width: 100%;
// 	height: 100%;
// 	display: grid;
// 	grid-template-rows: 100%;
// 	grid-template-columns: 100%;
// 	position: relative;
// 	overflow: hidden;
// 	will-change: transform;
// }

// .slide__img {
// 	grid-area: 1 / 1 / -1 / -1;
// 	overflow: hidden;
// 	position: relative;
// 	cursor: pointer;
// 	z-index: 1;
// }

// .slide__img-inner {
// 	width: 100%;
// 	height: 100%;
// 	background-size: cover;
// 	background-position: 50% 50%;
// 	background-repeat: no-repeat;
// 	will-change: transform;
// }

// .slide__content {
// 	grid-area: 1 / 1 / -1 / -1;
// 	display: grid;
// 	background: red;
// 	align-content: center;
// 	justify-content: center;
// 	display: grid;
// 	padding: 1rem;
// 	grid-template-rows: auto auto auto;
// 	grid-template-columns: 1fr 1fr;
// 	grid-column-gap: 2rem;
// 	grid-template-areas: 'img title' 'img text' 'img ...';
// }

// .slide__content-img {
// 	height: 300px;
// 	background-size: cover;
// 	background-position: 50% 50%;
// 	grid-area: img;
// 	will-change: transform;
// }

// .slide__content h2 {
// 	grid-area: title;
// 	font-weight: 200;
// 	font-size: clamp(3rem, 2vw, 3rem);
// 	text-transform: none;
// 	margin: 0 0 3rem 0;
// 	line-height: 1;
// }

// .slide__content p {
// 	grid-area: text;
// 	max-width: 260px;
// 	line-height: 1.5;
// 	margin: 0;
// 	color: rgba(255, 255, 255, 0.5);
// }

// @media screen and (min-width: 53em) {
// 	.frame {
// 		grid-template-columns: auto auto auto;
// 		grid-template-rows: auto auto;
// 		grid-template-areas: 'back ... sponsor' 'nav info title';
// 		align-content: space-between;
// 	}
// 	.frame__info {
// 		justify-self: center;
// 	}
// 	.slide__content {
// 		grid-template-rows: auto auto auto;
// 		grid-template-columns: 220px 300px;
// 		grid-column-gap: 2rem;
// 		grid-template-areas: 'img title' 'img text' 'img ...';
// 	}
// }
