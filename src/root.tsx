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
import type { AppState, SiteStore } from './globalContext'
import { AppContext, GlobalMenuStore } from './globalContext'
import { GlobalStore } from './globalContext'
import OverlayContainer from './components/__libary/01_Atoms/overlayContainer/overlayContainer'
import Cursor from './components/__libary/01_Atoms/cursor/cursor'
import ScrollTop from './components/__libary/01_Atoms/scrollTop/scrollTop'
import siteConfig from "./config/siteConfig.json";


export const UserSessionContext = createContextId<any>('user-session')

const initialAppState: AppState = {
	mode: "",
	direction: false,
	layout: "",
	overlay: "",
	switcherDir: "right",
	stopScrollTop: false,
};

export default component$(() => {
	const userSession: any = useStore({ userId: '', isLoggedIn: false })

	const store = useStore<SiteStore>({
		theme: 'auto',
		settings: false,
		isSettingsOpen: false,
	})

	const menuStore = useStore({
		isHover: false,
		showOverlay: false,
		showMenu: false,
		showMenuInner: false,
		isHoverId: 0,
		test: 'test',
	})

	const appState = useStore<AppState>(initialAppState);

	// auth change listener
	// eslint-disable-next-line qwik/no-use-visible-task
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
	// eslint-disable-next-line qwik/no-use-visible-task
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
	useContextProvider(AppContext, appState)
	useContextProvider(UserSessionContext, userSession)

	return (
		<QwikCityProvider>
			<head>
				<meta
					charSet="utf-8"
					name="description"
					content={siteConfig.metadata.description}
				/>
				<meta name="robots" content="index" />
				<meta name="author" content={siteConfig.metadata.author}/>
				<meta property="og:image" content={siteConfig.metadata.image} />
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
				<RouterHead />
			</head>
			<body>
				<Cursor />
				<ScrollTop />
				<OverlayContainer />
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCityProvider>
	)
})
