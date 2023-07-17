/* exported reverseWord */
function reverseWord(word) {
  // create empty string
  let reversed = ' ';
  // if word.length is greater or = 0 then loop continues and decrement by 1 from the last letter
  for (let i = word.length - 1; i >= 0; i--) {
    // reversed = reversed + word[i];
    reversed += word[i];
  }
  return reversed;
}
