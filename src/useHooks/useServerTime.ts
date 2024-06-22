import { routeLoader$ } from "@builder.io/qwik-city"

export const useServerTime = routeLoader$(() => {
	// This will re-execute in the server when the page refreshes.
	return Date.now()
})