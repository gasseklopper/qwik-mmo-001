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
		first:"first",
		last:"last",
	});

	useContextProvider(UserContext, userData);
	return (
		<>
			<Layout />
		</>
	);
});