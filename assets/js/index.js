let header, siteTitle, nav, sitesNav;

const resize_header = function() {
	header.clientHeight == siteTitle.clientHeight ? header.classList.remove("over") : header.classList.add("over");
}

window.addEventListener("DOMContentLoaded", function() {
	header = html.querySelector("#header");
	siteTitle = html.querySelector("#site-title");
	nav = html.querySelector("#nav");
	sitesNav = html.querySelector("#sites-nav");

	resize_header();
	window.addEventListener("resize", function() {
		resize_header();
	});
});
