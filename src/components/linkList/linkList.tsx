/** @format */

import { component$, useStore } from '@builder.io/qwik'

export interface ILinkListContent {
	headline: string
	bodytext: string
	bla: string
}

export default component$(() => {
	const store = useStore({
		data: [
			{
				id: 1,
				headline: 'first link',
				description: 'this is the first link of my link list',
				tags: ['test', 'test2'],
				link: {
					url: 'http://www.gmx.de',
					target: '_blank',
					ariaLabel: 'link http://www.gmx.de',
					label: 'gmx.de',
				},
			},
			{
				id: 2,
				headline: 'first link',
				description: 'this is the first link of my link list',
				tags: ['test', 'test2'],
				link: {
					url: 'http://www.gmx.de',
					target: '_blank',
					ariaLabel: 'link http://www.gmx.de',
					label: 'gmx.de',
				},
			},
		],
	})

	const storeIntro = useStore<ILinkListContent>({
		headline:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore deleniti doloremque!',
		bodytext:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam expedita, excepturi vel qui consequatur, fugit quod ea rem accusantium ad eaque eum. Laudantium harum porro aspernatur aliquam. Obcaecati, sed. Harum, aut vitae accusantium aliquam blanditiis qui officia deleniti omnis. Error corrupti adipisci, voluptatum deleniti laborum dolorum maxime consectetur labore iure, quas asperiores porro est nihil harum totam. Deleniti nihil tenetur facere rerum neque quaerat laudantium sint excepturi cupiditate. Ullam, nisi aut blanditiis reprehenderit, corrupti minima aliquid, neque in quo illum ipsum! Dolor, nemo? Dolorem quaerat nesciunt modi beatae qui aspernatur perferendis, quidem cum consequuntur harum expedita, ipsam molestias magnam pariatur. Quas aliquid reprehenderit similique. Suscipit facilis, accusantium qui animi dolore dignissimos, voluptatibus maxime dolores unde, saepe quae eaque recusandae sint architecto impedit!',
		bla: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam expedita, excepturi vel qui consequatur, fugit quod ea rem accusantium ad eaque eum. Laudantium harum porro aspernatur aliquam. Obcaecati, sed. Harum, aut vitae accusantium aliquam blanditiis qui officia deleniti omnis. Error corrupti adipisci, voluptatum deleniti laborum dolorum maxime consectetur labore iure, quas asperiores porro est nihil harum totam. Deleniti nihil tenetur facere rerum neque quaerat laudantium sint excepturi cupiditate. Ullam, nisi aut blanditiis reprehenderit, corrupti minima aliquid, neque in quo illum ipsum! Dolor, nemo? Dolorem quaerat nesciunt modi beatae qui aspernatur perferendis, quidem cum consequuntur harum expedita, ipsam molestias magnam pariatur. Quas aliquid reprehenderit similique. Suscipit facilis, accusantium qui animi dolore dignissimos, voluptatibus maxime dolores unde, saepe quae eaque recusandae sint architecto impedit!',
	})

	return (
		<>
			<Intro data={storeIntro} />
			<Links data={store.data} />
		</>
	)
})

export const Intro = component$((props: { data: ILinkListContent }) => {
	const content = props.data
	return (
		<div class="news-view">
			<main class="news-list">
				<h1>{content.headline}</h1>
				<p>{content.bodytext}</p>
				<p>{content.bla}</p>
			</main>
		</div>
	)
})

export const Links = component$((props: { data: any }) => {
	const items = props.data
	return (
		<div class="news-view">
			<main class="news-list">
				{items.length && (
					<ul>
						{items.map((item: any, index: number) => (
							<LinkPreview item={item} key={index} />
						))}
					</ul>
				)}
			</main>
			<div>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
				expedita, excepturi vel qui consequatur, fugit quod ea rem
				accusantium ad eaque eum. Laudantium harum porro aspernatur
				aliquam. Obcaecati, sed. Harum, aut vitae accusantium aliquam
				blanditiis qui officia deleniti omnis. Error corrupti adipisci,
				voluptatum deleniti laborum dolorum maxime consectetur labore
				iure, quas asperiores porro est nihil harum totam. Deleniti
				nihil tenetur facere rerum neque quaerat laudantium sint
				excepturi cupiditate. Ullam, nisi aut blanditiis reprehenderit,
				corrupti minima aliquid, neque in quo illum ipsum! Dolor, nemo?
				Dolorem quaerat nesciunt modi beatae qui aspernatur perferendis,
				quidem cum consequuntur harum expedita, ipsam molestias magnam
				pariatur. Quas aliquid reprehenderit similique. Suscipit
				facilis, accusantium qui animi dolore dignissimos, voluptatibus
				maxime dolores unde, saepe quae eaque recusandae sint architecto
				impedit!
			</div>
		</div>
	)
})

export const LinkPreview = component$((props: { item: any }) => {
	const item = props.item
	return (
		<li class="news-item" style="padding-bottom:36px;">
			<div class="score">id: {item.id}</div>
			<div class="title">
				<a href={item.link.url} target="_blank" rel="noreferrer">
					{item.link.label}
				</a>
			</div>
		</li>
	)
})
