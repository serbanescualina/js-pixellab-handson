// IIFE - immedietaly invoked function expression
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.querySelector('#showButton');
    const toggleEventButton = document.querySelector('#toggleEventButton');
    const messageClass = 'message';
    let eventBound = true;

    showButton.addEventListener('click', showAlert);

    // hoisting
    function showAlert() {
      alert('Butonul a fost apasat');
    }

    function showMessage(message) {
      let paragraphElement = document.querySelector(`.${messageClass}`);

      if (paragraphElement === null) {
        paragraphElement = document.createElement('p');
        paragraphElement.classList.add(messageClass);
        paragraphElement.innerText = message;

        document.body.append(paragraphElement);
      } else {
        paragraphElement.innerText = message;
      }
    }

    toggleEventButton.addEventListener('click', function () {
      if (eventBound === true) {
        showButton.removeEventListener('click', showAlert);

        eventBound = false;

        this.innerText = 'Porneste afisarea';
        showMessage('Alerta NU va fi afisata');
      } else {
        showButton.addEventListener('click', showAlert);

        eventBound = true;

        this.innerText = 'Opreste afisarea';
        showMessage('Alerta va fi afisata');
      }
    });
  });
})();
