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

// const arr = [9, 4, 2, 10, 7, 8, 8, 1, 9]; //expected 5
// const arr2 = [4, 8, 12, 16]; //expected 2
// const arr3 = [3]; // expected 1

// const arr4 = [0, 1, 1, 0, 1, 0, 1, 1, 0, 0]; // expected 5

// const maxTurbulenceSize = function (arr) {
//   let maxSize = 1;
//   let currSize = 1;
//   let prev = null; // true: < ----  false: > ---- null not: defined

//   for (let i = 1; i < arr.length; i++) {
//     //case1 That's for case when we are staring subarray
//     if (prev === null) {
//       if (arr[i] > arr[i - 1]) {
//         prev = true;
//         currSize++;
//       }

//       if (arr[i] < arr[i - 1]) {
//         prev = false;
//         currSize++;
//       }
//     } else {
//       //case2 Turbulent subarray continues or breaks if rule breaks
//       if (prev) {
//         if (arr[i] < arr[i - 1]) {
//           prev = false;
//           currSize++;
//         } else {
//           if (arr[i] === arr[i - 1]) {
//             currSize = 1;
//             prev = null;
//           } else currSize = 2;
//         }
//       } else {
//         if (arr[i] > arr[i - 1]) {
//           prev = true;
//           currSize++;
//         } else {
//           if (arr[i] === arr[i - 1]) {
//             currSize = 1;
//             prev = null;
//           } else currSize = 2;
//         }
//       }
//     }

//     maxSize = Math.max(maxSize, currSize);
//   }

//   return maxSize;
// };

// console.log(maxTurbulenceSize(arr2));

//-----  -----
//----- LeetCode 219. Contains Duplicate II -----
//-----  -----

//test case 1 // expected true
// const nums = [1, 2, 3, 1];
// const k = 3;

// //test case 2 // true
// const nums = [1, 0, 1, 1];
// const k = 1;

// //test case 3 // false
// const nums = [1, 2, 3, 1, 2, 3];
// const k = 2;

// const containsNearbyDuplicate = function (nums, k) {
//   let map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       if (Math.abs(map.get(nums[i]) - i) <= k) {
//         return true;
//       } else map.set(nums[i], i);
//     } else map.set(nums[i], i);
//   }

//   return false;
// };

// console.log(containsNearbyDuplicate(nums, k));

//-----  -----
//----- LeetCode 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold -----
//-----  -----

// // //test case 1 //expected 3
// // const arr = [2, 2, 2, 5, 5, 5, 8];
// // const k = 3;
// // const threshold = 4;

// //test case 2 // expected 6
// const arr = [11, 13, 17, 23, 29, 31, 7, 5, 2, 3];
// const k = 3;
// const threshold = 5;

// const numOfSubarrays = function (arr, k, threshold) {
//   let l = 0;
//   let number = 0;
//   let sum = 0;

//   for (let i = 0; i < k; i++) {
//     sum += arr[i];
//   }
//   if (sum / k >= threshold) number++;

//   for (let r = 0; r < arr.length - k; r++) {
//     sum += arr[r + k];
//     sum -= arr[l];
//     l++;

//     if (sum / k >= threshold) number++;
//   }

//   return number;
// };

// console.log(numOfSubarrays(arr, k, threshold));

//-----  -----
//----- LeetCode 209. Minimum Size Subarray Sum -----
//-----  -----

// //expected 2
// const target = 7;
// const nums = [2, 3, 1, 2, 4, 3];

// const minSubArrayLen = function (target, nums) {
//   let l = 0;
//   let total = 0;
//   let length = nums.length + 1;

//   for (let r = 0; r < nums.length; r++) {
//     total += nums[r];
//     while (total >= target) {
//       length = Math.min(length, r - l + 1);
//       total -= nums[l];
//       l++;
//     }
//   }
//   return length === nums.length + 1 ? 0 : length;
// };

// console.log(minSubArrayLen(target, nums));

//-----  -----
//----- NeetCode, LeetCode 3. Longest Substring Without Repeating Characters-----
//-----  -----

// const s = "zxyzxyz";
// const s1 = "ffffff";
// const s2 = "pwwkew";
// const s3 = "abcabcbb";

// function lengthOfLongestSubstring(s) {
//   const arr = s.split("");
//   if (arr.length === 0) return 0;

//   let l = 0;
//   let maxLength = 1;

//   let setChars = new Set();
//   setChars.add(arr[0]);

//   for (let r = 1; r < arr.length; r++) {
//     while (setChars.has(arr[r])) {
//       setChars.delete(arr[l]);
//       l++;
//     }

//     setChars.add(arr[r]);
//     maxLength = Math.max(maxLength, setChars.size);
//   }

//   return maxLength;
// }

// console.log(lengthOfLongestSubstring(s1));

//-----  -----
//----- NeetCode, LeetCode 424. Longest Repeating Character Replacement -----
//-----  -----

//test case 1 //expected 4
const s = "XYYX";
const k = 2;

//test case 2 //expected 5
const s1 = "AAABABB";
const k1 = 1;

//test case 3 // 3
const s2 = "ABAAA";
const k2 = 0;

function characterReplacement(s, k) {
  const arr = s.split("");
  if (arr.length === 0) return 0;

  let l = 0;
  let maxLength = 1;
  let map = new Map();

  for (let r = 0; r < arr.length; r++) {
    map.set(arr[r], 1 + (map.get(arr[r]) || 0));

    let length = r - l + 1;
    if (length - Math.max(...map.values()) > k) {
      map.set(arr[l], map.get(arr[l]) - 1);
      l++;
    }

    length = r - l + 1;

    maxLength = Math.max(maxLength, length);
  }

  return maxLength;
}

console.log(characterReplacement(s2, k2));
