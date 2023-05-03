import {
	component$,
	useStyles$,
	useContext,
	useVisibleTask$,
	useTask$,
	$,
} from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import {
	colorSchemeChangeListener,
	getColorPreference,
	setPreference,
	ThemeToggle,
} from '../../theme-toggle/theme-toggle'
import styles from './main-nav.scss?inline'
import { GlobalStore, GlobalMenuStore } from '../../../globalContext'

export default component$(() => {
	useStyles$(styles)

	const globalStore = useContext(GlobalStore)
	const globalMenuStore = useContext(GlobalMenuStore)

	useVisibleTask$(() => {
		globalStore.theme = getColorPreference()
		return colorSchemeChangeListener((isDark) => {
			globalStore.theme = isDark ? 'dark' : 'lights2'
			setPreference(globalStore.theme)
		})
	})

	useTask$(({ track }) => {
		// track changes in globalMenuStore...
		track(() => globalMenuStore.isHover)
		track(() => globalMenuStore.showOverlay)
		track(() => globalMenuStore.showMenu)
		track(() => globalMenuStore.showMenuInner)
		track(() => globalMenuStore.isHoverId)
	})

	// const showMenu$ = $(() => {
	// 	// if (globalMenuStore.isHover === true) {
	// 	// 	globalMenuStore.isHover = true
	// 	// }
	// 	// globalMenuStore.showMenu = true
	// })

	const showOverlay$ = $(() => {
		globalMenuStore.showOverlay = true
	})

	const hideMenu$ = $(() => {
		globalMenuStore.showOverlay = false
		globalMenuStore.showMenu = false
		globalMenuStore.isHoverId = 1
	})

	return (
		<>
			<div class="navigation">
				<header class="header">
					<GlobalMenuStoreTest />
					<div
						class={{
							header__overlay: true,
							visible: globalMenuStore.showOverlay,
						}}
					></div>
					<div class="header__top-bar">
						<Logo />
						<ThemeToggle />
					</div>
					<div
						class="header__main"
						onMouseEnter$={showOverlay$}
						onMouseLeave$={hideMenu$}
					>
						<div class="row">
							<div class="column">
								<div class="main-nav">
									<div class="header__main_inner">
										<HeaderItems />
										<ButtonBurger />
									</div>
									<MenuCards />
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
		</>
	)
})

export const ButtonBurger = component$(() => {
	return (
		<button class="header__burger">
			<div class="header__icon"></div>
		</button>
	)
})

export const Logo = component$(() => {
	return (
		<a class="logo" href="/" aria-label="Logo">
			LOGO
		</a>
	)
})

export const GlobalMenuStoreTest = component$(() => {
	const globalMenuStore = useContext(GlobalMenuStore)
	return (
		<div
			onClick$={() => {
				globalMenuStore.test = 'wurst'
			}}
		>
			{globalMenuStore.test}
		</div>
	)
})

