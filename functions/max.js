const mockData = [
  [5, 3, 6, 2, 10],
  [10, 3, 6, 2, 5],
  [6, 3, 10, 2, 5],
  [10],
  [],
];

const max = (array) => {
  if (array.length === 0) return undefined;
  if (array.length === 1) return array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

module.exports = () => {
  mockData.forEach(
    data => console.log(`max is ${max(data)}`)
  );
};
