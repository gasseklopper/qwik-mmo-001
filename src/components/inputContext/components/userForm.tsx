import {
	component$,
	useContext,
} from '@builder.io/qwik';
import { UserContext } from "../context";

export const UserForm = component$(() => {
	const user = useContext(UserContext)
	return (
		<>
			<div>
				<label>
					First name --&gt;
					<input
						onInput$={(e) => user.first = (e.target as HTMLInputElement).value}
					/>
				</label>
			</div>
			<div>
				<label>
					Last name --&gt;
					<input
						onInput$={(e) => user.last = (e.target as HTMLInputElement).value}
					/>
				</label>
			</div>
		</>
	)
})
