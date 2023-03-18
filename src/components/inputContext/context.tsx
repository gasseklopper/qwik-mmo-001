import {
	component$,
	useStore,
	useContextProvider,
	createContextId,
	useSignal,
} from '@builder.io/qwik'
import QwikTextField from '~/components/QwikTextField/index'
import { Layout } from './layout'

interface UserStore {
	first: string
	last: string
	username: string
	email: string
	password: string
}

export const UserContext = createContextId<UserStore>('User')

export const Stores = component$(() => {
	const userData = useStore({
		first: 'first',
		last: 'last',
		password: 'password',
		email: 'email',
		username: 'username',
	})

	useContextProvider(UserContext, userData)
	return (
		<>
			<Login />
			<Layout />
		</>
	)
})

export const Login = component$(() => {
	const username = useSignal()
	const first = useSignal()
	const last = useSignal()
	const email = useSignal()
	const password = useSignal()

	return (
		<div class="container">
			<div class="input">
				<QwikTextField name="Username" reference={username} />
			</div>
			<div class="input">
				<QwikTextField name="First Name" reference={first} />
			</div>
			<div class="input">
				<QwikTextField name="Last Name" reference={last} />
			</div>
			<div class="input">
				<QwikTextField name="Email" reference={email} />
			</div>
			<div class="input">
				<QwikTextField name="Password" reference={password} />
			</div>
		</div>
	)
})
