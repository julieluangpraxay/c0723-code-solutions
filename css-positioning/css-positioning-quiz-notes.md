# css-positioning-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the **default** value for the `position` property of HTML elements?
  static position

- How does setting `position: relative` on an element affect document flow?
  does not affect document flow

- How does setting `position: relative` on an element affect where it appears on the page?
  does not affect where it appears on the page but using the offset properties will impact where it apears

- How does setting `position: absolute` on an element affect document flow?
  Absolutely positioned elements are REMOVED entirely from the document flow. That means they have no effect at all on their parent element or on the elements that occur after them in the source code.

- How does setting `position: absolute` on an element affect where it appears on the page?
  moves to the cloest parent and if it didnt, it would go to the body and move according to the body.

- How do you constrain an absolutely positioned element to a containing block?

Set the containing block's position property to relative, absolute, fixed, or sticky. These positions establish a new positioning context for the absolutely positioned element. Then use offset properties (top, right, bottom, left) so it will determine how the element is placed within the boundaries of its containing block

- What are the four box offset properties?
  top, right, bottom, left

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
