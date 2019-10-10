const assert = require('assert');
const func = require('./2DArrays');

const mockData = [
  {
    array: [
      [ 1, 1, 1, 0, 0, 0 ],
      [ 0, 1, 0, 0, 0, 0 ],
      [ 1, 1, 1, 0, 0, 0 ],
      [ 0, 0, 2, 4, 4, 0 ],
      [ 0, 0, 0, 2, 0, 0 ],
      [ 0, 0, 1, 2, 4, 0 ],
    ],
    answer: 19,
  },
  {
    array: [
      [ 1, 1, 1, 0, 0, 0 ],
      [ 0, 1, 0, 0, 0, 0 ],
      [ 1, 1, 1, 0, 0, 0 ],
      [ 0, 9, 2, -4, -4, 0 ],
      [ 0, 0, 0, -2, 0, 0 ],
      [ 0, 0, -1, -2, -4, 0 ]
    ],
    answer: 13,
  },
  {
    array: [
      [ -9, -9, -9, 1, 1, 1 ],
      [ 0, -9, 0, 4, 3, 2 ],
      [ -9, -9, -9, 1, 2, 3 ],
      [ 0, 0, 8, 6, 6, 0 ],
      [ 0, 0, 0, -2, 0, 0 ],
      [ 0, 0, 1, 2, 4, 0 ]
    ],
    answer: 28,
  },
];

describe('2D arrays', () => {
  mockData.forEach(
    ({ array, answer }) => {
      it(`for ${JSON.stringify(array)} answer is ${answer}`, () => {
        assert.strictEqual(answer, func(array));
      })
    }
  );
});
