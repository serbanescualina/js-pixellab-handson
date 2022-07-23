// console.log(process.arg);

const [a, b, ...parameters] = process.argv;

const width = parameters[0];
const height = parameters[1];

console.log(width * height);
