/*
Дана строка, состоящая из букв латинского алфавита, цифр и скобок  {([])}.
Необходимо проверить, что скобки в строке сбалансированы — на каждую
открывающую скобку приходится закрывающая, и скобочные группы не пересекаются.
Напишите функцию, которая принимает такую строку и возвращает true,
если скобки сбалансированы, и false, если не сбалансированы.
*/

const mockData = [
  { string: '(foo)', answer: true },
  { string: '(f[o]{o})', answer: true },
  { string: '[(){}()()]', answer: true },
  { string: '(foo', answer: false },
  { string: '{f[o}o]', answer: false },
];

function isValid(str) {
  const openBrackets = new Set(['(', '[', '{']);
  const closeBrackets = new Set([')', ']', '}']);
  const braketsMatcher = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  
  const isOpenBracket = symbol => openBrackets.has(symbol);
  const isCloseBracket = symbol => closeBrackets.has(symbol);
  const isBracket = symbol => openBrackets.has(symbol) || closeBrackets.has(symbol);
  
  const func = (array, openedBrackets) => {
    if (array.length === 0 && openedBrackets.length !== 0) return false;
    if (array.length === 0 && openedBrackets.length === 0) return true;
  
    const current = array[0];

    if (!isBracket(current)) {
      return func(array.slice(1), openedBrackets);
    }
    
    if (isOpenBracket(current)) {
      return func(array.slice(1), [current, ...openedBrackets]);
    }
    if (isCloseBracket(current)) {
      const lastOpenBracket = openedBrackets[0];
      if (lastOpenBracket === braketsMatcher[current]) {
        return func(array.slice(1), openedBrackets.slice(1));
      } else {
        return false;
      }
    }
  };
  
  return func(Array.from(str), []);
}

module.exports = () => {
  mockData.forEach(
    ({ string, answer }) => {
      const result = isValid(string);
      console.log(`answer is ${result} test is ${result === answer ? 'passed' : 'failure'}`);
    }
  );
};
