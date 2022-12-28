/** @format */

import { component$, useStore } from '@builder.io/qwik'

export interface IComment {
	id: string
	user: string
	time_ago: string
	content: string
	comments: IComment[]
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

	const storeIntro = useStore({
		headline:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore deleniti doloremque!',
		bodytext:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam expedita, excepturi vel qui consequatur, fugit quod ea rem accusantium ad eaque eum. Laudantium harum porro aspernatur aliquam. Obcaecati, sed. Harum, aut vitae accusantium aliquam blanditiis qui officia deleniti omnis. Error corrupti adipisci, voluptatum deleniti laborum dolorum maxime consectetur labore iure, quas asperiores porro est nihil harum totam. Deleniti nihil tenetur facere rerum neque quaerat laudantium sint excepturi cupiditate. Ullam, nisi aut blanditiis reprehenderit, corrupti minima aliquid, neque in quo illum ipsum! Dolor, nemo? Dolorem quaerat nesciunt modi beatae qui aspernatur perferendis, quidem cum consequuntur harum expedita, ipsam molestias magnam pariatur. Quas aliquid reprehenderit similique. Suscipit facilis, accusantium qui animi dolore dignissimos, voluptatibus maxime dolores unde, saepe quae eaque recusandae sint architecto impedit!',
	})

	// useServerMount$(async () => {
	// 	const response = await fetch(
	// 		'https://node-hnapi.herokuapp.com/news?page=0'
	// 	)
	// 	store.data = (await response.json()) || {}
	// })

	return (
		<>
			<Intro data={storeIntro} />
			<Stories data={store.data} />
		</>
	)
})

export const Intro = component$((props: { data: any }) => {
	const stories = props
	console.log('props', props)
	console.log('stories', stories)
	return (
		<div class="news-view">
			<main class="news-list">
				<h1>{props.data.headline}</h1>
				<p>{stories.data.bodytext}</p>
			</main>
		</div>
	)
})

export const Stories = component$((props: { data: any }) => {
	const stories = props.data
	return (
		<div class="news-view">
			<main class="news-list">
				{stories.length && (
					<ul>
						{stories.map((story: any) => (
							<StoryPreview story={story} />
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

export const StoryPreview = component$((props: { story: any }) => {
	return (
		<li class="news-item" style="padding-bottom:36px;">
			<div class="score">id: {props.story.id}</div>
			<div class="title">
				<a href={props.story.link.url} target="_blank" rel="noreferrer">
					{props.story.link.label}
				</a>
			</div>
		</li>
	)
})
