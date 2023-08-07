# javascript-timers-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a "callback" function?
  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
  example: Imagine you have a big toy box with lots of different toys in it. And you have a friend who knows exactly which toy you want to play with. So, you tell your friend, "Hey, can you pick the toy I want and give it to me when I say 'Please'?"

  Your friend is like a callback function. They wait for your command ("Please"), and when they hear it, they pick the right toy and give it to you. That's how a callback function works!
  In the same way, a callback function in computer stuff is a special helper function that waits for a signal from the main function and does something when it gets that signal. It helps the main function do the right thing at the right time, just like your friend helps you play with the right toy.

- Besides adding an event listener callback function to an element or the `document`, what is one way to delay the execution of a JavaScript function until some point in the future?
  The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

- How can you set up a function to be called repeatedly without using a loop?
  setInterval() allows you to specify a function and a time interval, and it will call that function repeatedly at the specified interval until you stop it.

- What is the default time delay if you omit the `delay` parameter from `setTimeout()` or `setInterval()`?
  setInterval() in JavaScript, the default time delay will be 0 milliseconds. It means that the function you pass as the first argument will be executed almost immediately after the setTimeout() or setInterval() call.

- What do `setTimeout()` and `setInterval()` return?
  When you call setTimeout() and schedule a function to run after a specified delay, it returns a unique identifier representing the timer. This identifier is a numeric value that can be used with clearTimeout() to cancel the execution of the scheduled function before it runs.

When you call setInterval() and schedule a function to run repeatedly at a specified interval, it returns a unique identifier representing the interval timer. This identifier is a numeric value that can be used with clearInterval() to stop the repeated execution of the function.

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
