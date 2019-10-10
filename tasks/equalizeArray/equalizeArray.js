const equalizeArray = (array) => {
  const dict = array.reduce(
    (memo, item) => {
      const count = memo[item] || 0;
      return {
        ...memo,
        [item]: count + 1,
      }
    },
    {},
  );
  const counts = Object.values(dict).sort((a,b) => a - b);
  counts.pop();
  return counts.reduce(
    (memo, item) => memo + item,
    0,
  );
};

module.exports = equalizeArray;
