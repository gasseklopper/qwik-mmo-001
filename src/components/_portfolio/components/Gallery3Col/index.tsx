import { component$, useStyles$, $ } from '@builder.io/qwik'
import styles from './gallery-3-Col.scss?inline'
import Controls from './controls'
import { Stores } from "./context";

export default component$(() => {
	return (
		<Stores/>
	);
})

