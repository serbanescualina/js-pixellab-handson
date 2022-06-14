const dateBuilder = [
  function () {
    return '2019';
  },
  function () {
    return 'iunie';
  },
  function () {
    return '24';
  },
];

dateBuilder[3] = function () {
  return 'Duminica';
};

console.warn(`Afiseaza propozitia: "Suntem in lina 11 in anul aa"`);

console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}`);

console.warn(`Afiseaza propozitia: "Astazi este zz"`);
console.log(`Astazi este ${dateBuilder[1]()}.`);
