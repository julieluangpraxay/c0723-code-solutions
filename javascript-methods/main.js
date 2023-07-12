const num1 = 30;
const num2 = 27;
const num3 = 10;
const maximumValue = Math.max(num1, num2, num3);
console.log('Maximum value:', maximumValue);

const heros = ['Thor', 'Black Widow', 'Wanda', 'Nebula'];
let randomNumber = Math.random();
// *= looks like this: randomNumber = randomNumber * heroes.length;
randomNumber *= heros.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heros[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  { title: 'Book 1', author: 'Author 1' },
  { title: 'Book 2', author: 'Author 2' },
  { title: 'Book 3', author: 'Author 3' },
];
const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
console.log('firstBook:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

const fullName = 'Julie Luangpraxay';
const firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);

const firstName = 'Julie';
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
