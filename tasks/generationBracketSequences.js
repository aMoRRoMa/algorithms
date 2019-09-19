const mockData = [
  { n: 1 },
  { n: 2 },
  { n: 3 },
  { n: 3 },
];

const generate = (current, open, close, n) => {
  if (current.length === 2 * n) {
    console.log(current);
    return current;
  }
  if (open < n) {
    generate(`${current}(`, open + 1, close, n);
  }
  if (close < open) {
    generate(`${current})`, open, close + 1, n);
  }
};

module.exports = () => {
  mockData.forEach(
    ({ n }) => {
      console.log(`for ${n}: `);
      generate('', 0, 0, n);
      console.log('_________________________________');
    }
  );
};
