module.exports = () => {
  let memo;
  return (number) => {
    memo = (memo || 0) + number;
    return memo;
  };
};
