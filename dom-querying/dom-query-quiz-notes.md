# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  To debug code, and monitor program execution during software development.
- What is a "model"?
  The representation of an HTML element as an object, which allows developers to interact with and manipulate the element's properties and behavior programmatically.
- Which "document" is being referred to in the phrase Document Object Model?
  The document object is the main “entry point” to the page. We can change or create anything on the page using it.
- What is the word "object" referring to in the phrase Document Object Model?
  Refers to "window" also a global object for JS code and represents the browser window and provides methods to control it.
- What is a DOM Tree?
  In JavaScript, the DOM tree is a hierarchical representation of the HTML or XML document, organizing all elements on a web page as a tree structure, enabling developers to interact with and modify the page's content and structure dynamically using JavaScript. It acts as an interface between web pages and scripts, facilitating interactive and dynamic behavior on the web.
- Give two examples of `document` methods that retrieve a single element from the DOM.
  getElementById(): This method retrieves an element by its unique ID attribute.
  querySelector(): This method returns the first element that matches a specified CSS selector.
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll(): This method returns a static NodeList (a collection of nodes) containing all elements that match a specified CSS selector.
- Why might you want to assign the return value of a DOM query to a variable?
  Efficiency, improved readability, avoiding redundant queries, caching, offline access, easier debugging.
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir(): This method displays an interactive list of the properties of a specified JavaScript object, which includes DOM elements, in a collapsible tree format in the browser console. It allows you to explore the object's properties and methods, making it useful for inspecting complex objects like DOM elements.
  ex: const myElement = document.getElementById("myElement");
  console.dir(myElement);
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  It is often done for performance and page loading optimization. This practice is known as "deferred" or "asynchronous" loading of scripts.

- What does `document.querySelector()` take as its argument and what does it return?
  Argument: The argument passed to document.querySelector() is a CSS selector string that identifies the element(s) you want to select. It follows the same rules as CSS selectors, allowing you to target elements based on their tag names, class names, IDs, attributes, and more.
  Return Value: document.querySelector() returns the first element that that is a descendant of node and matches the specified CSS selector. If no matching element is found, it returns null.

- What does `document.querySelectorAll()` take as its argument and what does it return?
  The document.querySelectorAll() method in JavaScript takes a single argument, which is a CSS selector, representing the elements you want to select from the DOM.
  Returns all element descendants of node that match selectors.

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
