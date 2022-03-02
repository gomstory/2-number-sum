const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};


// Implementation
// Using Stack and Graph fundamental
// Using Depth first search technique
const hasPath = (graph, src, dst) => {
  // Handle best case
  if (src === dst) return true;;
  
  const stack = [ src ];
  
  while (stack.length > 0) {
    let current = stack.pop();
    
    if (current === dst) {
      return true
    }
    
    // push neighbor to next stack
    for (let n of graph[current]) {
      stack.push(n)
    }
  }
  
  return false
};


hasPath(graph, 'f', 'k'); // true
