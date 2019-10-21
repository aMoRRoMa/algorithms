const assert = require('assert');
const func = require('./taumBday');

const mockData = [
  {
    b: 10,
    w: 10,
    bc: 1,
    wc: 1,
    z: 1,
    answer: 20,
  },
  {
    b: 5,
    w: 9,
    bc: 2,
    wc: 3,
    z: 4,
    answer: 37,
  },
  {
    b: 3,
    w: 6,
    bc: 9,
    wc: 1,
    z: 1,
    answer: 12,
  },
  {
    b: 7,
    w: 7,
    bc: 4,
    wc: 2,
    z: 1,
    answer: 35,
  },
  {
    b: 3,
    w: 3,
    bc: 1,
    wc: 9,
    z: 2,
    answer: 12,
  },
  {
    b: 742407782,
    w: 90529439,
    bc: 847666641,
    wc: 8651519,
    z: 821801924,
    answer: 617318315833461267,
  },
  {
    b: 235081335,
    w: 101052703,
    bc: 957899374,
    wc: 147367080,
    z: 942413506,
    answer: 240076105402801530,
  },
  {
    b: 736418699,
    w: 754161925,
    bc: 912285746,
    wc: 841360803,
    z: 736841333,
    answer: 1306346564995590229,
  },
];

describe('Taum and B\'day', () => {
  mockData.forEach(
    ({ b, w, bc, wc, z, answer }) => {
      const result = func(b, w, bc, wc, z);
      it(`for ${b}, ${w}, ${bc}, ${wc}, ${z} answer is ${answer}`, () => {
        assert.strictEqual(answer, result);
      });
    }
  );
});
