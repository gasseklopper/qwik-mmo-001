import { component$, useVisibleTask$, useSignal } from '@builder.io/qwik'
import { supabase } from '~/utils/supabase'
import type { DocumentHead } from '@builder.io/qwik-city'
// import { useNavigate } from '@builder.io/qwik-city'

export default component$(() => {
	const isProtectedOk = useSignal(false)
	// const nav = useNavigate()

	// useClientEffect$(
	// 	async () => {
	// 		const timeout = setTimeout(async () => {
	// 			const { data, error } = await supabase.auth.getSession()

	// 			if (data.session?.access_token) {
	// 				isProtectedOk.value = true
	// 				nav.path = '/start'
	// 			} else {
	// 				console.error(error)
	// 				nav.path = '/login'
	// 			}
	// 		}, 1500)

	// 		return () => {
	// 			clearTimeout(timeout)
	// 		}
	// 	},
	// 	{
	// 		eagerness: 'load', // 'load' | 'visible' | 'idle'
	// 	}
	// )

	useVisibleTask$(async () => {
		const timeout = setTimeout(async () => {
			const { data, error } = await supabase.auth.getUser()
			console.log(data)
			console.log(error)
			console.log('useclienteffect working')
		}, 6500)
		return () => {
			clearTimeout(timeout)
		}
	})
	return (
		<>
			{isProtectedOk.value && (
				<>
					<h1>Staging</h1>
					<a href="">link</a>
				</>
			)}
			test superbase
		</>
	)
})

export const head: DocumentHead = {
	title: 'Clock',
}
