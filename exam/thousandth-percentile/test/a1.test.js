const getResult = require('../src/a1');
const { expect } = require('chai');

describe('使用正则零宽断言', function () {
  it('1 -> 1', function () {
    expect(getResult(1)).to.be.equal('1');
  });
});
