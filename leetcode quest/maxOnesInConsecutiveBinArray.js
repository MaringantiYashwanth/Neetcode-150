var findMaxConsecutiveOnes = function (nums) {
  // input: var nums = [1,1,0,1,1,1];
  // output: 3
  // constraints: 1 <= nums.length <= 10**5
  // nums[i] is either 0 or 1.
  // flow:
  // for every number in array
  // if nums[i] == 1 max += 1
  // if nums[i] == 0 we need two maxes: one max counts the current max
  // other max checks max between previous and current max
  let maxCurrent = 0,
    maxWithConsecutiveOnes = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      maxCurrent += 1;
      //   if (i == n - 1) {
      maxWithConsecutiveOnes = Math.max(maxCurrent, maxWithConsecutiveOnes);
      // maxCurrent = 0;
      //   }
    } else {
      //   maxWithConsecutiveOnes = Math.max(maxCurrent, maxWithConsecutiveOnes);
      maxCurrent = 0;
    }
  }
  return maxWithConsecutiveOnes;
};

// var res = findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]);
// console.log(res);
const res = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
console.log(res);
