/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  // assign a new array and use split method to turn the string into an array
  const newArray = string.split('');
  // assign newArray[firstIndex] to charOne aka temp variable aka placeholder
  const charOne = newArray[firstIndex];
  //  reassgin firstindex to secondIndex
  newArray[firstIndex] = newArray[secondIndex];
  // use temp variable to set to secondIndex
  newArray[secondIndex] = charOne;
  // array method that is concatenating all of the elements in this array
  // using '' with nothing in between to join them next to each other
  return newArray.join('');
}
