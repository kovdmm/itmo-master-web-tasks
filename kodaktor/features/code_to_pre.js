// Access: https://kodaktor.ru/j/code_to_pre_19f77
(function(window){
	let code = document.createElement('code');
	let pre = document.createElement('pre');
	pre.appendChild(code);
	code.innerText = (js_beautify(document.querySelector('#code').innerText, { indent_size: 2, space_in_empty_paren: true }));
	document.body.appendChild(pre);
	hljs.initHighlightingOnLoad();
})(this);
