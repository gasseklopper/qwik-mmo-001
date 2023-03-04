import { component$, useStore, $, useSignal } from '@builder.io/qwik'
import { validateEmail } from '~/utils/helpers'
import { supabase } from '~/utils/supabase'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
	const message: any = useStore({ message: undefined, status: 'error' })
	const isLoading = useSignal(false)

	// handle Email signup
	const handleEmailSignup = $(async (event: any) => {
		// Initilaize resets
		message.message = undefined
		message.status = 'error'
		isLoading.value = true

		// Value extraction
		const email = event.target.email.value
		const terms = event.target.terms.checked
		const inputPass = event.target.password.value
		const isEmailValid = validateEmail(email)

		// Email validation
		if (!isEmailValid) {
			message.message = 'u must have a valid email'
			isLoading.value = false
			return
		}

		// Terms validation
		if (!terms) {
			message.message = 'u must have accept the agbs'
			isLoading.value = false
			return
		}
		// Set Password
		// const timestamp = Date.now()
		// const pwd = Math.floor(Math.random() * 1000000) + email + timestamp

		// Create User in superbase
		const { data, error } = await supabase.auth.signUp({
			email: email,
			password: inputPass,
		})

		// confirm signup
		if (data?.user?.id) {
			message.message = 'Success. Pleas check your email and spam folders'
			message.status = 'success'
			isLoading.value = false
			return
		} else {
			message.message =
				'there was a problem creating this user' + error?.message
			message.status = 'error'
			isLoading.value = false
			return
		}
	})

	return (
		<>
			<h1>signup</h1>
			<form onSubmit$={handleEmailSignup} preventdefault:submit>
				<div>
					<label for="email">email: </label>
					<input class="email" id="email" name="email" />
				</div>
				<div>
					<label for="password">password: </label>
					<input
						class="password"
						id="password"
						name="password"
						type="password"
					/>
				</div>
				<div>
					<label for="terms">terms: </label>
					<input
						class="terms"
						id="terms"
						name="terms"
						type="checkbox"
					/>
				</div>

				<button type="submit" disabled={isLoading.value}>
					submit
				</button>
			</form>
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
