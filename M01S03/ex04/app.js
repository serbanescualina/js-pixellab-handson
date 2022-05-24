var myArray = [1, 2, 3, 4, 5, 6];

console.log(myArray[5]);
console.log(myArray[2].toString());
console.log(myArray.length.toString());
console.log((myArray[0] + myArray[4]).toString());
console.log(myArray[1].toString());
console.log(myArray[2].toString());
console.log(myArray[3].toString());
console.log((myArray.length - myArray[5]).toString());
console.warn('Afiseaza suma numerelor de pe pozitia 1 si 3.');
console.log((myArray[1] + myArray[3]).toString());

console.warn('Afiseaza produsul numerelor de pe pozitia 0 si 5.');
console.log((myArray[0] * myArray[5]).toString());

console.warn('Afiseaza diferenta numerelor de pe pozitia 3 si 4.');
console.log(myArray[3] - myArray[4]);

console.warn(
  'Folosind metoda Math.pow() afla rezultatul ridicarii la putere a numarului de pe pozitia 5 la numarul de pe pozitia 3 ',
);
console.log(Math.pow(myArray[5], myArray[3]));
