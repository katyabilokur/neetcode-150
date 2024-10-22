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

// -----  -----
// ----- NeetCode, LeetCode 42. Trapping Rain Water -----
// -----  -----

//Test case 1
////expected 9;
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
//   let water = 0;

//   while (l < r) {
//     const minBar = Math.min(height[l], height[r]);
//     if (minBar > level) level = minBar;
//     if (height[l] <= height[r]) {
//       water += level - height[l];
//       l++;
//     } else {
//       water += level - height[r];
//       r--;
//     }
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

//-----  -----
//----- NeetCode, LeetCode 560. Subarray Sum Equals K -----
//-----  -----

// //test case 1, expected 2
// const nums = [1, 2, 3];
// const k = 3;

// //test case 2, expected 3 / 6
// const nums1 = [1, 2, 0, 3, 0];
// const k1 = 3;

// //test case 2, expected 2
// const nums2 = [1, 1];
// const k2 = 1;

// //expected 1
// const nums3 = [1];
// const k3 = 1;

// //expected 1
// const nums4 = [-1, -1, 1];
// const k4 = 0;

// //expected
// const nums5 = [6, 4, 3, 1];
// const k5 = 10;

// const subarraySum = function (nums, k) {
//   if (nums.length === 1 && nums[0] === k) return 1;
//   if (nums.length === 1 && nums[0] !== k) return 0;

//   let pre = [nums[0]];
//   let post = [nums[nums.length - 1]];

//   let res = 0;

//   for (let i = 1; i < nums.length; i++) {
//     pre.push(nums[i] + pre[i - 1]);
//     post.unshift(nums[nums.length - 1 - i] + post[0]);
//   }

//   const totalSum = post[0];

//   pre.unshift(0);
//   pre.push(pre[pre.length - 1]);

//   post.unshift(post[0]);
//   post.push(0);

//   // console.log(pre);
//   // console.log(post);

//   for (let i = 0; i < pre.length - 1; i++) {
//     for (let j = post.length - 1; j > i + 1; j--) {
//       if (totalSum - pre[i] - post[j] === k) res++;
//     }
//   }

//   return res;
// };

// console.log(subarraySum(nums, k));
// console.log(subarraySum(nums1, k1));
// console.log(subarraySum(nums2, k2));
// console.log(subarraySum(nums3, k3));
// console.log(subarraySum(nums4, k4));
// console.log(subarraySum(nums5, k5));

// -----  -----
// ----- NeetCode, LeetCode 141. Linked List Cycle -----
// -----  -----

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// //test case 1 // expected TRUE
// //head = [1,2,3,4]
// const node2 = new ListNode(2);
// const node4 = new ListNode(4, node2);
// const node1 = new ListNode(1, node2);
// const node3 = new ListNode(3, node4);
// node2.next = node3;

// function hasCycle(head) {
//   let s = head;
//   let f = head;

//   while (f && f.next) {
//     f = f.next.next;
//     s = s.next;

//     if (f === s) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(hasCycle(node1));

// -----  -----
// ----- NeetCode, LeetCode 876. Middle of the Linked List -----
// -----  -----

// const node4 = new ListNode(4);
// const node3 = new ListNode(3, node4);
// const node2 = new ListNode(2, node3);
// const node1 = new ListNode(2, node2);
// const node0 = new ListNode(2, node1);

// const middleNode = function (head) {
//   let s = head;
//   let f = head;

//   while (f && f.next) {
//     f = f.next.next;
//     s = s.next;
//   }

//   return s;
// };

// console.log(middleNode(node0));

// -----  -----
// ----- NeetCode, LeetCode 142. Linked List Cycle II-----
// -----  -----

//test case //expected 2
// const node2 = new ListNode(2);
// const node4 = new ListNode(4, node2);
// const node1 = new ListNode(1, node2);
// const node3 = new ListNode(3, node4);
// node2.next = node3;

// const detectCycle = function (head) {
//   let s = head;
//   let f = head;

//   while (f && f.next) {
//     f = f.next.next;
//     s = s.next;

//     if (f === s) {
//       let s2 = head;
//       while (s2 !== s) {
//         s = s.next;
//         s2 = s2.next;
//       }
//       return s;
//     }
//   }

//   return null;
// };

// console.log(detectCycle(node1));

// -----  -----
// ----- NeetCode, LeetCode 287. Find the Duplicate Number-----
// -----  -----

// test case 1 // expected 2
// const nums = [1, 3, 4, 2, 2];

// function findDuplicate(nums) {
//   let s = 0;
//   let f = 0;

//   //part 1 - find the cycle
//   while (true) {
//     s = nums[s];
//     f = nums[nums[f]];

//     //part 2 - find the head of the cycle, that is a repeated element
//     if (s === f) {
//       let s2 = 0;
//       while (true) {
//         s = nums[s];
//         s2 = nums[s2];

//         if (s === s2) return s;
//       }
//     }
//   }
// }

// console.log(findDuplicate(nums));

// -----  -----
// ----- NeetCode, LeetCode 2130. Maximum Twin Sum of a Linked List -----
// -----  -----

//test case 1
//[4,2,2,3] //expected 7

// const node4 = new ListNode(3);
// const node3 = new ListNode(2, node4);
// const node2 = new ListNode(2, node3);
// const node1 = new ListNode(4, node2);

// const pairSum = function (head) {
//   let sums = [head.val];
//   let s = head;
//   let f = head.next;

//   while (f && f.next) {
//     s = s.next;
//     f = f.next.next;
//     sums.push(s.val);
//   }

//   for (let i = sums.length - 1; i >= 0; i--) {
//     s = s.next;
//     sums[i] = sums[i] + s.val;
//   }

//   return Math.max(...sums);
// };

// console.log(pairSum(node1)); //7

// -----  -----
// ----- NeetCode, LeetCode 208. Implement Trie (Prefix Tree) -----
// -----  -----

