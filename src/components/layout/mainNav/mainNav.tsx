import {
	component$,
	useStyles$,
} from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import styles from './main-nav.scss?inline'

export default component$(() => {
	useStyles$(styles)

	return (
		<>
			<div class="navigation">
				<header class="header">
					<ColorRadio/>
					<div class="header__main">
						<div class="row">
							<div class="column">
								<div class="main-nav">
									<div class="header__main_inner">
										<HeaderItems/>
										<ButtonBurger/>
									</div>
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
	);
});

export const ColorRadio = component$(() => {
	return (
		<div class="header__form">
			<div class="row">
				<div class="column">
					<div class="header__form_inner">
						<form class="header__checkbox_wrapper" action="">
							<p>Please select your color:</p>
							<label for="color1">
								<input class="header__checkbox"  type="radio" id="color1" name="color" value="dark"></input>
								1
							</label>
							<label for="color2">
								<input class="header__checkbox"  type="radio" id="color2" name="color" value="lights2"></input>
								2
							</label>
							<label for="color3">
								<input class="header__checkbox"  type="radio" id="color3" name="color" value="dim"></input>
								3
							</label>
							<label for="color4">
								<input class="header__checkbox"  type="radio" id="color4" name="color" value="sim"></input>
								4
							</label>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
});

export const HeaderItems = component$(() => {
	const { pathname } = useLocation()
	return (
		<nav class="header__items">
					<a
						href="/docs"
						class={{ header__item: true, active: pathname.startsWith('/docs')}}
						aria-label="Docs"
						data-header-menu-id="0"
						data-btattached="true"
					>
						Docs
					</a>
					<a
						href="/about-us"
						class={{ header__item: true, active: pathname.startsWith('/about-us')}}
						aria-label="About Us"
						data-header-menu-id="0"
						data-btattached="true"
					>
						About Us
					</a>
					<a
						href="/input-context"
						class={{ header__item: true, active: pathname.startsWith('/input-context')}}
						aria-label="input-context"
						data-header-menu-id="0"
						data-btattached="true"
					>
						input-context
					</a>
					<a
						href="/clock"
						class={{ header__item: true, active: pathname.startsWith('/clock') }}
						aria-label="Clock"
						data-header-menu-id="0"
						data-btattached="true"
					>
						Clock
					</a>
					<a
						href="/use-styles"
						class={{ header__item: true, active: pathname.startsWith('/use-styles') }}
						aria-label="use-styles"
						data-header-menu-id="0"
						data-btattached="true"
					>
						Use Styles
					</a>
					<a
						href="/use-reference"
						class={{ header__item: true, active: pathname.startsWith('/use-reference') }}
						aria-label="use-reference"
						data-header-menu-id="0"
						data-btattached="true"
					>
						Use Reference
					</a>
					<a
						href="/use-context"
						class={{ header__item: true, active: pathname.startsWith('/use-context') }}
						aria-label="use-context"
						data-header-menu-id="0"
						data-btattached="true"
					>
						Use Context
					</a>
					<a
						href="/unsplash-api"
						class={{ header__item: true, active: pathname.startsWith('/unsplash-api') }}
						aria-label="use-context"
						data-header-menu-id="0"
						data-btattached="true"
					>
						Unsplash Api
					</a>
					<a
						href="/counter"
						class={{ header__item: true, active: pathname.startsWith('/counter') }}
						aria-label="Counter"
						data-header-menu-id="0"
						data-btattached="true"
					>
						Counter
					</a>
					<a
						href="/star-wars-api"
						class={{ header__item: true, active: pathname.startsWith('/star-wars-api') }}
						aria-label="Star Wars"
						data-header-menu-id="0"
						data-btattached="true"
					>
						Star Wars
					</a>
					<a
						href="/hacker-news"
						class={{ header__item: true, active: pathname.startsWith('/hacker-news') }}
						aria-label="Star Wars"
						data-header-menu-id="0"
						data-btattached="true"
					>
						Hacker News
					</a>
		</nav>
	);
});