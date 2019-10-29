module.exports =  (array) => {
  const result = [];
  const stack = array;
  
  while (stack.length > 0) {
    const current = stack[0];
    
    if (Array.isArray(current)) {
      stack.splice(0, 1, ...current);
    } else {
      result.push(current);
      stack.splice(0, 1);
    }
  }
  
  return result;
};
