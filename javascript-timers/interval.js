function interval() {
  const $countdown = document.querySelector('h1'); // Get the DOM element with the tag 'h1' and store it in the 'countdown' variable

  let count = 4; // Initialize the 'count' variable to start at 4
  // Define the 'updateCountdown' function, responsible for updating the countdown display
  function updateCountdown() {
    // Check if the countdown is greater than 1
    if (count > 1) {
      $countdown.textContent = count - 1; // If yes, decrement the count by 1 and update the text content of 'countdown'
    } else {
      $countdown.textContent = '~Earth Beeeelooowww Us~'; // If the countdown is 1 or less, update the text content of 'countdown' to the final message
      clearInterval(countdownNum); // Stop the interval by calling clearInterval() method (cancels a timed, repeating action and passing the interval ID 'countdownNum')
    }
    count--; // Decrement the 'count' variable to continue the countdown
  }
  const countdownNum = setInterval(updateCountdown, 1000); // Set up an interval using setInterval() that calls 'updateCountdown' every 1 second (1000 ms)
}

interval(); // Call the 'interval' function to start the countdown
