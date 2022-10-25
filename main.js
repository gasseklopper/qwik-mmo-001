import "./js/colorSheme";
if (typeof window !== 'undefined') {
	//here `window` is available, so `window.document` (or simply `document`) is available too
	window.onload = () => {
		console.log('page is fully loaded');
	};
}
console.log("Index.js loaded")
