function ExampleConstructor() {}

const newVariable = new ExampleConstructor();

console.log('typeof newVariable:', typeof newVariable);
console.log('value of newVariable:', newVariable);

console.log('typeof newVariable.__proto__:', typeof newVariable.__proto__);
console.log('value of newVariable.__proto__:', newVariable.__proto__);

console.log(
  'typeof  ExampleConstructor.prototype',
  typeof ExampleConstructor.prototype
);
console.log(
  'value of ExampleConstructor.prototype:',
  ExampleConstructor.prototype
);

console.log(
  'newVariable instanceof ExampleConstructor:',
  newVariable instanceof ExampleConstructor
);
