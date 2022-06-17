const person = {
  getName: function () {
    return 'Dragos Iordache';
  },
  getAge: function () {
    return 32;
  },
};

console.warn(`Afiseaza primul nume al persoanei folosind metoda getName()`);

const personName = person.getName();
const personFirstName = personName.split(' ')[0];
console.log(personFirstName);

console.warn(
  `Afiseaza anul de nastere al persoanei folosind metoda getAge() si anul curent.`,
);
const currentYear = new Date().getFullYear();
const personBirthdayYear = currentYear - person.getAge();
console.log(currentYear - person.getAge());

console.warn(
  `Afiseaza ultimele doua cifre al anului de nastere al persoanei, folosind anul curent si metoda getAge(). (Exemplu: ‘87).Afiseaza anul de nastere al persoanei folosind metoda getAge() si anul curent.`,
);
console.log(`'${personBirthdayYear.toString().slice(-2)}`);

console.warn(`Afiseaza propozita: “Ma numesc xxx si am yy ani!”`);
console.log(`Ma numesc ${personName} si am ${person.getAge()} ani.`);

console.warn(`Afiseaza numele intreg al persoanei folosind metoda getName()`);
console.log(person.getName());

console.warn(`Afiseaza varsta persoanei folosind metoda getAge()
`);
console.log(person.getAge());

console.warn(`Afiseaza anul de nastere al persoanei, intr-o propozitie de felul “M-am nascut in aaaa.”
`);
console.log(`M-am nascut in ${personBirthdayYear}.`);

console.warn(`Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”
`);
console.log(
  `Ma numesc ${person.getName()} m-am nascut acum ${person.getAge()} ani in anul ${personBirthdayYear}!`,
);
