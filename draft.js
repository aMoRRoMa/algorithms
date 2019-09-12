const readline = require('readline');

const main = () => {
  const inputStream = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  inputStream.question('Please input data ', (data) => {
    console.log(`Your data is ${data}`);
    inputStream.close();
  });
};

module.exports = main;
