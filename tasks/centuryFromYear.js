const mockData = [
  { year: 1705, answer: 18 },
  { year: 1900, answer: 19 },
  { year: 1601, answer: 17 },
  { year: 2000, answer: 20 },
];

const centuryFromYear = (year) => {
  let century = Math.floor(year / 100);
  
  if ((year % 100) > 0) {
    century += 1;
  }
  
  return century;
};

module.exports = () => {
  mockData.forEach(
    ({ year, answer }) => {
      const result = centuryFromYear(year);
      console.log(`answer is ${result} test is ${result === answer ? 'passed' : 'failure'}`);
    }
  );
};
