# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

  They're handy outside of if statements. && checks if both sides are true and returns the first falsey, while || checks if at least one side is true.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  a programming concept where logical expressions are evaluated only until their final outcome can be determined based on the initial parts of the expression, often involving logical AND (&&) and logical OR (||) operators.
  (keeps moving through and returns the result it expects, goes from left to right)
  Short-circuit evaluation with && means that if the first operand is evaluated to be false, the entire expression will always be false, regardless of the value of the second operand.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  ?? (nullish coalescing) operator provides a fallback value only when the original value is null or undefined, while excluding other falsy values.
  The || (logical OR) operator includes a broader range of falsy values for fallback, such as 0, false, and empty strings.
  (the first value has to be undefined or null)

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  The only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.
  It allows you to write a concise form of an if/else statement in a single line.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

- What data types can be spread into an array? Into an object?
  objects and arrays

- How does spread syntax differ from rest syntax?
  Spread syntax (...) is used to split elements or properties of arrays and objects, while rest syntax (... in function parameters) is used to collect multiple function arguments into a single array.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
