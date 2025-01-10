import { component$, useStyles$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import styles from './index.scss?inline'
import Button from '~/components/__libary/01_Atoms/button/button'


export const HeroMM001 = component$(() => {
	return (
		<div class="hero-mm-001">
			<div class="content">
				<h1>Story</h1>
				<p class="major">A (modular, highly tweakable) responsive one-page template designed by <a href="https://html5up.net">HTML5 UP</a> and released for free under the <a href="https://html5up.net/license">Creative Commons</a>.</p>
				<p>This is a <strong>Banner</strong> element, and it's generally used as an introduction or opening statement.
					You can customize its
					<span class="demo-controls">
						<span class="property" data-name="style">
							<a href="#" class="title tooltip">style</a>
							<span class="classes">
								<span data-class="style1" class="">, style1</span>
								<span data-class="style2" class="">, style2</span>
								<span data-class="style3" class="">, style3</span>
								<span data-class="style4" class="">, style4</span>
								<span data-class="style5" class="active">, style5</span>
							</span>,
						</span>
						<span class="property active" data-name="scheme">
							<a href="#" class="title">scheme</a>
							<span class="classes">
								<span data-class="-" class="active">default</span>
								<span data-class="invert" class="">invert</span>
							</span>,
						</span>
						<span class="property active" data-name="color">
							<a href="#" class="title">color</a>
							<span class="classes">
								<span data-class="-" class="">default</span>
								<span data-class="color1" class="">color1</span>
								<span data-class="color2" class="active">color2</span>
								<span data-class="color3">color3</span>
								<span data-class="color4">color4</span>
								<span data-class="color5">color5</span>
								<span data-class="color6">color6</span>
								<span data-class="color7">color7</span>
							</span>,
						</span>
						<span class="property" data-name="size" data-requires="style1">
							<a href="#" class="title">size</a>
							<span class="classes">
								<span data-class="-">, normal</span>
								<span data-class="fullscreen" class="default">, fullscreen</span>
							</span>,
						</span>
						<span class="property" data-name="orientation" data-requires="style1">
							<a href="#" class="title">orientation</a>
							<span class="classes">
								<span data-class="orient-left" class="default">, left</span>
								<span data-class="orient-right">, right</span>
							</span>, </span>
						<span class="property" data-name="content alignment" data-requires="style1">
							<a href="#" class="title">content alignment</a>
							<span class="classes">
								<span data-class="content-align-left" class="default">, left</span>
								<span data-class="content-align-center">, center</span>
								<span data-class="content-align-right">, right</span>
							</span>,
						</span>
						<span class="property" data-name="image position" data-requires="style1">
							<span>and
							</span>
							<a href="#" class="title">image position</a>
							<span class="classes">
								<span data-class="image-position-left">, left</span>
								<span data-class="image-position-center" class="default">, center</span>
								<span data-class="image-position-right" class="">, right</span>
							</span>
						</span>
						<span class="property" data-name="size" data-requires="style2">
							<a href="#" class="title">size</a>
							<span class="classes">
								<span data-class="-">, normal</span>
								<span data-class="fullscreen" class="default">, fullscreen</span>
							</span>,
						</span>
						<span class="property" data-name="orientation" data-requires="style2">
							<a href="#" class="title">orientation</a>
							<span class="classes">
								<span data-class="orient-left">, left</span>
								<span data-class="orient-center" class="default">, center</span>
								<span data-class="orient-right">, right</span>
							</span>,
						</span>
						<span class="property" data-name="content alignment" data-requires="style2">
							<a href="#" class="title">content alignment</a>
							<span class="classes">
								<span data-class="content-align-left">, left</span>
								<span data-class="content-align-center" class="default">, center</span>
								<span data-class="content-align-right">, right</span>
							</span>,
						</span>
						<span class="property" data-name="image position" data-requires="style2">
							<span>and </span>
							<a href="#" class="title">image position</a>
							<span class="classes">
								<span data-class="image-position-left">, left</span>
								<span data-class="image-position-center" class="default">, center</span>
								<span data-class="image-position-right">, right</span>
							</span>
						</span>
						<span class="property" data-name="size" data-requires="style3">
							<a href="#" class="title">size</a><span class="classes"><span data-class="-" class="">, normal</span><span data-class="fullscreen" class="default">, fullscreen</span></span>, </span><span class="property" data-name="orientation" data-requires="style3"><a href="#" class="title">orientation</a><span class="classes"><span data-class="orient-left">, left</span><span data-class="orient-right" class="default">, right</span></span>, </span><span class="property" data-name="content alignment" data-requires="style3"><a href="#" class="title">content alignment</a><span class="classes"><span data-class="content-align-left" class="default">, left</span><span data-class="content-align-center">, center</span><span data-class="content-align-right">, right</span></span>, </span><span class="property" data-name="image position" data-requires="style3"><span>and </span><a href="#" class="title">image position</a><span class="classes"><span data-class="image-position-left">, left</span><span data-class="image-position-center" class="default">, center</span><span data-class="image-position-right">, right</span></span></span><span class="property" data-name="size" data-requires="style4"><a href="#" class="title">size</a><span class="classes"><span data-class="-" class="">, normal</span><span data-class="fullscreen" class="default">, fullscreen</span></span>, </span><span class="property" data-name="phone type" data-requires="style4"><a href="#" class="title">phone type</a><span class="classes"><span data-class="iphone" class="default">, iphone</span><span data-class="android" class="">, android</span></span>, </span><span class="property" data-name="orientation" data-requires="style4"><a href="#" class="title">orientation</a><span class="classes"><span data-class="orient-left">, left</span><span data-class="orient-right" class="default">, right</span></span>, </span><span class="property" data-name="content alignment" data-requires="style4"><a href="#" class="title">content alignment</a><span class="classes"><span data-class="content-align-left" class="default">, left</span><span data-class="content-align-center">, center</span><span data-class="content-align-right">, right</span></span>, </span><span class="property" data-name="image position" data-requires="style4"><span>and </span><a href="#" class="title">image position</a><span class="classes"><span data-class="image-position-left">, left</span><span data-class="image-position-center" class="default">, center</span><span data-class="image-position-right">, right</span></span></span><span class="property active" data-name="size" data-requires="style5"><a href="#" class="title">size</a><span class="classes"><span data-class="-">, normal</span><span data-class="fullscreen" class="default active">, fullscreen</span></span>, </span><span class="property active" data-name="content alignment" data-requires="style5"><a href="#" class="title">content alignment</a><span class="classes"><span data-class="content-align-left">, left</span><span data-class="content-align-center" class="default active">, center</span><span data-class="content-align-right">, right</span></span>, </span><span class="property active" data-name="image position" data-requires="style5"><span>and </span><a href="#" class="title">image position</a><span class="classes"><span data-class="image-position-left">, left</span><span data-class="image-position-center" class="default active">, center</span><span data-class="image-position-right">, right</span></span></span></span>, as well as assign it an optional <code>onload</code> or <code>onscroll</code> transition modifier (<a href="#reference-banner">details</a>).</p>
				<ul class="actions stacked">
					<li>
						<div>
							<a href=""><span><span></span></span></a>
						</div>
						<Button buttonLabel={`Get Started`} buttonVariant="primary" buttonSize="small" />
					</li>
				</ul>
			</div>
		</div>
	)
})

export const SpotlightMM001 = component$(() => {
	return (
		<div class="spotlight-mm-001">
			<div class="content">
				<h2>Spotlight</h2>
				<p>This is a <strong>Spotlight</strong> element, and it's generally used - as its name implies – to spotlight a particular feature, subject, or pretty much whatever. You can customize its <span class="demo-controls"><span class="property" data-name="style"><a href="#" class="title tooltip">style</a><span class="classes"><span data-class="style1" class="active">, style1</span><span data-class="style2">, style2</span><span data-class="style3">, style3</span><span data-class="style4">, style4</span><span data-class="style5">, style5</span></span>, </span><span class="property active" data-name="scheme"><a href="#" class="title">scheme</a><span class="classes"><span data-class="-" class="active">default</span><span data-class="invert">invert</span></span>, </span><span class="property active" data-name="color"><a href="#" class="title">color</a><span class="classes"><span data-class="-" class="active">default</span><span data-class="color1">color1</span><span data-class="color2">color2</span><span data-class="color3">color3</span><span data-class="color4">color4</span><span data-class="color5">color5</span><span data-class="color6">color6</span><span data-class="color7">color7</span></span>, </span><span class="property active" data-name="orientation" data-requires="style1"><a href="#" class="title">orientation</a><span class="classes"><span data-class="orient-left">, left</span><span data-class="orient-right" class="default active">, right</span></span>, </span><span class="property active" data-name="content alignment" data-requires="style1"><a href="#" class="title">content alignment</a><span class="classes"><span data-class="content-align-left" class="default active">, left</span><span data-class="content-align-center">, center</span><span data-class="content-align-right">, right</span></span>, </span><span class="property active" data-name="image position" data-requires="style1"><span>and </span><a href="#" class="title">image position</a><span class="classes"><span data-class="image-position-left" class="default">, left</span><span data-class="image-position-center" class="active">, center</span><span data-class="image-position-right">, right</span></span></span><span class="property" data-name="orientation" data-requires="style2"><a href="#" class="title">orientation</a><span class="classes"><span data-class="orient-left">, left</span><span data-class="orient-right" class="default">, right</span></span>, </span><span class="property" data-name="content alignment" data-requires="style2"><a href="#" class="title">content alignment</a><span class="classes"><span data-class="content-align-left" class="default">, left</span><span data-class="content-align-center">, center</span><span data-class="content-align-right">, right</span></span>, </span><span class="property" data-name="image position" data-requires="style2"><span>and </span><a href="#" class="title">image position</a><span class="classes"><span data-class="image-position-left">, left</span><span data-class="image-position-center" class="default">, center</span><span data-class="image-position-right">, right</span></span></span><span class="property" data-name="phone type" data-requires="style3"><a href="#" class="title">phone type</a><span class="classes"><span data-class="iphone" class="default">, iphone</span><span data-class="android">, android</span></span>, </span><span class="property" data-name="orientation" data-requires="style3"><a href="#" class="title">orientation</a><span class="classes"><span data-class="orient-left">, left</span><span data-class="orient-right" class="default">, right</span></span>, </span><span class="property" data-name="content alignment" data-requires="style3"><a href="#" class="title">content alignment</a><span class="classes"><span data-class="content-align-left" class="default">, left</span><span data-class="content-align-center">, center</span><span data-class="content-align-right">, right</span></span>, </span><span class="property" data-name="image position" data-requires="style3"><span>and </span><a href="#" class="title">image position</a><span class="classes"><span data-class="image-position-left">, left</span><span data-class="image-position-center" class="default">, center</span><span data-class="image-position-right">, right</span></span></span><span class="property" data-name="size" data-requires="style4"><a href="#" class="title">size</a><span class="classes"><span data-class="-size">, normal</span><span data-class="fullscreen" class="default">, fullscreen</span><span data-class="halfscreen">, halfscreen</span></span>, </span><span class="property" data-name="orientation" data-requires="style4"><a href="#" class="title">orientation</a><span class="classes"><span data-class="orient-left" class="default">, left</span><span data-class="orient-center">, center</span><span data-class="orient-right">, right</span></span>, </span><span class="property" data-name="content alignment" data-requires="style4"><a href="#" class="title">content alignment</a><span class="classes"><span data-class="content-align-left" class="default">, left</span><span data-class="content-align-center">, center</span><span data-class="content-align-right">, right</span></span>, </span><span class="property" data-name="image position" data-requires="style4"><span>and </span><a href="#" class="title">image position</a><span class="classes"><span data-class="image-position-left">, left</span><span data-class="image-position-center" class="default">, center</span><span data-class="image-position-right">, right</span></span></span><span class="property" data-name="size" data-requires="style5"><a href="#" class="title">size</a><span class="classes"><span data-class="-size">, normal</span><span data-class="fullscreen" class="default">, fullscreen</span><span data-class="halfscreen">, halfscreen</span></span>, </span><span class="property" data-name="orientation" data-requires="style5"><a href="#" class="title">orientation</a><span class="classes"><span data-class="orient-left" class="default">, left</span><span data-class="orient-center">, center</span><span data-class="orient-right">, right</span></span>, </span><span class="property" data-name="content alignment" data-requires="style5"><a href="#" class="title">content alignment</a><span class="classes"><span data-class="content-align-left" class="default">, left</span><span data-class="content-align-center">, center</span><span data-class="content-align-right">, right</span></span>, </span><span class="property" data-name="image position" data-requires="style5"><span>and </span><a href="#" class="title">image position</a><span class="classes"><span data-class="image-position-left">, left</span><span data-class="image-position-center" class="default">, center</span><span data-class="image-position-right">, right</span></span></span></span>, as well as assign it an optional <code>onload</code> or <code>onscroll</code> transition modifier (<a href="#reference-spotlight">details</a>).</p>
				<ul class="actions stacked">
					<li><a href="#" class="button">Learn More</a></li>
				</ul>
			</div>
		</div>
	)
})

export const GalleryMM001 = component$(() => {
	return (
		<div class="gallery-mm-001">Gallery</div>
	)
})

export const ItemsMM001 = component$(() => {
	return (
		<div class="items-mm-001">items-mm-001</div>
	)
})

export default component$(() => {
	useStyles$(styles)

	return (
		<>
			<HeroMM001></HeroMM001>
			<div class="row">
				<div class="column">
				</div>
				<div class="column">
					<SpotlightMM001></SpotlightMM001>
				</div>
				<div class="column">
					<GalleryMM001></GalleryMM001>
				</div>
				<div class="column">
					<ItemsMM001></ItemsMM001>
				</div>
			</div>
		</>
	)
})

export const head: DocumentHead = {
	title: 'themes',
}
