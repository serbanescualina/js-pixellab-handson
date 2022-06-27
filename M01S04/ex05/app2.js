var number = prompt('Introdu un numar:');
var limit = prompt('Introdu limita superioara pana la care sa numere bucla:');

for (i = 6; i <= limit; i++) {
  console.log(i);
  if (i % number !== 0) {
    continue;
  }
  console.log(`Acest numar este multiplu de ${number}`);
}
