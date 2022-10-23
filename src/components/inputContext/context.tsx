import {
	component$,
	useStore,
	useContextProvider,
	createContext,
} from '@builder.io/qwik';
import { Layout } from "./layout";

interface UserStore {
	first: string,
    last: string,
}

export const UserContext = createContext<UserStore>('User')

export const Stores = component$(() => {
	const userData = useStore({
		first:"test",
		last:"test",
	});

	useContextProvider(UserContext, userData);
	return (
		<>
			<Layout />
		</>
	);
});