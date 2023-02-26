const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should be rounded', () => {
    assert.equal(calculateNumber(1.2, 4.5), 6);
    assert.equal(calculateNumber(6.55526, 4.2689), 11);
    assert.equal(calculateNumber(1.2, -4.5), -3);
    assert.equal(calculateNumber(-5.2, -6.5), -11);
  });
});
