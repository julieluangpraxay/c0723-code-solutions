# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  NPM stands for "Node Package Manager," which is a software package manager for the JavaScript programming language. It is used to manage and install libraries, frameworks, and tools that developers use to build JavaScript applications.

- What is a package?
  A package is a self-contained collection of code and resources that offers specific functionality and can be easily reused in software development.

- What are some other popular package managers?
  NPM, YARN, PNPM

- How can you create a `package.json` with `npm`?
  Run npm init in your project directory and follow the prompts to provide project details. Use npm init -y for a quick setup with default values.

- What is a dependency and how do you add one to a package?
  A dependency is an external package or library that your project relies on. To add a dependency to a package, you use the command npm install <package-name>.

- What happens when you add a dependency to a package with `npm`?
  When you add a dependency to a package with npm, the specified package is downloaded and installed into your project's node_modules directory, allowing your project to utilize its functionality. The dependency information is also added to your package.json file.

- What is a devDependency and how do you add one to a package?
  A devDependency is a package that is needed only during development, not for the production version of your project. To add a devDependency to a package, you use the command npm install <package-name> --save-dev or the shorthand npm install <package-name> -D.

- How do you define and run `npm` scripts? Why are these useful?
  npm scripts are defined in the "scripts" section of package.json and can be executed using npm run to automate tasks, making development workflows more efficient.

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
