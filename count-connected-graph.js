// My solution before tutorial
const connectedComponentsCount = (graph) => {
    let count = 0;
    let visited = new Set();
    let nodes = Object.keys(graph).map(n => +n)

    for (let node of nodes) {
        const shoudIncrease = travelThroughtNodes(graph, node, visited)
        if (shoudIncrease) count++
    }

    return count
};

const travelThroughtNodes = (graph, node, visited) => {
    if (visited.has(node)) {
        // Should not increase number
        return false;
    }

    const stack = [node];

    while (stack.length > 0) {
        const current = stack.pop();
        visited.add(current);

        for (let neighbor of graph[current]) {
            if (visited.has(neighbor)) {
                continue;
            }

            stack.push(neighbor);
        }
    }

    // Shoud increase number
    return true;
}

const result = connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}); // -> 2

console.log(result)




