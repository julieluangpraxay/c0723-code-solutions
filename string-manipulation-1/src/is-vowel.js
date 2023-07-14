/* exported isVowel */
function isVowel(character) {
  if (
    character === 'a' ||
    character === 'i' ||
    character === 'I' ||
    character === 'o' ||
    character === 'e' ||
    character === 'E' ||
    character === 'u'
  ) {
    return true;
  }
  return false;
}

/* this switch statement also works

function isVowel(character) {
  switch (character.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}
*/
