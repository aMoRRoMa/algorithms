module.exports = (sum, coins) => {
  const func = (sum, coins, neededCoins) => {
    console.log('__________________')
    console.log(sum)
    console.log(coins)
    console.log(neededCoins)

    if (coins.length === 0) {
      if (sum > 0) return null;
      return neededCoins;
    }
    if (sum === 0) {
      return neededCoins;
    }
    if (sum === coins[0]) {
      return {
        ...neededCoins,
        [coins[0]]: (neededCoins[coins[0]] || 0) + 1,
      };
    }
    const currentCoin = coins[0];
    const rest = sum - currentCoin;
    if (rest < 0) {
      return func(
        sum,
        coins.slice(1),
        neededCoins,
      );
    } else {
      if (rest > currentCoin) {
        return func(
          rest,
          coins,
          {
            ...neededCoins,
            [currentCoin]: (neededCoins[currentCoin] || 0) + 1,
          },
        )
      } else {
        return func(
          rest,
          coins.slice(1),
          {
            ...neededCoins,
            [currentCoin]: (neededCoins[currentCoin] || 0) + 1,
          },
        );
      }
    }
  };
  
  const neededCoins = {};
  const result = func(sum, coins, neededCoins);
  return result === neededCoins ? null : result;
};
