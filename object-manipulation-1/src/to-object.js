/* exported toObject */
function toObject(keyValuePair) {
  const object = {}; // Create an empty object to store the key-value pair
  const [key, value] = keyValuePair; // Destructure the keyValuePair array into key and value variables
  object[key] = value; // Assign the value to the key in the object
  return object; // Return the created object
}
