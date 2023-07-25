const $clickButton = document.querySelector('.click-button');
const $closeButton = document.querySelector('.closeButton');
const popup = document.querySelector('.popup');

function clickButton() {
  popup.style.display = 'block';
}

function closeButton() {
  popup.style.display = 'none';
}

$clickButton.addEventListener('click', clickButton);
$closeButton.addEventListener('click', closeButton);
