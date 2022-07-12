const imageElement = document.querySelector('.image');
// imageElement.addEventListener('load', function () {
//   // this points to the element object
//   const message = document.createElement('p');
//   message.innerText = 'Imaginea s-a incarcat';

//   this.after(message);
// });
const messageParagraph = document.querySelector('.message');
imageElement.onload = function () {
  messageParagraph.innerText = 'Imaginea s-a incarcat';
  const url = this.src;
  this.addEventListener('click', function () {
    alert(`Imaginea de la URL: ${url}, s-a incarcat.`);
  });
};
