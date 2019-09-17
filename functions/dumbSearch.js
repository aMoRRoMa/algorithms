const reader = require('../utils/reader');

const mockData = [
  [12, 34, 23, 45, 57],
  23,
];

const dumbSearch = (list, query) => {
  let indexOfQueryValue;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === query) {
      indexOfQueryValue = i;
      break;
    }
  }
  return indexOfQueryValue;
};
const onInputFinish = (data) => {
  const [list, query] = data;
  const answer = dumbSearch(list, query);
  console.log(`answer is ${answer}`);
};

// module.exports = () => reader(onInputFinish);
module.exports = () => onInputFinish(mockData);
