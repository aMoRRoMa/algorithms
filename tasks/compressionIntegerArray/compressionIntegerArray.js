const { quickSort } = require('../../functions/quickSort');

const mockData = [
  { array: [3, 2, 1, 5, 6, -1, 10], answer: '-1,1-3,5-6,10' },
];

const compress = (array, range, string) => {
  if (range.length === 0) {
    return compress(array.slice(1), [array[0]], string);
  }
  
  const prev = range[range.length - 1];
  if (array.length === 0) {
    let newString;
    if (range.length === 1) {
      newString = `${string}${range[0]}`;
    } else {
      newString = `${string}${range[0]}-${prev}`;
    }
    return newString;
  }
  const current = array[0];
  const next = prev + 1;
  if (current === next) {
    return compress(array.slice(1), [...range, current], string);
  } else {
    let newString;
    if (range.length === 1) {
      newString = `${string}${range[0]},`;
    } else {
      newString = `${string}${range[0]}-${prev},`;
    }
    return compress(array.slice(1), [current], newString);
  }
};

module.exports = compress;
