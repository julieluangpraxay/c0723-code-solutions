# javascript-and-json-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is JSON?
  JSON is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford. Even though it closely resembles JavaScript object literal syntax, it can be used independently from JavaScript, and many programming environments feature the ability to read (parse) and generate JSON.
- What are serialization and deserialization?
  Serialization is the process of converting a data structure, typically an object or an array, into a JSON string.
  Deserialization is the reverse process of serialization. It involves converting a JSON string back into its original data structure, such as an object or an array, so that it can be used and manipulated in a programming language.
- Why are serialization and deserialization useful?
  Serialization and deserialization are crucial when working with APIs, as they enable data exchange between the client and server. For example, when a client makes an API request, the data is typically serialized to JSON before sending it to the server. Then, the server deserializes the JSON data to work with it in the server-side code.
  short answer:
  serialization to JSON allows data to be transported, stored, and presented efficiently, while deserialization enables the data to be used and manipulated within a programming language

- How do you serialize a data structure into a JSON string using JavaScript?
  With the JSON.stringify method.
  EX:
  const dataObject = { name: 'John', age: 25, city: 'New York' };
  const jsonString = JSON.stringify(dataObject);
  console.log(jsonString);
  // Output: '{"name":"John","age":25,"city":"New York"}'

const dataArray = [1, 2, 3, 4, 5];
const jsonStringArray = JSON.stringify(dataArray);
console.log(jsonStringArray);
// Output: '[1,2,3,4,5]'

- How do you deserialize a JSON string into a data structure using JavaScript?
  Using JSON.parse() method.
  Ex:

// Example 1: Deserialize a JSON string into an object
const jsonString = '{"name":"Alice","age":30,"city":"London"}';
const parsedData = JSON.parse(jsonString);
console.log(parsedData);
// Output: { name: 'Alice', age: 30, city: 'London' }

// Example 2: Deserialize a JSON string into an array
const jsonStringArray = '[1,2,3,4,5]';
const parsedArray = JSON.parse(jsonStringArray);
console.log(parsedArray);
// Output: [1, 2, 3, 4, 5]

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
