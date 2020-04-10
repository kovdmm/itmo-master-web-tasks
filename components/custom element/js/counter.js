// Template
template = document.createElement('template');
template.innerHTML = `<style>
:host {
	position: relative;
	display: inline-block;
	font-family: Arial, sans-serif;
}
button {
	width: 100%;
	height: 100%;
	padding: 0.2em 0.5em;
	font-size: inherit;
}
button .value:before {
	display: inline-block;
	margin-right: 0.5em;
	font-size: 0.7em;
	vertical-align: top;
}
button[data-type="up"] .value:before {
	content: "👍";
}
button[data-type="down"] .value:before {
	content: "👎";
}
</style>
<button data-type="up">
	<span class="value">0</span>
</button>`;

// Custom HTMLElement - Counter
class Counter extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() { // Ппосле попаздания элемента в DOM
		const shadow = this.attachShadow({ mode: 'open' });
        const content = document.importNode(template.content, true);
		shadow.appendChild(
            this._initContent(content)
		);
	}

	set value(value) {
		this.setAttribute('value', value);
		this._$counter.innerHTML = value;
	}
	get value() {
		return Number(this.getAttribute('value'));
	}

	set type(value) {
		if (value !== "up" && value !== "down") throw new Error('unknown type');
		this.setAttribute('type', value);
		this._$buttonType.value = value; // in #shadow -> button data-type="{value}"
	}
	get type() {
		return this.getAttribute('type') || "up";
	}

	_initContent(content) {
		// take nodes
		this._$button = content.querySelector('button');
		this._$buttonType = this._$button.getAttributeNode('data-type');
		this._$counter = content.querySelector('.value');

		// init attributes
		this.value = this.value;
		this.type = this.type;

		// attach event handlers
		this.addEventListener('click', this._onClick);

		return content;
	}

	_onClick() {
		if (this.type === "up") this.value++;
		if (this.type === "down") this.value--;
	}

	// TODO dispatch changes
}

// tag 'x-counter' for custom element Counter
customElements.define('x-counter', Counter);
