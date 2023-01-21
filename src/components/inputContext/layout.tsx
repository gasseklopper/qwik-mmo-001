import { component$ } from '@builder.io/qwik'
import { UserDisplay } from './components/userDisplay'
// import { UserForm } from "./components/userForm";

export const Layout = component$(() => {
	return (
		<>
			<UserDisplay />
			{/* <UserForm/> */}
		</>
	)
})
