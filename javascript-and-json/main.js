const book = [
  { isbn: '8947298398', title: 'booktitle1', author: 'authorperson1' },
  { isbn: '8942472398', title: 'booktitle2', author: 'authorperson2' },
  { isbn: '823424521', title: 'booktitle3', author: 'authorperson3' },
];
console.log('book:', book);
console.log('typeof book:', typeof book);

const bookJSON = JSON.stringify(book);
console.log('bookJSON:', bookJSON);
console.log('typeof bookJSON:', typeof bookJSON);

const student = '{"id": 1995, "name": "julie"}';
console.log('json string of student:', student);
console.log('typeof studentJSON:', typeof student);

const obj = JSON.parse(student);
console.log('object of student:', obj);
console.log('typeof obj:', typeof obj);
