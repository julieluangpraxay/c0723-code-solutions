/* exported capitalizeWord */
function capitalizeWord(word) {
  // The toLowerCase() method is used to convert the input word to lowercase before the comparison.
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  // Uppercase the first letter using .charAt(0) and .toUpperCase()
  const firstLetter = word.charAt(0).toUpperCase();
  // Get the rest of the word starting from the second character
  const restOfWord = word.slice(1).toLowerCase();
  // Concatenate the first letter with the rest of the word and return the result
  return firstLetter + restOfWord;
}
