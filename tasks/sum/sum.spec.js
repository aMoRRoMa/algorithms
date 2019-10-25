const assert = require('assert');
const sum = require('./sum');

const mockData = [
  { array: [1,2,5,10], answer: 18 },
  { array: [0,0,0], answer: 0 },
  { array: [3,6,13], answer: 22 },
];

describe('Sum', () => {
  mockData.forEach(
    ({ array, answer }) => {
      it(`for ${JSON.stringify(array)} answer is ${answer}`, () => {
        assert.equal(eval(
          array.reduce(
            (memo, item) => `${memo}(${item})`,
            'sum',
          ),
        ), answer);
      });
    }
  );
});
