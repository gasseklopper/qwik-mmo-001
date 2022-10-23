import {
	component$,
	useContext,
} from '@builder.io/qwik';
import { UserContext } from "../context";

export const LastName = component$(() => {
	const user = useContext(UserContext)
	console.log("lastname rerenders")
	return (
		<>
			<p>Last name --&gt; {user.last}</p>
		</>
	)
})
