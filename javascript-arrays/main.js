const colors = ['red', 'white', 'blue'];

console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);

console.log(
  'America is' +
    ' ' +
    colors[0] +
    ', ' +
    colors[1] +
    ',' +
    ' and ' +
    colors[2] +
    '.'
);

const colorsMexico = ['red', 'white', 'green'];

console.log(
  'Mexico is ' +
    colorsMexico[0] +
    ', ' +
    colorsMexico[1] +
    ', ' +
    ' and ' +
    colorsMexico[2] +
    '.'
);

console.log('value of colors:', colorsMexico);

const students = ['julie', 'ahri', 'lux', 'ana'];
const numberOfStudents = students.length;

console.log('There are', numberOfStudents + ' students in the class.');

const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];

console.log('The last student in the array is', lastStudent + '.');
console.log('value of students:', students);
