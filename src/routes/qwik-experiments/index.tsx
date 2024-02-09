import { component$, useContext, useSignal, useStore } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Image from '~/components/__libary/01_Atoms/image/image'
import menuItemsCardsJson from '~/components/layout/mainNav/data/menuItemsCards.json'
import './style.scss'
import { GlobalMenuStore } from '~/globalContext'
import Headlines from '~/components/__libary/01_Atoms/headlines/headlines'

export default component$(() => {
	const globalMenuStore = useContext(GlobalMenuStore)
	const targetRef = useSignal<Element>()
	const store: {
		activeItemCard: any
	} = useStore({ activeItemCard: 0 })
	return (
		<div class="qwik-experiments">
			<div class="dasGrid">
				<div class="product-card">
					<div class="product-card__content">
						<p>
							ksjfhlksjadlfkjsldflsdbfljsdhb lsdfblsdbf Lorem ipsum dolor sit
							amet consectetur adipisicing elit. Consequuntur consequatur facere
						</p>
					</div>
					<div class="product-card__lower-wrapper">
						<div class="button">test</div>
						<div class="button">test</div>
					</div>
				</div>
				<div class="product-card">
					<div class="product-card__content">
						<p>
							ksjfhlksjadlfkjsldflsdbfljsdhb lsdfblsdbf Lorem ipsum dolor sit
							amet consectetur adipisicing elit. Consequuntur consequatur facere
							ipsam nostrum, officiis suscipit commodi laudantium minus repellat
							molestias iure odit cum ea provident? Aut aspernatur atque vitae
							nam labore, error reprehenderit quibusdam perspiciatis natus
							magnam voluptatum ipsam. Deleniti nulla totam aliquid ea, quia
							eius alias
						</p>
					</div>
					<div class="product-card__lower-wrapper">
						<div class="button">test</div>
						<div class="button">test</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="column large-12">qwik-experiments</div>
				<div class="column small-5">
					<div ref={targetRef}>
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
															`__subitem`,
															{
																initial: store.activeItemCard == index,
															},
														]}
														data-header-description-id="0"
														data-btattached="true"
														onMouseOver$={() => (store.activeItemCard = index)}
														onMouseOut$={() => (store.activeItemCard = index)}
													>
														<span>›</span>
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
																height={500}
																width={500}
															/>
														) : null}

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
				</div>
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'qwik-experiments',
}
