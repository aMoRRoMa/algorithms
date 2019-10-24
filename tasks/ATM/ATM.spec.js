const assert = require('assert');
const func = require('./ATM');

const mockData = [
  {
    sum: 50,
    coins: [5000, 1000, 500, 100, 50],
    answer: {
      50: 1,
    },
  },
  {
    sum: 250,
    coins: [5000, 1000, 500, 100, 50],
    answer: {
      100: 2,
      50: 1,
    },
  },
  {
    sum: 5000,
    coins: [5000, 1000, 500, 100, 50],
    answer: {
      5000: 1,
    },
  },
  {
    sum: 7500,
    coins: [5000, 1000, 500, 100, 50],
    answer: {
      5000: 1,
      1000: 2,
      500: 1,
    },
  },
  {
    sum: 75,
    coins: [5000, 1000, 500, 100, 50],
    answer: null,
  },
  // TODO
  {
    sum: 120,
    coins: [5000, 1000, 500, 100, 50, 30],
    answer: {
      30: 4,
    },
  },
];

describe('ATM', () => {
  mockData.forEach(
    ({ sum, coins, answer }) => {
      const result = func(sum, coins);
      it(`for sum ${sum} and coins ${JSON.stringify(coins)} answer is ${JSON.stringify(answer)}`, () => {
        if (answer === null) {
          assert.strictEqual(answer, result);
        } else {
          Object.keys(answer).forEach(
            (key) => {
              assert.strictEqual(answer[key], result[key]);
            }
          );
        }
      });
    }
  );
});
