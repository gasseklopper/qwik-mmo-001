import {
	component$,
	useContext,
} from '@builder.io/qwik';
import { UserContext } from "../context";

export const UserName = component$(() => {
	const user = useContext(UserContext)
	console.log("UserName rerenders")
	return (
		<>
			<p>Username --&gt; {user.username}</p>
		</>
	)
})
