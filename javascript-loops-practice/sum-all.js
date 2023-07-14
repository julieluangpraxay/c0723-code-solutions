/* exported sumAll */
function sumAll(numbers) {
  let sum = 0;
  // if i is less than the length of numbers add 1
  for (let i = 0; i < numbers.length; i++) {
    // sum = sum + numbers[i]
    sum += numbers[i];
  }
  return sum;
}
