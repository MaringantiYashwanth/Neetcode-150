
const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if(explore(grid, r, c, visited) === true) {
                count += 1;
            } // TODO
        }
    }
    return count;
};

// r = 12, c = 4, pos = '12, 4'
// r = 1, c = 24, pos == '1, 24'
const explore = (grid, r, c, visited) => {
    const rowInBounds = 0 <= r && r < grid.length;
    const colInBounds = 0 <= c && c < grid[0].length;
    if (!rowInBounds || !colInBounds) {
        return false;
    }
    if (grid[r][c] === 'W') {
        return false;
    }
    const pos = r + ',' + c;
    if (visited.has(pos)) {
        return false;
    }
    visited.add(pos);
    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);
    explore(grid, r, c + 1, visited);

    return true;
};