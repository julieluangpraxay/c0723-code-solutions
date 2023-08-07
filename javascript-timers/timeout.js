// create a function to change the html text in js
function update() {
  // update the heading by query selecting the h1 class 'message'
  const $timeout = document.querySelector('.message');
  // use textcontent to get the element's text content and change it to 'hello there'
  $timeout.textContent = 'Hello There';
}
// set timeout after the function with the function name and the miliseconds to delay
setTimeout(update, 2000);
