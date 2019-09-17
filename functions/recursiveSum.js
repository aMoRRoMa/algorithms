const mockData = [
  [5, 3, 6, 2, 10],
  [10, 3, 6, 2, 5],
  [6, 3, 10, 2, 5],
  [10],
  [],
];

const recursiveSum = (array) => {
  const length = array.length;
  if (length === 0) return 0;
  return length === 1 ? array[0] : array[0] + recursiveSum(array.slice(1));
};

module.exports = () => {
  mockData.forEach(
    data => console.log(`sum is ${recursiveSum(data)}`)
  );
};
