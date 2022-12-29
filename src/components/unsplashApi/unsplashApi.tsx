import { component$, useStore, useTask$ } from '@builder.io/qwik'

export default component$(() => {
	return (
		<div>
			This example features an image search with a debounce of 150 ms.
			<br />
			The function `debouncedGetPictures` needs to be exported because it
			is used in `useWatch$`.
			<br />
			<br />
			Go ahead, search for images such as "apple", it uses the{' '}
			<a href="https://api.unsplash.com/search/photos">unsplash API</a>
			<UnsplashApiComplete></UnsplashApiComplete>
		</div>
	)
})

interface IState {
	searchInput: string
	searchResults: any
	selectedValue: string
}

export const UnsplashApiComplete = component$(() => {
	const state = useStore<IState>({
		searchInput: '',
		searchResults: [],
		selectedValue: '',
	})

	useTask$(async ({ track }) => {
		const searchInput = track(() => state.searchInput)

		if (!searchInput) {
			state.searchResults = []
			return
		}

		const controller = new AbortController()
		state.searchResults = await debouncedGetPictures(
			state.searchInput,
			controller
		)

		return () => {
			controller.abort()
		}
	})

	return (
		<div>
			<label>
				Search for Images____
				<input
					type="text"
					onInput$={(ev) =>
						(state.searchInput = (
							ev.target as HTMLInputElement
						).value)
					}
				/>
			</label>
			<ImageListComponent state={state}></ImageListComponent>
		</div>
	)
})

export const ImageListComponent = component$((props: { state: any }) => {
	const searchResults = props.state.searchResults
	console.log('searchResults', searchResults)
	return searchResults?.length ? (
		<ul>
			{searchResults.map((items: any, index: number) => {
				return (
					<li key={index}>
						<h3>{items.alt_description}</h3>
						<p>Likes:{items.likes}</p>
						<p>Description:{items.description}</p>
						{index <= 3 ? (
							<img
								src={items.urls.small}
								style="visibility: none;" // hidden, none, collapse
							/>
						) : (
							<img
								src={items.urls.small}
								style="visibility: none;"
								hidden // hidden, none, collapse
							/>
						)}
					</li>
				)
			})}
		</ul>
	) : (
		<div class="no-results">
			<em>No Images, you re on your own!</em>
		</div>
	)
})

const getPictures = (
	searchInput: string,
	controller?: AbortController
): Promise<string[]> =>
	fetch(
		`https://api.unsplash.com/search/photos?page=1&query=${searchInput}&client_id=_Kt5cu2YOPFqExISsllw7helHgDv7qBcl6NidJGe5dg`,
		{
			signal: controller?.signal,
		}
	)
		.then((response) => {
			return response.json()
		})
		.then((parsedResponse) => {
			return parsedResponse.results.map((results: {}) => results)
		})

function debounce<F extends (...args: any[]) => any>(fn: F, delay = 500) {
	let timeoutId: ReturnType<typeof setTimeout>

	return (...args: Parameters<F>): Promise<ReturnType<F>> => {
		return new Promise((resolve) => {
			if (timeoutId) clearTimeout(timeoutId)
			timeoutId = setTimeout(() => {
				resolve(fn(...args))
			}, delay)
		})
	}
}

export const debouncedGetPictures = debounce(getPictures, 150)
