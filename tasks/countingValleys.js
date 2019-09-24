const mockData = [
  { n: 8, s: 'UDDDUDUU', answer: 1 },
  { n: 12, s: 'DDUUDDUDUUUD', answer: 2 },
];

const getCountOfValleys = (n, s) => {
  const UP_DIRECTION = 'U';
  const DOWN_DIRECTION = 'D';

  let countOfValleys = 0;
  let lvl = 0;

  Array.from(s).forEach(
    (direction) => {
      if (direction === UP_DIRECTION) {
        lvl += 1;
      }
      if (direction === DOWN_DIRECTION) {
        lvl -= 1;
      }
      if (lvl === 0 && direction === UP_DIRECTION) {
        countOfValleys += 1;
      }
    },
  );
  return countOfValleys;
};

module.exports = () => {
  mockData.forEach(
    ({ n, s, answer }) => {
      const result = getCountOfValleys(n, s);
      console.log(`answer is ${result} test is ${result === answer ? 'passed' : 'failure'}`);
    }
  );
};
