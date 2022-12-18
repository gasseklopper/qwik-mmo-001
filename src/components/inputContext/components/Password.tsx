import {
	component$,
	useContext,
} from '@builder.io/qwik';
import { UserContext } from "../context";

export const Password = component$(() => {
	const user = useContext(UserContext)
	console.log("lastname rerenders")
	return (
		<>
			<p>Password --&gt; {user.password}</p>
		</>
	)
})
