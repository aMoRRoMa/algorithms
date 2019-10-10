const assert = require('assert');

const compress = require('./compressionIntegerArray');

const mockData = [
  { array: [3, 2, 1, 5, 6, -1, 10], answer: '-1,1-3,5-6,10' },
  { array: [-2, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 50, 51, 52, 53, 43], answer: '-2,2-7,10-13,43,50-53' },
];

describe('Compression integer array', () => {
  mockData.forEach(
    ({ array, answer }) => {
      it(`for ${JSON.stringify(array)} answer is ${answer}`, () => {
        const sortedArray = array.sort((a,b) => a - b);
        const result = compress(sortedArray, [], '');
        assert.strictEqual(answer, result);
      });
    }
  );
});
