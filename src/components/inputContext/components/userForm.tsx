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
				<label htmlFor="">
					First name --&gt;
					<input
						onInput$={(e) => user.first = e.target.value}
					/>
				</label>
			</div>
			<div>
				<label htmlFor="">
					Last name --&gt;
					<input
						onInput$={(e) => user.last = e.target.value}
					/>
				</label>
			</div>
		</>
	)
})
