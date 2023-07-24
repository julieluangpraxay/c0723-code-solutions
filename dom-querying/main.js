const heading = document.querySelector('h1');
console.log('$heading', heading);

console.dir('h1', heading);

const explanation = document.querySelector('#explanation');

console.log('$explanation', explanation);
console.dir('p#explanation', explanation);

const hint = document.querySelector('p.hint');
console.log('$hint', hint);

console.dir('p.hint', hint);

const allParagraphs = document.querySelectorAll('p');
console.log('$allParagraphs', allParagraphs);

const example = document.querySelectorAll('example-link');
console.log('$links', example);
