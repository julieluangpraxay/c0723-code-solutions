/* exported getIndexes */
function getIndexes(array) {
  const result = []; // Create a new array that will store all of the indexes
  for (let i = 0; i < array.length; i++) {
    // Initialize the loop at 0, so we start at the first index, and then loop through the whole array that gets passed into the function
    // Code goes inside of here in-between the curly brackets
    result.push(i);
  }
  return result;
}
