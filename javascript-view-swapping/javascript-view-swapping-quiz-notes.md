# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  event.target is a way to know which HTML element caused a specific event (like a click or a mouseover) to happen in JavaScript.
- What is the affect of setting an element to `display: none`?
  in CSS makes it completely invisible and removes it from the layout of the webpage
- What does the `element.matches()` method take as an argument and what does it return?
  it takes a string of a css selector and returns the element that matches the selector
- How can you retrieve the value of an element's attribute?
  getAttribute() method allows you to access the value of any attribute associated with an HTML element.
- At what steps of the solution would it be helpful to log things to the console?
  every step during development and debugging stages of your code
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  it would have to add an eventlistener to each array of the tab and view elements
- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  you would have to write if statements for each view and tab element that makes the view show up while all the others are hidden if its not the one clicked

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
