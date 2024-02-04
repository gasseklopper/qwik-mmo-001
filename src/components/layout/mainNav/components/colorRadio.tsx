import { component$, useStyles$ } from '@builder.io/qwik'

import styles from './../mainNav.scss?inline'

export default component$(() => {
	useStyles$(styles)

	return (
		<>
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
		</>
	)
})
