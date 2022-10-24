import { component$, useStyles$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import { QwikLogo } from '../icons/qwik'
import  MainNav  from '../layout/mainNav/mainNav'
import styles from './header.css?inline'

export default component$(() => {
	useStyles$(styles)

	const { pathname } = useLocation()

	return (
		<>
			<header>
				<a class="logo" href="/" aria-label="Logo">
					<QwikLogo />
				</a>
				<nav>
					<a
						href="/docs"
						class={{ active: pathname.startsWith('/docs') }}
						aria-label="Docs"
					>
						Docs
					</a>
					<a
						href="/about-us"
						class={{ active: pathname.startsWith('/about-us') }}
						aria-label="About Us"
					>
						About Us
					</a>
					<a
						href="/input-context"
						class={{ active: pathname.startsWith('/input-context') }}
						aria-label="input-context"
					>
						input-context
					</a>
					<a
						href="/clock"
						class={{ active: pathname.startsWith('/clock') }}
						aria-label="Clock"
					>
						Clock
					</a>
					<a
						href="/use-styles"
						class={{ active: pathname.startsWith('/use-styles') }}
						aria-label="use-styles"
					>
						Use Styles
					</a>
					<a
						href="/use-reference"
						class={{ active: pathname.startsWith('/use-reference') }}
						aria-label="use-reference"
					>
						Use Reference
					</a>
					<a
						href="/use-context"
						class={{ active: pathname.startsWith('/use-context') }}
						aria-label="use-context"
					>
						Use Context
					</a>
					<a
						href="/unsplash-api"
						class={{ active: pathname.startsWith('/unsplash-api') }}
						aria-label="use-context"
					>
						Unsplash Api
					</a>
					<a
						href="/counter"
						class={{ active: pathname.startsWith('/counter') }}
						aria-label="Counter"
					>
						Counter
					</a>
					<a
						href="/star-wars-api"
						class={{ active: pathname.startsWith('/star-wars-api') }}
						aria-label="Star Wars"
					>
						Star Wars
					</a>
					<a
						href="/hacker-news"
						class={{ active: pathname.startsWith('/hacker-news') }}
						aria-label="Star Wars"
					>
						Hacker News
					</a>
				</nav>
			</header>
			<MainNav/>
		</>
	)
})
