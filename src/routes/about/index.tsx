import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
	return (
		<>
			<AboutIntro />
			<AboutQuote />
			<AboutToolStack />
			<AboutResume />
			<AboutEducation />
			<AboutExibitions />
		</>
	)
})

export const AboutExibitions = component$(() => {
	return (
		<div class="row">
			<div class="column large-12">
				<h3 class="h3" id="exibitions">
					exibitions
				</h3>
				<ul>
					<li>
						<p>
							2019 Matias hidalgo - Fashion Photography - New Talents -{' '}
							<a class="link-nav link-nav--helike" href="http://Vogue.it">
								<span>Vogue.it</span>
							</a>
						</p>
					</li>
					<li>
						<p>
							2019 Matias hidalgo - Documentation Photography - Kunstverein Lola
							Montez, Frankfurt
						</p>
					</li>
					<li>
						<p>
							2015 Rainer Buchman Porsche 911 „bb Moonracer“ Fashion
							Photography, Buch
						</p>
					</li>
					<li>
						<p>
							2014 Ernst and Young Benefitt Auktion Neue Talente - Painting -
							Museum für Angewandte Kunst
						</p>
					</li>
					<li>
						<p>
							2013 Streetart - Photography - Kunstverein Lola Montez, Frankfurt
						</p>
					</li>
					<li>
						<p>
							2012 8 portrait fotoschau Deutschlands - Photography - Landtag,
							Dresden
						</p>
					</li>
					<li>
						<p>
							2012 Ein Stück vom Kuchen - Photography - Kunstverein Lola Montez,
							Frankfurt
						</p>
					</li>
					<li>
						<p>2011 Satelite - Photography - Satelite, Berlin</p>
					</li>
					<li>
						<p>
							2011 Und das soll Kunst sein - Painting - Kunstverein Lola Montez,
							Frankfurt
						</p>
					</li>
					<li>
						<p>
							2011 Gallus Calling - Painting - Projektraum Balken, Frankfurt
						</p>
					</li>
					<li>
						<p>2010 V2 - Photography - SIxt Gallusviertel, Frankfurt</p>
					</li>
					<li>
						<p>2009 V1 - Soundperformance - Landungsbrücken, Frankfurt</p>
					</li>
					<li>
						<p>
							2009 The City Loves You - Photography - Kunstverein Lola Montez,
							Frankfurt
						</p>
					</li>
					<li>
						<p>
							2008 faites le jeu! - Painting - besetztes Haus Westend, Frankfurt
						</p>
					</li>
				</ul>
			</div>
		</div>
	)
})

export const AboutEducation = component$(() => {
	return (
		<div class="row">
			<div class="column large-12">
				<h3 class="h3" id="education">
					education
				</h3>
				<ul>
					<li>
						<p>
							2008-2014 Visuele Kommunikation - Photography/Painting/Digitale
							Medien - HFG, Offenbach a.M.
						</p>
					</li>
					<li>
						<p>
							2006-2008 Photographer - Photography Peter Behrens Schule -
							Darmstadt
						</p>
					</li>
					<li>
						<p>
							2003-2006 Informationstechnischer Assistent - Werner-von-Siemens
							Schule, Frankfurt am Main.
						</p>
					</li>
				</ul>
			</div>
		</div>
	)
})

