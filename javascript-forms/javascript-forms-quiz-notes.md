# javascript-forms-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What event is fired when a user places their cursor in a form control?
  the "focus event" is triggered when an element recieves focus by the user clicking or tabbing to it, it applies to input, fields, textareas, and buttons.
- What event is fired when a user's cursor leaves a form control?
  the "blur event" triggers when an element loses focus when the user clicks or tabs away from the form control
- What event is fired as a user changes the value of a form control?
  the "input event" is whenever the value of an input field, textarea, or selct element is changed by the user.
- What event is fired when a user clicks the `"submit"` button within a `<form>`?
  the "submit event" is fired when the user clicks the submit button or pressing the enter key while focused on an input field inside the form
- What does the `event.preventDefault()` method do?
  to prevent the default behavior of an event of the browser.
- What does submitting a form without `event.preventDefault()` do?
  it will default to performing the default action in response to an event
- What property of a form element object contains all of the form's controls.
  elements property
- What property of a form control object gets and sets its value?
  the value property. This property allows you to retrieve the current value of the form control, such as the text entered in an input field or the selected option in a dropdown, and also update the value programmatically.
- What is one risk of writing a lot of code without checking to see if it works so far?
  accumulating bugs, making debugging difficult, decreasing productivity, and incurring higher costs for fixing issues later in the development process.
- What is an advantage of having your console open when writing a JavaScript program?
  catching bugs right away

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
