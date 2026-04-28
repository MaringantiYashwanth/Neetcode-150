var smallerNumbersThanCurrent = function (nums) {
  let len = nums.length;

  let resultArr = [];
  for (let i = 0; i < len; i++) {
    let count = 0;
    for (let j = 0; j < len; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    resultArr.push(count);
  }

  return resultArr;
};

let nums = [8, 1, 2, 2, 3];
console.log(smallerNumbersThanCurrent(nums));

nums = [6, 5, 4, 8];
console.log(smallerNumbersThanCurrent(nums));
