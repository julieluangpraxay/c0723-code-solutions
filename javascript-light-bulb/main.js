const $lightMode = document.querySelector('.light-mode');

function toggleLightMode(event) {
  $lightMode.classList.toggle('dark-mode');
  document.body.classList.toggle('dark-mode');
}

$lightMode.addEventListener('click', toggleLightMode);
