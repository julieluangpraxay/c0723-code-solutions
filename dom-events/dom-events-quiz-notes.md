# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  for debugging purposes
- What is the purpose of events and event handling?
  to create interactive and dynamic web applications by enabling user interaction, asynchronous programming, and dynamic content updates based on user actions.
- Are all possible parameters required to use a JavaScript method or function?
  No, not all possible parameters are required to use a JavaScript method or function.
  JavaScript functions can have both required and optional parameters. Required parameters must be provided when calling the function, while optional parameters can be omitted or have default values defined within the function.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener(). This method allows you to attach event handlers to DOM elements, enabling you to respond to various events triggered by user interactions or other actions.
- What is a callback function?
  A function that is passed as an argument to another function and is executed after the completion of that function. It is a way to specify a piece of code that should be executed at a later time, typically after an asynchronous operation or some other function has finished its task.
- What object is passed into an event listener callback when the event fires?
  the "event object" or "event" for short.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  the button click to trigger the event
  The read-only target property of the Event interface is a reference to the object onto which the event was dispatched.
  You can check here: https://developer.mozilla.org/en-US/docs/Web/Eventshttps://developer.mozilla.org/en-US/docs/Web/Events & here https://developer.mozilla.org/en-US/docs/Web/API/Event/target
  or console log

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```

The first code the function is passed a reference to the addEventListener method. The function is not executed immediately.

The second code is executes immediately and we call it directly.

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
