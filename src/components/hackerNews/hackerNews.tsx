/** @format */

import { component$, useTask$, useStore } from '@builder.io/qwik'
import { isServer } from '@builder.io/qwik/build'

export default component$(() => {
	const store = useStore({ data: null })

	useTask$(async () => {
		if (isServer) {
			const response = await fetch('https://node-hnapi.herokuapp.com/news?page=0')
			store.data = await response.json()
			console.log('superTest000000-', store.data)
		}
	})

	return (
		<>
			<Stories data={store.data} />
		</>
	)
})

export const Stories = component$((props: { data: any }) => {
	console.log('superTest', props.data)
	const stories = props.data
	return (
		<div class="news-view">
			<main class="news-list">
				{stories.length && (
					<ul>
						{stories.map((story: IStory, index: number) => (
							<StoryPreview story={story} key={index} />
						))}
					</ul>
				)}
			</main>
		</div>
	)
})

export const StoryPreview = component$((props: { story: IStory }) => {
	return (
		<li class="news-item" style="padding-bottom:36px;">
			<div class="score">{props.story.points}</div>
			<div class="title">
				{props.story.url && !props.story.url.startsWith('item?id=') ? (
					<>
						<a href={props.story.url} target="_blank" rel="noreferrer">
							{props.story.title}
						</a>
						<span class="host"> ({props.story.domain})</span>
					</>
				) : (
					<a href={`/item/${props.story.id}`}>{props.story.title}</a>
				)}
			</div>
			<span class="meta">
				{props.story.type !== 'job' ? (
					<>
						by <a href={`/users/${props.story.user}`}>{props.story.user}</a> {props.story.time_ago} |{' '}
						<a href={`/stories/${props.story.id}`}>{props.story.comments_count ? `${props.story.comments_count} comments` : 'discuss'}</a>
					</>
				) : (
					<a href={`/stories/${props.story.id}`}>{props.story.time_ago}</a>
				)}
			</span>
			{props.story.type !== 'link' && (
				<>
					{' '}
					<span class="label">{props.story.type}</span>
				</>
			)}
		</li>
	)
})

export interface IComment {
	id: string
	user: string
	time_ago: string
	content: string
	comments: IComment[]
}

export interface IStory {
	id: string
	points: string
	url: string
	title: string
	domain: string
	type: string
	time_ago: string
	user: string
	comments_count: number
	comments: IComment[]
}
