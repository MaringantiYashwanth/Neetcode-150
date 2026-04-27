/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  // console.log("nums: ", nums);
  let seen = new Map();
  // let seen = {};
  let resultArr = [];
  let duplicateNum = -1;

  for (const num of nums) {
    if (seen.has(num)) {
      // if map already has item then a duplicate is seen
      seen.set(num, seen.get(num) + 1);
      seen[num] = (seen[num] || 0) + 1;

      if (seen.get(num) == 2) {
        duplicateNum = num;
        resultArr.push(num);
      }
    } else {
      seen.set(num, 1);
    }
  }

  // console.log("duplicate num", duplicateNum);
  let missingNumber = -1;
  for (let i = 1; i <= nums.length; i++) {
    // if (!seen[i]) for the seen = {};
    if (!seen.has(i)) {
      missingNumber = i;
      break;
    }
  }
  // console.log("Missing number", missingNumber);

  resultArr.push(missingNumber);
  seen.clear();
  return resultArr;
};

let resultArr = findErrorNums([1, 2, 2, 4]);
// console.log(resultArr);

resultArr = findErrorNums([1, 1]);
// console.log(resultArr);

// brute force approach
var findErrorNumsBF = function (nums) {
  let n = nums.length;
  let duplicateNum = -1,
    missingNum = -1;
  let resultArr = [];
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }

    if (count === 2) {
      duplicateNum = i;
      resultArr.push(duplicateNum);
      break;
    }
  }
  // step 2: find missing
  for (let i = 0; i < n; i++) {
    let found = false;
    for (let j = 0; j < n; j++) {
      if (nums[j] === i) {
        found = true;
        break;
      }

      if (!found) {
        missingNum = i;
        break;
      }
    }
  }

  resultArr.push(missingNum);

  return resultArr;
};
