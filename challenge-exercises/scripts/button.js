function btnClick(selector) {
	const button = document.querySelector(selector);
	if (!button.classList.contains('on')) {
		turnOffPreviousButton()
		button.classList.add('on');
	} else {
		button.classList.remove('on');
	}
}

function turnOffPreviousButton() {
	const previousButton = document.querySelector('.on');
	if (previousButton) {
		previousButton.classList.remove('on');
	}
}