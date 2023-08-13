/* exported capitalizeWords */
function capitalizeWords(string) {
  const newArray = string.split(' ');
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] =
      newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1).toLowerCase();
  }
  return newArray.join(' ');
}
