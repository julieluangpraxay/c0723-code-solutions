/* exported getStudentNames */
function getStudentNames(students) {
  const result = [];
  for (let i = 0; i < students.length; i++) {
    result.push(students[i].name);
  }
  return result;
}

// Define a function getStudentNames that takes one parameter students
// Create a new empty array so that we can add each students name to it
// Loop over the students array that gets passed into the function, starting at 0 up until the length of the array
// Inside the loop, push each students name into the new array we created before the for loop
// Outside the loop, return the new array full of students name
