// $taskList.addEventListener('click' , task);
const $taskList = document.querySelector('.task-list');

function task(event) {
  // Get the clicked element
  const clickedElement = event.target;
  // Check if the clicked element is a button
  if (clickedElement.tagName === 'BUTTON') {
    // Get the closest '.task-list-item' ancestor element
    const taskListItem = clickedElement.closest('.task-list-item');
    // Log the '.task-list-item' element to the console
    console.log('Task List Item:', taskListItem);
    // Remove the '.task-list-item' element from the DOM
    taskListItem.remove();
  }
}
$taskList.addEventListener('click', task);
