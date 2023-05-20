/** @format */

import { component$, useStore, useVisibleTask$ } from '@builder.io/qwik'
import LocomotiveScroll from 'locomotive-scroll'

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
			{
				id: 3,
				headline: 'qwik-transition',
				description:
					'ightweight (<1kb gzip) and easy-to-use custom Qwik hook for adding smooth animations and effects to your Qwik components. This hook is based on @iamyoki/transition-hook.',
				tags: ['test', 'test2'],
				link: {
					url: 'https://github.com/voluntadpear/qwik-transition',
					target: '_blank',
					ariaLabel:
						'link https://github.com/voluntadpear/qwik-transition',
					label: 'qwik-transition',
				},
			},
			{
				id: 4,
				headline: 'https://component-party.dev/',
				description:
					'Web component JS frameworks quick overview by their syntax and features',
				tags: ['test', 'test2'],
				link: {
					url: 'https://component-party.dev',
					target: '_blank',
					ariaLabel: 'https://component-party.dev',
					label: 'component-party',
				},
			},
			{
				id: 5,
				headline: 'Awesome Qwik',
				description:
					'A curated list of Qwik repos, examples, starters, tutorials, components, modules, videos, and anything else useful.',
				tags: ['test', 'test2'],
				link: {
					url: 'https://github.com/onwidget/awesome-qwik',
					target: '_blank',
					ariaLabel: 'https://github.com/onwidget/awesome-qwik',
					label: 'Awesome Qwik',
				},
			},
			{
				id: 6,
				headline: '@unpic/qwik',
				description:
					'Qwik component for responsive, high-performance images.',
				tags: ['test', 'test2'],
				link: {
					url: 'https://github.com/ascorbic/unpic-img/tree/main/packages/qwik',
					target: '_blank',
					ariaLabel:
						'https://github.com/ascorbic/unpic-img/tree/main/packages/qwik',
					label: '@unpic/qwik',
				},
			},
			{
				id: 7,
				headline: 'Papanasi',
				description:
					'Papanasi (pronunced pɑpənæʃ or papanash) is a UI library to use cross Frameworks. A set of components to use in Angular, Preact, Qwik, React, Solid, Svelte, Vue and Web Components. Is based on the Mitosis library and documented using Storybook.',
				tags: ['test', 'test2'],
				link: {
					url: 'https://github.com/CKGrafico/papanasi',
					target: '_blank',
					ariaLabel: 'https://github.com/CKGrafico/papanasi',
					label: 'Papanasi',
				},
			},
			{
				id: 8,
				headline: 'Qwik UI',
				description:
					'This library is still in early stages and once well collect enough feedback from the community well release the first beta version.',
				tags: ['test', 'test2'],
				link: {
					url: 'https://github.com/qwikifiers/qwik-ui',
					target: '_blank',
					ariaLabel: 'https://github.com/qwikifiers/qwik-ui',
					label: 'Qwik UI',
				},
			},
			{
				id: 9,
				headline: 'Cypress Qwik plugin',
				description: 'The cypress component testing plugin for Qwik',
				tags: ['test', 'test2'],
				link: {
					url: 'https://github.com/qwikifiers/cypress-qwik',
					target: '_blank',
					ariaLabel: 'https://github.com/qwikifiers/cypress-qwik',
					label: 'Cypress Qwik plugin',
				},
			},
			{
				id: 10,
				headline: 'qwik-select',
				description: 'A select/autocomplete component for Qwik apps.',
				tags: ['test', 'test2'],
				link: {
					url: 'https://github.com/phongnn/qwik-select',
					target: '_blank',
					ariaLabel: 'https://github.com/phongnn/qwik-select',
					label: 'qwik-select',
				},
			},
			{
				id: 11,
				headline: 'Qwik Control Flow Components',
				description:
					'Use semantic control flow components in your Qwik app.',
				tags: ['test', 'test2'],
				link: {
					url: 'https://github.com/qwikifiers/qwik-flow',
					target: '_blank',
					ariaLabel: 'https://github.com/qwikifiers/qwik-flow',
					label: 'Qwik Control Flow Components',
				},
			},
			{
				id: 12,
				headline: 'Qwik carousel component',
				description: 'Qwik carousel component',
				tags: ['test', 'test2'],
				link: {
					url: 'https://github.com/gioboa/qwik-carousel',
					target: '_blank',
					ariaLabel: 'https://github.com/gioboa/qwik-carousel',
					label: 'Qwik carousel component',
				},
			},
			{
				id: 13,
				headline: 'Qwik Bits',
				description:
					'Low level, unstyled, accessible, and fast ui components and other helpers for Qwik',
				tags: ['test', 'test2'],
				link: {
					url: 'https://github.com/gioboa/qwik-carousel',
					target: '_blank',
					ariaLabel: 'https://github.com/gioboa/qwik-carousel',
					label: 'Qwik Bits',
				},
			},
			{
				id: 14,
				headline: 'QWIK COMPONENTS PUBLISHER',
				description:
					'Low level, unstyled, accessible, and fast ui components and other helpers for Qwik',
				tags: ['test', 'test2'],
				link: {
					url: 'https://github.com/houzyk/qwik-components-publisher',
					target: '_blank',
					ariaLabel:
						'https://github.com/houzyk/qwik-components-publisher',
					label: 'QWIK COMPONENTS PUBLISHER',
				},
			},
			{
				id: 15,
				headline: 'uxaria',
				description: 'uxaria',
				tags: ['test', 'test2'],
				link: {
					url: 'https://github.com/efflore/uxaria',
					target: '_blank',
					ariaLabel: 'https://github.com/efflore/uxaria',
					label: 'uxaria',
				},
			},
			{
				id: 16,
				headline: 'SpiritBomb - A Qwik Component Library',
				description:
					'Using the power of open source, lets pool our energy and create an amazing component library for this new and exciting framework!',
				tags: ['test', 'test2'],
				link: {
					url: 'https://github.com/mdatz/SpiritBomb',
					target: '_blank',
					ariaLabel: 'https://github.com/mdatz/SpiritBomb',
					label: 'SpiritBomb - A Qwik Component Library',
				},
			},
			{
				id: 17,
				headline: 'accesso',
				description:
					'Accesso provides low level, unstyled, accessible, ui components that can be used in React, Vue, Svelte, Qwik and more',
				tags: ['test', 'test2'],
				link: {
					url: 'https://github.com/acoreyj/accesso',
					target: '_blank',
					ariaLabel: 'https://github.com/acoreyj/accesso',
					label: 'accesso',
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

	useVisibleTask$(
		() => {
			const scrollContainer = document.querySelector(
				'[data-scroll-container]'
			)

			if (scrollContainer != null) {
				const el1: Element = scrollContainer
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				const scroll = new LocomotiveScroll({
					el: el1 as HTMLElement,
					smooth: true,
				})
			}
		},
		{
			eagerness: 'load', // 'load' | 'visible' | 'idle'
		}
	)

	return (
		<div data-scroll-container>
			<Intro data={storeIntro} />
			<Links data={store.data} />
			<LocomotiveShow1 />
		</div>
	)
})