// class PrefixTreeNode {
//   constructor() {
//     this.children = {};
//     this.isWord = false;
//   }
// }

// class PrefixTree {
//   constructor() {
//     this.root = new PrefixTreeNode();
//   }

//   insert(word) {
//     let node = this.root;

//     for (const char of word) {
//       const child = node.children[char] || new PrefixTreeNode();
//       node.children[char] = child;
//       node = child;
//     }

//     node.isWord = true;
//   }

//   //return boolean
//   search(word) {
//     let node = this.root;

//     for (const char of word) {
//       const child = node.children[char] || null;

//       if (!child) {
//         return false;
//       }

//       node = child;
//     }
//     return node.isWord;
//   }

//   //return boolean
//   startsWith(prefix) {
//     let node = this.root;

//     for (const char of prefix) {
//       const child = node.children[char] || null;

//       if (!child) {
//         return false;
//       }

//       node = child;
//     }
//     return true;
//   }
// }

// const prefixTree = new PrefixTree();
// prefixTree.insert("dog");
// console.log(prefixTree.search("dog")); // return true
// console.log(prefixTree.search("do")); // return false
// console.log(prefixTree.startsWith("do")); // return true
// prefixTree.insert("do");
// console.log(prefixTree.search("do")); // return true

// -----  -----
// ----- NeetCode, LeetCode 211. Design Add and Search Words Data Structure -----
// -----  -----

// class PrefixTreeNode {
//   constructor() {
//     this.children = new Map();
//     this.isWord = false;
//   }
// }

// class WordDictionary {
//   constructor() {
//     this.root = new PrefixTreeNode();
//   }

//   addWord(word) {
//     let node = this.root;

//     for (const char of word) {
//       const child = node.children.get(char) || new PrefixTreeNode();
//       node.children.set(char, child);
//       node = child;
//     }

//     node.isWord = true;
//   }

//   //return boolean
//   search(word) {
//     let node = this.root;

//     let count = 0;
//     count += dfs(node, word.split(""));

//     if (count > 0) return true;

//     return false;
//   }
// }

