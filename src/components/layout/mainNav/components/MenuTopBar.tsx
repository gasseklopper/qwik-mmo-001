import { component$ } from '@builder.io/qwik'
import { ThemeToggle } from '~/components/theme-toggle/theme-toggle'
import Logo from './logo'

export const MenuTopBar = component$(() => {
	return (
		<div class="header__top-bar">
			<div class="row">
				<div class="column large-10">
					<Logo />
				</div>
				<div class="column large-2">
					<div class="last-column-flex-end">
						<ThemeToggle />
					</div>
				</div>
			</div>
		</div>
	)
})
