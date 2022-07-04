class Car {
  constructor(positionX, positionY, color, capColor, tireColor, areHazards) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.color = color;

    this.capColor = capColor;
    this.tireColor = tireColor;
    this.areHazards = areHazards;

    if (capColor === undefined) {
      capColor = 'black';
    }

    if (tireColor === undefined) {
      tireColor = 'black';
    }

    this.frame = document.createElement(`div`);
    this.frame.classList.add('frame');
    this.frame.style.left = `${this.positionX}px`;
    this.frame.style.top = `${this.positionY}px`;

    this.car = document.createElement('div');
    this.car.classList.add(`car`);
    this.frame.append(this.car);

    this.carTop = document.createElement('div');
    this.carTop.classList.add(`car__top`);
    this.car.append(this.carTop);
    this.carTop.style.backgroundColor = `${this.color}`;

    this.carBody = document.createElement('div');
    this.carBody.classList.add(`car__body`);
    this.car.append(this.carBody);
    this.carBody.style.backgroundColor = `${this.color}`;

    this.lightBack = document.createElement('div');
    this.lightBack.classList.add(`light`, `light--back`);
    this.carBody.append(this.lightBack);

    this.lightFront = document.createElement('div');
    this.lightFront.classList.add(`light`, `light--front`);
    this.carBody.append(this.lightFront);

    this.wheelFront = document.createElement('div');
    this.wheelFront.classList.add(`wheel`, `car__wheel`, `car__wheel--front`);
    this.carBody.append(this.wheelFront);
    this.hubCapFront = document.createElement('div');
    this.hubCapFront.classList.add(`wheel__cap`);
    this.hubCapFront.style.backgroundColor = `${this.capColor}`;
    this.wheelFront.append(this.hubCapFront);

    this.wheelBack = document.createElement('div');
    this.wheelBack.classList.add(`wheel`, `car__wheel`, `car__wheel--back`);
    this.carBody.append(this.wheelBack);
    this.hubCapBack = document.createElement('div');
    this.hubCapBack.classList.add(`wheel__cap`);
    this.hubCapBack.style.backgroundColor = `${this.capColor}`;
    this.wheelBack.append(this.hubCapBack);

    this.wheelBack.style.backgroundColor = `${this.tireColor}`;
    this.wheelFront.style.backgroundColor = `${this.tireColor}`;
  }

  moveTo(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;

    this.frame.style.left = `${positionX}px`;
    this.frame.style.right = `${positionY}px`;
  }

  engageBreak() {
    this.lightBack.style.backgroundColor = `red`;
  }

  disengageBreak() {
    this.lightBack.style.backgroundColor = `white`;
  }

  render() {
    document.body.append(this.frame);
  }

  changeCapColor(newColor) {
    this.hubCapFront.style.backgroundColor = newColor;
    this.hubCapBack.style.backgroundColor = newColor;
  }

  changeTireColor(newColor) {
    this.wheelBack.style.backgroundColor = newColor;
    this.wheelFront.style.backgroundColor = newColor;
  }

  hazardsOn() {
    this.lightFront.style.backgroundColor = 'yellow';
  }
}

const car01 = new Car(140, 140, `teal`);
car01.render();
car01.moveTo(500, 600);

const car02 = new Car(10, 10, `black`, `red`, `blue`);
car02.render();
car02.moveTo(400, 500);
