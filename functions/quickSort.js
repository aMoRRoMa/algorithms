const mockData = [
  { array: [], answer: [] },
  { array: [1], answer: [1] },
  { array: [2,1], answer: [1, 2] },
  { array: [190, 4, 20, 34, 2, 1], answer: [1, 2, 4, 20, 34, 190] },
  { array: [190, 4, 20, 34, 2, 1, 20], answer: [1, 2, 4, 20, 20, 34, 190] },
];

const quickSort = (array) => {
  if (array.length < 2) return array;

  const base = array[0];
  const less = [];
  const greater = [];
  
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    if (current < base) {
      less.push(current);
    } else {
      greater.push(current);
    }
  }
  
  return [...quickSort(less), base, ...quickSort(greater)];
};

module.exports = {
  quickSort,
  run: () => {
    mockData.forEach(
      ({ array, answer }) => {
        const sortedArray = quickSort(array);
        console.log(`answer is ${sortedArray} test is ${JSON.stringify(sortedArray) === JSON.stringify(answer) ? 'passed' : 'failure'}`);
      }
    );
  },
};
