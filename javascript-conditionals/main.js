/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
console.log('isUnderFive value:', isUnderFive(4));

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log('isEven value:', isEven(4));

function startsWithJ(string) {
  if (
    string.startsWith('J') &&
    string.charAt(0) === string.charAt(0).toUpperCase()
  ) {
    return true;
  } else {
    return false;
  }
}
console.log('startsWithJ value:', startsWithJ('JavaScript'));

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
const julie = {
  name: 'Julie',
  age: 27,
};

console.log('isOldEnoughToDrink value:', isOldEnoughToDrink(julie));

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

const joolie = {
  name: 'joolie',
  age: 27,
};

console.log('isOldEnoughToDrive value:', isOldEnoughToDrive(joolie));

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}
console.log('isOldEnoughToDrinkandDrive value:', isOldEnoughToDrinkAndDrive());

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH <= 0 && pH <= 7) {
    return 'acidic';
  } else if (pH >= 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

console.log('categorizeAcidity value:', categorizeAcidity(3));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
  }
}
console.log(introduceWarnerBro('dot'));

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'The Avengers';
    case 'comedy':
      return 'Step Brothers';
    case 'horror':
      return 'Scream';
    case 'drama':
      return 'Drama movie';
    case 'musical':
      return 'High School Musical';
    case 'sci-fi':
      return 'Interstellar';
  }
}
console.log(recommendMovie('action'));
