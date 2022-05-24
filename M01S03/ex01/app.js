var object = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: true,
  carOwner: false,
};

console.log(object.name);
console.log(object.surname);
console.log(object.age.toString());
console.log((2022 - object.age).toString());

console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' si am ' +
    object.age +
    ' ani.',
);

console.log(
  object.name + ' ' + object.surname + ' are ' + object.age + ' ani.',
);

console.log(
  object.name + ' s-a nascut in ' + (2022 - object.age).toString() + '.',
);
