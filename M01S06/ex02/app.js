const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
let message = 'Nu stim ce browser folosesti';
const userNameElement = document.createElement('h1');

function detectBrowser(browser) {
  message = `Navighezi folosind ${browser}`;
  return message;
}

function getUserName(userName) {
  const messageHeading = `Salut ${userName}`;
  userNameElement.innerText = messageHeading;
}

function displayUserName() {
  paragraphElement.innerText = message;
  document.body.appendChild(paragraphElement);
  document.body.appendChild(userNameElement);
}

if (userAgentString.includes('Chrome')) {
  const browser = 'Chrome';
  detectBrowser(browser);
}

paragraphElement.innerText = message;

document.body.append(paragraphElement);

function detectFireFox() {
  if (userAgentString.includes('Mozilla')) {
    const browser = 'Mozilla FireFox';
    detectBrowser(browser);
    setTimeout(function () {
      const userName = prompt(`${browser} vrea sa stie cum te cheama`);
      getUserName(userName);
    }, 3000);
  }

  displayUserName();
}

detectFireFox();

function detectInternetExplorer() {
  if (userAgentString.includes('Internet Explorer')) {
    const browser = 'Internet Explorer';
    detectBrowser(browser);
    const userName = prompt(`${browser} vrea sa stie cum te cheama`);
    getUserName(userName);
    displayUserName();

    setTimeout(function () {
      paragraphElement.remove();
    }, 3000);
  }
}

detectInternetExplorer();
