const paragrafElement = document.createElement('p');
const userAgentString = navigator.userAgent;
const message = `Nu stim ce browser folosesti`;

if (userAgentString.includes('chrome')) {
  message = `Navighez folosind chrome`;
}

pharagrafElement.innerText = message;

document.body.append(paragrafElement);
