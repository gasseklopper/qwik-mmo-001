import {
	component$,
	useStore,
	useContextProvider,
	createContext,
	useRef,
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

export const UserContext = createContext<UserStore>('User')

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
	const username = useRef()
	const first = useRef()
	const last = useRef()
	const email = useRef()
	const password = useRef()

	return (
		<div className="container">
			<div className="input">
				<QwikTextField name="Username" reference={username} />
			</div>
			<div className="input">
				<QwikTextField name="First Name" reference={first} />
			</div>
			<div className="input">
				<QwikTextField name="Last Name" reference={last} />
			</div>
			<div className="input">
				<QwikTextField name="Email" reference={email} />
			</div>
			<div className="input">
				<QwikTextField name="Password" reference={password} />
			</div>
		</div>
	)
})
