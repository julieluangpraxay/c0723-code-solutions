# javascript-local-storage-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you store data in `localStorage`?
  A client-side web storage API that allows you to store key-value pairs in a web browser. Data stored in localStorage remains available even after the browser is closed and reopened, until it is manually cleared by the user or the web application.

- How do you retrieve data from `localStorage`?
  using the getItem() method.

- What data type can `localStorage` save in the browser?
  The localStorage in browsers can only save data as strings. This means that regardless of the data type you want to store (e.g., numbers, booleans, arrays, or objects), you need to convert it to a string before saving it to localStorage.
  The most common way to achieve this is by using JSON.stringify() to convert the data into a JSON string before storing it and JSON.parse() to convert it back to its original data type when retrieving it.

- When does the `'beforeunload'` event fire on the `window` object?
  The 'beforeunload' event fires on the window object just before the user navigates away from the current page. It provides an opportunity to show a confirmation dialog to the user, asking them if they want to leave the page or stay on it.

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
