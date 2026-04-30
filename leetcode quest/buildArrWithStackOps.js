/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let stack = [];
  let targetIndex = 0;
  let targetLength = target.length;
  for (let i = 1; i <= n; i++) {
    if (targetIndex === target.length) {
      break;
    }
    stack.push("Push");
    // if (target[targetIndex] === undefined) {
    //     break;
    // }
    if (target[targetIndex] !== i) {
      stack.push("Pop");
    } else if (target[targetIndex] === i) {
      targetIndex = targetIndex + 1;
    }
  }

  return stack;
};
