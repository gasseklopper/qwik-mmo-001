import {
	component$,
	useContext,
	useSignal,
	useStore,
	useVisibleTask$,
} from '@builder.io/qwik'
import { GlobalMenuStore } from '../../../../globalContext'
import menuItemsCardsJson from '../data/menuItemsCards.json'

export const MenuCards = component$(() => {
	const globalMenuStore = useContext(GlobalMenuStore)
	const targetRef = useSignal<Element>()
	const store: {
		activeItemCard: any
	} = useStore({ activeItemCard: 0 })

	console.log('STORE', store)
	useVisibleTask$(() => {
		// if (targetRef.value) {
		// 	disableBodyScroll(targetRef.value)
		// }
		// enableBodyScroll(targetRef)
	})
	// const targetElemen = null
	// menuItemsCards
	return (
		<div
			ref={targetRef}
			// style={{ border: '1px solid red', width: '100px' }}
			class={{
				header__menu: true,
				visible: globalMenuStore.showMenu,
			}}
			onMouseEnter$={() => (globalMenuStore.isHover = true)}
			// onMouseLeave$={() => (
			// 	// (globalMenuStore.isHover = false),
			// 	// enableBodyScroll(targetRef.value)
			// )}
		>
			{menuItemsCardsJson.length && (
				<>
					{menuItemsCardsJson.map((item: any, index: number) => (
						<div
							key={index}
							class={[
								{
									header__menu_inner: true,
									visible: globalMenuStore.isHoverId === item.id,
									test: globalMenuStore.isHoverId === item.id,
								},
							]}
							data-header-menu-id="ui-page"
						>
							<div class="row">
								<div class="column small-5">
									{item.links.map((item: any, index: number) => (
										<a
											key={index}
											href={item.url}
											title={item.label}
											class={[
												'header__subitem',
												{
													initial: store.activeItemCard == index,
												},
											]}
											data-header-description-id="0"
											data-btattached="true"
											onMouseOver$={() => (store.activeItemCard = index)}
											onMouseOut$={() => (store.activeItemCard = index)}
										>
											<span class="header__arrow">›</span>
											<span>{item.label}</span>
										</a>
									))}
								</div>
								<div class="column small-1"></div>
								<div class="column small-5">
									{item.links.map((item: any, index: number) => (
										<div
											key={index}
											class={[
												{
													header__description: true,
													rte: true,
												},
												store.activeItemCard == index ? 'visible' : '',
											]}
											data-header-description-id={index}
										>
											<p>{item.text}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</>
			)}
		</div>
	)
})