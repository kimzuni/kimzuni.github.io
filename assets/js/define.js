---
---

const get_style = function(t, s) {
	if (!s) { s = t; t = document.documentElement; }
	return getComputedStyle(t).getPropertyValue(s).trim();
}
const set_style = function(t, s, v) {
	t.style.setProperty(s, v);
}

const to_px = function(v) {
	if (!isNaN(v*1)) {
	} else if (v.endsWith("rem")) {
		v = parseFloat(v) * parseFloat(get_style("font-size"));
	}
	return v
}


const params = "&" + location.search.slice(1);
const get_param = function(k) {
	let t = `&${k}=`;
	return params.includes(t) ? decodeURIComponent(params.split(t)[1].split("&")[0]).replace(/\+/g, " ") : undefined;
}





const baseurl = "{{ site.baseurl }}";
const paginate_path = "{{ site.paginate_path }}";

const theme_color = get_style("--theme-color");
const theme_color_light = get_style("--theme-color-light");
const theme_color_dark = get_style("--theme-color-dark");
const sub_theme_color = get_style("--sub-theme-color");
const theme_color_trans = get_style("--theme-color-trans");

const html = document.querySelector("html");
