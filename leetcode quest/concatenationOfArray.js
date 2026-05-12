var getConcatenation = function (nums) {
  let n = nums.length;
  let ans = new Array(2 * n);
  for (let i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
  }
  return ans;
};

let nums = [1, 2, 1];
console.log(getConcatenation(nums));
nums = [1, 3, 2, 1];
console.log(getConcatenation(nums));
