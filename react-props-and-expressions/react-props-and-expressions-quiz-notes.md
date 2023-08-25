# react-props-and-expressions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are props in React?
  Props short for properties are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an <img>:

- How do you declare and access props in a component?
  Declaration (Parent Component): Pass data to the child component by providing attributes with values when rendering the child component.

Access (Child Component): Access the props in the child component using the props object in React (props.message) or directly as properties in Vue.js ({{ message }} in the template). Remember, props are read-only in the child component.

- How do you pass props to a component?
  In the parent component, render the child component and provide attributes with values representing the data you want to pass.

In the child component, access the passed props using the props object.

PARENT COMPONENT EXAMPLE:
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
const message = "Hello from parent!";

return <ChildComponent messageProp={message} />;
}

export default ParentComponent;

CHILD COMPONENT EXAMPLE

import React from 'react';

function ChildComponent(props) {
return <p>{props.messageProp}</p>;
}

export default ChildComponent;

- How do you write JavaScript expressions in JSX?
  by enclosing them within curly braces {}.

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
