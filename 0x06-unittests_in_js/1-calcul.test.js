const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('1-calculateNumber', () => {
  it('SUBTRACT', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('SUM', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('DIVIDE', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('Error', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
