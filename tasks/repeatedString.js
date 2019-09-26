const mockData = [
  { s: 'aba', n: 10, answer: 7 },
  { s: 'a', n: 1000000000000, answer: 1000000000000 },
  { s: 'abcac', n: 10, answer: 4 },
];

const repeatedString = (s, n) => {
  const countOfLetter = (string, letter) => Array.from(string).reduce(
    (memo, item) => item === letter ? memo + 1 : memo,
    0
  );

  const LETTER = 'a';
  const stringLength = s.length;
  const countOfFullRepeat = Math.floor(n/stringLength);
  const countOfPartiallyRepeat = n - stringLength * Math.floor(n/stringLength);

  return countOfLetter(s, LETTER) * countOfFullRepeat + countOfLetter(Array.from(s).splice(0, countOfPartiallyRepeat), LETTER);
};

module.exports = () => {
  mockData.forEach(
    ({ s, n, answer }) => {
      const result = repeatedString(s, n);
      console.log(`answer is ${result} test is ${result === answer ? 'passed' : 'failure'}`);
    }
  );
};
