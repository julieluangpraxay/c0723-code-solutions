# css-cascade-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the four components of "the Cascade".
  Relevance
  Origin and importance
  Specificity
  Order of appearance
- What does the term "source order" mean with respect to CSS?
  "source order" refers to the order in which HTML elements appear in the HTML document's source code
- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
  styles can be inherited from parent elements to their children by default, without the need for an additional CSS rule.
  Inheritance allows certain properties set on a parent element to be automatically applied to its child elements, unless those child elements have their own specific styles that override the inherited ones.
- List the three selector types in order of increasing specificity.
  Type selectors: These selectors target HTML elements based on their tag names. They have the lowest specificity.

Example: p { color: red; }

Class selectors: These selectors target elements based on their class attribute values.

Example: .my-class { font-size: 16px; }

ID selectors: These selectors target elements based on their ID attribute values. They have the highest specificity.

Example: #my-element { border: 1px solid black; }

- Why is using `!important` considered bad practice?
  Specificity issues, debugging, and code readability.

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
