// const mockData = [5, 3, 6, 2, 10];
const mockData = [];

const recursiveCount = (array) => {
  const length = array.length;
  return (length === 0 || length === 1) ? length : 1 + recursiveCount(array.slice(1));
};

module.exports = () => console.log(`count is ${recursiveCount(mockData)}`);
