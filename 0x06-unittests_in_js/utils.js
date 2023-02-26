class Utils {
  constructor() {}

  static calculateNumber(type, a, b) {
    let result;
    switch (type) {
      case 'SUM':
        result = Math.round(a) + Math.round(b);
        break;
      case 'SUBTRACT':
        result = Math.round(a) - Math.round(b);
        break;
      case 'DIVIDE':
        if (Math.round(b) === 0) {
          result = 'Error';
          break;
        }
        result = Math.round(a) / Math.round(b);
        break;
    }

    return result;
  }
}

module.exports = Utils;