export const MenuCards = component$(() => {
	const globalMenuStore = useContext(GlobalMenuStore)
	return (
		<div
			class={{
				header__menu: true,
				visible: globalMenuStore.showMenu,
			}}
			onMouseEnter$={() => (globalMenuStore.isHover = true)}
			onMouseLeave$={() => (globalMenuStore.isHover = false)}
		>
			<div
				class={{
					header__menu_inner: true,
					visible: globalMenuStore.isHoverId === 1,
					test: globalMenuStore.isHoverId === 1,
				}}
				data-header-menu-id="ui-page"
			>
				<div class="row">
					<div class="column small-5">
						<a
							href="#headertitle"
							title="Agile &amp; IT Service Management"
							class="header__subitem active"
							data-header-description-id="0"
							data-btattached="true"
						>
							<span class="header__arrow">›</span>
							<span>Agile &amp; IT Service Management</span>
						</a>
						<a
							href="#sample_content1"
							title="Agile Transformation"
							class="header__subitem"
							data-header-description-id="1"
							data-btattached="true"
						>
							<span class="header__arrow">›</span>
							<span>Agile Transformation</span>
						</a>
						<a
							href="#sample_content2"
							title="Customer Service Management"
							class="header__subitem"
							data-header-description-id="2"
							data-btattached="true"
						>
							<span class="header__arrow">›</span>
							<span>Customer Service Management</span>
						</a>
						<a
							href="#sample_content3"
							title="Digitalisierung in Behörden und Ämtern"
							class="header__subitem"
							data-header-description-id="3"
							data-btattached="true"
						>
							<span class="header__arrow">›</span>
							<span>Digitalisierung der Verwaltung</span>
						</a>
						<a
							href="#sample_content3"
							title="Governance, Risk and Compliance"
							class="header__subitem"
							data-header-description-id="4"
							data-btattached="true"
						>
							<span class="header__arrow">›</span>
							<span>Governance, Risk and Compliance</span>
						</a>
						<a
							href="https://www.mmmmm.com/themen/it-operations-management"
							title="IT Operations Management (ITOM)"
							class="header__subitem"
							data-header-description-id="5"
							data-btattached="true"
						>
							<span class="header__arrow">›</span>
							<span>IT Operations Management</span>
						</a>
						<a
							href="https://www.mmmmm.com/themen/project-portfolio-management"
							title="Project Portfolio Management"
							class="header__subitem"
							data-header-description-id="6"
							data-btattached="true"
						>
							<span class="header__arrow">›</span>
							<span>Project Portfolio Management</span>
						</a>
					</div>
					<div class="column small-5">
						<div
							class="header__description rte visible"
							data-header-description-id="0"
						>
							<p>
								Mit unseren Leistungen im Bereich Agile &amp; IT
								Service Management unterstützen wir unsere
								Kunden bei der optimalen Ausrichtung der Aufbau-
								und Ablauforganisation und digitalisieren und
								automatisieren gängige Aufgaben im Service
								Management – nach klassischen, agilen oder
								hybriden Methoden.
							</p>
						</div>
						<div
							class="header__description rte"
							data-header-description-id="1"
						>
							<p>
								Machen Sie Ihr Business mit agilen
								Vorgehensweisen reaktionsfähiger und flexibler,
								erzeugen Sie einen höheren Business Value für
								sich und Ihre Kunden und gewinnen Sie&nbsp;mit
								einem schnelleren Markteintritt.
							</p>
							<p>
								Durch unsere Erfahrung mit integrierten ITSM und
								DevOps-Umgebungen, Scrum/Kanban und
								strategischer Ausrichtung auf&nbsp;
								<em>scaling agile</em>
								&nbsp;ist die iTSM Group&nbsp;der ideale
								Partner&nbsp;rund um agile Vorgehensweisen und
								organisatorische Transformation.&nbsp;
							</p>
						</div>
						<div
							class="header__description rte"
							data-header-description-id="2"
						>
							<p>
								Mit unseren Leistungen im Bereich Customer
								Service Management (CSM) verhelfen wir
								Service-Organisationen zu einem&nbsp;
								<strong>
									kundenzentrierten und effizienten Arbeiten
								</strong>
								.
							</p>
							<p>
								Mit&nbsp;
								<strong>"AI"-basierten Self-Services</strong>
								&nbsp;ermöglichen Sie Ihren Kunden eine mobile,
								effiziente und 24/7 Interaktion, während Ihren
								Service Agents alle&nbsp;
								<strong>
									kundenrelevanten Informationen zentral
								</strong>
								&nbsp;zur Verfügung stehen – in jedem
								Prozessschritt, abteilungsübergreifend und
								jederzeit aktuell.
							</p>
						</div>
						<div
							class="header__description rte"
							data-header-description-id="3"
						>
							<p>
								Mit reichlich Erfahrung aus Projekten
								verschiedener Verwaltungsebenen und unserer
								Expertise im Service Management stehen wir
								Institutionen im öffentlichen Sektor bei der
								<strong>digitalen Transformation </strong>
								ihrer Prozesse und Strukturen mit Rat und Tat
								zur Seite.
							</p>
							<p>
								Mit stetem Blick auf gesetzliche
								Rahmenbedingungen, Datensouveränität und
								-sicherheit sowie Entscheidungswege sorgen wir
								für passgenaue Lösungen mit echtem Mehrwert -
								für Behörden und Bürger:innen
							</p>
						</div>
						<div
							class="header__description rte"
							data-header-description-id="4"
						>
							<p>
								Mit unseren Leistungen im Bereich Governance,
								Risk and Compliance&nbsp;helfen wir unseren
								Kunden, die laufend wachsenden
								Compliance-Anforderungen aus&nbsp;
								<strong>
									Informationssicherheit, Datenschutz und Risk
									Management
								</strong>
								&nbsp;mit geeigneten Konzepten, Prozessen,
								Dienstleistungen und technischen Lösungen zu
								begegnen.&nbsp;
							</p>
							<p>
								Damit versetzen wir unsere Kunden in die Lage,
								aus der Vielzahl der möglichen und notwendigen
								Maßnahmen die richtigen und leistbaren
								nachhaltig in der Organisation zu verankern.
							</p>
						</div>
						<div
							class="header__description rte"
							data-header-description-id="5"
						>
							<p>
								In einer zunehmend datengetriebenen Welt sind
								die klassischen Methoden und Werkzeuge zur
								Handhabung des IT-Betriebs nicht länger
								zukunftsfähig.
							</p>
							<p>
								Mit unseren Leistungen im Bereich IT Operations
								Management unterstützen wir unsere Kunden bei
								der Modernisierung und Transformation ihres
								IT-Betriebs und helfen Ihnen, die nächste Stufe
								der Automatisierung zu erreichen.&nbsp;
							</p>
						</div>
						<div
							class="header__description rte"
							data-header-description-id="6"
						>
							<p>
								Mit unseren Leistungen&nbsp;im Bereich&nbsp;
								<strong>
									Project Portfolio Management (PPM)&nbsp;
								</strong>
								unterstützen wir unsere Kunden dabei, ihre
								Projektsteuerung&nbsp;besser auf die
								Unternehmensstrategie abzustimmen und die
								Projektarbeit&nbsp;insgesamt effizienter zu
								gestalten - egal ob diese nach&nbsp;
								<em>klassischen oder agilen&nbsp;Ansätzen </em>
								durchgeführt wird.&nbsp;
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				class={{
					header__menu_inner: true,
					visible: globalMenuStore.isHoverId === 2,
					test: globalMenuStore.isHoverId === 2,
				}}
				data-header-menu-id="blog"
			>
				<div class="row">
					<div class="column small-3">
						<p class="h3 color-white spacing-large">
							my blog posts
						</p>
						<a
							href="/blog"
							title="ITSM und PM Schulungen"
							class="button"
							data-btattached="true"
						>
							blog
						</a>
					</div>
					<div class="column small-4">
						{/* {% set blogList = collections.post %}
									{% include "blog/blogNavItemLink.njk" %} */}
					</div>
					<div class="column small-5">
						{/* {% include "blog/blogNavItemLinkDescription.njk" %} */}
					</div>
				</div>
			</div>
			<div
				class={{
					header__menu_inner: true,
					visible: globalMenuStore.isHoverId === 3,
					test: globalMenuStore.isHoverId === 3,
				}}
				data-header-menu-id="portfolio"
			>
				<div class="row">
					<div class="column small-3">
						<div class="header__teaser surface1">
							<h3 class="h3">my portfolio posts</h3>
							<p class="spacing-large">
								er semper orci eget. Faucibus commodo adipiscing
								mi eu nullam accumsan morbi arcu ornare odio mi
								adipiscing nascetur lacus ac interdum morbi
								accumsan vis mi accumsan.
							</p>
							<a
								href="/portfolio"
								title="portfolio"
								class="button button--primary"
								data-btattached="true"
							>
								portfolio
							</a>
						</div>
					</div>
					<div class="column small-4">
						{/* {% set blogList = collections.portfolio %}
									{% include "blog/blogNavItemLink.njk" %} */}
					</div>
					<div class="column small-5">
						{/* {% include "blog/blogNavItemLinkDescription.njk" %} */}
					</div>
				</div>
			</div>
		</div>
	)
})

