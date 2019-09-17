const mockData =  [
  {
    start: 'user1',
    graph: {
      user1: [{ name: 'user2' }, { name: 'user3' }, { name: 'user4' }],
      user2: [{ name: 'user5', seller: true }, { name: 'user6' }],
      user3: [{ name: 'user7' }],
      user4: [{ name: 'user7' }, { name: 'user8' }],
      user5: [],
      user6: [],
      user7: [],
      user8: [],
    },
    answer: 'user5',
  },
  {
    start: 'user1',
    graph: {
      user1: [{ name: 'user2' }, { name: 'user3' }, { name: 'user4' }],
      user2: [{ name: 'user5' }, { name: 'user6' }],
      user3: [{ name: 'user7' }],
      user4: [{ name: 'user7' }, { name: 'user8', seller: true }],
      user5: [],
      user6: [],
      user7: [],
      user8: [],
    },
    answer: 'user8',
  },
  {
    start: 'user1',
    graph: {
      user1: [{ name: 'user2' }, { name: 'user3' }, { name: 'user4' }],
      user2: [{ name: 'user5' }, { name: 'user6' }],
      user3: [{ name: 'user7' }],
      user4: [{ name: 'user7' }, { name: 'user8' }],
      user5: [],
      user6: [],
      user7: [],
      user8: [],
    },
    answer: null,
  },
];

const search = (start, graph, criteria) => {
  let searchQueue = graph[start];
  let searched = {};
  const isSearched = ({ name }) => searched.hasOwnProperty(name);
  
  let result = null;
  
  while (searchQueue.length) {
    const person = searchQueue.shift();
    if (!isSearched(person)) {
      if (criteria(person)) {
        result = person;
        break;
      } else {
        searchQueue = [...searchQueue, ...graph[person.name]];
        searched = {...searched, [person.name]: true};
      }
    }
  }
  
  return result;
};

module.exports = () => {
  mockData.forEach(
    ({ start, graph, answer }) => {
      const isItSeller = ({ seller }) => !!seller;
      const result = search(start, graph, isItSeller);
      const testResult = result ? result.name : result;
      console.log(`answer is ${testResult} test is ${testResult === answer ? 'passed' : 'failure'}`);
    }
  );
};
