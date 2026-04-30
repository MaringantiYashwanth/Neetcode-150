/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let preMap = new Map();
  for (let i = 0; i < numCourses; i++) {
    preMap.set(i, []);
  }

  for (let [crs, pre] of prerequisites) {
    preMap.get(crs).push(pre);
  }

  //  visitSet = all courses along the DFS path
  let visitSet = new Set();
  function dfs(crs) {
    if (visitSet.has(crs)) {
      return false;
    }
    if (preMap.get(crs) == []) {
      return true;
    }

    visitSet.add(crs);
    for (let pre of preMap.get(crs)) {
      if (!dfs(pre)) {
        return false;
      }
    }
    visitSet.delete(crs);
    preMap.set(preMap.get(crs), []);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
};
