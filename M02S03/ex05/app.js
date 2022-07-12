const debounce = throttleDebounce.debounce;
let oldWidth = window.innerWidth;
showMessage(oldWidth, 'message');

// recipe
const debouncedResize = debounce(300, function () {
  const newWidth = this.innerWidth;
  showMessage(this.innerWidth.toString());

  if (oldWidth !== newWidth) {
    showMessage(`Fereastra si-a schimbat latimea. ${newWidth}`, 'message2');

    oldWidth = newWidth;
  }
});

window.addEventListener('resize', debouncedResize);

// hoisting
function showMessage(message, className = 'message') {
  let paragraphElement = document.querySelector('.' + className);

  if (paragraphElement === null) {
    paragraphElement = document.createElement('p');
    paragraphElement.classList.add(className);
    document.body.append(paragraphElement);
  }

  paragraphElement.innerText = message;
}
