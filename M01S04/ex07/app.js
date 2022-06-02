var friends = [
  { name: 'Alina', surname: 'Serbanescu' },
  { name: 'Larry', surname: 'Larryson' },
  { name: 'Steven', surname: 'Stevenson' },
  { name: 'Carol', surname: 'Carolson' },
  { name: 'Andra', surname: 'Andrason' },
];

console.warn(`
  Folosind o bucla for afiseaza proprietatea
  surname a tuturor obiectelor din arrayul friends.
`);
for (var i = 0; i < friends.length; i++) {
  var friend = friends[i];

  console.log(friend.surname);
}

console.warn(`
  Afiseaza numele complet inversat al tuturor prietenilor,
  insa o data ce l-ai gasit pe steven, opreste
  bucla cu ajutorul keywordului break si afiseaza propozitia:
  “M-am oprit la Stevenson Steven.”.
`);
var friendsLength = friends.length;
for (var i = 0; i < friendsLength; i++) {
  var friend = friends[i];

  if (friend.name === 'Steven') {
    console.log('M-am oprit la ' + friend.surname + ' ' + friend.name + '.');
    break;
  }

  console.log(friend.surname + ' ' + friend.name);
}

console.warn(`
Folosind keywordul continue, afiseaza numele complet
inversat al prietenilor, doar daca numarul de caractere
total al numelor lor este mai mare de 13 sub forma
de propozitii “Prenume Nume are mai mult de 13 caractere.”.
`);
for (var i = 0; i < friendsLength; i++) {
  var friend = friends[i];

  if ((friend.surname + friend.name).length <= 13) {
    continue;
  }

  console.log(
    friend.surname + ' ' + friend.name + ' are mai mult de 13 caractere.',
  );
}
