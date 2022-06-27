const button = document.getElementById('clicker');
const removeButton = document.getElementById('remove');
const handleAge = document.getElementById('query');
const messageElement = document.getElementById('message');

var defaultWarningMessage = `Nu ai introdus un numar`;

const eventListener = () => {
  alert('ai apasat butnul');
};
function showMessage(message) {
  return `Ai ${message} ani.`;
}
const promptEventListener = () => {
  var insertedAge = prompt('Introdu varsta:');

  if (insertedAge === null || insertedAge.trim().length === 0) {
    alert(defaultWarningMessage);
  } else {
    insertedAge = Number(insertedAge);
  }

  if (isNaN(insertedAge) === true) {
    alert(defaultWarningMessage);
  } else {
    console.log(showMessage(insertedAge));
    messageElement.innerText = showMessage(insertedAge);
  }
};

button.addEventListener('click', eventListener);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', eventListener);
});

handleAge.addEventListener('click', promptEventListener);
