const assert = require('assert');
const func = require('./queensAttack');

const mockData = [
  {
    n: 4,
    k: 0,
    r_q: 4,
    c_q: 4,
    obstacles: [],
    answer: 9,
  },
  {
    n: 5,
    k: 3,
    r_q: 4,
    c_q: 3,
    obstacles: [ [ 5, 5 ], [ 4, 2 ], [ 2, 3 ] ],
    answer: 10,
  },
  {
    n: 1,
    k: 0,
    r_q: 1,
    c_q: 1,
    obstacles: [],
    answer: 0,
  },
  {
    n: 100000,
    k: 0,
    r_q: 4187,
    c_q: 5068,
    obstacles: [],
    answer: 308369,
  },
];

describe('Minimum Distances', () => {
  mockData.forEach(
    ({ n, k, r_q, c_q, obstacles, answer }) => {
      const result = func(n, k, r_q, c_q, obstacles);
      it(`for board ${n}x${n} with ${k} obstacles ${JSON.stringify(obstacles)} and queen on ${r_q}:${c_q} answer is ${answer}`, () => {
        assert.strictEqual(answer, result);
      });
    }
  );
});
