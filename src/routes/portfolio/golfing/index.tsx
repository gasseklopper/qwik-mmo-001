import { component$, useVisibleTask$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Bodytext from '~/components/__libary/01_Atoms/bodytext/bodytext'
import Headlines from '~/components/__libary/01_Atoms/headlines/headlines'
import Intro from '~/components/__libary/04_Templates/intro/intro'

export default component$(() => {
	useVisibleTask$(() => {
		console.log('Color Stripes')
		const morleyDotsCanvas = document.getElementById('morleyDotsCanvas')  as HTMLCanvasElement
		console.log('morley dots canvas', morleyDotsCanvas)
		

		if (morleyDotsCanvas) {
			console.log('is canvas')
			// get the context
			var c = morleyDotsCanvas.getContext('2d')
			console.log('is canvas c:', c)

			morleyDotsCanvas.width = window.innerWidth
			morleyDotsCanvas.height = window.innerHeight * 2

			//morleyDotsCanvas wight and height
			var w = morleyDotsCanvas.width
			var h = morleyDotsCanvas.height

			// create var initBubbles with 50 as value
			var initBubbles = 100

			//create var minBubbles with value of 10
			var minBubbles = 55

			//array for all Bubbles
			var bubbles: any[] = []

			// create event listener with init
			window.addEventListener('load', init)

		}



		// create function init
		function init() {
			// fill the bubble array with createBubble function
			while (bubbles.length < initBubbles) {
				bubbles.push(createBubbles())
				console.log('test', bubbles.length)
			}
			// call the animation loop
			draw()
		}

		//function to create bubbles
		function Bubble(
			this: any,
			x: number,
			y: number,
			r: number,
			vx: number,
			vy: number
		) {
			this.x = x
			this.y = y
			this.r = r
			this.vx = vx
			this.vy = vy
			this.color = randomColor()
			this.colorHighLight = randomColor()
			this.draw = function () {
				//draw bubble
				c!.beginPath()
				c!.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
				c!.fillStyle = this.color
				c!.fill()
				c!.closePath()
				// draw shine dot 1 3rd of bubble
				c!.beginPath()
				c!.arc(this.x - r / 3, this.y - r / 3, this.r / 3, 0, Math.PI * 2, false)
				c!.fillStyle = this.colorHighLight
				c!.fill()
				c!.closePath()
			}
		}

		// function to create bubbles
		function createBubbles() {
			var x = Math.random() * w
			var y = Math.random() * h
			var r = Math.random() * 33 + 5
			// velocity variables
			var vx = Math.random() * 2 - 1
			var vy = Math.random() * 2 - 1
			// retutn Bubble
			return new Bubble(x, y, r, vx, vy)
		}
		// create function randomColor with return hex color string
		function randomColor() {
			var r = Math.floor(Math.random() * 256)
			var g = Math.floor(Math.random() * 256)
			var b = Math.floor(Math.random() * 256)
			return 'rgb(' + (r + 20) + ', ' + (g + 10) + ', ' + (b + 10) + ')'
		}

		// function to draw bubbles
		function draw() {
			// paint background with randomColor()
			c!.fillStyle = randomColor()
			// clear the canvas
			// c.clearRect(0, 0, w, h);

			// draw all bubbles
			for (var i = 0; i < bubbles.length; i++) {
				var currentBubble = bubbles[i]

				// updtaing the size of the bubbles
				currentBubble.r = currentBubble.r + (0.06 % currentBubble.r)

				// updtaing the position of the bubbles
				currentBubble.x += currentBubble.vx
				currentBubble.y += currentBubble.vy
				// draw
				currentBubble.draw()

				// check if bubble is out of bounds
				if (
					currentBubble.x + currentBubble.r > w ||
					currentBubble.x - currentBubble.r < 0 ||
					currentBubble.y - currentBubble.r < 10 ||
					currentBubble.r > 180
				) {
					bubbles.splice(i, 1)
					if (bubbles.length < minBubbles) {
						bubbles.splice(i, 0, createBubbles())
					}
				}
			}
			// call the requestAnimationFrame with draw
			requestAnimationFrame(draw)
		}
	})

	return (
		<>
			<canvas id="morleyDotsCanvas"></canvas>
			<Intro
				columnOne={
					<>
						<Headlines>Golfing</Headlines>
						<Bodytext>
							this is the Golfing main page Lorem ipsum dolor sit, amet
							consectetur adipisicing elit. Natus non adipisci nam cupiditate,
							quis quam porro! Adipisci mollitia fuga deserunt nemo nihil ea
							quod. Culpa quae velit amet expedita, sequi ducimus commodi ut
							sint voluptatum, magnam iste molestiae unde molestias
							exercitationem, at perspiciatis itaque nam vitae. Quidem, nam
							adipisci, explicabo neque molestiae sint cum, optio pariatur sed
							provident quos officia cupiditate? Inventore, eum! Quisquam
							dolorem repellendus facilis nostrum tempore quo, accusantium ut
							unde a eveniet earum? Maxime laudantium aliquam accusamus, ducimus
							tempore nulla vel, quas nisi odit recusandae qui quibusdam rem.
							Porro dolor officia cumque esse quis soluta quas quia.
						</Bodytext>
					</>
				}
				columnTwo={
					<>
						<img
							src="../../assets/images/photography/minigolf/minigolf_001.gif"
							alt=""
						/>
					</>
				}
			></Intro>
			<GalleryStatic />
		</>
	)
})

export const GalleryStatic = component$(() => {
	return (
		<div class="row">
			<div class="column large-6">
				<img
					src="../../assets/images/photography/minigolf/minigolf_002.gif"
					alt=""
				/>
			</div>
			<div class="column large-6"></div>
			<div class="column large-6"></div>
			<div class="column large-6">
				<img
					src="../../assets/images/photography/minigolf/minigolf_003.gif"
					alt=""
				/>
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'Blacker',
}
