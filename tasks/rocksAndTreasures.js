const mockData = [
  { treasures: 'ab', rocks: 'aabbccd', answer: 4 },
  { treasures: 'cd', rocks: 'aabbccd', answer: 3 },
  { treasures: 'zg', rocks: 'aabbccd', answer: 0 },
  { treasures: '', rocks: 'aabbccd', answer: 0 },
];

const getTreasuresCount = (treasures, rocks) => {
  const treasuresHash = new Set(treasures);
  return Array.from(rocks).reduce((memo, item) => {
    if (treasuresHash.has(item)) {
      memo += 1;
    }
    return memo;
  }, 0);
};

module.exports = () => {
  mockData.forEach(
    ({ treasures, rocks, answer }) => {
      const result = getTreasuresCount(treasures, rocks);
      console.log(`answer is ${result} test is ${result === answer ? 'passed' : 'failure'}`);
    }
  );
};
