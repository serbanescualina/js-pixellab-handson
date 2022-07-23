const fs = require('fs');

const message = 'Invat node.js';
fs.writeFileSync('./my-file.txt', message, 'utf-8');

const data = fs.readFileSync('./my-file.txt', 'utf-8');
const newMessage = `${data},azi, ${new Date().getDate()}!`;

fs.writeFileSync('./a.txt', newMessage, 'utf-8');
