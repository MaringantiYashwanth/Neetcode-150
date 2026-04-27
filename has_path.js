/*
n = # nodes
e = # edges

Time: o(e)
Space: O(n)

n = # nodes
e = # edges
Time: O(n ** 2)
Space: O(n)

*/

/// iterative approach
const hasPathI = (graph, src, dest) => {
    const queue = [src];
    while(queue.length > 0) {
        const current = queue.shift();
        if (current === dest) {
            return true;
        }
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
    return false;
}

hasPathI();
// Recursive approach
const hasPath = (graph, src, dest) => {
    if (src === dest) {
        return true;
    }
    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dest) === true) {
            return true;
        }
    }
    return false;
}