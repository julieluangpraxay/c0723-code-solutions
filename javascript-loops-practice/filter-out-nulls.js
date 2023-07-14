/* exported filterOutNulls */
function filterOutNulls(values) {
  const val = []; // This line creates an empty array called val which will be used to store the non-null values.
  for (
    let i = 0;
    i < values.length;
    i++ // This line starts a loop that goes through each element of the values array one by one. It uses a counter variable i to keep track of the current position in the array.
  )
    if (values[i] !== null) {
      // This line checks if the current element at index i of the values array is not equal to null
      val.push(values[i]); // This line adds the non-null value at index i of the values array to the val array. It pushes the non-null value to the end of the val array.
    }
  return val; // This line tells the function to stop executing and return the val array. It means that the function will provide the filtered array containing only the non-null values stored in the val array.
}