export const AboutResume = component$(() => {
	return (
		<div class="row">
			<div class="column large-12">
				<h3 class="h3" id="jobs">
					Resume
				</h3>
				<ul>
					<li>Unordered lists have basic styles</li>
					<li>
						01.01.2021 - 30.6.2021 Creative Developer / Frontend-Developer{' '}
						<a class="link-nav link-nav--helike" href="http://hauserlacour.de">
							<span>hauserlacour.de</span>
						</a>
						<ul>
							<li>Nested lists styled to feel right</li>
							<li>Can nest either type of list into the other</li>
						</ul>
					</li>
					<li>Just more list items mama san</li>
				</ul>
				<ul>
					<li>
						01.07.2021 - now Product Engineer / Frontend-Developer
						<a
							class="link-nav link-nav--helike"
							href="http://sinnerschrader.com"
						>
							<span>sinnerschrader.com</span>
						</a>
						<ul>
							<li>Can</li>
							<li>Can</li>
						</ul>
					</li>
					<li>
						01.01.2021 - 30.6.2021 Creative Developer / Frontend-Developer
						<a class="link-nav link-nav--helike" href="http://hauserlacour.de">
							<span>hauserlacour.de</span>
						</a>
						<ul>
							<li>2021 - synbionik.com</li>
						</ul>
					</li>
					<li>
						01.09.2017 - 31.12.2020 UX-Designer / Frontend-Developer
						<a class="link-nav link-nav--helike" href="http://comwrap.com">
							<span>comwrap.com</span>
						</a>
						<ul>
							<li>2020 - Digital Thinking Concepts and Tools Workshop</li>
							<li>
								2020 - Adobe Experience Manager - Frontend Developer
								(HTML5/CSS3/javascript/webpack)
							</li>
							<li>2020 - UX Design Theory Workshop - XDi</li>
							<li>
								2020 - Adobe Experience Manager - Core Componets Workshop
								(HTL/JAVA/CSS/webpack/javascript)
							</li>
							<li>
								2019 - Wie präsentiere ich richtig -
								Kommunikations/Körpersprache Workshop
							</li>
							<li>
								2019 - Udacity Certificate - React Developer
								(HTML5/CSS3/javascript/React/React Native/Ajax/Redux)
							</li>
							<li>
								2018 - css.conf /{' '}
								<a class="link-nav link-nav--helike" href="http://js.conf.eu">
									<span>js.conf.eu</span>
								</a>{' '}
								- Berlin
							</li>
							<li>
								2018 - Udacity Certificate - Frontend Developer
								(HTML5/responsiv/Aria/CSS3/javascript)
							</li>
							<li>
								2017 - Malvid Atomic Design Components Libary Workshop
								(BEM/SCSS/Nunjucks/javascriptECMA6)
							</li>
						</ul>
					</li>
					<li>
						2010-2017 Photographer / Digital Operator / Web-Designer
						<ul>
							<li>Can</li>
							<li>Can</li>
							<li>Can</li>
							<li>Can</li>
							<li>Can</li>
							<li>Can</li>
							<li>Can</li>
							<li>Can</li>
							<li>Can</li>
						</ul>
					</li>
				</ul>
				<ul>
					<li>
						<p>
							2010-2017 Photographer / Digital Operator / Web-Designer 2016 -
							Webdesign - Dieter Roosen 2015 - Digital Operator - Frank Weinert
							2015 - Webdesign - Stefanie Koesling 2014 - Retouching - Maggi
							Thommy Rezept Ideen 2014 - CleverPrinting Colormanagement
							Certificate 2013 - Webdesign - Bernd Mayer 2012 - Digital Operator
							- Dieter Roosen 2011 - Webdesign - friedrich und ruppel - hauser
							lacour 2011 - Digital Operator - Stefanie Koesling 2011 - Digital
							Operator - Becker Lacour 2010 - Digital Operator - Thomas Goos
							2010 - Kulissen Bau- Andreas Kopp
						</p>
					</li>
					<li>
						<p>
							2008-2014 Fotoassistent - Bernd Mayer
							<a class="link-nav link-nav--helike" href="http://berndmayer.com">
								<span>berndmayer.com</span>
							</a>
							2014 - Phase One - Lightning for Digital cameras 2013 - Phase One
							- Capture One Digital Operator Workshop
						</p>
					</li>
				</ul>
			</div>
		</div>
	)
})

