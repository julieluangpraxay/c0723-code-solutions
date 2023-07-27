# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  used in event handling to identify the specific element that triggered the event.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  even doubling and delegation
- What DOM element property tells you what type of element it is?
  tagName property
- What does the `element.closest()` method take as its argument and what does it return?
  css selector string as an argument and return the cloest anscestor
- How can you remove an element from the DOM?
  using remove method
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  use event delegation add it to the parent element and event.target to see if its the one we want.

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
