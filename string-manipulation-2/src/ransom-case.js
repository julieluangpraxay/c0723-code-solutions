/* exported ransomCase */
// function ransomCase(string) {
// let result = ' ';
// for (let i = 0; i < string.length; i++) {
//   const randomNum = Math.random();
// }

// }

function ransomCase(string) {
  // Create an empty string to store the result
  let result = '';

  // Loop through each character in the input string
  for (let i = 0; i < string.length; i++) {
    // Generate a random number between 0 and 1
    const randomNum = Math.random();

    // Decide whether to convert the character to uppercase or lowercase
    // If the random number is less than 0.5, convert to uppercase, otherwise, convert to lowercase
    const modifiedChar =
      randomNum < 0.5 ? string[i].toUpperCase() : string[i].toLowerCase();

    // Append the modified character to the result string
    result += modifiedChar;
  }

  return result;
}
