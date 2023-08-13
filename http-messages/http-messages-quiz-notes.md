# http-messages-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
  a client is a piece of computer hardware or software that accesses a service made available by a server as part of the client–server model of computer networks.

- What is a server?
  a server is a piece of computer hardware or software (computer program) that provides functionality for other programs or devices, called "clients".
  Servers can provide various functionalities, often called "services", such as sharing data or resources among multiple clients or performing computations for a client. A single server can serve multiple clients, and a single client can use multiple servers.

- Which HTTP method does a browser issue to a web server when you visit a URL?
  the browser typically issues an HTTP GET request to the web server. The GET method is used to request data from the server. It retrieves the resource identified by the URL and does not modify the server's state. It's the most common method used for fetching web pages, images, stylesheets, scripts, and other resources.

- What three things are on the start-line of an HTTP **request** message?
  **HTTP Method:** This specifies the action that the client (usually a browser) wants the server to perform. Common HTTP methods include GET, POST, PUT, DELETE, etc. The method indicates the type of request being made.

**Request Target:** This is the URL or the path of the resource being requested on the server. It can be an absolute URL or just the path portion of the URL. The request target indicates the specific resource the client is interested in.

**HTTP Version:** This indicates the version of the HTTP protocol that the client is using to make the request. Common examples include HTTP/1.1 and HTTP/2.

- What three things are on the start-line of an HTTP **response** message?
  **HTTP Version:** This indicates the version of the HTTP protocol that the server is using to send the response. Common examples include HTTP/1.1 and HTTP/2.

**Status Code:** This is a three-digit number that indicates the outcome of the server's attempt to process the request. It provides information about whether the request was successful, encountered an error, or needs further action. Status codes are grouped into different classes, like 2xx for success, 4xx for client errors, and 5xx for server errors.

**Status Phrase:** This is a brief human-readable description that accompanies the status code. It provides a little more context about what happened with the request. For example, if the status code is 404 (Not Found), the status phrase might be "Not Found," explaining that the requested resource wasn't located on the server.

For example, in the HTTP response line:

HTTP/1.1 200 OK
HTTP/1.1 is the HTTP version.
200 is the status code indicating success.
OK is the status phrase giving more details about the success.

- What are HTTP headers?
  HTTP headers are metadata that provide instructions and context for communication between web clients and servers, conveying information about the request or response.
  HTTP headers from a request follow the same basic structure of an HTTP header: a case-insensitive string followed by a colon (':') and a value whose structure depends upon the header. The whole header, including the value, consists of one single line, which can be quite long.

- Where would you go if you wanted to learn more about a specific HTTP Header?
  https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages
- Is a body required for a valid HTTP request or response message?
  No, a body is not always required for a valid HTTP request or response message. Whether a body is needed depends on the specific type of HTTP request or response being used. But it is useful.

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
