const mockData = [
  { count: 9, array: [10, 20, 20, 10, 10, 30, 50, 10, 20], answer: 3 },
  { count: 10, array: [1, 1, 3, 1, 2, 1, 3, 3, 3, 3], answer: 4 },
];

const getCountOfPairs = (n, ar) => {
  const hashOfColores = ar.reduce(
    (memo, color) => {
      const count = memo[color] || 0;
      return { ...memo, [color]: count + 1 };
    },
    {},
  );
  
  return Object.values(hashOfColores).reduce(
    (memo, count) => memo + Math.floor(count/2),
    0
  );
};

module.exports = () => {
  mockData.forEach(
    ({ count, array, answer }) => {
      const result = getCountOfPairs(count, array);
      console.log(`answer is ${result} test is ${result === answer ? 'passed' : 'failure'}`);
    }
  );
};