export const AboutToolStack = component$(() => {
	return (
		<div class="row">
			<div class="column large-12">
				<h3 class="h3" id="tool-stack">
					Tool Stack
				</h3>
				<div class="about-page__tool_stack">
					<div class="button-tags">
						Emmet<span>Emmet</span>
					</div>
					<div class="button-tags">
						Foundation<span>Foundation</span>
					</div>
					<div class="button-tags">
						Semantic UI<span>Semantic UI</span>
					</div>
					<div class="button-tags">
						Skeleton<span>Skeleton</span>
					</div>
					<div class="button-tags">
						Spectre.css<span>Spectre.css</span>
					</div>
					<div class="button-tags">
						{' '}
						Sass/SCSS<span> Sass/SCSS</span>
					</div>
					<div class="button-tags">
						CSS Tricks Almanac<span>CSS Tricks Almanac</span>
					</div>
					<div class="button-tags">
						stylelint<span>stylelint</span>
					</div>
					<div class="button-tags">
						Atomic Design<span>Atomic Design</span>
					</div>
					<div class="button-tags">
						ECMA<span>ECMA</span>
					</div>
					<div class="button-tags">
						BEM<span>BEM</span>
					</div>
					<div class="button-tags">
						SMACSS<span>SMACSS</span>
					</div>
					<div class="button-tags">
						Airbnb CSS / Sass Styleguide
						<span>Airbnb CSS / Sass Styleguide</span>
					</div>
					<div class="button-tags">
						Babel<span>Babel</span>
					</div>
					<div class="button-tags">
						eslint<span>eslint</span>
					</div>
					<div class="button-tags">
						HTML5<span>HTML5</span>
					</div>
					<div class="button-tags">
						prettier<span>prettier</span>
					</div>
					<div class="button-tags">
						jsfiddle.net<span>jsfiddle.net</span>
					</div>
					<div class="button-tags">
						{' '}
						Airbnb's ESLint config<span> Airbnb's ESLint config</span>
					</div>
					<div class="button-tags">
						Atom<span>Atom</span>
					</div>
					<div class="button-tags">
						Brackets<span>Brackets</span>
					</div>
					<div class="button-tags">
						Visual Studio Code<span>Visual Studio Code</span>
					</div>
					<div class="button-tags">
						CodePen<span>CodePen</span>
					</div>
					<div class="button-tags">
						React<span>React</span>
					</div>
					<div class="button-tags">
						Anime.js<span>Anime.js</span>
					</div>
					<div class="button-tags">
						GreenSock-JS<span>GreenSock-JS</span>
					</div>
					<div class="button-tags">
						CSS3<span>CSS3</span>
					</div>
					<div class="button-tags">
						Handlebars<span>Handlebars</span>
					</div>
					<div class="button-tags">
						Nunjuncks<span>Nunjuncks</span>
					</div>
					<div class="button-tags">
						InVision<span>InVision</span>
					</div>
					<div class="button-tags">
						Typo3<span>Typo3</span>
					</div>
					<div class="button-tags">
						EZ<span>EZ</span>
					</div>
					<div class="button-tags">
						Storybook<span>Storybook</span>
					</div>
					<div class="button-tags">
						Gulp<span>Gulp</span>
					</div>
					<div class="button-tags">
						NPM<span>NPM</span>
					</div>
					<div class="button-tags">
						YARN<span>YARN</span>
					</div>
					<div class="button-tags">
						Browserify<span>Browserify</span>
					</div>
					<div class="button-tags">
						webpack<span>webpack</span>
					</div>
					<div class="button-tags">
						BrowserStack<span>BrowserStack</span>
					</div>
					<div class="button-tags">
						Rest API<span>Rest API</span>
					</div>
					<div class="button-tags">
						caniuse.com<span>caniuse.com</span>
					</div>
					<div class="button-tags">
						Chrome Developer Tools<span>Chrome Developer Tools</span>
					</div>
					<div class="button-tags">
						Modernizr<span>Modernizr</span>
					</div>
					<div class="button-tags">
						Placeholder<span>Placeholder</span>
					</div>
					<div class="button-tags">
						Malvid<span>Malvid</span>
					</div>
					<div class="button-tags">
						basicGrid<span>basicGrid</span>
					</div>
					<div class="button-tags">
						BasicLightbox<span>BasicLightbox</span>
					</div>
					<div class="button-tags">
						Unsplash<span>Unsplash</span>
					</div>
					<div class="button-tags">
						Github<span>Github</span>
					</div>
					<div class="button-tags">
						GitDesktop<span>GitDesktop</span>
					</div>
					<div class="button-tags">
						Browsersync<span>Browsersync</span>
					</div>
					<div class="button-tags">
						Prepros<span>Prepros</span>
					</div>
					<div class="button-tags">
						Google Fonts<span>Google Fonts</span>
					</div>
					<div class="button-tags">
						TypeKit<span>TypeKit</span>
					</div>
					<div class="button-tags">
						Flaticon<span>Flaticon</span>
					</div>
					<div class="button-tags">
						Muzli<span>Muzli</span>
					</div>
					<div class="button-tags">
						Adobe Experience Manager<span>Adobe Experience Manager</span>
					</div>
					<div class="button-tags">
						Adobe CC<span>Adobe CC</span>
					</div>
					<div class="button-tags">
						Sketch<span>Sketch</span>
					</div>
					<div class="button-tags">
						Mac<span>Mac</span>
					</div>
					<div class="button-tags">
						Windows<span>Windows</span>
					</div>
					<div class="button-tags">
						Colorprofiles<span>Colorprofiles</span>
					</div>
					<div class="button-tags">
						google Chrome<span>google Chrome</span>
					</div>
					<div class="button-tags">
						Firefox<span>Firefox</span>
					</div>
					<div class="button-tags">
						Edge Safari<span>Edge Safari</span>
					</div>
					<div class="button-tags">
						Samsung<span>Samsung</span>
					</div>
					<div class="button-tags">
						Emmet<span>Emmet</span>
					</div>
					<div class="button-tags">
						Emmet<span>Emmet</span>
					</div>
					<div class="button-tags">
						Emmet<span>Emmet</span>
					</div>
					<div class="button-tags">
						Emmet<span>Emmet</span>
					</div>
				</div>
			</div>
		</div>
	)
})

