const controls = document.querySelector('.controls');
const heroElement = document.querySelector('.hero');
const stageElement = document.querySelector('.stage');
const step = 30;
const axis = {
  N: 'y',
  S: 'y',
  W: 'x',
  E: 'x',
};
const direction = {
  N: 'back',
  S: 'fw',
  W: 'back',
  E: 'fw',
};
const hero = {
  x: 0,
  y: 0,
  width: heroElement.clientWidth,
  height: heroElement.clientHeight,
};
const stageData = {
  width: stageElement.clientWidth,
  height: stageElement.clientHeight,
};

controls.addEventListener('click', function (event) {
  const target = event.target;
  // early return
  if (target.nodeName !== 'BUTTON') {
    return;
  }
  const value = target.className;
  const currentAxis = axis[value];
  const currentDirection = direction[value];

  updateHeroPosition(currentAxis, currentDirection);

  renderHero(hero);
});

function updateHeroPosition(currentAxis, currentDirection) {
  // ternary operator
  hero[currentAxis] =
    currentDirection === 'back'
      ? hero[currentAxis] - step
      : hero[currentAxis] + step;

  // simplify
  if (hero.x <= 0) {
    hero.x = 0;
  }

  if (hero.y <= 0) {
    hero.y = 0;
  }

  if (hero.x >= stageData.width - hero.width) {
    hero.x = stageData.width - hero.width;
  }

  if (hero.y >= stageData.height - hero.height) {
    hero.y = stageData.height - hero.height;
  }
}

// hoisting
function renderHero(hero) {
  heroElement.style.left = `${hero.x}px`;
  heroElement.style.top = `${hero.y}px`;
}
