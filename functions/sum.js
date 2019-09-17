const mockData = [
  [5, 3, 6, 2, 10],
  [10, 3, 6, 2, 5],
  [6, 3, 10, 2, 5],
  [10],
  [],
];

const sum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

module.exports = () => {
  mockData.forEach(
    data => console.log(`sum is ${sum(data)}`)
  );
};
