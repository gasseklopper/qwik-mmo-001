import {
	component$,
	useContext,
	useStore,
} from '@builder.io/qwik'
import { GlobalMenuStore } from '../../../../globalContext'
import { useLocation } from '@builder.io/qwik-city'
import type { MenuDataItem } from '../menuTypes'
import menuDataJson from '../data/menuItems.json'

export const MenuHeaderItems = component$(() => {
	const { url } = useLocation()

	const globalMenuStore = useContext(GlobalMenuStore)
	const store: {
		activeItemCard: any
	} = useStore({
		activeItemCard: 0,
	})

	return (
		<nav class="header__items">
			{menuDataJson.length && (
				<>
					{menuDataJson.map((item: MenuDataItem) => (
						<a
							key={item.id}
							href={item.href}
							class={{
								header__item: true,
								visible: globalMenuStore.showMenu,
								active: url.pathname.startsWith(item.href),
								hover:
									store.activeItemCard == item.id && globalMenuStore.showMenu,
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
							{item.label}
						</a>
					))}
				</>
			)}
		</nav>
	)
})