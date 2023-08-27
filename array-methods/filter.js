const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const newNumbers = numbers.filter((n) => n % 2 === 0);
console.log(newNumbers);

const newNames = names.filter(
  (n) => !names.includes('d') && !names.includes('D')
);
console.log('no D:', newNames);
