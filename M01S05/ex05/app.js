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
