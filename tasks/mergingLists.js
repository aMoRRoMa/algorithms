const { quickSort } = require('../functions/quickSort');

const mockData = [
  {
    lists: [
      [2, 26, 64, 88, 96, 96],
      [8, 20, 65, 86],
      [1, 4, 16, 42, 58, 61, 69],
      [84],
    ],
    answer: [1, 2, 4, 8, 16, 20, 26, 42, 58, 61, 64, 65, 69, 84, 86, 88, 96, 96]
  },
];

const merge = (lists) => {
  const array = lists.reduce((memo, item) => [...memo, ...item], []);
  return quickSort(array);
};

module.exports = () => {
  mockData.forEach(
    ({ lists, answer }) => {
      const result = merge(lists);
      console.log(`answer is ${result} test is ${JSON.stringify(result) === JSON.stringify(answer) ? 'passed' : 'failure'}`);
    }
  );
};
