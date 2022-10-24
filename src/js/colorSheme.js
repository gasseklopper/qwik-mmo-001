console.log("colorSheme.js loaded")
// Do this before the body gets parsed
var doc = document.firstElementChild;
doc.setAttribute("lang", "de-DE");
const selectetdShema = localStorage.getItem("color-scheme")
doc.setAttribute("color-scheme", selectetdShema);
if (!localStorage.getItem("color-scheme")) {
	console.log('not as ', localStorage.getItem("color-scheme"))
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		doc.setAttribute("color-scheme", "dark");
		localStorage.setItem("color-scheme", "dark");
	}
	if (window.matchMedia("(prefers-color-scheme: light)").matches) {
		doc.setAttribute("color-scheme", "light");
		localStorage.setItem("color-scheme", "light");
	}
}