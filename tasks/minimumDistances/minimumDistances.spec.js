const assert = require('assert');
const func = require('./minimumDistances');

const mockData = [
  {
    array: [7, 1, 3, 4, 1, 7],
    answer: 3,
  },
  {
    array: [1, 2, 3, 4, 10],
    answer: -1,
  },
];

describe('Minimum Distances', () => {
  mockData.forEach(
    ({ array, answer }) => {
      const result = func(array);
      it(`for ${JSON.stringify(array)} answer is ${answer}`, () => {
        assert.strictEqual(answer, result);
      });
    }
  );
});