// function dfs(node, word) {
//   let curNode = node;
//   let res = 0;

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === ".") {
//       const children = [...curNode.children.values()];

//       // if (children.length === 0 && word.length === 1) {
//       //   return curNode.isWord ? 1 : 0;
//       // }
//       if (children.length === 0 && word.length >= 1) {
//         return 0;
//       }
//       const remWord = word.slice(i + 1);
//       //const childArr = Object.values(children);

//       children.forEach((child) => {
//         res += dfs(child, remWord);
//       });
//       break;
//     } else {
//       const child = curNode.children.get(word[i]);

//       if (!child) {
//         return 0;
//       }

//       curNode = child;
//     }
//   }

//   if (curNode.isWord) res++;
//   return res;
// }

// const wordDictionary = new WordDictionary();
// // wordDictionary.addWord("bad");
// // wordDictionary.addWord("dad");
// // wordDictionary.addWord("mad");
// // console.log(wordDictionary.search("pad")); // return False
// // console.log(wordDictionary.search("bad")); // return True
// // console.log(wordDictionary.search(".ad")); // return True
// // console.log(wordDictionary.search("b..")); // return True

// // wordDictionary.addWord("do");
// // console.log(wordDictionary.search("d..")); // return True

// wordDictionary.addWord("cat");
// wordDictionary.addWord("cot");

// console.log(wordDictionary.search("cat")); // return True
// console.log(wordDictionary.search("cut")); // return False
// console.log(wordDictionary.search("c.r")); // return False

// console.log(wordDictionary.search("c.t")); // return True
// console.log(wordDictionary.search("c..")); // return True
// console.log(wordDictionary.search("..t")); // return True

// -----  -----
// ----- NeetCode, LeetCode 323. Count Connected Components -----
// -----  -----

// //test case 1 //expected 1
// const n = 3;
// const edges = [
//   [0, 1],
//   [0, 2],
// ];

// //test case 2 //expected 2
// const n1 = 6;
// const edges1 = [
//   [0, 1],
//   [1, 2],
//   [2, 3],
//   [4, 5],
// ];

// //test case 3 //expected 3
// const n2 = 6;
// const edges2 = [
//   [0, 1],
//   [0, 2],
//   [1, 2],
//   [3, 4],
// ];

// //test case 4 //expected 1
// const n3 = 6;
// const edges3 = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
//   [1, 2],
//   [3, 4],
// ];

// class UnionFind {
//   constructor(n) {
//     this.par = new Map();
//     this.rank = new Map();

//     for (let i = 0; i < n; i++) {
//       this.par.set(i, i);
//       this.rank.set(i, 0);
//     }
//   }

//   find(x) {
//     if (x !== this.par.get(x)) {
//       this.par.set(x, this.find(this.par.get(x)));
//     }
//     return this.par.get(x);
//   }

//   union(n1, n2) {
//     let p1 = this.find(n1),
//       p2 = this.find(n2);
//     if (p1 == p2) {
//       return false;
//     }

//     if (this.rank.get(p1) > this.rank.get(p2)) {
//       for (let [key, value] of this.par) {
//         if (value === p2) this.par.set(key, p1);
//       }
//       this.par.set(p2, p1);
//     } else if (this.rank.get(p1) < this.rank.get(p2)) {
//       for (let [key, value] of this.par) {
//         if (value === p1) this.par.set(key, p2);
//       }
//       this.par.set(p1, p2);
//     } else {
//       const pToChange = p1;
//       this.par.set(p1, p2);
//       this.rank.set(p2, this.rank.get(p2) + 1);

//       for (let [key, value] of this.par) {
//         if (value === pToChange) this.par.set(key, p2);
//       }
//     }
//     return true;
//   }
// }

// function countComponents(n, edges) {
//   const union = new UnionFind(n);

//   edges.forEach((edge) => {
//     union.union(...edge);
//   });

//   const parents = Array.from(union.par.values());
//   const uniquePar = [...new Set(parents)];

//   return uniquePar.length;
// }

// console.log(countComponents(n, edges));
// console.log(countComponents(n1, edges1));
// console.log(countComponents(n2, edges2));
// console.log(countComponents(n3, edges3));

// -----  -----
// ----- NeetCode, LeetCode 684. Redundant Connection -----
// -----  -----

// const edges = [
//   [1, 2],
//   [1, 3],
//   [2, 3],
// ]; //[2,3]

// const edges1 = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [1, 4],
//   [1, 5],
// ]; //[1,4]

// class UnionFind {
//   constructor(edges) {
//     const n = edges.length;
//     this.par = new Map();
//     this.rank = new Map();

//     for (let i = 1; i <= n; i++) {
//       this.par.set(i, i);
//       this.rank.set(i, 0);
//     }
//   }

//   find(x) {
//     if (x !== this.par.get(x)) {
//       this.par.set(x, this.find(this.par.get(x)));
//     }
//     return this.par.get(x);
//   }

//   union(n1, n2) {
//     let p1 = this.find(n1),
//       p2 = this.find(n2);
//     if (p1 === p2) {
//       return false;
//     }

//     if (this.rank.get(p1) > this.rank.get(p2)) {
//       this.par.set(p2, p1);
//     } else if (this.rank.get(p1) < this.rank.get(p2)) {
//       this.par.set(p1, p2);
//     } else {
//       this.par.set(p1, p2);
//       this.rank.set(p2, this.rank.get(p2) + 1);
//     }
//     return true;
//   }
// }

// const findRedundantConnection = function (edges) {
//   const union = new UnionFind(edges);

//   for (let i = 0; i < edges.length; i++) {
//     const newToUnite = union.union(...edges[i]);
//     if (newToUnite === false) return edges[i];
//   }
// };

// console.log(findRedundantConnection(edges));
// console.log(findRedundantConnection(edges1));

// -----  -----
// ----- NeetCode, LeetCode 128. Longest Consecutive Sequence -----
// -----  -----

// const nums = [2, 20, 4, 10, 3, 4, 5]; //expected 4

// function longestConsecutive(nums) {
//   const set = new Set(nums);
//   let longest = 0;

//   nums.forEach((num) => {
//     if (!set.has(num - 1)) {
//       let curLength = 1;
//       while (set.has(num + curLength)) {
//         curLength++;
//       }

//       longest = Math.max(longest, curLength);
//     }
//   });

//   return longest;
// }

// console.log(longestConsecutive(nums));

// -----  -----
// ----- NeetCode, LeetCode 721. Accounts Merge -----
// -----  -----

// const accounts0 = [
//   ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
//   ["John", "johnsmith@mail.com", "john00@mail.com"],
//   ["Mary", "mary@mail.com"],
//   ["John", "johnnybravo@mail.com"],
// ];

// const accounts = [
//   ["David", "David0@m.co", "David1@m.co"],
//   ["David", "David3@m.co", "David4@m.co"],
//   ["David", "David4@m.co", "David5@m.co"],
//   ["David", "David2@m.co", "David3@m.co"],
//   ["David", "David1@m.co", "David2@m.co"],
// ];

// class UnionAccounts {
//   constructor(edges) {
//     this.parents = new Map(); //e.g "David0@mail.com": "David"
//     this.emails = new Map(); //e.g "David0@mail.com": "David0@mail.com", "David1@mail.com": "David0@mail.com"
//   }

//   findExistingAccount(account) {
//     for (let e = 1; e < account.length; e++) {
//       if (this.emails.has(account[e])) return this.emails.get(account[e]);
//     }
//     return null;
//   }

//   createRecord(account) {}

//   addAccount(account) {
//     const curOwner = this.findExistingAccount(account);

//     //If there is no owner yet, add all emails
//     if (!curOwner) {
//       this.parents.set(account[1], account[0]);
//       for (let e = 1; e < account.length; e++) {
//         this.emails.set(account[e], account[1]);
//       }
//     }
//     //if there is already at least one owner
//     else {
//       //do merging of a new account and possible existing ones
//       for (let e = 1; e < account.length; e++) {
//         if (!this.emails.has(account[e])) {
//           this.emails.set(account[e], curOwner);
//         } else {
//           const questionOwnerEmail = this.emails.get(account[e]);
//           if (questionOwnerEmail !== curOwner) {
//             //rewrite all owners with that email to a new curOwner email
//             this.parents.delete(questionOwnerEmail);
//             for (const [key, value] of this.emails.entries()) {
//               if (value === questionOwnerEmail) this.emails.set(key, curOwner);
//             }
//           }
//         }
//       }
//     }
//   }
// }

// function accountsMerge(accounts) {
//   const unionAcc = new UnionAccounts(accounts);
//   let res = [];

//   accounts.forEach((account) => {
//     unionAcc.addAccount(account);
//   });

//   console.log(unionAcc);

//   for (const [keyOwner, valueOwner] of unionAcc.parents.entries()) {
//     let emails = [];
//     for (const [keyEmail, valueEmail] of unionAcc.emails.entries()) {
//       if (valueEmail === keyOwner) emails.push(keyEmail);
//     }
//     const sortedEmails = emails.sort();
//     res.push([valueOwner, ...sortedEmails]);
//   }

//   return res;
// }

// console.log(accountsMerge(accounts0));

// -----  -----
// ----- NeetCode, LeetCode 295. Find Median from Data Stream -----
// -----  -----

//NOTE: for LeetCode add .element to front() and dequeue()
//for Min/MaxPriorityQueue in leetcode requires you to use .front().element or .dequeue().element to get the actual element

import {
  MaxPriorityQueue,
  MinPriorityQueue,
} from "@datastructures-js/priority-queue";

// class MedianFinder {
//   constructor() {
//     this.smallHeap = new MaxPriorityQueue();
//     this.largeHeap = new MinPriorityQueue();
//   }

//   addNum(num) {
//     if (this.largeHeap.size() !== 0 && this.largeHeap.front() < num) {
//       this.smallHeap.enqueue(this.largeHeap.dequeue());
//       this.largeHeap.enqueue(num);
//     } else this.smallHeap.enqueue(num);

//     if (this.smallHeap.size() - this.largeHeap.size() > 1) {
//       const elementToMove = this.smallHeap.dequeue();
//       this.largeHeap.enqueue(elementToMove);
//     }

//     if (
//       this.smallHeap.size() - this.largeHeap.size() === 1 &&
//       this.largeHeap.size() !== 0
//     ) {
//       const elementToPossiblyMove = this.smallHeap.front();
//       if (elementToPossiblyMove >= this.largeHeap.front()) {
//         this.largeHeap.enqueue(this.smallHeap.dequeue());
//       }
//     }
//   }

//   findMedian() {
//     if (this.smallHeap.size() > this.largeHeap.size())
//       return this.smallHeap.front();
//     if (this.smallHeap.size() < this.largeHeap.size())
//       return this.largeHeap.front();

//     return (this.smallHeap.front() + this.largeHeap.front()) / 2;
//   }
// }

// const medianFinder = new MedianFinder();
// medianFinder.addNum(1); // arr = [1]
// console.log(medianFinder.findMedian()); // return 1.0
// medianFinder.addNum(2); // arr = [1, 2]
// console.log(medianFinder.findMedian()); // return 1.5
// medianFinder.addNum(3); // arr[1, 2, 3]
// console.log(medianFinder.findMedian()); // return 2.0
// medianFinder.addNum(4); // arr[1, 2, 3, 4]
// console.log(medianFinder.findMedian()); // return 2.5

// -----  -----
// ----- NeetCode, LeetCode 502. IPO -----
// -----  -----

// const k = 3;
// const w = 0;
// const profits = [1, 2, 3];
// const capital = [0, 1, 2];

// function findMaximizedCapital(k, w, profits, capital) {
//   if (w >= Math.max(capital) && k >= capital.length)
//     return profits.reduce((cur, acc) => cur + acc, 0) + w;

//   const maxProfit = new MaxPriorityQueue();
//   const minCapital = new MinPriorityQueue((x) => x[0]);

//   for (let i = 0; i < capital.length; i++) {
//     minCapital.enqueue([capital[i], profits[i]]);
//   }

//   for (let i = 1; i <= k; i++) {
//     while (!minCapital.isEmpty() && minCapital.front()[0] <= w) {
//       maxProfit.enqueue(minCapital.dequeue()[1]);
//     }

//     if (maxProfit.isEmpty()) break;

//     w += maxProfit.dequeue();
//   }

//   return w;
// }

// console.log(findMaximizedCapital(k, w, profits, capital));

//LeetCode Heaps supported
// findMaximizedCapital = function(k, w, profits, capital) {
//   const maxProfit = new MaxPriorityQueue();
// const minCapital = new MinPriorityQueue({priority: (x) => x[0]});

// for (let i = 0; i < capital.length; i++) {
// minCapital.enqueue([capital[i], profits[i]]);
// }

// for (let i = 1; i <= k; i++) {
// while (!minCapital.isEmpty() && minCapital.front().element[0] <= w) {
//   maxProfit.enqueue(minCapital.dequeue().element[1]);
// }

// if (maxProfit.isEmpty()) break;

// w += maxProfit.dequeue().element;
// }

// return w;
// };

// -----  -----
// ----- NeetCode, LeetCode 480. Sliding Window Median -----
// -----  -----

// const nums = [1, 3, -1, -3, 5, 3, 6, 7];
// const k = 3;

// const nums1 = [1, 2, 3, 4, 2, 3, 1, 4, 2];
// const k1 = 3;

// //Approach 1 - Works but TLE in LeetCode
// class MedianFinder {
//   constructor() {
//     this.smallHeap = new MaxPriorityQueue();
//     this.largeHeap = new MinPriorityQueue();
//   }

//   addNum(num) {
//     if (this.largeHeap.size() !== 0 && this.largeHeap.front() < num) {
//       this.smallHeap.enqueue(this.largeHeap.dequeue());
//       this.largeHeap.enqueue(num);
//     } else this.smallHeap.enqueue(num);

//     if (this.smallHeap.size() - this.largeHeap.size() > 1) {
//       const elementToMove = this.smallHeap.dequeue();
//       this.largeHeap.enqueue(elementToMove);
//     }

//     if (
//       this.smallHeap.size() - this.largeHeap.size() === 1 &&
//       this.largeHeap.size() !== 0
//     ) {
//       const elementToPossiblyMove = this.smallHeap.front();
//       if (elementToPossiblyMove >= this.largeHeap.front()) {
//         this.largeHeap.enqueue(this.smallHeap.dequeue());
//       }
//     }
//   }

//   findMedian() {
//     if (this.smallHeap.size() > this.largeHeap.size())
//       return this.smallHeap.front();
//     if (this.smallHeap.size() < this.largeHeap.size())
//       return this.largeHeap.front();

//     return (this.smallHeap.front() + this.largeHeap.front()) / 2;
//   }
// }

// function medianSlidingWindow(nums, k) {
//   let res = [];

//   for (let i = 0; i <= nums.length - k; i++) {
//     const newHeap = new MedianFinder();
//     for (let j = i; j < i + k; j++) {
//       newHeap.addNum(nums[j]);
//     }

//     res.push(newHeap.findMedian());
//   }

//   return res;
// }

// console.log(medianSlidingWindow(nums, k));
// console.log(medianSlidingWindow(nums1, k1));

// -----  -----
// ----- LeetCode 135. Candy -----
// -----  -----

// const ratings2 = [60, 80, 100, 100, 100, 100, 100];
// const ratings = [1, 0, 2]; //5 [2,1,2]
// const ratings3 = [1, 2, 2]; //4 [1,2,1]
// const ratings4 = [1, 3, 2, 2, 1]; //7 [1,2,1,2,1]
// const ratings5 = [2, 3, 4, 3, 2, 1]; // 13 [1,2,4,3,2,1]

// function candy(ratings) {
//   let res = new Array(ratings.length);
//   const minEl = Math.min(...ratings);
//   const el = ratings.indexOf(minEl);

//   //As every kid should have at least one candy, absolute min will have a child with the smallest rating
//   res[el] = 1;

//   //Go left from min rating child
//   if (el > 0) {
//     for (let i = el - 1; i >= 0; i--) {
//       if (ratings[i] > ratings[i + 1]) {
//         res[i] = res[i + 1] + 1;
//       }
//       if (ratings[i] === ratings[i + 1]) {
//         res[i] = 1;
//       }

//       if (ratings[i] < ratings[i + 1]) {
//         res[i] = res[i + 1] === 1 ? 0 : 1;

//         //If we face with a situation when  someone has 0 candies, fix it buy going opposite and checking if we need to increase N of candies
//         if (res[i] === 0) {
//           res[i] = 1;
//           //go other -> direction to add candies if needed
//           let goLeft = true;
//           let start = i;
//           while (goLeft && start + 1 < ratings.length - 1) {
//             if (
//               ratings[start + 1] > ratings[start] &&
//               res[start + 1] <= res[start]
//             ) {
//               res[start + 1] = res[start] + 1;
//               start++;
//             } else goLeft = false;
//           }
//         }
//       }
//     }
//   }

//   //Go right from min rating child
//   if (el < ratings.length - 1) {
//     for (let i = el + 1; i < ratings.length; i++) {
//       if (ratings[i] > ratings[i - 1]) {
//         res[i] = res[i - 1] + 1;
//       }
//       if (ratings[i] === ratings[i - 1]) {
//         res[i] = 1;
//       }
//       if (ratings[i] < ratings[i - 1]) {
//         res[i] = res[i - 1] === 1 ? 0 : 1;

//         //If we face with a situation when when someone has 0 candies, fix it buy going opposite and checking if we need to increase N of candies
//         if (res[i] === 0) {
//           res[i] = 1;
//           //go other <- direction to add candies if needed
//           let goLeft = true;
//           let start = i;
//           while (goLeft && start - 1 >= 0) {
//             if (
//               ratings[start - 1] > ratings[start] &&
//               res[start - 1] <= res[start]
//             ) {
//               res[start - 1] = res[start] + 1;
//               start--;
//             } else goLeft = false;
//           }
//         }
//       }
//     }
//   }

//   console.log(res);
//   return res.reduce((acc, cur) => acc + cur, 0);
// }

// console.log(candy(ratings));
// console.log(candy(ratings2));
// console.log(candy(ratings3));
// console.log(candy(ratings4));
// console.log(candy(ratings5));

// -----  -----
// ----- NeetCode, LeetCode 90. Subsets II -----
// -----  -----

// const nums = [1, 2, 1]; //expected [[],[1],[1,2],[1,1],[1,2,1],[2]]
// const nums1 = [7, 7]; //expected [[],[7], [7,7]]

// function subsetsWithDup(nums) {
//   nums.sort((a, b) => a - b);

//   let curSet = [];
//   let subsets = [];

//   helperNoDup(0, nums, curSet, subsets);

//   return subsets;
// }

// function helperNoDup(i, nums, curSet, subsets) {
//   if (i >= nums.length) {
//     subsets.push([...curSet]);
//     return;
//   }
//   // decision to include nums[i]
//   curSet.push(nums[i]);
//   helperNoDup(i + 1, nums, curSet, subsets);
//   curSet.pop();
//   // decision NOT to include nums[i]
//   while (i + 1 < nums.length && nums[i] == nums[i + 1]) {
//     i++;
//   }
//   helperNoDup(i + 1, nums, curSet, subsets);
// }

// console.log(subsetsWithDup(nums));

// -----  -----
// ----- LeetCode 77. Combinations -----
// -----  -----

// const n = 5;
// const k = 3;

// function combine(n, k) {
//   let res = [];

//   createCombination(1, n, k, res, []);

//   return res;
// }

// function createCombination(start, n, k, res, curComb) {
//   if (curComb.length === k) {
//     res.push([...curComb]);
//     return;
//   }

//   if (start > n) return;

//   for (let i = start; i <= n; i++) {
//     curComb.push(i);
//     createCombination(i + 1, n, k, res, curComb);
//     curComb.pop(); //IMP: remove the last element to continue creating new sets
//   }
// }

//console.log(combine(n, k));

// -----  -----
// ----- Neetcode, LeetCode 39. Combination Sum -----
// -----  -----

// //test case 1
// const candidates = [2, 3, 6, 7];
// const target = 7; //Output: [[2,2,3],[7]]

// //test case 2
// const candidates2 = [2];
// const target2 = 1; //Output: [[2,2,3],[7]]

// const candidates3 = [2, 3, 5];
// const target3 = 8;

// function combinationSum(candidates, target) {
//   let res = [];

//   createSumCombination(0, candidates, target, res, [], 0);

//   return res;
// }

// function createSumCombination(
//   i_start,
//   candidates,
//   target,
//   res,
//   curComb,
//   curSum
// ) {
//   if (curSum === target) {
//     res.push([...curComb]);
//     return;
//   }

//   if (i_start >= candidates.length || curSum > target) return;

//   for (let i = i_start; i < candidates.length; i++) {
//     curSum += candidates[i];
//     curComb.push(candidates[i]);
//     createSumCombination(i, candidates, target, res, curComb, curSum);
//     curSum -= candidates[i];
//     curComb.pop();
//   }
// }

// console.log(combinationSum(candidates, target));
// console.log(combinationSum(candidates2, target2));
// console.log(combinationSum(candidates3, target3));

// -----  -----
// ----- Neetcode, LeetCode 17. Letter Combinations of a Phone Number -----
// -----  -----

// const digits = ""; //Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// const letters = [
//   [],
//   [],
//   ["a", "b", "c"],
//   ["d", "e", "f"],
//   ["g", "h", "i"],
//   ["j", "k", "l"],
//   ["m", "n", "o"],
//   ["p", "q", "r", "s"],
//   ["t", "u", "v"],
//   ["w", "x", "y", "z"],
// ];

// function letterCombinations(digits) {
//   let res = [];

//   if (digits.length === 0) return res;

//   createSubLetterSets(0, digits, res, "");

//   return res;
// }

// function createSubLetterSets(i_start, digits, res, curSet) {
//   if (i_start >= digits.length) {
//     res.push(curSet);
//     return;
//   }

//   const curChars = letters[digits[i_start]];

//   for (let i = 0; i < curChars.length; i++) {
//     curSet = curSet.concat("", curChars[i]);

//     createSubLetterSets(i_start + 1, digits, res, curSet);
//     curSet.slice(0, -1);
//     curSet = curSet.slice(0, -1);
//   }
// }

// console.log(letterCombinations(digits));

// -----  -----
// ----- Neetcode, LeetCode 17. Letter Combinations of a Phone Number -----
// -----  -----

// const nums = [1, 2, 3];

// function permute(nums) {
//   let perms = [];
//   perms.push([]);

//   for (let n of nums) {
//     let nextPerms = [];
//     for (let p of perms) {
//       for (let i = 0; i < p.length + 1; i++) {
//         let pCopy = [...p];
//         pCopy.concat(p);
//         pCopy.splice(i, 0, n);
//         nextPerms.push(pCopy);
//       }
//     }
//     perms = nextPerms;
//   }
//   return perms;
// }

// console.log(permute(nums));

// -----  -----
// ----- LeetCode 47. Permutations II -----
// -----  -----

// const nums1 = [1, 1, 2];
// const nums = [-1, 2, -1];

// function permuteUnique(nums) {
//   let perms = [];
//   perms.push([]);

//   for (let n of nums) {
//     let nextPerms = [];
//     for (let p of perms) {
//       for (let i = 0; i < p.length + 1; i++) {
//         let pCopy = [...p];
//         pCopy.concat(p);
//         pCopy.splice(i, 0, n);
//         nextPerms.push(pCopy);
//       }
//     }
//     perms = nextPerms;
//   }

//   //Remove extra repetitions
//   let stringPerm = [];
//   perms.forEach((el) => {
//     stringPerm.push(el.join(""));
//   });
//   const newSet = new Set(stringPerm);

//   let res = [];
//   newSet.forEach((uniqueSet) => {
//     res.push([...uniqueSet.match(/-?\d/g).map(Number)]);
//   });

//   return res;
// }

// console.log(permuteUnique(nums));

// --------- GRAPHS --------

// -----  -----
// ----- Neetcode, LeetCode 743. Network Delay Time-----
// -----  -----

// //test case 1
// const times = [
//   [1, 2, 1],
//   [2, 3, 1],
//   [1, 4, 4],
//   [3, 4, 1],
// ];
// const n = 4;
// const k = 1;

// //test case 2
// const times1 = [
//   [1, 2, 1],
//   [2, 3, 1],
// ];
// const n1 = 3;
// const k1 = 2;

// //test case 3
// const times2 = [
//   [2, 1, 1],
//   [2, 3, 1],
//   [3, 4, 1],
// ];
// const n2 = 4;
// const k2 = 2;

// //test case 4
// const times3 = [[1, 2, 1]];
// const n3 = 2;
// const k3 = 1;

// //test case 5
// const times4 = [
//   [1, 2, 1],
//   [2, 1, 3],
// ];
// const n4 = 2;
// const k4 = 2;

// //test case 5
// const times5 = [
//   [1, 2, 1],
//   [2, 3, 7],
//   [1, 3, 4],
//   [2, 1, 2],
// ];
// const n5 = 4;
// const k5 = 1;

// function networkDelayTime(times, n, k) {
//   //Step 1 create a a graph
//   let graph = new Map();

//   //Creating a fresh list of nodes with empty list of neighbours
//   for (let i = 1; i <= n; i++) {
//     graph.set(i, []);
//   }

//   //filling neighbours information
//   times.forEach((timeSet) => {
//     graph.set(timeSet[0], [
//       ...graph.get(timeSet[0]),
//       { nextNode: timeSet[1], time: timeSet[2] },
//     ]);
//   });

//   //Step 2. Fill time table and min time heap until we can
//   let timeToReach = new Array(n).fill(-1);
//   timeToReach[k - 1] = 0; //To reach the initial node we need 0 time;
//   // let minTimeHeap = new MinPriorityQueue({ priority: (elem) => elem.time });
//   let minTimeHeap = new MinPriorityQueue((elem) => elem.time);

//   //Added a first set to go
//   graph.get(k).forEach((neigh) => {
//     minTimeHeap.enqueue({ node: neigh.nextNode, time: neigh.time });
//   });

//   //While heap is not empty, keep adding to it, calculating time and filling time table
//   while (minTimeHeap.size() > 0) {
//     const curNode = minTimeHeap.dequeue();
//     if (timeToReach[curNode.node - 1] === -1) {
//       //-1 means not filled, we need to add times
//       timeToReach[curNode.node - 1] = curNode.time;
//     }

//     //TODO: teh bug is here
//     if (timeToReach.includes(-1)) {
//       graph.get(curNode.node).forEach((neigh) => {
//         if (timeToReach[neigh.nextNode - 1] === -1)
//           minTimeHeap.enqueue({
//             node: neigh.nextNode,
//             time: curNode.time + neigh.time,
//           });
//       });
//     }
//   }

//   //Step 3. If all time table is filled, return sum time to go through all nodes. Otherwise some nodes remain unvisited, return 0
//   if (!timeToReach.includes(-1)) return Math.max(...timeToReach);

//   return -1;
// }

// console.log(networkDelayTime(times, n, k)); //3
// console.log(networkDelayTime(times1, n1, k1)); //-1
// console.log(networkDelayTime(times2, n2, k2)); //2
// console.log(networkDelayTime(times3, n3, k3)); //1
// console.log(networkDelayTime(times4, n4, k4)); //3
// console.log(networkDelayTime(times5, n5, k5)); //-1

// -----  -----
// ----- Neetcode, LeetCode 778. Swim in Rising Water -----
// -----  -----

// //NOTE: this algorithm works on Neetcode but fails with grid5 on LeetCode. Difficult to debug because of big data. Leaving like this for now. Will return
// const grid = [
//   [0, 2],
//   [1, 3],
// ]; //expected 3

// const grid1 = [
//   [0, 1, 2, 10],
//   [9, 14, 4, 13],
//   [12, 3, 8, 15],
//   [11, 5, 7, 6],
// ]; //expected 8

// const grid2 = [
//   [0, 1, 2, 3, 4],
//   [24, 23, 22, 21, 5],
//   [12, 13, 14, 15, 16],
//   [11, 17, 18, 19, 20],
//   [10, 9, 8, 7, 6],
// ]; // expected 16

// const grid3 = [[0, 2, 4, 6, 2]]; //expected 6
// const grid4 = [[[0], [2], [4], [6], [2]]]; //expected 6

// //expected 266
// const grid5 = [
//   [
//     105, 209, 171, 91, 64, 394, 279, 11, 45, 84, 207, 321, 216, 197, 381, 377,
//     78, 19, 203, 198,
//   ],
//   [
//     141, 10, 335, 170, 265, 104, 338, 40, 397, 376, 346, 356, 212, 154, 280,
//     177, 247, 90, 87, 360,
//   ],
//   [
//     99, 59, 242, 149, 344, 172, 276, 230, 133, 193, 284, 345, 46, 363, 30, 142,
//     295, 70, 224, 200,
//   ],
//   [
//     251, 88, 379, 72, 319, 272, 243, 165, 180, 182, 387, 264, 23, 67, 137, 342,
//     125, 139, 144, 367,
//   ],
//   [
//     94, 211, 151, 37, 290, 112, 343, 157, 300, 271, 260, 373, 369, 294, 289, 57,
//     44, 12, 20, 340,
//   ],
//   [
//     220, 368, 186, 277, 181, 187, 273, 214, 315, 337, 328, 18, 231, 223, 331,
//     75, 275, 96, 135, 150,
//   ],
//   [
//     202, 74, 27, 184, 399, 341, 49, 62, 261, 86, 314, 383, 302, 257, 61, 148,
//     268, 120, 36, 25,
//   ],
//   [
//     15, 253, 285, 185, 226, 146, 126, 122, 83, 361, 110, 234, 183, 239, 52, 190,
//     152, 81, 136, 188,
//   ],
//   [
//     39, 199, 358, 26, 301, 116, 32, 386, 29, 138, 393, 159, 102, 140, 370, 227,
//     282, 111, 5, 33,
//   ],
//   [
//     189, 35, 132, 54, 210, 235, 28, 353, 281, 127, 318, 58, 100, 286, 384, 24,
//     307, 252, 80, 103,
//   ],
//   [
//     244, 176, 124, 79, 161, 355, 218, 398, 392, 380, 225, 121, 178, 352, 329,
//     322, 167, 51, 313, 85,
//   ],
//   [
//     107, 118, 351, 287, 324, 283, 48, 320, 82, 364, 357, 16, 219, 330, 89, 143,
//     241, 262, 71, 191,
//   ],
//   [
//     95, 97, 3, 7, 270, 249, 213, 339, 362, 298, 4, 258, 248, 390, 299, 306, 156,
//     164, 109, 229,
//   ],
//   [
//     221, 9, 228, 160, 274, 263, 374, 147, 98, 63, 13, 41, 326, 396, 349, 372,
//     385, 317, 325, 266,
//   ],
//   [
//     53, 131, 173, 312, 174, 114, 250, 119, 163, 22, 246, 92, 278, 365, 292, 215,
//     14, 304, 204, 73,
//   ],
//   [
//     233, 323, 366, 130, 378, 305, 311, 93, 134, 217, 297, 327, 232, 194, 240, 1,
//     208, 6, 310, 47,
//   ],
//   [
//     69, 101, 332, 195, 254, 236, 50, 166, 56, 168, 267, 17, 359, 347, 65, 316,
//     238, 296, 348, 222,
//   ],
//   [
//     76, 123, 129, 293, 391, 2, 245, 108, 303, 38, 66, 55, 43, 256, 162, 60, 179,
//     77, 336, 21,
//   ],
//   [
//     196, 388, 333, 395, 42, 382, 291, 237, 288, 375, 128, 145, 192, 158, 350,
//     259, 206, 34, 334, 255,
//   ],
//   [
//     201, 175, 153, 68, 205, 155, 115, 269, 389, 169, 371, 308, 117, 31, 354, 8,
//     113, 309, 106, 0,
//   ],
// ];

// function swimInWater(grid) {
//   if (grid.length === 1) return Math.max(...grid[0]);
//   if (grid[0].length === 1) return Math.max(...grid.flat());

//   //Step 1 create a graph
//   let graph = new Map();
//   let swimMap = new Map();

//   //Map to set nodes numbers based on i, j
//   let nodes = new Array(grid.length)
//     .fill()
//     .map(() => new Array(grid[0].length));
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       nodes[i][j] = i * 10 + j;
//     }
//   }

//   //Creating a graph with swim to neighbours information
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       let curElNeigh = [];

//       if (i < grid.length - 1 && i > 0) {
//         curElNeigh.push([nodes[i + 1][j], grid[i + 1][j]]);
//         curElNeigh.push([nodes[i - 1][j], grid[i - 1][j]]);
//       }
//       if (i === 0) curElNeigh.push([nodes[i + 1][j], grid[i + 1][j]]);
//       if (i === grid.length - 1)
//         curElNeigh.push([nodes[i - 1][j], grid[i - 1][j]]);

//       if (j > 0 && j < grid[0].length - 1) {
//         curElNeigh.push([nodes[i][j - 1], grid[i][j - 1]]);
//         curElNeigh.push([nodes[i][j + 1], grid[i][j + 1]]);
//       }

//       if (j === 0) curElNeigh.push([nodes[i][j + 1], grid[i][j + 1]]);
//       if (j === grid[0].length - 1)
//         curElNeigh.push([nodes[i][j - 1], grid[i][j - 1]]);

//       graph.set(nodes[i][j], curElNeigh);
//       swimMap.set(nodes[i][j], -1);
//     }
//   }

//   //Step 2. Fill time table and min time heap until we can

//   swimMap.set(0, grid[0][0]); //time to start at position 0
//   // let minTimeHeap = new MinPriorityQueue({ priority: (elem) => elem[1] });
//   let minTimeHeap = new MinPriorityQueue((elem) => elem[1]);

//   //Added a first set to go
//   graph.get(0).forEach((initNeigh) => {
//     minTimeHeap.enqueue([initNeigh[0], initNeigh[1]]);
//   });

//   //While the last element is not reached, keep swimming
//   while (swimMap.get(nodes[grid.length - 1][grid[0].length - 1]) === -1) {
//     const curNode = minTimeHeap.dequeue();

//     //if we haven't swam there yet, mark it and add all neighbours
//     if (swimMap.get(curNode[0]) === -1) {
//       //-1 means not filled, we need to add times
//       swimMap.set(curNode[0], curNode[1]);

//       //get all new neighbours and add them to the MinTime heap if there are not there yet
//       const newNeigh = graph.get(curNode[0]);

//       newNeigh.forEach((neighEl) => {
//         minTimeHeap.enqueue(neighEl);

//         //if one of the neighbours is the last cell, we can add it to the final time straight away
//         if (
//           neighEl[0][0] === grid.length - 1 &&
//           neighEl[0][1] === grid[0].length - 1
//         )
//           swimMap.set(neighEl[0], neighEl[1]);
//       });
//     }
//   }
//   console.log(swimMap);

//   //Step 3.  get biggest time from the swim path and return it
//   return Math.max(...Array.from(swimMap.values()));
// }

// // console.log(swimInWater(grid));
// // console.log(swimInWater(grid1));
// // console.log(swimInWater(grid2));
// // console.log(swimInWater(grid3));
// // console.log(swimInWater(grid4));
// console.log(swimInWater(grid5));

// -----  -----
// ----- Neetcode, LeetCode 1514. Path with Maximum Probability -----
// -----  -----

//expected 0.25000
// const n = 3;
// const edges = [
//   [0, 1],
//   [1, 2],
//   [0, 2],
// ];
// const succProb = [0.5, 0.5, 0.2];
// const start = 0;
// const end = 2;

//expected 0.3
// const n = 3;
// const edges = [
//   [0, 1],
//   [1, 2],
//   [0, 2],
// ];
// const succProb = [0.5, 0.5, 0.3];
// const start = 0;
// const end = 2;

//expected 0
// const n = 3;
// const edges = [[0, 1]];
// const succProb = [0.5];
// const start = 0;
// const end = 2;

//expected
const n = 5;
const edges = [
  [1, 4],
  [2, 4],
  [0, 4],
  [0, 3],
  [0, 2],
  [2, 3],
];
const succProb = [0.37, 0.17, 0.93, 0.23, 0.39, 0.04];
const start = 3;
const end = 4;

function maxProbability(n, edges, succProb, start, end) {
  //Step 1 create a graph
  let graph = new Array(n).fill().map(() => []);
  let probMap = new Array(n).fill(-1);

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push([edges[i][1], succProb[i]]);
    graph[edges[i][1]].push([edges[i][0], succProb[i]]);
  }

  //Step 2. Fill probability table
  probMap[start] = 1; //To reach the initial node is 1 probability;
  // let maxProbHeap = new MaxPriorityQueue({ priority: (elem) => elem.neigh[1] });
  let maxProbHeap = new MaxPriorityQueue((elem) => elem[1]);

  //Added a first set to go
  graph[start].forEach((neigh) => {
    maxProbHeap.enqueue(neigh);
  });

  //While heap is not empty, keep adding to it, calculating probability and filling probMap
  let runCalcluation = maxProbHeap.size() > 0;
  while (runCalcluation) {
    const curNode = maxProbHeap.dequeue();

    if (probMap[curNode[0]] === -1) {
      //-1 means not passed yet, we need to add probability
      probMap[curNode[0]] = curNode[1];
    }

    const curNeigh = graph[curNode[0]];

    curNeigh.forEach((elNeigh) => {
      if (probMap[elNeigh[0]] === -1) {
        maxProbHeap.enqueue([elNeigh[0], curNode[1] * elNeigh[1]]);
      }
    });

    if (maxProbHeap.size() === 0 || probMap[end] !== -1) runCalcluation = false;
  }

  return probMap[end] === -1 ? 0 : probMap[end];
}

console.log(maxProbability(n, edges, succProb, start, end));
