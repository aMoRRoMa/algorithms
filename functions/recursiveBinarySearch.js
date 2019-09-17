const mockData = [
  { array: [5, 3, 6, 2, 10], query: 10, answer: 4 },
  { array: [10, 3, 6, 2, 5], query: 10, answer: 0 },
  { array: [6, 3, 10, 2, 5], query: 10, answer: 2 },
  { array: [10], query: 10, answer: 0 },
  { array: [], query: 10, answer: null },
];

const recursiveBinarySearch = (array, query) => {
  //TODO write implementation
  return undefined;
};

module.exports = () => {
  mockData.forEach(
    ({ array, query, answer }) => {
      const position = recursiveBinarySearch(array, query);
      console.log(`position is ${position} test is ${position === answer ? 'passed' : 'failure'}`);
    }
  );
};
