const assert = require('assert');

const isSame = require('./anagrams');

const mockData = [
  { first: 'qiu', second: 'iuq', answer: true },
  { first: 'zprl', second: 'zprc', answer: false },
  { first: 'zpr', second: 'zprc', answer: false },
  { first: 'qwertyuiop', second: 'poiuytrewq', answer: true },
];

describe('Anagrams task', () => {
  mockData.forEach(
    ({ first, second, answer }, index) => {
      describe(`case ${index + 1}`, () => {
        it(`${first} ${answer ? 'is' : 'isn\'t'} anagram for ${second}`, () => {
          const result = isSame(first, second);
          assert.strictEqual(result, answer);
        });
      });
    }
  );
});
