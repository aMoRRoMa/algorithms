const assert = require('assert');

const binarySearch = require('./binarySearch');

const mockData = [
  [12, 34, 23, 45, 57],
  23,
];

describe('Binary search', () => {
  const [list, query] = mockData;
  const answer = 2;
  it(`index of ${query} for ${JSON.stringify(list)} should be ${answer}`, () => {
    assert.strictEqual(binarySearch(list, query), answer);
  });
});
