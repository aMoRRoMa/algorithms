module.exports = (a) => {
  const distancesDictionary = new Map();
  const distancesArray = [];
  a.forEach(
    (item, index) => {
      const hasItem = distancesDictionary.has(item);
      if (!hasItem) {
        distancesDictionary.set(item, index);
      } else {
        distancesArray.push(index - distancesDictionary.get(item));
        distancesDictionary.delete(item);
      }
    },
    {},
  );

  return distancesArray.length === 0 ? -1 : Math.min(...distancesArray);
};
