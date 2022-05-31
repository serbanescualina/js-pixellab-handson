console.log(`
    Dragos este instructor de programare. Dragos studiaza JavaScript de la 17 ani.
    Cand Dragos a absolvit facultatea si-a facut licenta in JavaScript.
    Dragos are si un master in tehnologii internet.
    Dragos este instructor Pixellab si preda JavaScript acolo.
`);
var currentYear = 2022;

var person = {
  firstName: 'Alina',
  lastName: 'Serbanescu',
  email: 'alina@yahoo.com',
  birthYear: 1992,
  pets: [
    {
      name: 'Jessy',
      species: 'caine',
      age: 7,
    },
    {
      name: 'Tuca',
      species: 'pisica',
      age: 3,
    },
    {
      name: 'Luna',
      species: 'caine',
      age: 2,
    },
  ],
  zipCode: '002345',
};

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.log((currentYear - person.pets[2].age).toString());

var difference = currentYear - person.birthYear - person.pets[0].age;
console.log(`${difference}`);

var dogAge = currentYear - person.pets[0].age;
var catAge = currentYear - person.pets[1].age;
var birdAge = currentYear - person.pets[2].age;
var differenceAge = person.pets[0].age - person.pets[2].age;

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    person.pets[0].name +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

prop01.innerHTML =
  person.firstName +
  ', ' +
  person.pets[0].name +
  ', ' +
  person.pets[1].name +
  ', ' +
  person.pets[2].name +
  ' locuiesc toti in aceeasi casa.';

prop02.innerHTML =
  'Diferenta de varsta dintre ' +
  person.pets[0].name +
  ' si ' +
  person.pets[1].name +
  ' este: ' +
  differenceAge +
  ' ani.';

prop03.innerHTML =
  'Ma numesc ' +
  person.firstName +
  ' ' +
  person.lastName +
  ', ' +
  ' m-am nascut in ' +
  person.birthYear +
  ' si codul meu postal este: ' +
  person.zipCode +
  '.';

prop04.innerHTML =
  'Animalele mele s-au nascut in ' +
  dogAge +
  ', ' +
  catAge +
  ', ' +
  ' respectv ' +
  birdAge +
  '.';
