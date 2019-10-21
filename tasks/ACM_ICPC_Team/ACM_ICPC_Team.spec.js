const assert = require('assert');
const func = require('./ACM_ICPC_Team');

const mockData = [
  {
    array: [
      '10101',
      '11100',
      '11010',
      '00101',
    ],
    answer: [5,2]
  },
  {
    array: [
      '11101',
      '10101',
      '11001',
      '10111',
      '10000',
      '01110',
    ],
    answer: [5,6]
  },
];

describe('ACM ICPC Team', () => {
  mockData.forEach(
    ({ array, answer }) => {
      const result = func(array);
      it(`for ${JSON.stringify(array)} answer is ${JSON.stringify(answer)}`, () => {
        assert.strictEqual(JSON.stringify(answer), JSON.stringify(result));
      });
    }
  );
});
