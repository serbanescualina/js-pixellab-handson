const fs = require('fs');

const part1 = fs.readFileSync('./another.txt', 'utf8');
const part2 = fs.readFileSync('./my-file.txt', 'utf8');
const part3 = fs.readFileSync('./dir/this-other-file.txt', 'utf8');

console.log(`${part1} ${part2} ${part3}`);
