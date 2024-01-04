import { component$ } from '@builder.io/qwik'

export default component$(() => {
	return (
		<section>
			<div class="row">
				<div class="column huge-12 primary ">
					<p>
						This is <b>bold</b> and this is <strong>strong</strong>. This is
						<i>italic</i> and this is <em>emphasized</em>. This is
						<sup>superscript</sup> text and this is <sub>subscript</sub> text.
						This is <u>underlined</u> and this is code:{' '}
						<code>for (;;) (id)</code>. Finally, this is a <a href="#">link</a>.
					</p>
					<hr />
				</div>
				<div class="column huge-12 primary ">
					<h1>Heading Level l</h1>
					<h2>Heading Level 2</h2>
					<h3>Heading Level 3</h3>
					<h4>Heading Level 4</h4>
					<h5>Heading Level 5</h5>
					<h6>Heading Level 6</h6>
					<hr />
				</div>
				<div class="column huge-12 primary ">
					<header>
						<h1>Heading with a Subtitle h1</h1>
						<p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
					</header>
				</div>
				<div class="column huge-12 primary ">
					<header>
						<h2>Heading with a Subtitle h2</h2>
						<p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
					</header>
				</div>
				<div class="column huge-12 primary ">
					<header>
						<h3>Heading with a Subtitle h3</h3>
						<p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
					</header>
				</div>
				<div class="column huge-12 primary ">
					<header>
						<h4>Heading with a Subtitle h4</h4>
						<p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
					</header>
					<hr />
				</div>
				<div class="column huge-12 primary ">
					<p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
					<hr />
				</div>
				<div class="column huge-12 primary ">
					<h3>Definition</h3>
					<dl>
						<dt>Item 1</dt>
						<dd>
							<p>
								Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
								vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
								adipiscing accumsan eu faucibus. Integer ac pellentesque
								praesent.
							</p>
						</dd>
						<dt>Item 2</dt>
						<dd>
							<p>
								Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
								vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
								adipiscing accumsan eu faucibus. Integer ac pellentesque
								praesent.
							</p>
						</dd>
						<dt>Item 3</dt>
						<dd>
							<p>
								Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
								vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
								adipiscing accumsan eu faucibus. Integer ac pellentesque
								praesent.
							</p>
						</dd>
					</dl>
					<hr />
				</div>
				<div class="column huge-12 primary ">
					<h2>Lists</h2>
					<h3>Unordered</h3>
					<ul>
						<li>Dolor pulvinar etiam.</li>
						<li>Sagittis lorem eleifend.</li>
						<li>Felis feugiat dolore viverra.</li>
						<li>Dolor pulvinar etiam.</li>
					</ul>

					<h3>Alternate</h3>
					<ul class="alt">
						<li>Dolor pulvinar etiam etiam.</li>
						<li>Sagittis adipiscing eleifend.</li>
						<li>Felis enim dolore viverra.</li>
						<li>Dolor pulvinar etiam etiam.</li>
					</ul>
				</div>
				<div class="column huge-12 primary ">
					<h3>Ordered</h3>
					<ol>
						<li>Dolor pulvinar etiam.</li>
						<li>Etiam vel felis at viverra.</li>
						<li>Felis enim feugiat magna.</li>
						<li>Etiam vel felis nullam.</li>
						<li>Felis enim et tempus.</li>
					</ol>

					<h3>Icons</h3>
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
				<div class="column huge-12 primary ">
					<h3>BLOCKQUOTE</h3>
					<blockquote>
						Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
						sagittis eget tempus euismod. Vestibulum ante ipsum primis in
						faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
						adipiscing accumsan faucibus. Vestibulum ante ipsum primis in
						faucibus vestibulum. Blandit adipiscing eu felis.
					</blockquote>
					<hr />
				</div>
				<div class="column huge-12 primary ">
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
					<h4>DEFAULT</h4>
					<div class="table-wrapper">
						<table class="alt">
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
					<hr />
				</div>
				<div class="column huge-12 primary ">
					<h3>BUTTONS</h3>
					<h4>single</h4>
					<button>primary</button>
					<button>secondary</button>
					<button>primary large</button>
					<button>secondary default</button>
					<button>secondary small</button>
					<h4>single</h4>
					<button>primary fit</button>
					<button>secondary fit</button>
					<button>primary small fit</button>
					<button>secondary small fit</button>
					<h4>with Icon</h4>
					<button>primary icon</button>
					<button>secondary icon</button>
					<h4>Disabled</h4>
					<button>primary disabled</button>
					<button>secondary disabled</button>
					<hr />
				</div>
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
				<div class="column huge-12 primary ">
					<h3>IMAGE</h3>
					<span class="image fit">
						<img
							class="image fit"
							src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
							alt=""
						></img>
					</span>
					<hr />
				</div>
				<div class="column huge-4 primary ">
					<span class="image fit">
						<img
							class="image fit"
							src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
							alt=""
						></img>
					</span>
					<hr />
				</div>
				<div class="column huge-4 primary ">
					<span class="image fit">
						<img
							class="image fit"
							src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
							alt=""
						></img>
					</span>
					<hr />
				</div>
				<div class="column huge-4 primary ">
					<span class="image fit">
						<img
							class="image fit"
							src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
							alt=""
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
							alt=""
						></img>
					</span>
					<hr />
				</div>
				<div class="column huge-4 primary ">
					<span class="image fit">
						<img
							class="image fit"
							src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
							alt=""
						></img>
					</span>
					<hr />
				</div>
				<div class="column huge-4 primary ">
					<span class="image fit">
						<img
							class="image fit"
							src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
							alt=""
						></img>
					</span>
					<hr />
				</div>
				<div class="column huge-4 primary ">
					<span class="image fit">
						<img
							class="image fit"
							src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
							alt=""
						></img>
					</span>
					<hr />
				</div>
				<div class="column huge-4 primary ">
					<h3>Left &amp; Right</h3>
					<p>
						<span class="image left">
							<img src="images/pic08.jpg" alt="" />
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
							<img src="images/pic08.jpg" alt="" />
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
				<div class="column huge-4 primary ">
					<h3>PREFORMATTED</h3>
					<pre>
						<code>
							i = 0; "while (!deck.isInOrder()) {}" print 'It took ' + i + '
							iterations to sort the deck.';
						</code>
					</pre>
					<hr />
				</div>
			</div>
		</section>
	)
})
