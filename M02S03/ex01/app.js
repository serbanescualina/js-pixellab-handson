class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate() {
    this.speed = ++this.speed;

    return this;
  }

  decelerate() {
    this.speed = --this.speed;

    return this;
  }
}

var audi = new Car('Audi', 'black', 4, 50);

audi.accelerate().accelerate().accelerate().accelerate().accelerate();

console.log(audi.speed);
