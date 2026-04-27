const islandCount = (grid) => {
	const visited = new Set();
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			explore(grid, row, col); // TODO	
		}
	}
};

const explore = (grid, row, col) => {	
	
};

/*
	const set = new Set();
	set.add('1, 3');
	console.log(set.has('1, 3')); // true
	console.log(set.has([1, 3])); // false
*/

940
1200
3
950
1120
1100
1130
