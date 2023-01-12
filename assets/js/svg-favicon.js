const svg_favicon = {
	"name": "favicon",
	"viewBox": "0 0 64 64",
	"height": 64,
	"width": 64,
	"count": 0,
	"code": ""
}
svg_favicon.code = `
	<path	d="m 1,33 h 30 v 3 l -26,24 h 26 v 3 h -30 v -3 l 26,-24 h -26 z"
		stroke-width="2"
	/>
	<path	d="m 36.75,24.75 h 22.5 v 2.25 l -19.5,18 h 19.5 v 2.25 h -22.5 v -2.25 l 19.5,-18 h -19.5 z"
		stroke-width="1.5"
	/>
	<path	d="m 26.5,4.5 h 15 v 1.5 l -13,12 h 13 v 1.5 h -15 v -1.5 l 13,-12 h -13 z"
		stroke-width="1"
	/>
	<path	d="m 53.15,0.35 h 10.5 v 1.05 l -9.1,8.4 h 9.1 v 1.05 h -10.5 v -1.05 l 9.1,-8.4 h -9.1 z"
		stroke-width="0.7"
	/>
`;



const svg_draw_favicon = function(target) {
	const svg_info = svg_favicon;

	let svg_code = `<svg viewBox="${svg_info.viewBox}" draw="${svg_info.name}" fill="var(--svg-color, #5cc9ff)" stroke="var(--svg-color, #5cc9ff)">`;
	if (svg_info.count == 0) {
		svg_code += `<symbol id="svg-draw-${svg_info.name}">${svg_info.code}</symbol>`;
	}
	svg_code += `<use href="#svg-draw-${svg_info.name}"/></svg>`;

	target.outerHTML = svg_code;
	svg_favicon.count++;
}



window.addEventListener("load", function() {
	for (let x of document.querySelectorAll('svg[draw="favicon"]')) {
		svg_draw_favicon(x);
	}
});
