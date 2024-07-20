import { component$ } from '@builder.io/qwik'
import { useDocumentHead, useLocation } from '@builder.io/qwik-city'
import { IsOpenSettingsScript, ReduceMotionScript, ThemeScript } from './theme-script'

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
	const head = useDocumentHead()
	const { url } = useLocation()

	return (
		<>
			<title>{head.title}</title>

			<link rel="canonical" href={url.href} />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin=""
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins&amp;display=swap"
				rel="stylesheet"
			/>

			{head.meta.map((m, index) => (
				<meta {...m} key={index} />
			))}

			{head.links.map((l, index) => (
				<link {...l} key={index} />
			))}

			{head.styles.map((s, index) => (
				<style
					{...s.props}
					dangerouslySetInnerHTML={s.style}
					key={index}
				/>
			))}

			<ThemeScript />
			<ReduceMotionScript />
			<IsOpenSettingsScript />
		</>
	)
})
