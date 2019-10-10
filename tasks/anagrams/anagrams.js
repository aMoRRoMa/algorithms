const dictFromString = (string) => {
  return Array.from(string).reduce(
    (memo, item) => {
      const count = memo[item] || 0;
      return { ...memo, [item]: count + 1 };
    },
    {}
  );
};

const isSameDictionaries = (dict1, dict2) => {
  const dict1Keys = Object.keys(dict1);
  const dict2Keys = Object.keys(dict2);
 
  if (dict1Keys.length !== dict2Keys.length) return false;
  
  return dict1Keys.reduce(
    (memo, key) => dict1[key] === dict2[key],
    false,
  );
};

const isSame = (first, second) =>
  isSameDictionaries(dictFromString(first), dictFromString(second));

module.exports = isSame;