export const AboutQuote = component$(() => {
	return (
		<div class="row">
			<div class="column large-12">
				<div class="quote">
					<div class="animated-border-quote">
						<blockquote>
							<p>
								To me, photography is an art of observation. It’s about finding
								something interesting in an ordinary place… I’ve found it has
								little to do with the things you see and everything to do with
								the way you see them.
							</p>
							<cite>Elliott Erwitt</cite>
						</blockquote>
					</div>
				</div>
			</div>
		</div>
	)
})

export const AboutIntro = component$(() => {
	return (
		<div class="row">
			<div class="column large-4">
				<div class="h5">about.me</div>
				<h2 class="h2">Hi, i am Markus Morley.</h2>
				<h3 class="h3">I’m Coding Digital Experiences & Interfaces</h3>
				<h4 class="h4">Desiging, living and working in Frankfurt am Main.</h4>
				<p>
					{' '}
					i love design. build ux prototypes. develop frontend components for
					atomic design. develop and create digital projects for a large scale
					approach.
				</p>
				<div>
					<div class="about-page__social">
						<a href="https://www.instagram.com/yelrom_/">instagram</a>
						<a href="https://github.com/gasseklopper">github</a>
					</div>
				</div>
			</div>
			<div class="column large-4">
				<img
					src="../../assets/images/photography/venedig/IMG_2063.jpg"
					alt=""
				/>
			</div>
			<div class="column large-4">
				<h3 class="h3">Contact me</h3>
				<p>
					The contact form on this page uses [Netlify
					Forms](https://www.netlify.com/docs/form-handling/) to process
					submissions, and saves them in the connected Netlify account where
					notifications can optionally be configured. Each submission is passed
					through a spam filter and if flagged, will display a CAPTCHA challenge
					to the user.
				</p>

				<form class="form" name="contact" method="POST" data-netlify="true">
					<p>
						<label>
							Your Name: <input type="text" name="name" />
						</label>
					</p>
					<p>
						<label>
							Your Email: <input type="email" name="email" />
						</label>
					</p>
					<p>
						<label>
							Message: <textarea name="message"></textarea>
						</label>
					</p>
					<p>
						<button type="submit">Send now</button>
					</p>
				</form>
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'About Me',
}
