const reader = require('../utils/reader');

const mockData = [5, 3, 6, 2, 10];

const findSmallestIndex = (array) => {
  let smallestElement = array[0];
  let smallestIndex = 0;
  
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }
  
  return smallestIndex;
};

const selectionSort = (array) => {
  let sortedArray = [];
  let length = array.length;
  
  for (let i = 0; i < length; i++) {
    let smallestIndex = findSmallestIndex(array);
    sortedArray.push(array.splice(smallestIndex, 1)[0]);
  }
  
  return sortedArray;
};

const onInputFinish = (data) => {
  const answer = selectionSort(data);
  console.log(`answer is ${answer}`);
};

// module.exports = () => reader(onInputFinish);
module.exports = () => onInputFinish(mockData);
