import {
	component$,
	useContext,
	useSignal,
	useStore,
} from '@builder.io/qwik'
import { GlobalMenuStore } from '~/globalContext'
import { baseClassMainMenu } from '~/components/header/header'
import Headlines from '~/components/__libary/01_Atoms/headlines/headlines'
import Image from '~/components/__libary/01_Atoms/image/image'
import navigation from "~/config/navigation.json";

export const MenuCards = component$(() => {
	const globalMenuStore = useContext(GlobalMenuStore)
	const targetRef = useSignal<Element>()
	const store: {
		activeItemCard: any
	} = useStore({ activeItemCard: 0 })

	return (
		<>
			<div
				ref={targetRef}
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
				{navigation.headerSubItems.length && (
					<>
						{navigation.headerSubItems.map((item: any, index: number) => (
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
									<div class="column small-12">
										<Headlines>{item.headline}</Headlines>
									</div>

									<div class="column small-5">
										{item.links.map((item: any, index: number) => (
											<a
												key={index}
												href={item.url}
												title={item.label}
												class={[
													`${baseClassMainMenu}__subitem`,
													{
														initial: store.activeItemCard == index,
													},
												]}
												data-header-description-id="0"
												data-btattached="true"
												onMouseOver$={() => (store.activeItemCard = index)}
												onMouseOut$={() => (store.activeItemCard = index)}
											>
												<span class={`${baseClassMainMenu}__arrow`}>›</span>
												<span>{item.label}</span>
											</a>
										))}
									</div>
									<div class="column small-5">
										{item.links.map((item: any, index: number) => (
											<>
												{store.activeItemCard === index ? (
													<Image
														class={[
															{
																header__descriptionImage: true,
																rte: true,
															},
														]}
														src={item.image.src}
														height={1080}
														width={820}
													/>
												) : (
													null
												)}

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
											</>
										))}
									</div>
								</div>
							</div>
						))}
					</>
				)}
			</div>
		</>
	)
})
