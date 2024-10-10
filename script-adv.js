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

// //test case 1 //expected 4
// const s = "XYYX";
// const k = 2;

// //test case 2 //expected 5
// const s1 = "AAABABB";
// const k1 = 1;

// //test case 3 // 3
// const s2 = "ABAAA";
// const k2 = 0;

// function characterReplacement(s, k) {
//   const arr = s.split("");
//   if (arr.length === 0) return 0;

//   let l = 0;
//   let maxLength = 1;
//   let map = new Map();

//   for (let r = 0; r < arr.length; r++) {
//     map.set(arr[r], 1 + (map.get(arr[r]) || 0));

//     let length = r - l + 1;
//     if (length - Math.max(...map.values()) > k) {
//       map.set(arr[l], map.get(arr[l]) - 1);
//       l++;
//     }

//     length = r - l + 1;

//     maxLength = Math.max(maxLength, length);
//   }

//   return maxLength;
// }

// console.log(characterReplacement(s2, k2));

//-----  -----
//----- NeetCode, LeetCode 125. Is Palindrome -----
//-----  -----

// const s = "Was it a car or a cat I saw?";

// function isPalindrome(s) {
//   const str = s
//     .toLowerCase()
//     .replace(/[^a-z0-9]/g, "")
//     .split("");

//   const half = Math.floor(str.length / 2);

//   for (let i = 0; i <= half; i++) {
//     if (str[i] !== str[str.length - i - 1]) return false;
//   }

//   return true;
// }

// console.log(isPalindrome(s));

//-----  -----
//----- NeetCode, LeetCode 167. Two Sum II - Input Array Is Sorted -----
//-----  -----

// const numbers = [2, 7, 11, 15];
// const target = 9;

// const twoSum = function (numbers, target) {
//   let l = 0;
//   let r = numbers.length - 1;

//   while (l < r) {
//     if (numbers[l] + numbers[r] > target) {
//       r--;
//     } else if (numbers[l] + numbers[r] < target) {
//       l++;
//     } else return [++l, ++r];
//   }

//   return [++l, ++r];
// };

// console.log(twoSum(numbers, target));

//-----  -----
//----- NeetCode, LeetCode 11. Container With Most Water -----
//-----  -----

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// const maxArea = function (height) {
//   let l = 0;
//   let r = height.length - 1;
//   let maxSize = 0;

//   while (l < r) {
//     const curSize = Math.min(height[l], height[r]) * (r - l);

//     if (height[l] < height[r]) {
//       l++;
//     } else r--;

//     maxSize = Math.max(curSize, maxSize);
//   }

//   return maxSize;
// };

// console.log(maxArea(height));

//-----  -----
//----- NeetCode, LeetCode 42. Trapping Rain Water -----
//-----  -----

// //Test case 1
// //expected 9;
// const height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1];

// //Test case 2
// //expected 11
// const height2 = [0, 2, 4, 0, 1, 0, 4];

// //Test case 3
// //expected 6
// const height3 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

// //Test case 4
// //expected 9
// const height4 = [4, 2, 0, 3, 2, 5];

// //test case 5
// //expected 83
// const height5 = [
//   6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1, 3,
// ];

// function trap(height) {
//   let l = 0;
//   let r = height.length - 1;
//   let level = 0;
//   let prevLevel = 0;
//   let water = 0;

//   while (l < r) {
//     if (height[l] === 0) {
//       l++;
//       continue;
//     }
//     if (height[r] === 0) {
//       r--;
//       continue;
//     }

//     const minBar = Math.min(height[l], height[r]);
//     prevLevel = level;

//     if (minBar > prevLevel) {
//       level = minBar;

//       for (let i = l + 1; i < r; i++) {
//         if (height[i] <= prevLevel) water += level - prevLevel;
//         if (height[i] > prevLevel && height[i] < level)
//           water += level - height[i];
//       }
//     }

//     if (height[l] < height[r]) {
//       l++;
//     } else r--;
//   }

//   return water;
// }

// console.log(trap(height));
// console.log(trap(height2));
// console.log(trap(height3));
// console.log(trap(height4));
// console.log(trap(height5));

//-----  -----
//----- NeetCode, LeetCode 238. Product of Array Except Self -----
//-----  -----

// //test case 1 //expected [48,24,12,8]
// const nums = [1, 2, 4, 6];

// //test case 2 //expected [0,0,9,0,0]
// const nums2 = [-1, 1, 0, -3, 3];

// const productExceptSelf = function (nums) {
//   let pre = [nums[0]];
//   let post = [nums[nums.length - 1]];
//   let res = [];

//   for (let i = 1; i < nums.length; i++) {
//     pre.push(nums[i] * pre[i - 1]);
//     post.unshift(nums[nums.length - 1 - i] * post[0]);
//   }

//   res.push(post[1]);
//   for (let i = 1; i < nums.length - 1; i++) {
//     res.push(pre[i - 1] * post[i + 1]);
//   }
//   res.push(pre[nums.length - 2]);

//   return res;
// };

// console.log(productExceptSelf(nums));

//-----  -----
//----- NeetCode, LeetCode 724. Find Pivot Index -----
//-----  -----

// const nums = [1, 7, 3, 6, 5, 6];
// const nums2 = [-1, 2, -2, 1, 8];
// const nums3 = [-1, -1, 1, 1, 0, 0];

// const pivotIndex = function (nums) {
//   if (nums.length === 1) return 0;

//   let pre = [nums[0]];
//   let post = [nums[nums.length - 1]];

//   for (let i = 1; i < nums.length; i++) {
//     pre.push(nums[i] + pre[i - 1]);
//     post.unshift(nums[nums.length - 1 - i] + post[0]);
//   }

//   if (post[1] === 0) return 0;

//   for (let i = 1; i < nums.length - 1; i++) {
//     console.log(`i: ${i}, pre: ${pre[i - 1]}, post: ${post[i + 1]}`);
//     if (pre[i - 1] === post[i + 1]) return i;
//   }
//   if (pre[nums.length - 2] === 0) return nums.length - 1;

//   return -1;
// };

// console.log(pivotIndex(nums2));
