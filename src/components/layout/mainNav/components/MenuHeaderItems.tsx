import { component$, useContext, useStore } from '@builder.io/qwik'
import { GlobalMenuStore } from '../../../../globalContext'
import { Link, useLocation } from '@builder.io/qwik-city'
import type { MenuDataItem } from '../menuTypes'
import { baseClassMainMenu } from '~/components/header/header'
import headerMenu from "~/config/navigation.json";

export const MenuHeaderItems = component$(() => {
	const { url } = useLocation()

	const globalMenuStore = useContext(GlobalMenuStore)
	const store: {
		activeItemCard: any
	} = useStore({
		activeItemCard: 0,
	})

	return (
		<nav class={`${baseClassMainMenu}__items`}>
			{headerMenu.header.length && (
				<>
					{headerMenu.header.map((item: MenuDataItem) => (
						<>
							<Link key={item.id} href={item.href}
								class={{
									header__item: true,
									visible: globalMenuStore.showMenu,
									active: url.pathname.startsWith(item.href),
									hover: store.activeItemCard === item.id && globalMenuStore.showMenu,
								}}
								aria-label={item.label}
								data-header-menu-id={item.id}
								data-btattached="true"
								onMouseEnter$={() => (
									(store.activeItemCard = item.id),
									(globalMenuStore.showMenu = item.showMenu),
									(globalMenuStore.isHoverId = item.id)
								)}
							>
								{item.label}</Link>
						</>
					))}
				</>
			)}
		</nav>
	)
})
