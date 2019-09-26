const mockData = [
  { string: 'Ш4л4ш', answer: true },
  { string: 'Eva, can I see bees in a cave?', answer: true },
  { string: 'Яндекс', answer: false },
  { string: '', answer: false },
  { string: '343', answer: true },
];

const isItLetterOrNumber = str => /^[0-9A-Za-zА-Яа-я]+$/.test(str);

const isPalindrome = (string) => {
  const arr = Array.from(string).reduce(
    (memo, item) => {
      if (isItLetterOrNumber(item)) {
        memo.push(item.toLowerCase());
      }
      return memo;
    },
    [],
  );

  if (arr.length === 0) return false;

  return arr.join('') === arr.reverse().join('');
};

module.exports = () => {
  mockData.forEach(
    ({ string, answer }) => {
      const result = isPalindrome(string);
      console.log(`answer is ${result} test is ${result === answer ? 'passed' : 'failure'}`);
    }
  );
};
