import {
	component$,
	useClientEffect$,
	useContextProvider,
	useStore,
	createContext,
} from '@builder.io/qwik'
import {
	QwikCity,
	RouterOutlet,
	ServiceWorkerRegister,
} from '@builder.io/qwik-city'
import { RouterHead } from './components/router-head/router-head'
// import { ColorStuff } from './components/color-stuff/color-stuff'
import './global.css'
import { supabase } from './utils/supabase'

export const UserSessionContext = createContext('user-session')

export default component$(() => {
	const userSession: any = useStore({ userId: '', isLoggedIn: false })

	// color shema
	useClientEffect$(
		() => {
			const doc = document.firstElementChild
			const selectetdShema = localStorage.getItem('color-scheme')
			doc!.setAttribute('color-scheme', selectetdShema!)
			doc!.setAttribute('lang', 'de')
			if (!localStorage.getItem('color-scheme')) {
				console.log('not as ', localStorage.getItem('color-scheme'))
				if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
					doc!.setAttribute('color-scheme', 'dark')
					localStorage.setItem('color-scheme', 'dark')
				}
				if (
					window.matchMedia('(prefers-color-scheme: light)').matches
				) {
					doc!.setAttribute('color-scheme', 'lights2')
					localStorage.setItem('color-scheme', 'lights2')
				}
			}
		},
		{
			eagerness: 'load', // 'load' | 'visible' | 'idle'
		}
	)

	// auth change listener
	useClientEffect$(
		async () => {
			const { data: authListener } = supabase.auth.onAuthStateChange(
				async (event: string, session: any) => {
					console.log('its event', event)
					console.log('its session', session)
					console.log('its authListener', authListener)
					if (event === 'SIGNED_IN') {
						console.log('signed in')
						// Send cookies to Server
						// set Auth State for context
						userSession.userId = session.user.id
						userSession.isLoggedIn = true
					}
					if (event === 'SIGNED_OUT') {
						console.log('signed OUT')
						// Sign out User
						// set Auth State for context
						userSession.userId = ''
						userSession.isLoggedIn = false
					}
				}
			)

			// Cleanup Event Listener
			return () => {
				authListener?.subscription.unsubscribe()
			}
		},
		{
			eagerness: 'load', // 'load' | 'visible' | 'idle'
		}
	)

	// auth check getUser
	useClientEffect$(
		async () => {
			const { data, error } = await supabase.auth.getUser()
			if (data.user?.id && !error) {
				userSession.userId = data.user.id
				userSession.isLoggedIn = true
			} else {
				userSession.userId = ''
				userSession.isLoggedIn = false
			}
		},
		{
			eagerness: 'load', // 'load' | 'visible' | 'idle'
		}
	)

	// pass state to children via context
	useContextProvider(UserSessionContext, userSession)
	return (
		<QwikCity>
			<head>
				<meta
					charSet="utf-8"
					name="description"
					content="Halten Sie bei Ihren Meta Descriptions die Länge von 140 bis 160 Zeichen ein, damit Google sie vollständig anzeigt. Verwenden Sie auch Ihr Keyword!"
				/>
				<link rel="preconnect" href="https://fonts.gstatic.com"></link>
				<link
					rel="preload"
					as="style"
					href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
				></link>
				<link
					href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
					rel="stylesheet"
				></link>
				<RouterHead />
			</head>
			<body>
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCity>
	)
})
