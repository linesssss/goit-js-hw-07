const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
	const amount = parseInt(input.value.trim());
	
	if (amount < 1 || amount > 100 || isNaN(amount)) {
		alert('Please enter a number between 1 and 100');
		return;
	}

	createBoxes(amount);
	input.value = '';
});

destroyButton.addEventListener('click', () => {
	boxesContainer.innerHTML = '';
});

function createBoxes(amount) {
	const boxes = [];
	for (let i = 0; i < amount; i++) {
		const size = 30 + i * 10;
		const box = document.createElement('div');
		box.style.width = `${size}px`;
		box.style.height = `${size}px`;
		box.style.backgroundColor = getRandomHexColor();
		boxes.push(box);
	}
	boxesContainer.append(...boxes);
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}