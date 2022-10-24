import {
	component$,
	useStyles$,
} from '@builder.io/qwik'
import styles from './main-nav.css?inline'

export default component$(() => {
	useStyles$(styles)

	return (
		<>
			<div class="navigation">
				<header class="header">
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

export const HeaderItems = component$(() => {
	return (
		<nav class="header__items">
			<a
				href="https://www.mmmmm.com/themen"
				title="Unsere Fokusthemen"
				class="header__item"
				data-header-menu-id="0"
				data-btattached="true"
			>
				Themen
			</a>
			<a
				href="https://www.mmmmm.com/services"
				title="Aus unserem Serviceportfolio"
				class="header__item"
				data-header-menu-id="1"
				data-btattached="true"
			>
				Services
			</a>
			<a
				href="https://www.mmmmm.com/trainings"
				title="ITSM und PM Schulungen"
				class="header__item"
				data-header-menu-id="2"
				data-btattached="true"
			>
				Trainings
			</a>
			<a
				href="https://www.mmmmm.com/webinare"
				title="Webinare zu Themen im Service Management"
				class="header__item"
				data-btattached="true"
			>
				Webinare
			</a>
			<a
				href="https://www.mmmmm.com/unternehmen"
				title="Die iTSM Group kennenlernen"
				class="header__item"
				data-header-menu-id="4"
				data-btattached="true"
			>
				Über uns
			</a>
		</nav>
	);
});