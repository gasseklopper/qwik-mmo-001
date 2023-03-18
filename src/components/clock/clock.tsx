import {
	component$,
	useStore,
	useStyles$,
	useVisibleTask$,
} from '@builder.io/qwik'
import styles from './clock.css?inline'

export default component$(() => {
	useStyles$(styles)

	const store = useStore({
		hour: 10,
		minute: 20,
		second: 30,
	})

	useVisibleTask$(() => {
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

	return (
		<>
			<div class="clock">
				<div class="twelve"></div>
				<div class="three"></div>
				<div class="six"></div>
				<div class="nine"></div>
				<div
					class="hour"
					style={{ transform: `rotate(${store.hour}deg)` }}
				></div>
				<div
					class="minute"
					style={{ transform: `rotate(${store.minute}deg)` }}
				></div>
				<div
					class="second"
					style={{ transform: `rotate(${store.second}deg)` }}
				></div>
			</div>
			<img
				src="../../assets/qwik-logo.svg"
				width="640"
				height="360"
				alt="qwik logo"
			/>
		</>
	)
})
