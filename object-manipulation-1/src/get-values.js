/* exported getValues */
function getValues(object, key) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