export const ColorRadio = component$(() => {
	return (
		<div class="header__form">
			<div class="row">
				<div class="column">
					<div class="header__form_inner">
						<form class="header__checkbox_wrapper" action="">
							<p>Please select your color:</p>
							<label for="color1">
								<input
									class="header__checkbox"
									type="radio"
									id="color1"
									name="color"
									value="dark"
								></input>
								1
							</label>
							<label for="color2">
								<input
									class="header__checkbox"
									type="radio"
									id="color2"
									name="color"
									value="lights2"
								></input>
								2
							</label>
							<label for="color3">
								<input
									class="header__checkbox"
									type="radio"
									id="color3"
									name="color"
									value="dim"
								></input>
								3
							</label>
							<label for="color4">
								<input
									class="header__checkbox"
									type="radio"
									id="color4"
									name="color"
									value="sim"
								></input>
								4
							</label>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
})

export const HeaderItems = component$(() => {
	const { url } = useLocation()
	const globalMenuStore = useContext(GlobalMenuStore)
	return (
		<nav class="header__items">
			<a
				href="/start"
				class={{
					visible: globalMenuStore.showMenu,
					header__item: true,
					test: globalMenuStore.isHoverId === 1,
					active: url.pathname.startsWith('/start'),
				}}
				aria-label="start"
				data-header-menu-id="0"
				data-btattached="true"
				onMouseEnter$={() => (
					(globalMenuStore.showMenu = true),
					(globalMenuStore.isHoverId = 1)
				)}
			>
				Home
			</a>
			<a
				href="/portfolio"
				class={{
					visible: globalMenuStore.isHover,
					header__item: true,
					test: globalMenuStore.isHoverId === 2,
					active: url.pathname.startsWith('/docs'),
				}}
				aria-label="Portfolio"
				data-header-menu-id="0"
				data-btattached="true"
				onMouseEnter$={() => (
					(globalMenuStore.showMenu = true),
					(globalMenuStore.isHoverId = 2)
				)}
			>
				Portfolio
			</a>
			<a
				href="/about-us"
				class={{
					visible: globalMenuStore.isHover,
					header__item: true,
					active: url.pathname.startsWith('/about-us'),
				}}
				aria-label="About Us"
				data-header-menu-id="0"
				data-btattached="true"
				onMouseEnter$={() => (
					(globalMenuStore.showMenu = true),
					(globalMenuStore.isHoverId = 3)
				)}
			>
				About Us
			</a>
			<a
				href="/input-context"
				class={{
					header__item: true,
					active: url.pathname.startsWith('/input-context'),
				}}
				aria-label="input-context"
				data-header-menu-id="0"
				data-btattached="true"
				onMouseEnter$={() => (globalMenuStore.showMenu = false)}
			>
				input-context
			</a>
			<a
				href="/clock"
				class={{
					header__item: true,
					active: url.pathname.startsWith('/clock'),
				}}
				aria-label="Clock"
				data-header-menu-id="0"
				data-btattached="true"
				onMouseEnter$={() => (globalMenuStore.showMenu = false)}
			>
				Clock
			</a>
			<a
				href="/use-hooks"
				class={{
					header__item: true,
					active: url.pathname.startsWith('/use-hooks'),
				}}
				aria-label="use-context"
				data-header-menu-id="0"
				data-btattached="true"
				onMouseEnter$={() => (globalMenuStore.showMenu = false)}
			>
				use-hooks
			</a>
			<a
				href="/api-fetching"
				class={{
					header__item: true,
					active: url.pathname.startsWith('/api-fetching'),
				}}
				aria-label="use-context"
				data-header-menu-id="0"
				data-btattached="true"
				onMouseEnter$={() => (globalMenuStore.showMenu = false)}
			>
				api-fetching
			</a>
			<a
				href="/hacker-news"
				class={{
					header__item: true,
					active: url.pathname.startsWith('/hacker-news'),
				}}
				aria-label="Hacker News"
				data-header-menu-id="0"
				data-btattached="true"
				onMouseEnter$={() => (globalMenuStore.showMenu = false)}
			>
				Hacker News
			</a>
			<a
				href="/link-list"
				class={{
					header__item: true,
					active: url.pathname.startsWith('/link-list'),
				}}
				aria-label="link-list"
				data-header-menu-id="0"
				data-btattached="true"
				onMouseEnter$={() => (globalMenuStore.showMenu = false)}
			>
				link-list
			</a>
		</nav>
	)
})
