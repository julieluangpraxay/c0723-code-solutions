function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}
console.log(greet('Julie'));

function getArea(width, height) {
  return width * height;
}
console.log(getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
const person = { firstName: 'Julie', lastName: 'Luangpraxay' };
const firstName = getFirstName(person);
console.log('getFirstName value is:', firstName);

function getLastElement(array) {
  return array[array.length - 1];
}
const array = ['propane', 'and', 'propane', 'accessories'];
console.log(getLastElement(array));
