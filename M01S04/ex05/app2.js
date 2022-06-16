var number = prompt('Introdu un numar:');
var limit = prompt('Introdu limita superioara pana la care sa numere bucla:');

for (i = 0; i <= limit; i++) {
  if (number % i !== 0) {
    continue;
  }
  console.log(`Acest numar este multiplu de ${i}`);
}
