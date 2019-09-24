const mockData = [
  { c: [ 0, 0, 1, 0, 0, 1, 0 ], answer: 4 },
  { c: [ 0, 0, 0, 1, 0, 0 ], answer: 3 },
];

const jumpingOnClouds = (c) => {
  const func = (array, jumps) => {
    if (array.length === 1) {
      return jumps;
    } else {
      let next = 1;
      if (array[2] === 0) {
        next = 2
      }
      return func(array.splice(next), jumps + 1);
    }
  };
  return func(c, 0);
};

module.exports = () => {
  mockData.forEach(
    ({ c, answer }) => {
      const result = jumpingOnClouds(c);
      console.log(`answer is ${result} test is ${result === answer ? 'passed' : 'failure'}`);
    }
  );
};