export const Intro = component$((props: { data: ILinkListContent }) => {
	const content = props.data
	return (
		<div class="news-view">
			<main class="news-list">
				<div data-scroll-section>
					<h1 data-scroll>Hey</h1>
					<p data-scroll>👋</p>
				</div>
				<div data-scroll-section>
					<h2 data-scroll data-scroll-speed="1">
						What's up?
					</h2>
					<p data-scroll data-scroll-speed="2">
						😬
					</p>
				</div>
				<div data-scroll-section>
					<h1>{content.headline}</h1>
					<p>{content.bodytext}</p>
					<p>{content.bla}</p>
				</div>
			</main>
		</div>
	)
})

export const Links = component$((props: { data: any }) => {
	const items = props.data
	return (
		<div class="news-view">
			<div data-scroll-section>
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
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Totam expedita, excepturi vel qui consequatur, fugit quod ea
					rem accusantium ad eaque eum. Laudantium harum porro
					aspernatur aliquam. Obcaecati, sed. Harum, aut vitae
					accusantium aliquam blanditiis qui officia deleniti omnis.
					Error corrupti adipisci, voluptatum deleniti laborum dolorum
					maxime consectetur labore iure, quas asperiores porro est
					nihil harum totam. Deleniti nihil tenetur facere rerum neque
					quaerat laudantium sint excepturi cupiditate. Ullam, nisi
					aut blanditiis reprehenderit, corrupti minima aliquid, neque
					in quo illum ipsum! Dolor, nemo? Dolorem quaerat nesciunt
					modi beatae qui aspernatur perferendis, quidem cum
					consequuntur harum expedita, ipsam molestias magnam
					pariatur. Quas aliquid reprehenderit similique. Suscipit
					facilis, accusantium qui animi dolore dignissimos,
					voluptatibus maxime dolores unde, saepe quae eaque
					recusandae sint architecto impedit!
				</div>
			</div>
		</div>
	)
})

export const LocomotiveShow1 = component$(() => {
	return (
		<section
			class="c-section -fixed"
			data-scroll-section=""
			data-persistent=""
			data-scroll-section-id="section5"
			style="opacity: 1; pointer-events: all; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -8332, 0, 1);"
			data-scroll-section-inview=""
		>
			<div class="o-container" id="fixed-elements">
				<div class="o-layout">
					<div class="o-layout_item u-2/5@from-medium">
						<div
							class="c-section_infos -padding is-inview"
							data-scroll=""
							data-scroll-sticky=""
							data-scroll-target="#fixed-elements"
							style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 281.768, 0, 1);"
						>
							<div
								class="c-section_infos_inner is-inview"
								data-scroll=""
								data-scroll-offset="200"
							>
								<h2>
									04. <br />
									Fixed elements
								</h2>
								<div class="c-sections_infos_text u-text">
									<p>
										Create slides that stick and untick to
										the viewport while scrolling through.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="o-layout_item u-3/5@from-medium">
						<div
							class="c-fixed_wrapper is-inview"
							data-scroll=""
							data-scroll-call="dynamicBackground"
							data-scroll-repeat=""
							style="background-color: rgb(205, 201, 212);"
						>
							<div class="c-fixed_target" id="fixed-target"></div>
							<div
								class="c-fixed is-inview"
								data-scroll=""
								data-scroll-sticky=""
								data-scroll-target="#fixed-target"
								style='background-image: url("../../assets/qwik-logo.svg"); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1260.02, 0, 1);'
							></div>
						</div>
					</div>
				</div>
			</div>
		</section>
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
			<div>{item.description}</div>
		</li>
	)
})
