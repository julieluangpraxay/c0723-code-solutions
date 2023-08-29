# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
  It does not automatically insert a new element into the page. Instead, it only creates a new DOM element in memory. You need to explicitly add the newly created element to the DOM (i.e., the web page) using other DOM manipulation methods.

- How do you add an element as a child to another element?
  appendChild() method:
  This method adds the specified element as the last child of the target element. It's commonly used when you want to add an element as the last child of a parent element.

- What do you pass as the arguments to the `element.setAttribute()` method?
  It takes two arguments:
  Attribute name: This argument is a string that represents the name of the attribute you want to set or modify.
  Attribute value: This argument is also a string that represents the value you want to assign to the attribute.

- What steps do you need to take in order to insert a new element into the page?
  To insert a new element into the page, create it using document.createElement(), optionally modify its properties, identify the parent element, and use appendChild() to add it as the last child or insertBefore() to insert it before an existing child element of the parent.

- What is the `textContent` property of an element object for?
  The textContent property of an element object is used to get or set the text content of the element, including any nested elements within it.

- Name two ways to set the `class` attribute of a DOM element.
  Using setAttribute() method:
  const myElement = document.getElementById('myElement'); // Assuming you have an element with ID "myElement"
  myElement.setAttribute('class', 'my-class-name');
  or
  assigning a className property
  ex:
  const myElement = document.getElementById('myElement'); // Assuming you have an element with ID "myElement"
  myElement.className = 'my-class-name';

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?

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
