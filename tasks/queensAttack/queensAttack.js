module.exports = (n, k, r_q, c_q, obstacles) => {
  const UP = 'up';
  const DOWN = 'down';
  const LEFT = 'left';
  const RIGHT = 'right';
  const UP_LEFT = 'upLeft';
  const UP_RIGHT = 'upRight';
  const DOWN_LEFT = 'downLeft';
  const DOWN_RIGHT = 'downRight';
 
  const pointToString = ([row, column]) => `${row}:${column}`;

  const obstaclesHash = obstacles.reduce(
    (memo, position) => memo.add(pointToString(position)),
    new Set(),
  );

  const increment = number => number + 1;
  const decrement = number => number - 1;
  const nothing = number => number;
  const isEndFactory = (direction) => (position, size) => {
    const [row, column] = position;
    if (direction === UP && row === size) return true;
    else if (direction === DOWN && row === 1) return true;
    else if (direction === LEFT && column === 1) return true;
    else if (direction === RIGHT && column === size) return true;

    else if (direction === UP_LEFT && (row === size || column === 1)) return true;
    else if (direction === UP_RIGHT && (row === size  || column === size)) return true;
    else if (direction === DOWN_LEFT && (row === 1 || column === 1)) return true;
    else if (direction === DOWN_RIGHT && (row === 1 || column === size)) return true;
    
    return false;
  };
  
  const DIRECTIONS = {
    [UP]: [increment, nothing, isEndFactory(UP)],
    [DOWN]: [decrement, nothing, isEndFactory(DOWN)],
    [LEFT]: [nothing, decrement, isEndFactory(LEFT)],
    [RIGHT]: [nothing, increment, isEndFactory(RIGHT)],
    [UP_LEFT]: [increment, decrement, isEndFactory(UP_LEFT)],
    [UP_RIGHT]: [increment, increment, isEndFactory(UP_RIGHT)],
    [DOWN_LEFT]: [decrement, decrement, isEndFactory(DOWN_LEFT)],
    [DOWN_RIGHT]: [decrement, increment, isEndFactory(DOWN_RIGHT)],
  };
 
  const countingMoves = (position, direction, size, movesCount) => {
    const [ rowUpdate, columnUpdate, isEnd] = DIRECTIONS[direction];
    
    // Without Recursion because of 10000 calls strict
    let newPosition = position;
    let newMovesCount = movesCount;
    while(!isEnd(newPosition, size)) {
      if (obstaclesHash.has(pointToString(newPosition))) {
        newMovesCount = newMovesCount - 1;
        break;
      } else {
        const [row, column] = newPosition;
        newPosition = [rowUpdate(row), columnUpdate(column)];
        newMovesCount = newMovesCount + 1;
      }
    }
    
    return newMovesCount;

    // With Recursion
    // if (obstaclesHash.has(pointToString(position))) {
    //   return movesCount - 1;
    // }
    // if (isEnd(position, size)) {
    //   return movesCount;
    // } else {
    //   const [row, column] = position;
    //   return countingMoves([rowUpdate(row), columnUpdate(column)], direction, size, movesCount + 1);
    // }
  };
  
  const queenPosition = [r_q, c_q];
  const up = countingMoves(queenPosition, UP, n, 0);
  const down = countingMoves(queenPosition, DOWN, n, 0);
  const left = countingMoves(queenPosition, LEFT, n, 0);
  const right = countingMoves(queenPosition, RIGHT, n, 0);
  const upLeft = countingMoves(queenPosition, UP_LEFT, n, 0);
  const upRight = countingMoves(queenPosition, UP_RIGHT, n, 0);
  const downLeft = countingMoves(queenPosition, DOWN_LEFT, n, 0);
  const downRight = countingMoves(queenPosition, DOWN_RIGHT, n, 0);
  
  return up + down + left + right + upLeft + upRight + downLeft + downRight;
};
