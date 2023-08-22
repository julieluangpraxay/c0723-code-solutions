# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  const arrowFunction = (x) => x \* 2;

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?

In arrow functions with a concise body, the return keyword is optional for single expressions, as the value is implicitly returned. But for more complex operations or multiple expressions, you'll need to use a block body with return.
You need to return inside the traditional function but not with arrow functions.

- When using _concise body syntax_, how do you return an object literal?
  you need to wrap the object literal in parentheses.
  ex: const createPerson = (name, age) => ({ name: name, age: age });

const person = createPerson("Alice", 30);
console.log(person); // Output: { name: 'Alice', age: 30 }

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function
    () => 42
  - How many arguments does the arrow function take?
    there aren't any arguments
  - What value does it return?
    it will return 42
  - How many arguments are passed to the function `foo`?
    one argument that is the arrow function
  - What type of argument is passed to the function `foo`?
    an arrow function

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function
    bar((y)) =>
  - How many arguments does the arrow function take?
    one which is y
  - What value does it return?
    it doesnt return but is console loged
  - How many arguments are passed to the function `bar`?
    one
  - What type of argument is passed to the function `bar`?
    an arrow function
  - When does the arrow function's code get executed?
    on the console log

- How does the value of `this` differ between standard functions and arrow functions?
  Standard functions have a dynamically determined this value based on how they are called.
  Arrow functions inherit the this value from their surrounding scope and do not have their own this binding.

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
