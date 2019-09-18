const mockData = [
  { array: [5, 1, 0, 1, 0, 1], answer: 1 },
  { array: [5, 1, 1, 1, 0, 1], answer: 3 },
  { array: [5, 2, 3, 4, 0, 0], answer: 0 },
];

const getSequenceLength = (array) => {
  const { longest } = array.reduce(
    (memo, item) => {
      const { current, longest } = memo;
      if (item === 1) {
        return {
          current: current + 1,
          longest,
        }
      } else {
        return {
          current: 0,
          longest: current,
        }
      }
    },
    { current: 0, longest: 0 }
  );
  return longest;
};

module.exports = () => {
  mockData.forEach(
    ({ array, answer }) => {
      const result = getSequenceLength(array);
      console.log(`answer is ${result} test is ${result === answer ? 'passed' : 'failure'}`);
    }
  );
};
