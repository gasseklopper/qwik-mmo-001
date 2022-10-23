import {
	component$,
	useContext,
} from '@builder.io/qwik';
import { LastName } from "./lastName";
import { FirstName } from "./firstName";
import { UserContext } from "../context";

export const UserDisplay = component$(() => {
	const user = useContext(UserContext)
	return (
		<>
			<FirstName firstName={user.first}/>
			<LastName/>
		</>
	)
})
