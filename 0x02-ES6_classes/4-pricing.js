import Currency from "./3-currency";

class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this, _amount;
  }

  get currency() {
    return this, _currency;
  }

  set amount(amnt) {
    this._amount = amnt;
  }

  set currency(crncy) {
    this._currency = crncy;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return parseInt(amount) * parseInt(conversionRate);
  }
}

module.exports = Pricing;
