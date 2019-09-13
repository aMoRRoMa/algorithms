const reader = require('./reader');

const mockData = [
  [12, 34, 23, 45, 57],
  23,
];

const binarySearch = (list, query) => {
  let low = 0;
  let high = list.length - 1;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if (guess === query) {
      return mid;
    }
    if (guess > query) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  
  return null;
};
const onInputFinish = (data) => {
  const [list, query] = data;
  const answer = binarySearch(list, query);
  console.log(`answer is ${answer}`);
};

// module.exports = () => reader(onInputFinish);
module.exports = () => onInputFinish(mockData);
