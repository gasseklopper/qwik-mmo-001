import {
	component$,
	useVisibleTask$,
	useContextProvider,
	useStore,
	createContextId,
} from '@builder.io/qwik'
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from '@builder.io/qwik-city'

import { RouterHead } from './components/router-head/router-head'
import './global.css'
import { supabase } from './utils/supabase'
import type { SiteStore } from './globalContext'
import { GlobalMenuStore } from './globalContext'
import { GlobalStore } from './globalContext'

export const UserSessionContext = createContextId<any>('user-session')

export default component$(() => {
	const userSession: any = useStore({ userId: '', isLoggedIn: false })

	const store = useStore<SiteStore>({
		theme: 'auto',
	})

	const menuStore = useStore({
		isHover: false,
		showOverlay: false,
		showMenu: false,
		showMenuInner: false,
		isHoverId: 0,
		test: 'test',
	})

	// auth change listener
	useVisibleTask$(async () => {
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
	})

	// auth check getUser
	useVisibleTask$(async () => {
		const { data, error } = await supabase.auth.getUser()
		if (data.user?.id && !error) {
			userSession.userId = data.user.id
			userSession.isLoggedIn = true
		} else {
			userSession.userId = ''
			userSession.isLoggedIn = false
		}
	})

	// pass state to children via context
	useContextProvider(GlobalStore, store)
	useContextProvider(GlobalMenuStore, menuStore)
	useContextProvider(UserSessionContext, userSession)

	return (
		<QwikCityProvider>
			<head>
				<meta
					charSet="utf-8"
					name="description"
					content="Halten Sie bei Ihren Meta Descriptions die Länge von 140 bis 160 Zeichen ein, damit Google sie vollständig anzeigt. Verwenden Sie auch Ihr Keyword!"
				/>
				<meta name="robots" content="index"/>
				<link rel="manifest" href="/manifest.json" />
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
				<script
					type="module"
					async
					src="../src/main.js"
				></script>
				<RouterHead />
			</head>
			<body>
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCityProvider>
	)
})
