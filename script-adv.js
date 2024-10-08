//-----  -----
//----- NeetCode, LeetCode 53: Maximum Subarray -----
//-----  -----

// const nums = [2, -3, 4, -2, 2, 1, -1, 4]; // expected 8
// const nums2 = [5, 4, -1, 7, 8]; //expected 23

// function maxSubArray(nums) {
//   let maxSum = nums[0];
//   let currSum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     currSum = Math.max(currSum, 0);
//     currSum += nums[i];

//     maxSum = Math.max(maxSum, currSum);
//   }

//   return maxSum;
// }

// console.log(maxSubArray(nums2));

//-----  -----
//----- LeetCode 918: Maximum Sum Circular Subarray -----
//-----  -----

// const nums = [5, -1, 3]; //expected 8
// const nums2 = [-5, -1, -3]; //expected -1
// const nums3 = [5, 1, -2, 4]; //expected 10

// const maxSubarraySumCircular = function (nums) {
//   function maxSubArray(nums) {
//     let maxSum = nums[0];
//     let currSum = 0;

//     for (let i = 0; i < nums.length; i++) {
//       currSum = Math.max(currSum, 0);
//       currSum += nums[i];

//       maxSum = Math.max(maxSum, currSum);
//     }

//     return maxSum;
//   }

//   function minSubArray(nums) {
//     let minSum = nums[0];
//     let currSum = 0;

//     for (let i = 0; i < nums.length; i++) {
//       currSum = Math.min(currSum, 0);
//       currSum += nums[i];

//       minSum = Math.min(minSum, currSum);
//     }

//     return minSum;
//   }

//   const maxEl = Math.max(...nums);
//   if (maxEl < 0) return maxEl;

//   const minSum = minSubArray(nums);
//   const maxSum = maxSubArray(nums);
//   const allSum = nums.reduce((cur, acc) => cur + acc, 0);

//   return Math.max(maxSum, allSum - minSum);
// };

// console.log(maxSubarraySumCircular(nums));

//-----  -----
//----- LeetCode 978. Longest Turbulent Subarray -----
//-----  -----
const arr = [9, 4, 2, 10, 7, 8, 8, 1, 9]; //expected 5
const arr2 = [4, 8, 12, 16]; //expected 2
const arr3 = [3]; // expected 1

const arr4 = [0, 1, 1, 0, 1, 0, 1, 1, 0, 0]; // expected 5

const maxTurbulenceSize = function (arr) {
  let maxSize = 1;
  let currSize = 1;
  let prev = null; // true: < ----  false: > ---- null not: defined

  for (let i = 1; i < arr.length; i++) {
    //case1 That's for case when we are staring subarray
    if (prev === null) {
      if (arr[i] > arr[i - 1]) {
        prev = true;
        currSize++;
      }

      if (arr[i] < arr[i - 1]) {
        prev = false;
        currSize++;
      }
    } else {
      //case2 Turbulent subarray continues or breaks if rule breaks
      if (prev) {
        if (arr[i] < arr[i - 1]) {
          prev = false;
          currSize++;
        } else {
          if (arr[i] === arr[i - 1]) {
            currSize = 1;
            prev = null;
          } else currSize = 2;
        }
      } else {
        if (arr[i] > arr[i - 1]) {
          prev = true;
          currSize++;
        } else {
          if (arr[i] === arr[i - 1]) {
            currSize = 1;
            prev = null;
          } else currSize = 2;
        }
      }
    }

    maxSize = Math.max(maxSize, currSize);
  }

  return maxSize;
};

console.log(maxTurbulenceSize(arr2));
