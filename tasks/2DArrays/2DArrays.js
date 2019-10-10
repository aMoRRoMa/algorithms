module.exports = (array) => {
  const rows = 4;
  const cols = 4;
  const results = [];
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const pattern = [
        array[row][col], array[row][col+1], array[row][col+2],
        array[row+1][col+1],
        array[row+2][col], array[row+2][col+1], array[row+2][col+2],
      ];
      results.push(pattern.reduce((memo, item) => memo + item));
    }
  }
  return results.sort((a,b) => a-b)[results.length - 1];
};
