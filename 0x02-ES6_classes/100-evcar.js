import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super();
    this._brand = brand;
    this._color = color;
    this._motor = motor;
    this._range = range;
  }
}

module.exports = EVCar;
