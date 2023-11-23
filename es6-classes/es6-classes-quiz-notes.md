# es6-classes-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are JavaScript classes?
  JavaScript classes are templates for creating objects with shared properties and methods, providing a way to structure and organize code in an object-oriented manner.

- When would you want to use a class?
  when you want to create multiple instances of objects with similar properties and behaviors, promoting code reusability, organization, and maintainability in scenarios such as building user interfaces, managing data structures, or modeling real-world entities.

- How do you declare a class?
  class MyClass {
  // class body...
  }
- How do you inherit from another class?
  you can achieve inheritance from another class using the extends keyword.
  ex:
  class Animal {
  constructor(name) {
  this.name = name;
  }

  speak() {
  console.log(`${this.name} makes a sound.`);
  }
  }

class Dog extends Animal {
constructor(name, breed) {
super(name); // Call the parent class constructor using super()
this.breed = breed;
}

speak() {
console.log(`${this.name} barks.`);
}
}

- Why would you want to inherit from another class?
  inheritance is a powerful mechanism that helps you create organized, reusable, and scalable code. It enables you to build upon existing code, create hierarchies of related classes, and provide a more structured and maintainable foundation for your applications.

- How do you add methods and properties to a class?
  Properties: Define them inside the class constructor using this.propertyName.

Methods: Define them inside the class using method syntax (methodName() { ... }).

example:
class Person {
constructor(name, age) {
this.name = name; // Adding a property
this.age = age;
}

sayHello() { // Adding a method
console.log(`Hello, my name is ${this.name}.`);
}
}

const person = new Person('Alice', 30);
console.log(person.name); // Output: Alice
person.sayHello(); // Output: Hello, my name is Alice.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
