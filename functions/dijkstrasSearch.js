const mockData = [
  {
    graph: {
      start: { a: 5, b: 2 },
      a: { c: 4, d: 2 },
      b: { a: 8, d: 7 },
      c: { d: 6, end: 3 },
      d: { end: 1 },
      end: {},
    },
    costs: {
      a: 5,
      b: 2,
      c: Infinity,
      d: Infinity,
      end: Infinity,
    },
    parents: {
      a: 'start',
      b: 'start',
      c: null,
      d: null,
      end: null,
    },
    answer: 8,
  },
];

const isProcessed = (node, processed) => processed.hasOwnProperty(node);

const getLowestCostNode = (costs, processed) => {
  let lowestCost = Infinity;
  let lowestNode = null;
  
  Object.keys(costs).forEach((node) => {
    const cost = costs[node];
    if (cost < lowestCost && !isProcessed(node, processed)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });
  
  return lowestNode;
};

const search = (graph, costs, parents) => {
  let processed = {};
  let current = getLowestCostNode(costs, processed);
  
  while (current !== null) {
    let cost = costs[current];
    let neighbors = graph[current];

    Object.keys(neighbors).forEach((neighborNode) => {
      const newCost = cost + neighbors[neighborNode];

      if (costs[neighborNode] > newCost) {
        costs[neighborNode] = newCost;
        parents[neighborNode] = current;
      }
    });
    
    processed = Object.assign(processed, {[current]: true});
    current = getLowestCostNode(costs, processed);
  }

  return costs.end;
};

module.exports = () => {
  mockData.forEach(
    ({ graph, costs, parents, processed, answer }) => {
      const result = search(graph, costs, parents, processed);
      console.log(`answer is ${result} test is ${result === answer ? 'passed' : 'failure'}`);
    }
  );
};
