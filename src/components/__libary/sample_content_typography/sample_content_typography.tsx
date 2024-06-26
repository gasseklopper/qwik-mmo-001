import { component$ } from '@builder.io/qwik'
import Headlines from '../01_Atoms/headlines/headlines'
import Bodytext from '../01_Atoms/bodytext/bodytext'
import Button from '../01_Atoms/button/button'
import ButtonCombo from '../atoms/buttonCombo/buttonCombo'

export default component$(() => {
	return (
		<section>
			{/* Typography */}
			<div class="row">
				{/* ELEMENTS REFERENCE */}
				<div class="column huge-12 surface2 ">
					<Headlines headlineTag={'h1'} class={'h1'} weight="bold">
						ELEMENTS REFERENCE
					</Headlines>
					<hr />
				</div>
				{/* BODYTEXT */}
				<div class="column huge-12 surface2 ">
					<Headlines headlineTag={'h2'} class={'h2'}>
						BODYTEXT
					</Headlines>
					<Bodytext bodytextSize="large">
						This is <b>bold</b> and this is <strong>strong</strong>. This is
						<i>italic</i> and this is <em>emphasized</em>. This is
						<sup>superscript</sup> text and this is <sub>subscript</sub> text.
						This is <u>underlined</u> and this is code:
						<code>for (;;) for (;;) </code>. Finally, this is a{' '}
						<a href="#">link</a>.
					</Bodytext>
					<hr />
				</div>
				{/* Heading regular */}
				<div class="column large-6 surface2 ">
					<Headlines headlineTag={'h2'} class={'h2 surface8'}>
						font-weight: regular
					</Headlines>
					<Headlines headlineTag={'h2'} class={'h1'}>
						Heading Level l
					</Headlines>
					<Headlines headlineTag={'h2'} class={'h2'}>
						Heading Level 2
					</Headlines>
					<Headlines headlineTag={'h3'} class={'h3'}>
						Heading Level 3
					</Headlines>
					<Headlines headlineTag={'h4'} class={'h4'}>
						Heading Level 4
					</Headlines>
					<Headlines headlineTag={'h5'} class={'h5'}>
						Heading Level 5
					</Headlines>
					<Headlines headlineTag={'h6'} class={'h6'}>
						Heading Level 6
					</Headlines>
				</div>
				{/* Heading bold */}
				<div class="column large-6 surface8 ">
					<Headlines headlineTag={'h2'} class={'h2 surface2'} weight="bold">
						font-weight: bold
					</Headlines>
					<Headlines headlineTag={'h2'} class={'h1'} weight="bold">
						Heading Level l
					</Headlines>
					<Headlines headlineTag={'h2'} class={'h2'} weight="bold">
						Heading Level 2
					</Headlines>
					<Headlines headlineTag={'h3'} class={'h3'} weight="bold">
						Heading Level 3
					</Headlines>
					<Headlines headlineTag={'h4'} class={'h4'} weight="bold">
						Heading Level 4
					</Headlines>
					<Headlines headlineTag={'h5'} class={'h5'} weight="bold">
						Heading Level 5
					</Headlines>
					<Headlines headlineTag={'h6'} class={'h6'} weight="bold">
						Heading Level 6
					</Headlines>
				</div>
				{/* header molecule */}
				<div class="column huge-12 surface8 ">
					<div class="row">
						<div class="column large-6 surface8 ">
							{/* // TODO:: Create header molecule */}
							<header>
								<Bodytext
									class={'quaternary text-secondary'}
									bodytextSize="medium"
									bodytextVariant="eyebrow"
								>
									Lorem ipsum dolor sit amet nullam id egestas urna aliquam
								</Bodytext>
								<Headlines
									headlineTag={'h2'}
									class={'h1 surface4'}
									variant="browLine"
								>
									Heading with a Subtitle h1
								</Headlines>
								<Bodytext bodytextSize="xlarge" bodytextVariant="subline">
									<b>
										Lorem ipsum dolor sit amet nullam id egestas urna aliquam
									</b>
								</Bodytext>
							</header>
							<Bodytext bodytextSize="large">
								Lorem ipsum dolor sit amet nullam id egestas urna aliquam Lorem
								ipsum dolor sit amet nullam id egestas urna aliquam Lorem ipsum
								dolor sit amet nullam id egestas urna aliquam Lorem ipsum dolor
								sit amet nullam id egestas urna aliquam
							</Bodytext>
						</div>
						<div class="column large-6 surface2 ">
							{/* // TODO:: Create header molecule */}
							<header>
								<Bodytext bodytextSize="small" bodytextVariant="eyebrow">
									Heading with a Eyebrow h1
								</Bodytext>
								<Headlines variant="browLine">
									Heading with a Subtitle & Eyebrow h2
								</Headlines>
								<Bodytext bodytextSize="xlarge" bodytextVariant="subline">
									Lorem ipsum dolor sit amet nullam id egestas urna aliquam
								</Bodytext>
							</header>
							<Bodytext bodytextSize="medium">
								Lorem ipsum dolor sit amet nullam id egestas urna aliquam Lorem
								ipsum dolor sit amet nullam id egestas urna aliquam Lorem ipsum
								dolor sit amet nullam id egestas urna aliquam Lorem ipsum dolor
								sit amet nullam id egestas urna aliquam
							</Bodytext>
						</div>
						<div class="column large-6 surface4 ">
							{/* // TODO:: Create header molecule */}
							<header>
								<Bodytext
									bodytextSize="small"
									bodytextVariant="eyebrow"
									class={'secondary text-quaternary'}
								>
									<b>
										Lorem ipsum dolor sit amet nullam id egestas urna aliquam
									</b>
								</Bodytext>
								<Headlines
									headlineTag={'h3'}
									class={'h3'}
									weight="bold"
									variant="browLine"
								>
									Heading with a Subtitle h3
								</Headlines>
								<Bodytext bodytextSize="large" bodytextVariant="subline">
									<b>
										Lorem ipsum dolor sit amet nullam id egestas urna aliquam
									</b>
								</Bodytext>
							</header>
							<Bodytext bodytextSize="medium">
								Lorem ipsum dolor sit amet nullam id egestas urna aliquam Lorem
								ipsum dolor sit amet nullam id egestas urna aliquam Lorem ipsum
								dolor sit amet nullam id egestas urna aliquam Lorem ipsum dolor
								sit amet nullam id egestas urna aliquam
							</Bodytext>
						</div>
						<div class="column large-6 surface6 ">
							{/* // TODO:: Create header molecule */}
							<header>
								<Headlines headlineTag={'h4'} variant="subline">
									Heading with a Subtitle h4
								</Headlines>
								<Bodytext bodytextSize="large" bodytextVariant="subline">
									Lorem ipsum dolor sit amet nullam id egestas urna aliquam
								</Bodytext>
							</header>
							<Bodytext bodytextSize="small">
								Lorem ipsum dolor sit amet nullam id egestas urna aliquam Lorem
								ipsum dolor sit amet nullam id egestas urna aliquam Lorem ipsum
								dolor sit amet nullam id egestas urna aliquam Lorem ipsum dolor
								sit amet nullam id egestas urna aliquam
							</Bodytext>
							<hr />
						</div>
					</div>
				</div>
				{/* BODYTEXT */}
				<div class="column huge-12 surface8 ">
					<Bodytext bodytextSize="large">
						Lorem ipsum dolor sit amet nullam id egestas urna aliquam
					</Bodytext>
					<hr />
				</div>
			</div>
			{/* Definition */}
			<div class="row">
				<div class="column huge-12 surface2 ">
					<h3>Definition</h3>
					<dl>
						<dt>Item 1</dt>
						<dd>
							<Bodytext bodytextSize="medium">
								Lorem ipsum dolor sit amet nullam id egestas urna aliquam Lorem
								ipsum dolor sit amet nullam id egestas urna aliquam Lorem ipsum
								dolor sit amet nullam id egestas urna aliquam Lorem ipsum dolor
								sit amet nullam id egestas urna aliquam
							</Bodytext>
						</dd>
						<dt>Item 2</dt>
						<dd>
							<Bodytext bodytextSize="medium">
								Lorem ipsum dolor sit amet nullam id egestas urna aliquam Lorem
								ipsum dolor sit amet nullam id egestas urna aliquam Lorem ipsum
								dolor sit amet nullam id egestas urna aliquam Lorem ipsum dolor
								sit amet nullam id egestas urna aliquam
							</Bodytext>
						</dd>
						<dt>Item 3</dt>
						<dd>
							<Bodytext bodytextSize="medium">
								Lorem ipsum dolor sit amet nullam id egestas urna aliquam Lorem
								ipsum dolor sit amet nullam id egestas urna aliquam Lorem ipsum
								dolor sit amet nullam id egestas urna aliquam Lorem ipsum dolor
								sit amet nullam id egestas urna aliquam
							</Bodytext>
						</dd>
					</dl>
					<hr />
				</div>
			</div>
			{/* Lists */}
			<div class="row">
				<div class="column huge-12 surface8">
					<h2>Lists</h2>
				</div>
				<div class="column large-6 surface6">
					<h3>Unordered</h3>
					<ul>
						<li>Dolor pulvinar etiam.</li>
						<li>Sagittis lorem eleifend.</li>
						<li>Felis feugiat dolore viverra.</li>
						<li>Dolor pulvinar etiam.</li>
					</ul>
				</div>
				<div class="column large-6 surface5">
					<h3>Alternate</h3>
					<ul class="alt">
						<li>Dolor pulvinar etiam etiam.</li>
						<li>Sagittis adipiscing eleifend.</li>
						<li>Felis enim dolore viverra.</li>
						<li>Dolor pulvinar etiam etiam.</li>
					</ul>
				</div>
				<div class="column large-6 surface4">
					<h3>Ordered</h3>
					<ol>
						<li>Dolor pulvinar etiam.</li>
						<li>Etiam vel felis at viverra.</li>
						<li>Felis enim feugiat magna.</li>
						<li>Etiam vel felis nullam.</li>
						<li>Felis enim et tempus.</li>
					</ol>
				</div>
				<div class="column large-6 surface3">
					<h3>Icons</h3>
					{/* TODO: CREATE ICON COMPONENTE */}
					<ul class="icons">
						<li>
							<a href="#" class="icon brands fa-twitter">
								<span class="label">Twitter</span>
							</a>
						</li>
						<li>
							<a href="#" class="icon brands fa-facebook-f">
								<span class="label">Facebook</span>
							</a>
						</li>
						<li>
							<a href="#" class="icon brands fa-instagram">
								<span class="label">Instagram</span>
							</a>
						</li>
						<li>
							<a href="#" class="icon brands fa-github">
								<span class="label">Github</span>
							</a>
						</li>
						<li>
							<a href="#" class="icon brands fa-dribbble">
								<span class="label">Dribbble</span>
							</a>
						</li>
					</ul>
					<ul class="icons alt">
						<li>
							<a href="#" class="icon brands alt fa-twitter">
								<span class="label">Twitter</span>
							</a>
						</li>
						<li>
							<a href="#" class="icon brands alt fa-facebook-f">
								<span class="label">Facebook</span>
							</a>
						</li>
						<li>
							<a href="#" class="icon brands alt fa-instagram">
								<span class="label">Instagram</span>
							</a>
						</li>
						<li>
							<a href="#" class="icon brands alt fa-github">
								<span class="label">Github</span>
							</a>
						</li>
						<li>
							<a href="#" class="icon brands alt fa-dribbble">
								<span class="label">Dribbble</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			{/* Actions */}
			{/* TODO: CREATE Actions COMPONENTE */}
			<div class="row">
				<div class="column huge-12 primary ">
					<h3>Actions</h3>
					<h4>Combo</h4>
					<button>primary</button>
					<button>dafault</button>
					<button>primary small</button>
					<button>default small</button>
					<h4>Single</h4>
					<button>primary</button>
					<button>dafault</button>
					<button>primary small</button>
					<button>default small</button>
					<hr />
				</div>
			</div>
			{/* BLOCKQUOTE */}
			{/* TODO: CREATE BLOCKQUOTE COMPONENTE */}
			<div class="row">
				<div class="column large-6 surface1 ">
					<h3>BLOCKQUOTE</h3>
					<blockquote>
						Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
						sagittis eget tempus euismod. Vestibulum ante ipsum primis in
						faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
						adipiscing accumsan faucibus. Vestibulum ante ipsum primis in
						faucibus vestibulum. Blandit adipiscing eu felis.
					</blockquote>
				</div>
				{/* BLOCKQUOTE */}
				<div class="column large-6 surface6 ">
					<h3>BLOCKQUOTE</h3>
					<blockquote>
						Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
						sagittis eget tempus euismod. Vestibulum ante ipsum primis in
						faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
						adipiscing accumsan faucibus. Vestibulum ante ipsum primis in
						faucibus vestibulum. Blandit adipiscing eu felis.
					</blockquote>
				</div>

				{/* BLOCKQUOTE */}
				<div class="column large-6 surface8 ">
					<h3>BLOCKQUOTE</h3>
					<blockquote class="surface7 ">
						Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
						sagittis eget tempus euismod. Vestibulum ante ipsum primis in
						faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
						adipiscing accumsan faucibus. Vestibulum ante ipsum primis in
						faucibus vestibulum. Blandit adipiscing eu felis.
					</blockquote>
				</div>
				{/* BLOCKQUOTE */}
				<div class="column large-6 surface4 ">
					<h3>BLOCKQUOTE</h3>
					<blockquote class="surface3">
						Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
						sagittis eget tempus euismod. Vestibulum ante ipsum primis in
						faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
						adipiscing accumsan faucibus. Vestibulum ante ipsum primis in
						faucibus vestibulum. Blandit adipiscing eu felis.
					</blockquote>
				</div>
			</div>
			{/* TABLE */}
			{/* TODO: CREATE TABLE COMPONENTE */}
			<div class="row">
				<div class="column huge-12 surface3">
					<h3>TABLE</h3>
					<h4>DEFAULT</h4>
					<div class="table-wrapper">
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Description</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Item 1</td>
									<td>Ante turpis integer aliquet porttitor.</td>
									<td>29.99</td>
								</tr>
								<tr>
									<td>Item 2</td>
									<td>Vis ac commodo adipiscing arcu aliquet.</td>
									<td>19.99</td>
								</tr>
								<tr>
									<td>Item 3</td>
									<td> Morbi faucibus arcu accumsan lorem.</td>
									<td>29.99</td>
								</tr>
								<tr>
									<td>Item 4</td>
									<td>Vitae integer tempus condimentum.</td>
									<td>19.99</td>
								</tr>
								<tr>
									<td>Item 5</td>
									<td>Ante turpis integer aliquet porttitor.</td>
									<td>29.99</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td colSpan={2}></td>
									<td>100.00</td>
								</tr>
							</tfoot>
						</table>
					</div>
					<h4>alternative</h4>
					<div class="table-wrapper">
						<table class="alt">
							<thead>
								<tr class="surface7">
									<th>Name</th>
									<th>Description</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody class="surface7">
								<tr>
									<td>Item 1</td>
									<td>Ante turpis integer aliquet porttitor.</td>
									<td>29.99</td>
								</tr>
								<tr>
									<td>Item 2</td>
									<td>Vis ac commodo adipiscing arcu aliquet.</td>
									<td>19.99</td>
								</tr>
								<tr>
									<td>Item 3</td>
									<td> Morbi faucibus arcu accumsan lorem.</td>
									<td>29.99</td>
								</tr>
								<tr>
									<td>Item 4</td>
									<td>Vitae integer tempus condimentum.</td>
									<td>19.99</td>
								</tr>
								<tr>
									<td>Item 5</td>
									<td>Ante turpis integer aliquet porttitor.</td>
									<td>29.99</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td colSpan={2}></td>
									<td>100.00</td>
								</tr>
							</tfoot>
						</table>
					</div>
					<hr />
				</div>
			</div>
			{/* BUTTONS */}
			{/* TODO: CREATE BUTTONS COMPONENTE */}
			{/* TODO: CREATE BUTTONS COMBO COMPONENTE */}
			<div class="row">
				<div class="column huge-12 primary ">
					<h3>BUTTONS</h3>
				</div>
				<div class="column huge-12 primary ">
					<ButtonCombo>
						<ul>
							<li>
								<Button
									buttonVariant="primary"
									buttonSize="default"
									buttonFit
								>
									primary
								</Button>
							</li>
							<li>
								<Button
									aria-label="secondar button"
									buttonVariant="secondary"
									buttonSize="default"
								>
									secondary
								</Button>
							</li>
						</ul>
					</ButtonCombo>
				</div>
				<div class="column huge-12 primary ">
					<Button buttonVariant="primary" buttonSize="small">
						small
					</Button>

					<Button
						aria-label="secondar button"
						buttonVariant="secondary"
						buttonSize="small"
					>
						small
					</Button>
				</div>
				<div class="column large-6 primary ">
					<ButtonCombo>
						<ul>
							<li>
								<Button
									buttonVariant="primary"
									buttonSize="large"
									buttonFit
								>
									small + fit
								</Button>
							</li>
						</ul>
					</ButtonCombo>
				</div>
				<div class="column large-6 primary ">
					<ButtonCombo>
						<ul>
							<li>
								<Button
									buttonVariant="secondary"
									buttonSize="small"
									buttonFit
								>
									small + fit
								</Button>
							</li>
						</ul>
					</ButtonCombo>
				</div>
				<div class="column huge-12 primary ">
					<ButtonCombo>
						<ul>
							<li>
								<Button buttonVariant="primary" buttonSize="large">
									small
								</Button>
							</li>
							<li>
								<Button
									aria-label="secondar button"
									buttonVariant="secondary"
									buttonSize="default"
								>
									small
								</Button>
							</li>
							<li>
								<Button
									aria-label="secondar button"
									buttonVariant="secondary"
									buttonSize="small"
								>
									small
								</Button>
							</li>
						</ul>
					</ButtonCombo>
				</div>
				<div class="column huge-12 primary ">
					<ButtonCombo buttonCombo$_stack>
						<ul>
							<li>
								<Button
									aria-label="primary button fit"
									buttonSize="small"
									buttonVariant="secondary"
									buttonFit
								>
									fit + small
								</Button>
							</li>
							<li>
								<Button
									aria-label="primary button fit"
									buttonSize="small"
									buttonVariant="secondary"
									buttonFit
								>
									fit + smallssss
								</Button>
							</li>
						</ul>
					</ButtonCombo>
				</div>
				<div class="column huge-12 primary ">
					<ButtonCombo buttonCombo$_stack buttonCombo$_position="left">
						<ul>
							<li>
								<Button
									aria-label="primary button fit"
									buttonSize="small"
									buttonVariant="secondary"
								>
									left
								</Button>
							</li>
							<li>
								<Button
									aria-label="primary button fit"
									buttonSize="small"
									buttonVariant="secondary"
									buttonFit
								>
									left
								</Button>
							</li>
						</ul>
					</ButtonCombo>
				</div>
				<div class="column huge-12 primary ">
					<ButtonCombo buttonCombo$_stack buttonCombo$_position="center">
						<ul>
							<li>
								<Button
									aria-label="primary button fit"
									buttonSize="small"
									buttonVariant="secondary"
								>
									center
								</Button>
							</li>
							<li>
								<Button
									aria-label="primary button fit"
									buttonSize="small"
									buttonVariant="secondary"
									buttonFit
								>
									center
								</Button>
							</li>
						</ul>
					</ButtonCombo>
				</div>
				<div class="column huge-12 primary ">
					<ButtonCombo buttonCombo$_stack buttonCombo$_position="right">
						<ul>
							<li>
								<Button
									aria-label="primary button fit"
									buttonSize="small"
									buttonVariant="secondary"
								>
									right
								</Button>
							</li>
							<li>
								<Button
									aria-label="primary button fit"
									buttonSize="small"
									buttonVariant="secondary"
									buttonFit
								>
									right
								</Button>
							</li>
						</ul>
					</ButtonCombo>
				</div>
				<div class="column huge-12 primary ">
					<h4>with Icon</h4>
					<Button aria-label="primary button icon">secondary icon</Button>
					<Button aria-label="secondary button icon">secondary icon</Button>
					<Button aria-label="primary large button icon">
						primary large icon
					</Button>
					<Button aria-label="primary small button icon">
						primary small icon
					</Button>
					<Button aria-label="secondary large button icon">
						secondary large icon
					</Button>
					<Button aria-label="secondary small button icon">
						secondary small icon
					</Button>
				</div>
				<div class="column huge-12 primary "></div>
				<div class="column huge-12 primary ">
					<h4>Disabled</h4>
					<Button aria-label="primary button disabled" disabled>
						secondary disabled
					</Button>
					<Button aria-label="secondary button disabled" disabled>
						secondary disabled
					</Button>
					<hr />
				</div>
			</div>
			{/* FORM */}
			{/* TODO: CREATE FORM COMPONENTE */}
			<div class="row">
				<div class="column huge-12 primary ">
					<h3>FORM</h3>
					<input
						type="text"
						name="demo-name"
						id="demo-name"
						value=""
						placeholder="Name"
					></input>
					<input
						type="email"
						name="demo-email"
						id="demo-email"
						value=""
						placeholder="Email"
					></input>
					<select name="demo-category" id="demo-category">
						<option value="">- Category -</option>
						<option value="1">Manufacturing</option>
						<option value="1">Shipping</option>
						<option value="1">Administration</option>
						<option value="1">Human Resources</option>
					</select>
					<input
						type="radio"
						id="demo-priority-low"
						name="demo-priority"
						checked
					></input>
					<label for="demo-priority-low">Low</label>
					<input
						type="radio"
						id="demo-priority-normal"
						name="demo-priority"
					></input>
					<label for="demo-priority-normal">Normal</label>
					<input
						type="radio"
						id="demo-priority-high"
						name="demo-priority"
					></input>
					<label for="demo-priority-high">High</label>
					<input type="checkbox" id="demo-copy" name="demo-copy"></input>
					<label for="demo-copy">Email me a copy</label>
					<input
						type="checkbox"
						id="demo-human"
						name="demo-human"
						checked
					></input>
					<label for="demo-human">I am a human</label>
					<textarea
						name="demo-message"
						id="demo-message"
						placeholder="Enter your message"
						rows={6}
					></textarea>
					<input type="submit" value="Send Message" class="primary"></input>
					<input type="reset" value="Reset"></input>
					<hr />
				</div>
			</div>
			{/* IMAGE */}
			{/* TODO: CREATE IMAGE COMPONENTE */}
			<div class="row">
				<div class="column huge-12 primary ">
					<h3>IMAGE</h3>
					<span class="image fit">
						<img
							class="image fit"
							src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
							alt="" width={800}
							height={800}
						></img>
					</span>
					<hr />
				</div>
				<div class="column huge-4 primary ">
					<span class="image fit">
						<img
							class="image fit"
							src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
							alt="" width={800}
							height={800}
						></img>
					</span>
					<hr />
				</div>
				<div class="column huge-4 primary ">
					<span class="image fit">
						<img
							class="image fit"
							src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
							alt="" width={800}
							height={800}
						></img>
					</span>
					<hr />
				</div>
				<div class="column huge-4 primary ">
					<span class="image fit">
						<img
							class="image fit"
							src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
							alt="" width={800}
							height={800}
						></img>
					</span>
					<hr />
				</div>
				<div class="column huge-12 primary ">
					<h3>IMAGE</h3>
					<span class="image fit">
						<img
							class="image fit"
							src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
							alt="" width={800}
							height={800}
						></img>
					</span>
					<hr />
				</div>
				<div class="column huge-4 primary ">
					<span class="image fit">
						<img
							class="image fit"
							src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
							alt="" width={800}
							height={800}
						></img>
					</span>
					<hr />
				</div>
				<div class="column huge-4 primary ">
					<span class="image fit">
						<img
							class="image fit"
							src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
							alt="" width={800}
							height={800}
						></img>
					</span>
					<hr />
				</div>
				<div class="column huge-4 primary ">
					<span class="image fit">
						<img
							class="image fit"
							src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
							alt="" width={800}
							height={800}
						></img>
					</span>
					<hr />
				</div>
			</div>
			{/* IMAGE & TEXT */}
			{/* TODO: CREATE IMAGE & TEXT COMPONENTE */}
			<div class="row">
				<div class="column huge-4 primary ">
					<h3>Left &amp; Right</h3>
					<p>
						<span class="image left">
							<img src="images/pic08.jpg" alt="" width={800}
								height={800} />
						</span>
						Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis
						sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
						faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
						adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
						tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
						primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis
						in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat
						ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
						tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
						primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
						volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
						praesent. Vestibulum ante ipsum primis in faucibus magna blandit
						adipiscing eu felis iaculis.
					</p>
					<p>
						<span class="image right">
							<img src="images/pic08.jpg" alt="" width={800}
								height={800} />
						</span>
						Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis
						sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
						faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
						adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
						tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
						primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis
						in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat
						ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
						tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
						primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
						volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
						praesent. Vestibulum ante ipsum primis in faucibus magna blandit
						adipiscing eu felis iaculis.
					</p>
					<hr />
				</div>
			</div>
			{/* BOX */}
			{/* TODO: CREATE BOX COMPONENTE */}
			<div class="row">
				<div class="column huge-4 primary ">
					<h3>Box</h3>
					<div class="box">
						<p>
							Felis sagittis eget tempus primis in faucibus vestibulum. Blandit
							adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
							faucibus. Integer ac pellentesque praesent tincidunt felis
							sagittis eget. tempus euismod. Magna sed etiam ante ipsum primis
							in faucibus vestibulum. Blandit adipiscing eu ipsum primis in
							faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat
							ac adipiscing accumsan eu faucibus lorem ipsum dolor sit amet
							nullam. Integer ac pellentesque praesent tincidunt felis sagittis
							eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget.
							tempus euismod. Vestibulum ante ipsum primis in faucibus
							vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
							adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
							tincidunt felis sagittis eget. tempus euismod. Vestibulum ante
							ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis
							iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac
							pellentesque praesent. Vestibulum ante ipsum primis in faucibus
							magna blandit adipiscing eu felis iaculis volutpat lorem ipsum
							dolor.
						</p>
					</div>
					<hr />
				</div>
			</div>
			{/* PREFORMATTED */}
			{/* TODO: CREATE PREFORMATTED COMPONENTE */}
			<div class="row">
				<div class="column huge-4 primary ">
					<h3>PREFORMATTED</h3>
					<pre>
						<code>
							i = 0; "while (!deck.isInOrder()) { }" print 'It took ' + i + '
							iterations to sort the deck.';
						</code>
					</pre>
					<hr />
				</div>
			</div>
		</section>
	)
})
