const mockData = [
  [5, 3, 6, 2, 10],
  [10, 3, 6, 2, 5],
  [6, 3, 10, 2, 5],
  [10],
  [],
];

const recursiveMax = (array) => {
  if (array.length === 0) return undefined;
  if (array.length === 1) return array[0];

  const current = array[0];
  const next = recursiveMax(array.slice(1));
  return current < next ? next : current;
};

module.exports = () => {
  mockData.forEach(
    data => console.log(`max is ${recursiveMax(data)}`)
  );
};
