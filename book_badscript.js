let curr = 1;
const n = 141;
const s = document.querySelector('#s');
const f = document.querySelector('#f');
const scro = () => self.scrollTo(0, 0);

window.onload = function () {
	const i = Number(location.hash.substring(1));
	if (i > 1 && i < 141) {
		const url = `/gossbook_slides/gossbook-${i}.png`; // `
		f.src = url;
		curr = i;
		s.value = i;
	}
}


for (let i = 1; i <= n; ++i) {
	s
		.appendChild(document.createElement('option'))
		.appendChild(document.createTextNode(i));
}

s
	.addEventListener('input', e => {
		let i = curr = e.target.value;
		if (Number(i) < 10) i = '0' + String(i);
		const url = `/gossbook_slides/gossbook-${i}.png`; // `
		f.src = url;
	});

document.querySelector('#prv')
	.addEventListener('click', e => {
		curr--;
		let i = curr;
		if (curr < 1) curr = i = 1;
		s.value = i;
		if (curr < 10) i = '0' + String(i);
		const url = `/gossbook_slides/gossbook-${i}.png`; // `
		e.target.href = url;
		setTimeout(scro, 10);
	});

document.querySelector('#nxt')
	.addEventListener('click', e => {
		if (curr < 141) curr++;
		let i = curr;
		if (curr < 1) curr = i = 1;
		if (curr > 141) i = 141;
		s.value = i;
		if (curr < 10) i = '0' + String(i);

		const url = `/gossbook_slides/gossbook-${i}.png`; // `
		e.target.href = url;
		setTimeout(scro, 10);
	});