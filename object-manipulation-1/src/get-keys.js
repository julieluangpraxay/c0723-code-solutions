/* exported getKeys */
function getKeys(object) {
  const key = [];
  for (const property in object) {
    key.push(property);
  }
  return key;
}
