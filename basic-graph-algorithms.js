// Directed graph algorithms
// Givin graph
// TODO: Virtualiza graph by drawing connection between node and edges
const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

const depthFirstSearch = (graph, source) => {
    // Using stack for depth first search
    const stack = [ source ]

    while(stack.length > 0) {
        // Get last element in array: FILO
        const current = stack.pop();
        console.log(current)
        
        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
};


const breathFirstSearch = (graph, source) => {
    // Using Queue for breath first seach
    const queue = [ source ];

    while(queue.length > 0) {
        // Get first element in array: FIFO
        const current = queue.shift();
        console.log(current);

        for (const neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
};

// Expected output:
// depth first search: abdfce
depthFirstSearch(graph, 'a');
console.log('\n')
// breath first search: acbedf
breathFirstSearch(graph, 'a');
