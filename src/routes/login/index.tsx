import {
	component$,
	useStore,
	$,
	useSignal,
	useTask$,
	useClientEffect$,
	useContext,
} from '@builder.io/qwik'
import { validateEmail } from '~/utils/helpers'
import { supabase } from '~/utils/supabase'
import type { DocumentHead } from '@builder.io/qwik-city'
import { useLocation } from '@builder.io/qwik-city'
import { UserSessionContext } from '~/root'

export default component$(() => {
	const message: any = useStore({ message: undefined, status: 'error' })
	const isLoading = useSignal(false)
	const isProtectedOk = useSignal(false)
	const location = useLocation()

	useTask$(() => {
		console.log(location)
	})

	// handle Email Login
	const handleEmailLogin = $(async (event: any) => {
		// Initilaize resets
		message.message = undefined
		message.status = 'error'
		isLoading.value = true

		// Value extraction
		const email = event.target.email.value
		const inputPass = event.target.password.value
		const isEmailValid = validateEmail(email)

		// Email validation
		if (!isEmailValid) {
			message.message = 'u must have a valid email'
			isLoading.value = false
			return
		}

		// Sign in with supabase magic link
		// const { data, error } = await supabase.auth.signInWithOtp({
		// 	email: email,
		// 	options: {
		// 		emailRedirectTo: location.href + '/staging',
		// 	},
		// })

		// Sign in with supabase Password
		const { data, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: inputPass,
		})

		// confirm Login
		if (data) {
			message.message = 'Success. You are logged in'
			message.status = 'success'
			isLoading.value = false
			return
		} else {
			message.message =
				'there was an error during the login' + error?.message
			message.status = 'error'
			isLoading.value = false
			return
		}
	})

	const userSession: any = useContext(UserSessionContext)

	useClientEffect$(
		async () => {
			const { data, error } = await supabase.auth.getUser()
			console.log('check auth with get user')
			if (data.user?.id && !error) {
				console.log(data)
				isProtectedOk.value = true
				userSession.userId = data.user.id
				userSession.isLoggedIn = true
			} else {
				console.log(error)
				userSession.userId = ''
				userSession.isLoggedIn = false
			}
		},
		{
			eagerness: 'load', // 'load' | 'visible' | 'idle'
		}
	)
	return (
		<>
			<h1>Login</h1>
			{!userSession.isLoggedIn && (
				<form onSubmit$={handleEmailLogin} preventdefault:submit>
					<div>
						<label for="email">email/username: </label>
						<input
							class="email"
							id="email"
							value="m-morley@gmx.de"
						/>
					</div>
					<div>
						<label for="password">password: </label>
						<input
							class="password"
							id="password"
							type="password"
							value="Manfredist123"
						/>
					</div>
					<button type="submit" disabled={isLoading.value}>
						login
					</button>
				</form>
			)}

			{message.message && (
				<div>
					<p>{message.message}</p>
					<p>{message.status}</p>
				</div>
			)}
		</>
	)
})

export const head: DocumentHead = {
	title: 'Clock',
}
