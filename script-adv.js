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

const accounts0 = [
  ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
  ["John", "johnsmith@mail.com", "john00@mail.com"],
  ["Mary", "mary@mail.com"],
  ["John", "johnnybravo@mail.com"],
];

const accounts = [
  ["David", "David0@m.co", "David1@m.co"],
  ["David", "David3@m.co", "David4@m.co"],
  ["David", "David4@m.co", "David5@m.co"],
  ["David", "David2@m.co", "David3@m.co"],
  ["David", "David1@m.co", "David2@m.co"],
];

class UnionAccounts {
  constructor(edges) {
    this.parents = new Map(); //e.g "David0@mail.com": "David"
    this.emails = new Map(); //e.g "David0@mail.com": "David0@mail.com", "David1@mail.com": "David0@mail.com"
  }

  findExistingAccount(account) {
    for (let e = 1; e < account.length; e++) {
      if (this.emails.has(account[e])) return this.emails.get(account[e]);
    }
    return null;
  }

  createRecord(account) {}

  addAccount(account) {
    const curOwner = this.findExistingAccount(account);

    //If there is no owner yet, add all emails
    if (!curOwner) {
      this.parents.set(account[1], account[0]);
      for (let e = 1; e < account.length; e++) {
        this.emails.set(account[e], account[1]);
      }
    }
    //if there is already at least one owner
    else {
      //do merging of a new account and possible existing ones
      for (let e = 1; e < account.length; e++) {
        if (!this.emails.has(account[e])) {
          this.emails.set(account[e], curOwner);
        } else {
          const questionOwnerEmail = this.emails.get(account[e]);
          if (questionOwnerEmail !== curOwner) {
            //rewrite all owners with that email to a new curOwner email
            this.parents.delete(questionOwnerEmail);
            for (const [key, value] of this.emails.entries()) {
              if (value === questionOwnerEmail) this.emails.set(key, curOwner);
            }
          }
        }
      }
    }
  }
}

function accountsMerge(accounts) {
  const unionAcc = new UnionAccounts(accounts);
  let res = [];

  accounts.forEach((account) => {
    unionAcc.addAccount(account);
  });

  console.log(unionAcc);

  for (const [keyOwner, valueOwner] of unionAcc.parents.entries()) {
    let emails = [];
    for (const [keyEmail, valueEmail] of unionAcc.emails.entries()) {
      if (valueEmail === keyOwner) emails.push(keyEmail);
    }
    const sortedEmails = emails.sort();
    res.push([valueOwner, ...sortedEmails]);
  }

  return res;
}

console.log(accountsMerge(accounts0));
