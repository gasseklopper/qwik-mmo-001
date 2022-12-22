import {
	component$,
	useStore,
	useStyles$,
	useClientEffect$,
} from '@builder.io/qwik'
import styles from './circle-animation.css?inline'
import useAnimation from './useAnimation'

export default component$(() => {
	useStyles$(styles)

	const store = useStore({
		hour: 10,
		minute: 20,
		second: 30,
	})

	useClientEffect$(() => {
		const update = () => {
			const now = new Date()
			store.second = now.getSeconds() * (360 / 60)
			store.minute = now.getMinutes() * (360 / 60)
			store.hour = now.getHours() * (360 / 12)
		}
		update()
		const tmrId = setInterval(update, 1000)
		return () => clearInterval(tmrId)
	})
	// const animation1 = useAnimation('elastic', 600, 0)
	// const animation2 = useAnimation('elastic', 600, 150)
	// const animation3 = useAnimation('elastic', 600, 300)

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				width: '100%',
				height: '100px',
			}}
		>
			<Ball
			// innerStyle={{
			// 	marginTop: animation1 * 200 - 100,
			// }}
			/>

			<Ball
			// innerStyle={{
			// 	marginTop: animation2 * 200 - 100,
			// }}
			/>

			<Ball
			// innerStyle={{
			// 	marginTop: animation3 * 200 - 100,
			// }}
			/>
		</div>
	)
})

export const Ball = component$(({ innerStyle }: any) => {
	return (
		<div
			style={{
				width: '100px',
				height: '100px',
				marginRight: '40px',
				borderRadius: '50%',
				backgroundColor: '#4dd5fa',
				...innerStyle,
			}}
		/>
	)
})
