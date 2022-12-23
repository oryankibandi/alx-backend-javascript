class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const extendingClass = this.constructor.toString().split(' ')[1];
    if (extendingClass == 'EVCar') {
      return Object.create(Car.prototype);
    } else {
      return Object.create(this, Object.getOwnPropertySymbols(this));
    }
  }
}

module.exports = Car;
