/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  // for x in n result.push(x);
  // for y in n + 1, 2n result.push(y);
  let result = new Array(2 * n).fill(undefined);
  let z = 0;
  for (let x = 0; x < n; x++) {
    result[z] = nums[x];
    z += 2;
  }
  z = 1;
  for (let y = n; y < 2 * n; y++) {
    result[z] = nums[y];
    z += 2;
  }

  return result;
};

let shuffleArray = shuffle([2, 5, 1, 3, 4, 7], 3);
console.log(shuffleArray);

const shuffle2 = function (nums, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n]);
  }
  return result;
};

let answerArray = shuffle2([2, 5, 1, 3, 4, 7], 3);
console.log(answerArray);
