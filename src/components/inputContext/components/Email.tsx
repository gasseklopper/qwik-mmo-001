import {
	component$,
	useContext,
} from '@builder.io/qwik';
import { UserContext } from "../context";

export const Email = component$(() => {
	const user = useContext(UserContext)
	console.log("email rerenders")
	return (
		<>
			<p>Password --&gt; {user.email}</p>
		</>
	)
})
