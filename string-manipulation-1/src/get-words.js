/* exported getWords */
function getWords(string) {
  if (string && string.trim(' ')) {
    return string.split(' ');
  } else {
    return [];
  }
}
