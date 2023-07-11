const student = {
  firstName: 'Julie',
  lastName: 'Luangpraxay',
  age: 27,
};

const fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'social media specialist';

console.log('value of student.livesInIrvine', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

const vehicle = {
  make: 'honda',
  model: 'accord',
  year: '2013',
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']:", vehicle.color);
console.log("value of vehicle['isConvertible']:", vehicle.isConvertible);
console.log(vehicle);

const pet = {
  name: 'ahri',
  type: 'pomerainian',
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
