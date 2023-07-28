const $container = document.querySelector('.tab-container'); // get all inside the tab container
const $tab = document.querySelectorAll('.tab'); // get all tabs
const $view = document.querySelectorAll('.view'); // get all view classes attributes

$container.addEventListener('click', function (event) {
  // add a click event listener to tab container and targets all tags
  if (event.target.matches('.tab')) {
    // only runs if it matches 'tab' using the matches method
    for (let i = 0; i < $tab.length; i++) {
      // loop through the node array to find out if its a tab or not
      if (event.target === $tab[i]) {
        // if its a tab and checks all the arrays
        $tab[i].className = 'tab active'; // set the class name to tab active to make the button click active
      } else {
        // if it isnt active then,
        $tab[i].className = 'tab'; // set the class name to tab so it doesnt show active
      }
    }
    const $data = event.target.getAttribute('data-view'); // to show the data, create a variable so it can
    for (let i = 0; i < $view.length; i++) {
      // loops through to check if all the data view is a data view
      if ($data === $view[i].getAttribute('data-view')) {
        // runs if data=voew should be shown
        $view[i].className = 'view'; // makes the data viewable
      } else {
        $view[i].className = 'hidden'; // changes the class name so that its hidden on the page
      }
    }
  }
});
