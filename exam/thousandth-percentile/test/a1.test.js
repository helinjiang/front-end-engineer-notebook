const getResult = require('../src/a1');
const { expect } = require('chai');

describe('使用正则零宽断言', function () {
  it('1 -> 1', function () {
    expect(getResult(1)).to.equal('1');
  });

  it('123 -> 123', function () {
    expect(getResult(123)).to.equal('123');
  });

  it('1234 -> 1,234', function () {
    expect(getResult(1234)).to.equal('1,234');
  });

  it('1234567 -> 1,234,567', function () {
    expect(getResult(1234567)).to.equal('1,234,567');
  });
});
