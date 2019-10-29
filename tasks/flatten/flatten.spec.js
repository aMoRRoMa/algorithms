const assert = require('assert');
const func = require('./flatten');

const mockData = [
  {
    array: [1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }],
    answer: [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }],
  },
];

describe('Flatten function', () => {
  mockData.forEach(
    ({ array, answer }) => {
      it(`for ${JSON.stringify(array)} answer is ${JSON.stringify(answer)}`, () => {
        assert.strictEqual(JSON.stringify(answer), JSON.stringify(func(array)));
      })
    }
  );
});
