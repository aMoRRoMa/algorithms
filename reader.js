const readline = require('readline');

const main = (onInputCompleteHandler) => {
  const inputStream = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  const data = [];

  inputStream.question('Please input data \n', () => {});
  
  inputStream.on('line', (line) => data.push(line));
  
  inputStream.on('close', () => {
    onInputCompleteHandler(data);
  });
};

module.exports = main;
