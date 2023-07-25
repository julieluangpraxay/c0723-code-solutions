# dom-manipulation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects?
  It is used to get or set the value of the "class" attribute of an HTML element. It is a string that represents the names of the CSS classes associated with the element.
- How do you update the CSS class attribute of an element using JavaScript?
  Using the classList property and allows you to perform specific class manipulation actions (add, remove, toggle) more precisely.
- What is the `textContent` property of element objects?
  The textContent property of DOM (Document Object Model) element objects represents the text content of an element, excluding any HTML tags within it. It returns the concatenated text of all the element's descendants as plain text, without including any HTML markup.
- How do you update the text within an element using JavaScript?
  You can use the textContent or innerText property of the DOM element. Both properties allow you to set or retrieve the plain text content of an element.
- Is the `event` parameter of an event listener callback always useful?
  The event parameter of an event listener callback is not always required or useful
- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
  Not using a variable to keep track of the click count can make the code more complex and harder to maintain.
- Why is storing information about a program in variables better than only storing it in the DOM?
  Storing information in variables is more efficient, provides better data integrity, and allows for easier code maintenance. The DOM is primarily designed for rendering and user interaction, making variables a more suitable choice for data storage and manipulation within the program's logic.

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
