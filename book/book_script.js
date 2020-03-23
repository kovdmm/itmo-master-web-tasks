(function(window) {
	const $ = selector => document.querySelector(selector);
	const scrollTop = () => window.scrollTo(0, 0);

	const pageSelector = $('#pageSelector');
	const pageFrame = $('#pageFrame');
	const nextBtn = $('#next');
	const prevBtn = $('#prev');
	const contentsBtn = $('#contents');

	window.pageFrame = pageFrame;

	// effector
	const { createStore, createEvent } = effector;

	// store
	const pageStore = createStore({
		current: getLocationPageNum()
	});

	function getLocationPageNum() {
		return Number(location.hash.substring(1)) || 1;
	}

	// events
	const nextPage = createEvent(),
		prevPage = createEvent(),
		setPage = createEvent();

	// observer
	pageStore.watch(updateView);

	// bind store events
	pageStore
	.on(nextPage, state => {
		return getNewStateOrUndefined(state, state.current + 1);
	})
	.on(prevPage, state => {
		return getNewStateOrUndefined(state, state.current - 1);
	})
	.on(setPage, (state, value) => {
		return getNewStateOrUndefined(state, value);
	});

	function getNewStateOrUndefined(state, value) {
		let validValue = getValidPageNum(value, 1, 141); // magic numbers
		if (state.current === validValue) return;
		return { current: validValue };
	}

	// bind UI events
	nextBtn.addEventListener('click', e => {
		e.preventDefault();
		return nextPage();
	});
	prevBtn.addEventListener('click', e => {
		e.preventDefault();
		return prevPage();
	});
	contentsBtn.addEventListener('click', e => {
		e.preventDefault();
		return setPage(3);
	});
	window.addEventListener('popstate', () => setPage(getLocationPageNum()));
	pageSelector.addEventListener('input', e => setPage(+e.target.value));
	
	// Обновляет представление (вызывается при изменении объекта состояния)
	function updateView(state) {
		if (isFirstViewUpdate()) initView(state);

		let current = state.current;

		// Изменение pageFrame.src не подходит, так как пушит ЛИШНИЕ состояния в history
		pageFrame.contentWindow.location.replace(getPageUrl(current));
		nextBtn.href = getPageUrl(current + 1);
		prevBtn.href = getPageUrl(current - 1);
		pageSelector.value = current;
		
		scrollTop();

		location.hash = current;
		
		console.log(`%c %s %c %s`,'color:white;background:green', 'updateView', '', 'current page is', current); // beautify debug
	}

	function isFirstViewUpdate() {
		return !pageSelector.children.length;
	}

	function initView(state) {
		generateOptionsToSelect(pageSelector);

		pageSelector.value = state.current;

		contentsBtn.href = getPageUrl(3);
	}

	function generateOptionsToSelect(pageSelector) {
		let options = document.createDocumentFragment();
		for (let i = 1; i <= 141; i++) {
			options
				.appendChild(document.createElement('option'))
				.appendChild(document.createTextNode(i));
		}
		pageSelector.appendChild(options);
	}

	function getPageUrl(pageNum) {
		if (!isPageValid(pageNum, 1, 141)) return '#'; // magic numbers
		let pageNumStr = (pageNum < 10) ? '0' + pageNum : '' + pageNum;
		return `https://kodaktor.ru/gossbook_slides/gossbook-${pageNumStr}.png`; // magic link
	}

	function getValidPageNum(pageNum, min, max) {
		pageNum = Number(pageNum) || min;
		if (isPageValid(pageNum, min, max)) return pageNum;
		if (min && pageNum < min) return min;
		if (max && pageNum > max) return max;
		return pageNum;
	}

	function isPageValid(pageNum, min, max) {
		return pageNum >= min && pageNum <= max;
	}

})(this);