const func = (a) => {
  const inner = (b) => {
    return func(parseInt(b+'',10) === b ? a+b : a);
  };
  inner.valueOf = () => a;
  
  return inner;
};
module.exports = func;
