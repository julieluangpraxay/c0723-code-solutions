// declare a variable to store the number of times the user has clicked the button.
let clickCount = 0;

// Query the DOM to retrieve the '.hot-button' and assign it to a new variable.
const $hotButton = document.querySelector('.hot-button');

// Query the DOM to retrieve the '.click-count' and assign it to a new variable.
const $clickCountElement = document.querySelector('.click-count');

// Define a regular function to handle the click event.
function handleClick() {
  // Increment the click count by 1
  clickCount++;

  // Update the textContent of the '.click-count' element each time the user clicks.
  $clickCountElement.textContent = clickCount;

  // Update the className of the '.hot-button' depending on the number of times it's clicked.
  if (clickCount < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickCount < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickCount < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickCount < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickCount < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

// Add a 'click' event listener to your button that calls the handleClick function.
$hotButton.addEventListener('click', handleClick);
