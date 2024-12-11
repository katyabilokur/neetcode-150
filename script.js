import { Heap } from "heap-js";

//-----  -----
//----- Stack: Valid Parentheses -----
//-----  -----

// class Solution {
//   isValid(s) {
//     if (s.length % 2 !== 0) return false;
//     if (s.length === 0) return true;

//     const arr = s.split("");
//     let openedStack = [];

//     const pairingChars = new Map();
//     pairingChars.set("{", "}");
//     pairingChars.set("(", ")");
//     pairingChars.set("[", "]");

//     for (let i = 0; i < arr.length; i++) {
//       if (pairingChars.has(arr[i])) {
//         openedStack.push(arr[i]);
//         continue;
//       } else {
//         if (arr[i] === pairingChars.get(openedStack[openedStack.length - 1])) {
//           openedStack.pop();
//           continue;
//         } else return false;
//       }
//     }

//     return openedStack.length === 0;
//   }
// }

//-----  -----
//----- Linked List: Reverse a Linked List -----
//-----  -----

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// class Solution {
//   reverseList(head) {
//     let [prev, cur, next] = [null, head, null];

//     while (cur) {
//       next = cur.next;
//       cur.next = prev;
//      //cur.prev = cur.next; //NOTE: add this line to the task for reversing double linked list

//       prev = cur;
//       cur = next;
//     }

//     return prev;
//   }
// }

//-----  -----
//----- Linked List: Merge Two Sorted Linked Lists -----
//-----  -----

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// class Solution {
//   // /**
//   //  * @param {ListNode} list1
//   //  * @param {ListNode} list2
//   //  * @return {ListNode}
//   //  */
//   mergeTwoLists(list1, list2) {
//     const initialDummy = new ListNode(0, null);

//     //defining a new list with a new Head to start
//     let cur = initialDummy;

//     while (list1 && list2) {
//       if (list1.val <= list2.val) {
//         cur.next = list1;
//         list1 = list1.next;
//       } else {
//         cur.next = list2;
//         list2 = list2.next;
//       }

//       cur = cur.next;
//     }

//     if (!list1) {
//       cur.next = list2;
//     }

//     if (!list2) {
//       cur.next = list1;
//     }

//     return initialDummy.next;
//   }
// }

//-----  -----
//----- LeetCode, Queue: 1700. Number of Students Unable to Eat Lunch -----
//-----  -----

// const countStudents = function (students, sandwiches) {
//   // class ListNode {
//   //   constructor(val = 0, next = null) {
//   //     this.val = val;
//   //     this.next = next;
//   //   }
//   // }

//   let triesToGo = students.length;

//   while (triesToGo !== 0) {
//     if (students[0] === sandwiches[0]) {
//       sandwiches.shift();
//       students.shift();
//       triesToGo = students.length;
//     } else {
//       students.push(students[0]);
//       students.shift();
//       triesToGo--;
//     }
//   }

//   return students.length;
// };

// const students = [1, 1, 0, 0];
// const sandwiches = [0, 1, 0, 1];

// const students1 = [1, 1, 1, 0, 0, 1];
// const sandwiches1 = [1, 0, 0, 0, 1, 1];

// console.log(countStudents(students1, sandwiches1));

//-----  -----
//----- NeetCode: Climb the stairs -----
//-----  -----

// function climbStairs(n) {
//   let sequence = [0, 1, 2];
//   if (n <= 2) return sequence[n];

//   for (let i = 3; i <= n; i++) {
//     sequence.push(sequence[i - 2] + sequence[i - 1]);
//   }

//   return sequence[sequence.length - 1];
// }

// console.log(climbStairs(5));

//-----  -----
//----- NeetCode: Merge K Sorted Linked Lists -----
//-----  -----

////Input: lists = [[1,2,4],[1,3,5],[3,6]]
// class ListNode {
//   constructor(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

// // const list13 = new ListNode(4, null);
// // const list12 = new ListNode(2, list13);
// // const list11 = new ListNode(1, list12);

// // const list23 = new ListNode(5, null);
// // const list22 = new ListNode(3, list23);
// // const list21 = new ListNode(1, list22);

// // const list32 = new ListNode(6, null);
// // const list31 = new ListNode(3, list32);
// const list13 = new ListNode(1, null);
// const list12 = new ListNode(-2, list13);
// const list11 = new ListNode(-4, list12);

// // const list23 = new ListNode(8, null);
// // const list22 = new ListNode(3, list23);
// // const list21 = new ListNode(1, list22);
// const list21 = new ListNode(-7, null);
// const list31 = new ListNode(-8, null);
// const list41 = new ListNode(-7, null);

// // const list32 = new ListNode(6, null);
// // const list31 = new ListNode(3, list32);

// const lists = [list11, list21, list31, list41];

// function mergeKLists(lists) {
//   if (!lists || lists.length === 0) return null;
//   if (lists.length === 1) return lists[0];
//   let n = 1;
//   let newHead = lists[0];

//   while (n < lists.length) {
//     let cur0 = newHead;

//     let prev = null;
//     let cur1 = lists[n];

//     while (cur1 && cur0.next !== null) {
//       if (cur1.val < cur0.val) {
//         const temp = cur1;
//         cur1 = cur1.next;
//         temp.next = cur0;

//         if (prev) {
//           prev.next = temp;
//         }
//         if (!prev) {
//           newHead = temp;
//         }

//         prev = temp;
//       } else {
//         prev = cur0;
//         cur0 = cur0.next;
//       }
//     }

//     if (cur0.next === null && cur1) {
//       while (cur1 && cur1.val < cur0.val) {
//         const temp = cur1;
//         cur1 = cur1.next;
//         temp.next = cur0;

//         if (prev) {
//           prev.next = temp;
//         }
//         if (!prev) {
//           newHead = temp;
//         }

//         prev = temp;
//       }

//       if (cur1 && cur1.val >= cur0.val) {
//         cur0.next = cur1;
//       }
//     }

//     n++;
//   }

//   return newHead;
// }

// console.log(mergeKLists(lists));

//-----  -----
//----- LeetCode: Sort Colours -----
//-----  -----

// const nums = [2, 0, 2, 1, 1, 0];
// const sortColors = function (nums) {
//   let arr = new Array(3).fill(0);
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     arr[nums[i]]++;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     result.push(...new Array(arr[i]).fill(i));
//   }

//   for (let index = 0; index < nums.length; index++) {
//     nums[index] = result[index];
//   }

//   return nums;
// };

// console.log(sortColors(nums));

//-----  -----
//----- NeetCode: Binary Search  -----
//-----  -----

// const nums = [-1, 0, 2, 4, 6, 8];
// const target = 1;
// function search(nums, target) {
//   let [left, right] = [0, nums.length - 1];

//   if (target < nums[0] || target > nums[nums.length - 1]) return -1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (target < nums[mid]) {
//       right = mid - 1;
//     } else if (target > nums[mid]) {
//       left = mid + 1;
//     } else if (target === nums[mid]) return mid;
//   }

//   return -1;
// }

// console.log(search(nums, target));

//-----  -----
//----- NeetCode: Search a 2D Matrix-----
//-----  -----

// const matrix = [
//   [1, 2, 4, 8],
//   [10, 11, 12, 13],
//   [14, 20, 30, 40],
// ];
// const target = 9;
// const matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50],
// ];
// const target = 11;

// const matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50],
// ];
// const target = 2;

// function searchMatrix(matrix, target) {
//   function binarySearch(nums, target) {
//     let [left, right] = [0, nums.length - 1];

//     if (target < nums[0] || target > nums[nums.length - 1]) return -1;

//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);

//       if (target < nums[mid]) {
//         right = mid - 1;
//       } else if (target > nums[mid]) {
//         left = mid + 1;
//       } else if (target === nums[mid]) return mid;
//     }

//     return -1;
//   }

//   function binaryRowSearch(nums, target) {
//     if (target >= nums[nums.length - 1]) return nums.length - 1;
//     if (target === nums[0]) return 0;

//     let [left, right] = [0, nums.length - 1];

//     while (right - left >= 0) {
//       let mid = Math.floor((left + right) / 2);

//       if (target < nums[mid] && target > nums[mid - 1]) {
//         return mid - 1;
//       } else if (target < nums[mid] && target < nums[mid - 1]) {
//         right = mid - 1;
//       } else if (target > nums[mid] && target > nums[mid + 1]) {
//         left = mid + 1;
//       } else if (target > nums[mid] && target < nums[mid + 1]) {
//         return mid;
//       } else if (target === nums[mid]) return mid;
//     }

//     return -1;
//   }

//   if (
//     matrix[0][0] > target ||
//     matrix[matrix.length - 1][matrix[0].length - 1] < target
//   )
//     return false;

//   if (
//     matrix[0][0] === target ||
//     target === matrix[matrix.length - 1][matrix[0].length - 1]
//   )
//     return true;

//   //1. Check what row needs to be searched
//   //1a. Compose a new array of first elements
//   let firstRowElements = [];

//   for (let i = 0; i <= matrix.length - 1; i++) {
//     firstRowElements.push(matrix[i][0]);
//   }

//   //1b. Find a row to look at
//   const row = binaryRowSearch(firstRowElements, target);

//   //2. Do Binary search to find a value in a row
//   const valueIndex = binarySearch(matrix[row], target);

//   const result = valueIndex === -1 ? false : true;

//   return result;
// }

// console.log(searchMatrix(matrix, target));

//-----  -----
//----- LeetCode: Guess Number Higher or Lower-----
//-----  -----

// function guess(n, secret) {
//   if (n > secret) {
//     return -1;
//   } else if (n < secret) {
//     return 1;
//   } else return 0;
// }

// function guessNumber(n) {
//   //NOTE: FOR DEBUGGING
//   // const secret = Math.floor(Math.random() * n);
//   // console.log(secret);

//   if (n === 1) return 1;

//   let [left, right] = [1, n];

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     //NOTE: FOR DEBUGGING
//     // const guessedNum = guess(mid, secret);
//     const guessedNum = guess(mid);

//     if (guessedNum < 0) {
//       right = mid - 1;
//     } else if (guessedNum > 0) {
//       left = mid + 1;
//     } else return mid;
//   }

//   return -1;
// }

// console.log(guessNumber(100));

//-----  -----
//----- LeetCode 278: First Bad Version-----
//-----  -----

// function isBadVersion(num, secretFirstBuild) {
//   const res = num >= secretFirstBuild;
//   return res;
// }

// function badBuild(n) {
//   // NOTE: FOR DEBUGGING
//   // const secretBuild = Math.floor(Math.random() * n);
//   // //const secretBuild = 7;
//   // console.log(secretBuild);

//   // NOTE: FOR DEBUGGING
//   // if (isBadVersion(1, secretBuild)) return 1;
//   if (isBadVersion(1)) return 1;

//   let [left, right] = [1, n];
//   let res = 0;

//   while (right - left >= 0) {
//     const mid = Math.floor((left + right) / 2);
//     //NOTE: FOR DEBUGGING
//     //const badMidBuild = isBadVersion(mid, secretBuild);
//     const badMidBuild = isBadVersion(mid);

//     if (badMidBuild) {
//       right = mid - 1;
//       res = mid;
//     } else {
//       left = mid + 1;
//     }
//   }

//   return res;
// }

// console.log(badBuild(100));

//-----  -----
//----- NeetCode: Eating Bananas-----
//-----  -----

// function minEatingSpeed(piles, h) {
//   function hoursToEat(k) {
//     let hours = 0;

//     piles.forEach((pile) => {
//       hours += Math.ceil(pile / k);
//     });

//     return hours;
//   }

//   let left = 1;
//   let right = Math.max(...piles);
//   let k = 1;

//   while (right - left >= 0) {
//     const mid = Math.floor((left + right) / 2);

//     const hours = hoursToEat(mid);

//     if (hours <= h) {
//       right = mid - 1;
//       k = mid;
//     } else {
//       left = mid + 1;
//     }
//   }

//   return k;
// }

// // const piles = [1, 4, 3, 2];
// // const h = 9;

// const piles = [25, 10, 23, 4];
// const h = 4;
// console.log(minEatingSpeed(piles, h));

//-----  -----
//----- LeetCode 700: Search in a Binary Search Tree-----
//-----  -----

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @param {number} val
//  * @return {TreeNode}
//  */
// var searchBST = function (root, val) {
//   if (root === null) return null;

//   if (root.val > val) {
//     return searchBST(root.left, val);
//   }
//   if (root.val < val) {
//     return searchBST(root.right, val);
//   } else return root;
// };

//-----  -----
//----- LeetCode 701: Insert into a Binary Search Tree-----
//-----  -----

// var insertIntoBST = function(root, val) {
//   if (root === null) return new TreeNode(val);

//   if (val > root.val) {
//       root.right = insertIntoBST(root.right, val)
//   } else if (val < root.val) {
//       root.left = insertIntoBST(root.left, val)
//   }
//   return root;
// };

//-----  -----
//----- LeetCode 450: Delete Node in a BST-----
//-----  -----

//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

//Test case 1
// const node2 = new TreeNode(2);
// const node4 = new TreeNode(4);
// const node7 = new TreeNode(7);
// const node3 = new TreeNode(3, node2, node4);
// const node6 = new TreeNode(6, null, node7);
// const node = new TreeNode(5, node3, node6);
// const key = 3;

//Test case 2
// const node40 = new TreeNode(40);
// const node60 = new TreeNode(60);
// const node80 = new TreeNode(80);
// const node30 = new TreeNode(30, null, node40);
// const node70 = new TreeNode(70, node60, node80);
// const node = new TreeNode(50, node30, node70);
// const key = 50;

//Test case 3
// const node1 = new TreeNode(1);
// const node = new TreeNode(2, node1, null);
// const key = 2;

// const deleteNode = function (root, key) {
//   if (!root) return root;

//   function minNode(node) {
//     let res = node;

//     while (res.left) {
//       res = res.left;
//     }
//     return res;
//   }

//   //1. Find a note to be deleted
//   if (key > root.val) {
//     root.right = deleteNode(root.right, key);
//   } else if (key < root.val) {
//     root.left = deleteNode(root.left, key);
//   } else {
//     //2. The note to delete has been found. Delete it
//     //2a. Removing a node that has 0 or 1 child. Chust replacing a reference.
//     if (root.left === null) {
//       return root.right;
//     } else if (root.right === null) {
//       return root.left;
//     } else {
//       //2b. If there are 2 child nodes, need to do replacement with the min node of the right sub-tree.
//       const minValNode = minNode(root.right);
//       console.log(minValNode);
//       root.val = minValNode.val;
//       root.right = deleteNode(root.right, minValNode.val);
//     }
//   }

//   return root;
// };

//console.log(deleteNode(node, key));

//-----  -----
//----- LeetCode 94: Binary Tree Inorder Traversal-----
//-----  -----

// function inorderTraversal(root) {
//   if (!root) return [];
//   let res = [];

//   res.push(...inorderTraversal(root.left));
//   res.push(root.val);
//   res.push(...inorderTraversal(root.right));

//   return res;
// }

// console.log(inorderTraversal(node));

//-----  -----
//----- NeetCode: Kth Smallest Integer in BST -----
//-----  -----

// function kthSmallest(root, k) {
//   function inorderTraversal(root) {
//     if (!root) return [];
//     let res = [];

//     res.push(...inorderTraversal(root.left));
//     res.push(root.val);
//     res.push(...inorderTraversal(root.right));

//     console.log(res);
//     return res;
//   }

//   return inorderTraversal(root)[k - 1];
// }

// console.log(kthSmallest(node, 1));

//-----  -----
//----- NeetCode: Binary Tree from Preorder and Inorder Traversal -----
//-----  -----

//Test case 1
// const preorder = [1, 2, 3, 4];
// const inorder = [2, 1, 3, 4];

//Test case 2
// const preorder = [50, 30, 40, 70, 60, 80];
// const inorder = [30, 40, 50, 60, 70, 80];

// function buildBTree(preorder, inorder) {
//   if (preorder.length === 0 || inorder.length === 0) return null;

//   const root = new TreeNode(preorder[0]);
//   const rootInd = inorder.indexOf(preorder[0]);

//   const leftInorde = inorder.slice(0, rootInd);
//   const rightInorder = inorder.slice(rootInd + 1);
//   const leftPreorder = preorder.slice(1, leftInorde.length + 1);
//   const rightPreorder = preorder.slice(-rightInorder.length);

//   root.left = buildBTree(leftPreorder, leftInorde);
//   root.right = buildBTree(rightPreorder, rightInorder);

//   return root;
// }

// console.log(buildBTree(preorder, inorder));

//-----  -----
//----- NeetCode: Level Order Traversal of Binary Tree -----
//-----  -----

// function levelOrder(root) {
//   let arr = [];
//   let queue = [];
//   let level = 0;

//   if (root) queue.push(root);

//   while (queue.length > 0) {
//     arr.push([]);
//     const currQueueLength = queue.length;

//     for (let i = 0; i < currQueueLength; i++) {
//       const curr = queue.shift();
//       arr[level].push(curr.val);

//       if (curr.left) queue.push(curr.left);
//       if (curr.right) queue.push(curr.right);
//     }

//     level++;
//   }

//   return arr;
// }

// console.log(levelOrder(node));

//-----  -----
//----- LeetCode 199: Binary Tree Right Side View -----
//-----  -----

// const rightSideView = function (root) {
//   let arr = [];
//   let queue = [];
//   let level = 0;

//   if (root) queue.push(root);

//   while (queue.length > 0) {
//     arr.push([]);
//     const currQueueLength = queue.length;

//     for (let i = 0; i < currQueueLength; i++) {
//       const curr = queue.shift();
//       arr[level].push(curr.val);

//       if (curr.left) queue.push(curr.left);
//       if (curr.right) queue.push(curr.right);
//     }

//     level++;
//   }

//   let res = [];
//   arr.forEach((el) => {
//     res.push(...el.slice(-1));
//   });

//   return res;
// };

// console.log(rightSideView(node));

//-----  -----
//----- LeetCode 112: Path Sum -----
//-----  -----

//Test case 1
const node40 = new TreeNode(40);
const node60 = new TreeNode(60);
const node80 = new TreeNode(80);
const node30 = new TreeNode(30, null, node40);
const node70 = new TreeNode(70, node60, node80);
const node = new TreeNode(50, node30, node70);

//Test case 2
// const node3 = new TreeNode(-3);
// const node = new TreeNode(-2, null, node3);

// const hasPathSum = function (root, targetSum) {
//   let sum = 0;
//   function hasPath(root, targetSum, sum) {
//     if (!root) return false;
//     sum += root.val;

//     if (!root.left && !root.right && sum === targetSum) return true;
//     if (!root.left && !root.right && sum !== targetSum) return false;

//     if (hasPath(root.left, targetSum, sum)) return true;
//     if (hasPath(root.right, targetSum, sum)) return true;

//     sum -= root.val;
//     return false;
//   }

//   return hasPath(root, targetSum, sum);
// };

// console.log(hasPathSum(node, 100));

//-----  -----
//----- NeetCode: Subsets -----
//-----  -----

// function subsets(nums) {
//   function createSubSets(nums, i, subset, res) {
//     if (i >= nums.length) {
//       res.push([...subset]);
//       return;
//     }

//     subset.push(nums[i]);
//     createSubSets(nums, i + 1, subset, res);
//     subset.pop();
//     createSubSets(nums, i + 1, subset, res);
//   }

//   let subset = [];
//   let res = [];
//   createSubSets(nums, 0, subset, res);

//   return res;
// }

// console.log(subsets([1, 2, 3]));

//-----  -----
//----- NeetCode, LeetCode 1046: Last Stone Weight -----
//-----  -----

// const { Heap } = require('heap-js');

// const stones = [2, 7, 4, 1, 8, 1];

// const lastStoneWeight = function (stones) {
//   let stoneHeap = new Heap(Heap.maxComparator);
//   stoneHeap.init(stones);

//   while (stoneHeap.size() > 1) {
//     const firstHeavy = stoneHeap.pop();
//     const secondHeavy = stoneHeap.pop();

//     if (firstHeavy !== secondHeavy) {
//       stoneHeap.push(firstHeavy - secondHeavy);
//     }
//   }
//   return stoneHeap.size() === 1 ? stoneHeap.peek() : 0;
// };

// console.log(lastStoneWeight(stones));

//SAME ONE USING @datastructures-js/priority-queue

// import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

// const stones = [2, 7, 4, 1, 8, 1];

// const lastStoneWeight = function (stones) {
//   let stoneHeap = new MaxPriorityQueue();
//   stones.forEach((stone) => {
//     stoneHeap.enqueue(stone);
//   });

//   while (stoneHeap.size() > 1) {
//     const firstHeavy = stoneHeap.dequeue();
//     const secondHeavy = stoneHeap.dequeue();

//     if (firstHeavy !== secondHeavy) {
//       stoneHeap.enqueue(firstHeavy - secondHeavy);
//     }
//   }
//   return stoneHeap.size() === 1 ? stoneHeap.front() : 0;
// };

// console.log(lastStoneWeight(stones));

//-----  -----
//----- NeetCode, LeetCode 1: Two Integer Sum -----
//-----  -----

//Test case 1
// const nums = [3, 4, 5, 6];
// const target = 7;

//Test case 2
// const nums = [5, 5];
// const target = 10;

// function twoSum(nums, target) {
//   const passedMap = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const complementValue = target - nums[i];
//     const mapValue = passedMap.get(complementValue);

//     if (mapValue !== null && mapValue !== undefined) return [mapValue, i];

//     passedMap.set(nums[i], i);
//   }

//   //Solution does not exist
//   return [-1, -1];
// }
// console.log(twoSum(nums, target));

//-----  -----
//----- NeetCode, LeetCode 146: LRU Cache -----
//-----  -----

// class LRUCache {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.usageQueue = [];
//     this.cache = new Map();
//   }
//   cacheExists(cacheVal) {
//     return cacheVal !== null && cacheVal !== undefined ? true : false;
//   }

//   updateUsageQueue(key) {
//     this.usageQueue = this.usageQueue.filter((el) => el !== key);
//     this.usageQueue.push(key);
//   }

//   get(key) {
//     const cacheValue = this.cache.get(key);

//     if (this.cacheExists(cacheValue)) {
//       this.updateUsageQueue(key);
//       return cacheValue;
//     }

//     return -1;
//   }

//   /**
//    * @param {number} key
//    * @param {number} value
//    * @return {void}
//    */
//   put(key, value) {
//     this.updateUsageQueue(key);

//     this.cache.set(key, value);

//     if (this.cache.size > this.capacity) {
//       const keyToRemove = this.usageQueue[0];

//       //Remove from cache
//       this.cache.delete(keyToRemove);

//       //Remove from traching cachUsage queue
//       this.usageQueue.shift();
//     }
//   }
// }

//Test case 1
//["LRUCache", [2], "put", [1, 10],  "get", [1], "put", [2, 20], "put", [3, 30], "get", [2], "get", [1]]
// const lRUCache = new LRUCache(2);
// lRUCache.put(1, 10); // cache: {1=10}
// console.log(lRUCache.get(1)); // return 10
// lRUCache.put(2, 20); // cache: {1=10, 2=20}
// lRUCache.put(3, 30); // cache: {2=20, 3=30}, key=1 was evicted
// console.log(lRUCache.get(2)); // returns 20
// console.log(lRUCache.get(1)); // return -1 (not found)

//Test case 2
//["LRUCache", [2], "put", [1, 1], "put", [2, 2], "get", [1], "put", [3, 3],
// "get", [2], "put", [4, 4], "get", [1], "get", [3], "get", [4]]
//EXPECTED: [null,null,null,1,null,-1,null,-1,3,4]
//my [null,null,null,1,null,2,null,-1,3,4]
// const lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache: {1=1}
// lRUCache.put(2, 2); // cache: {1=1, 2=2}
// console.log(lRUCache.get(1)); // return 1
// lRUCache.put(3, 3); // cache: {2=2, 3=3}
// console.log(lRUCache.get(2)); // return 2
// lRUCache.put(4, 4); // cache: {2=2, 4=4}
// console.log(lRUCache.get(1)); // return -1
// console.log(lRUCache.get(3)); // returns -1
// console.log(lRUCache.get(4)); // return 4

//Test case 3
//["LRUCache", [3], "put", [1, 1], "put", [2, 2], "put", [3, 3], "get", [1],
// "get", [2], "get", [4], "put", [4, 4], "get", [1], "get", [2], "get", [3],
//"get", [4], "get", [2], "put", [1, 8], "put", [3, 7], "get", [1], "get", [2],
// "get", [3], "get", [4], "get", [5], "get", [2], "get", [3], "get", [4],
// || "put", [1,9], "put", [6,6], "get", [1], "get", [2], "get", [3], "get", [4],
//"get", [5], "get", [6]]

//EXPECTED
//[null,null,null,null,1,2,-1,null,1,2,-1,4,2,null,null,8,2,7,-1,-1,2,7,-1,
//null,null,9,-1,7,-1,-1,6]
// const lRUCache = new LRUCache(3);
// lRUCache.put(1, 1); // cache: {1=1}
// lRUCache.put(2, 2); // cache: {1=1, 2=2}
// lRUCache.put(3, 3); // cache: {1=1, 2=2, 3=3}
// console.log(lRUCache.get(1)); // return 1
// console.log(lRUCache.get(2)); // return 2
// console.log(lRUCache.get(4)); // return -1
// lRUCache.put(4, 4); // cache: {1=1, 2=2, 4=4}
// console.log(lRUCache.get(1)); // return 1
// console.log(lRUCache.get(2)); // return 2
// console.log(lRUCache.get(3)); // return -1
// console.log(lRUCache.get(4)); // return 4
// console.log(lRUCache.get(2)); // return 2
// lRUCache.put(1, 8); // cache: {1=8, 2=2, 4=4}
// lRUCache.put(3, 7); // cache: {1=8, 2=2, 3=7}
// console.log(lRUCache.get(1)); // return 8
// console.log(lRUCache.get(2)); // return 2
// console.log(lRUCache.get(3)); // return 7
// console.log(lRUCache.get(4)); // return -1
// console.log(lRUCache.get(5)); // return -1
// console.log(lRUCache.get(2)); // return 2
// console.log(lRUCache.get(3)); // return 7
// console.log(lRUCache.get(4)); // return -1

//-----  -----
//----- NeetCode, LeetCode 973: K Closest Points to Origin -----
//-----  -----

// import { MinPriorityQueue } from "@datastructures-js/priority-queue";

// const points = [
//   [0, 2],
//   [2, 0],
//   [2, 2],
// ];
// const k = 2;

// function kClosest(points, k) {
//   let pointsHeap = new MinPriorityQueue((point) => point[0]);

//   points.forEach((point) => {
//     //(sqrt((x1 - x2)^2 + (y1 - y2)^2))
//     const distance = Math.sqrt(point[0] ** 2 + point[1] ** 2);
//     pointsHeap.enqueue([distance, point]);
//   });

//   let res = [];
//   for (let i = 0; i < k; i++) {
//     const topPoint = pointsHeap.dequeue();
//     res.push(topPoint[1]);
//   }

//   return res;
// }

// console.log(kClosest(points, k));

//-----  -----
//----- NeetCode, LeetCode 703: Kth Largest Integer in a Streamn -----
//-----  -----

// import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

// class KthLargest {
//   constructor(k, nums) {
//     this.k = k;
//     this.nums = [...nums];
//     this.heap = new MaxPriorityQueue();

//     nums.forEach((num) => {
//       this.heap.enqueue(num);
//     });
//   }

//   add(val) {
//     this.nums.push(val);

//     this.heap.clear();
//     this.nums.forEach((num) => {
//       this.heap.enqueue(num);
//     });

//     for (let i = 0; i < this.k - 1; i++) {
//       this.heap.dequeue();
//     }

//     return this.heap.dequeue();
//   }
// }

// //Test case 1
// const kthLargest = new KthLargest(3, [1, 2, 3, 3]);
// console.log(kthLargest.add(3)); // return 3
// console.log(kthLargest.add(5)); // return 3
// console.log(kthLargest.add(6)); // return 3
// console.log(kthLargest.add(7)); // return 5
// console.log(kthLargest.add(8)); // return 6

//-----  -----
//----- NeetCode, LeetCode 200: Count Number of Islands -----
//-----  -----

// const grid = [
//   ["1", "1", "0", "0", "1"],
//   ["1", "1", "0", "0", "1"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ];

// //expected 4;

// function numIslands(grid) {
//   function dfs(grid, r, c) {
//     //Check if we are out of boundaries OR water, return. No need to do anything
//     if (
//       r < 0 ||
//       c < 0 ||
//       r === grid.length ||
//       c === grid[0].length ||
//       grid[r][c] === "0"
//     ) {
//       return;
//     }
//     grid[r][c] = "0";

//     dfs(grid, r + 1, c);
//     dfs(grid, r - 1, c);
//     dfs(grid, r, c + 1);
//     dfs(grid, r, c - 1);
//   }

//   let islands = 0;

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] === "1") {
//         dfs(grid, i, j);
//         islands++;
//       }
//     }
//   }

//   return islands;
// }

// console.log(numIslands(grid));

//-----  -----
//----- NeetCode, LeetCode 695: Max Area of Island -----
//-----  -----

// const grid = [
//   [0, 1, 1, 0, 1],
//   [1, 0, 1, 0, 1],
//   [0, 1, 1, 0, 1],
//   [0, 1, 0, 0, 1],
// ];
// const grid = [[0, 0, 0, 0, 0]];

// function maxAreaOfIsland(grid) {
//   function dfs(grid, r, c, islands, currIsl) {
//     //Check if we are out of boundaries OR water, return. No need to do anything
//     if (
//       r < 0 ||
//       c < 0 ||
//       r === grid.length ||
//       c === grid[0].length ||
//       grid[r][c] === 0
//     ) {
//       return;
//     }
//     grid[r][c] = 0;
//     const currIslSize = islands.get(currIsl) + 1;
//     islands.set(currIsl, currIslSize);

//     dfs(grid, r + 1, c, islands, currIsl);
//     dfs(grid, r - 1, c, islands, currIsl);
//     dfs(grid, r, c + 1, islands, currIsl);
//     dfs(grid, r, c - 1, islands, currIsl);
//   }

//   let islands = new Map();

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] === 1) {
//         islands.set(`${i}${j}`, 0);
//         dfs(grid, i, j, islands, `${i}${j}`);
//       }
//     }
//   }

//   if (islands.size === 0) return 0;
//   return Math.max(...islands.values());
// }

// console.log(maxAreaOfIsland(grid));

//-----  -----
//----- LeetCode 1091: Shortest Path in Binary Matrix-----
//-----  -----

////Test case 1. Expected: 2
// const grid = [
//   [0, 1],
//   [1, 0],
// ];
// //Test case 2. Expected 4
// const grid2 = [
//   [0, 0, 0],
//   [1, 1, 0],
//   [1, 1, 0],
// ];

// //Test case 3. Expected: -1
// const grid3 = [
//   [1, 0, 0],
//   [1, 1, 0],
//   [1, 1, 0],
// ];

// //Test case 4. Expected -1
// const grid4 = [
//   [0, 0, 1],
//   [1, 1, 1],
//   [1, 1, 0],
// ];

// //Test case 5. Expected 3
// const grid5 = [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ];

// const shortestPathBinaryMatrix = function (grid) {
//   function bfs(grid) {
//     const rows = grid.length - 1;
//     const columns = grid[0].length - 1;
//     if (grid[0][0] !== 0 || grid[rows][columns] !== 0) return -1;

//     let visit = new Array(rows + 1)
//       .fill(0)
//       .map(() => new Array(columns + 1).fill(0));

//     let queue = [[0, 0]];
//     visit[0][0] = 1;

//     let length = 1;
//     while (queue.length > 0) {
//       const queueLength = queue.length;
//       for (let i = 0; i < queueLength; i++) {
//         const [r, c] = queue.shift();

//         if (r === rows && c === columns) return length;

//         const neighbors = [
//           [r + 1, c + 1],
//           [r + 1, c - 1],
//           [r - 1, c - 1],
//           [r - 1, c + 1],
//           [r, c + 1],
//           [r, c - 1],
//           [r + 1, c],
//           [r - 1, c],
//         ];
//         for (let j = 0; j < neighbors.length; j++) {
//           let [newR, newC] = neighbors[j];

//           if (
//             Math.min(newR, newC) < 0 ||
//             newR === rows + 1 ||
//             newC === columns + 1 ||
//             visit[newR][newC] === 1 ||
//             grid[newR][newC] === 1
//           ) {
//             continue;
//           }
//           if (newR === rows && newC === columns) {
//             return ++length;
//           }
//           queue.push(neighbors[j]);
//           visit[newR][newC] = 1;
//         }
//       }
//       length++;
//     }

//     return -1;
//   }

//   return bfs(grid);
// };

// console.log(shortestPathBinaryMatrix(grid4));

//-----  -----
//----- LeetCode 994: Rotting Oranges-----
//-----  -----

// //test case 1. Expected 4
// const grid = [
//   [2, 1, 1],
//   [1, 1, 0],
//   [0, 1, 1],
// ];

// //Test case 2. Expected -1;
// const grid2 = [
//   [2, 1, 1],
//   [0, 1, 1],
//   [1, 0, 1],
// ];

// //Test case 3. Expected 0;
// const grid3 = [[0, 2]];

// //Test case 4. Expected 0;
// const grid4 = [[0]];

// //Test case 5. Expected 0;
// const grid5 = [[1]];

// const orangesRotting = function (grid) {
//   function freshOrangesLeft(grid) {
//     let freshOranges = 0;
//     for (let i = 0; i < grid.length; i++) {
//       for (let j = 0; j < grid[0].length; j++) {
//         if (grid[i][j] === 1) freshOranges++;
//       }
//     }

//     return freshOranges;
//   }

//   function bfs(grid) {
//     const rows = grid.length - 1;
//     const columns = grid[0].length - 1;

//     let queue = [];
//     let visit = new Array(rows + 1)
//       .fill(0)
//       .map(() => new Array(columns + 1).fill(0));

//     //See if there are rotten oranges and add them to the queue to start counting time
//     for (let i = 0; i <= rows; i++) {
//       for (let j = 0; j <= columns; j++) {
//         if (grid[i][j] === 2) {
//           queue.push([i, j]);
//           visit[i][j] = 1;
//         }
//       }
//     }

//     let time = 0;

//     if (freshOrangesLeft(grid) === 0) return time;

//     //While we have rotten fruits in the grid, run this cycle
//     while (queue.length > 0) {
//       //Check if grid has all rotten oranges, return time
//       if (freshOrangesLeft(grid) === 0) return time;

//       //Define a first layer
//       const queueLength = queue.length;

//       //First run through all rotten oranges in the queue and make neighbors rotten, add them to the queue
//       for (let i = 0; i < queueLength; i++) {
//         const [r, c] = queue.shift();

//         const neighbors = [
//           [r, c + 1],
//           [r, c - 1],
//           [r + 1, c],
//           [r - 1, c],
//         ];
//         for (let j = 0; j < neighbors.length; j++) {
//           let [newR, newC] = neighbors[j];

//           if (
//             Math.min(newR, newC) < 0 ||
//             newR === rows + 1 ||
//             newC === columns + 1 ||
//             visit[newR][newC] === 1 ||
//             grid[newR][newC] === 0 ||
//             grid[newR][newC] === 2
//           ) {
//             continue;
//           }

//           queue.push(neighbors[j]);
//           grid[newR][newC] = 2;
//           visit[newR][newC] = 1;
//         }
//       }
//       time++;
//     }

//     return -1;
//   }

//   return bfs(grid);
// };

// console.log(orangesRotting(grid));

//-----  -----
//----- LeetCode 133: Clone Graphs -----
//-----  -----

// class Node {
//   constructor(val = 0, neighbors = []) {
//     this.val = val;
//     this.neighbors = neighbors;
//   }
// }

// //Test case 1
// // const node2 = new Node(2);
// // const node3 = new Node(3, [node2]);
// // const node1 = new Node(1, [node2]);
// // node2.neighbors.push(node1);
// // node2.neighbors.push(node3);

// //Test case 2
// const node1 = new Node(1);
// const node2 = new Node(2);
// const node3 = new Node(3);
// const node4 = new Node(4);
// node1.neighbors.push(node2, node3);
// node4.neighbors.push(node2, node3);
// node2.neighbors.push(node1, node4);
// node3.neighbors.push(node1, node4);

// function cloneGraph(node) {
//   if (node === null) return null;

//   let resNode = new Node(node.val);
//   let created = new Map();

//   created.set(node.val, resNode);
//   let queue = [node];

//   while (queue.length > 0) {
//     const queueLength = queue.length;

//     //For each element in Queue - added node
//     for (let i = 0; i < queueLength; i++) {
//       const linkList = queue[i].neighbors;

//       linkList.forEach((link) => {
//         let nodeToAdd = created.get(link.val);

//         //Check if linked node has already been created.
//         // If not create a new node, add to the list, add to createdList
//         if (!nodeToAdd) {
//           nodeToAdd = new Node(link.val);
//           created.set(link.val, nodeToAdd);
//           queue.push(link);
//         }

//         const nodeToUpdate = created.get(queue[i].val);
//         nodeToUpdate.neighbors.push(nodeToAdd);
//       });

//       // queue.shift();
//     }

//     for (let i = 0; i < queueLength; i++) queue.shift();
//   }

//   return resNode;
// }

// console.log(cloneGraph(node1));

//-----  -----
//----- NeetCode, LeetCode 207: Course Schedule -----
//-----  -----

// //Test Case 1. true
// const numCourses = 2;
// const prerequisites = [[1, 0]];

// //Test Case 2. false
// const numCourses2 = 2;
// const prerequisites2 = [
//   [1, 0],
//   [0, 1],
// ];

// //Test Case 3. true
// const numCourses3 = 5;
// const prerequisites3 = [
//   [1, 4],
//   [2, 4],
//   [3, 1],
//   [3, 2],
// ];

// //Test Case 4. true
// const numCourses4 = 1;
// const prerequisites4 = [];

// //Test case 5. false
// const numCourses5 = 20;
// const prerequisites5 = [
//   [0, 10],
//   [3, 18],
//   [5, 5],
//   [6, 11],
//   [11, 14],
//   [13, 1],
//   [15, 1],
//   [17, 4],
// ];

// //Test case 6 false
// const numCourses6 = 3;
// const prerequisites6 = [
//   [0, 2],
//   [1, 2],
//   [2, 0],
// ];

// //Test case 7 true
// const numCourses7 = 3;
// const prerequisites7 = [
//   [0, 1],
//   [0, 2],
//   [1, 2],
// ];

// //Test case 8 true
// const numCourses8 = 4;
// const prerequisites8 = [
//   [1, 0],
//   [2, 0],
//   [3, 1],
//   [3, 2],
// ];

// const canFinish = function (numCourses, prerequisites) {
//   if (prerequisites.length === 0) return true;
//   // Step 1. Init
//   //i element represent the course in preCourses array.
//   let courses = new Map();
//   //Init the prerequisites for each course
//   for (let index = 0; index < numCourses; index++) {
//     courses.set(index, []);
//   }
//   //Fill prerequisites in accordance with initial values in prerequisites
//   prerequisites.forEach((prerequisite) => {
//     let pre = courses.get(prerequisite[1]);
//     courses.set(prerequisite[1], [...pre, prerequisite[0]]);
//   });

//   //Check if there is no element with 0 prerequisite, it is not possible to take all courses
//   //const values = Array.from(courses.values());
//   const zeroCourses = Array.from(courses.values()).filter(
//     (course) => course.length === 0
//   );
//   if (zeroCourses.length === 0) return false;

//   //Step 2.
//   let coursesTaken = [];

//   //For each course check if to take it takes less than numCourses -1. Otherwise, there is a cycle.
//   for (let i = 0; i < numCourses; i++) {
//     let count = 0;
//     count = dfs(i, courses.get(i), courses, coursesTaken, count);

//     if (count > numCourses) return false;
//   }

//   function dfs(courseNum, depCourses, courses, coursesTaken, count) {
//     //If courses count are too much, return that max that can be taken
//     if (count > courses.size - 1) return courses.size + 1;

//     //If no courses prereq.
//     if (depCourses.length === 0) {
//       {
//         coursesTaken.push(courseNum);
//         return count;
//       }
//     }

//     if (depCourses.includes(courseNum)) return courses.size + 1;

//     depCourses.forEach((depCourse) => {
//       if (coursesTaken.includes(depCourse)) {
//         return ++count;
//       }

//       const newDepCourses = courses.get(depCourse);
//       count = dfs(depCourse, newDepCourses, courses, coursesTaken, ++count);
//     });

//     coursesTaken.push(courseNum);
//     return count;
//   }

//   return true;
// };

// console.log(canFinish(numCourses, prerequisites));
// console.log(canFinish(numCourses2, prerequisites2));
// console.log(canFinish(numCourses3, prerequisites3));
// console.log(canFinish(numCourses4, prerequisites4));
// console.log(canFinish(numCourses5, prerequisites5));
// console.log(canFinish(numCourses6, prerequisites6));
// console.log(canFinish(numCourses7, prerequisites7));
// console.log(canFinish(numCourses8, prerequisites8));

//-----  -----
//----- NeetCode, LeetCode 338: Counting Bits -----
//-----  -----

// function countBits(n) {
//   function countBitsNum(num) {
//     let count = 0;
//     while (num > 0) {
//       if (num & (1 === 1)) count++;
//       num = num >> 1;
//     }

//     return count;
//     // const n2base = num.toString(2).split("");
//     // return n2base.filter((el) => el === "1").length;
//   }

//   let res = [];
//   for (let i = 0; i <= n; i++) {
//     res.push(countBitsNum(i));
//   }

//   return res;
// }

// console.log(countBits(4));

// //-----  -----
// //----- NeetCode, LeetCode 191: Number of 1 Bits -----
// //-----  -----

// const hammingWeight = function(n) {

//   const n2base = n.toString(2).split("");
//   return n2base.filter((el) => el === "1").length;
// };

// console.log(hammingWeight(5));

//-----  -----
//----- NeetCode, LeetCode 191: Number of 1 Bits -----
//-----  -----

// function reverseBits(n) {
//   const str = n.toString(2).padStart(32, "0").split("");
//   return parseInt(str.reverse().join(""), 2);
// }

// console.log(reverseBits(3454));

//-----  -----
//----- NeetCode, LeetCode 198: House Robber -----
//-----  -----

// //test case 1
// const nums = [1, 1, 4, 5, 5]; //expected 10

// //test case 2
// const nums2 = [1, 1, 4, 5, 0]; //expected 6

// //test case 3
// const nums3 = [1, 3, 1, 4, 50]; //expected 53

// function rob(nums) {
//   if (nums.length <= 2) return Math.max(...nums);

//   let potRobs = [nums[2] + nums[0], nums[1], nums[0]];

//   if (nums.length === 3) return Math.max(...potRobs);

//   for (let i = 3; i < nums.length; i++) {
//     const temp = [
//       Math.max(potRobs[1] + nums[i], potRobs[2] + nums[i]),
//       potRobs[0],
//       potRobs[1],
//     ];
//     potRobs[0] = temp[0];
//     potRobs[1] = temp[1];
//     potRobs[2] = temp[2];
//   }

//   return Math.max(...potRobs);
// }

// console.log(rob(nums3));

//-----  -----
//----- NeetCode, LeetCode 62: Unique Paths -----
//-----  -----

// function uniquePaths(m, n) {
//   let prevRow = new Array(n).fill(0);

//   for (let r = m - 1; r >= 0; r--) {
//     const currRow = new Array(n);
//     currRow[n - 1] = 1;

//     for (let c = n - 2; c >= 0; c--) {
//       currRow[c] = currRow[c + 1] + prevRow[c];
//     }
//     for (let i = 0; i < n; i++) {
//       prevRow[i] = currRow[i];
//     }
//   }

//   return prevRow[0];
// }

// console.log(uniquePaths(3, 7)); //expected 21 // 3 rows, 6 columns

//-----  -----
//----- NeetCode, LeetCode 63: Unique Paths II-----
//-----  -----

// //test case 1
// const grid = [
//   [0, 0, 0],
//   [0, 1, 0],
//   [0, 0, 0],
// ]; //expected 2

// //test case 2
// const grid2 = [
//   [0, 0],
//   [0, 1],
// ]; //expected 0

// //test case 3
// const grid3 = [
//   [0, 0],
//   [1, 1],
//   [0, 0],
// ]; //expected 0

// const uniquePathsWithObstacles = function (obstacleGrid) {
//   const m = obstacleGrid.length; //rows
//   const n = obstacleGrid[0].length; //columns

//   if (obstacleGrid[m - 1][n - 1] === 1) return 0;

//   let prevRow = new Array(n).fill(0);
//   prevRow[n - 1] = 1;

//   for (let r = m - 1; r >= 0; r--) {
//     const currRow = new Array(n);
//     currRow[n - 1] = obstacleGrid[r][n - 1] === 1 ? 0 : 1 * prevRow[n - 1];

//     for (let c = n - 2; c >= 0; c--) {
//       currRow[c] = obstacleGrid[r][c] === 1 ? 0 : currRow[c + 1] + prevRow[c];
//     }
//     for (let i = 0; i < n; i++) {
//       prevRow[i] = currRow[i];
//     }
//   }

//   return prevRow[0];
// };

// console.log(uniquePathsWithObstacles(grid2));

//-----  -----
//----- NeetCode, LeetCode 1143: Longest Common Subsequence -----
//-----  -----

// // const text1 = "abcde"; //expected 3
// // const text2 = "ace";

// // const text1 = "wqeqwe"; //expected 6
// // const text2 = "wqeqwe";

// const text1 = "abcba"; //expected 5
// const text2 = "abcbcba";

// function longestCommonSubsequence(text1, text2) {
//   const txtR = text1.split("");
//   const txtC = text2.split("");

//   let matchArr = new Array(txtR.length + 1)
//     .fill()
//     .map(() => new Array(txtC.length + 1).fill(0));

//   for (let r = txtR.length - 1; r >= 0; r--) {
//     for (let c = txtC.length - 1; c >= 0; c--) {
//       matchArr[r][c] =
//         txtR[r] === txtC[c]
//           ? 1 + matchArr[r + 1][c + 1]
//           : Math.max(matchArr[r + 1][c], matchArr[r][c + 1]);
//     }
//   }

//   console.log(matchArr);
//   return matchArr[0][0];
// }

// console.log(longestCommonSubsequence(text1, text2));

// const buttonGroupDiv = document.getElementById("buttonGroup");
// let buttons = new Array(19);

// for (let i = 1; i <= 20; i++) {
//   buttons[i] = document.createElement("button");
//   buttons[i].textContent = i;
//   buttonGroupDiv.appendChild(buttons[i]);

//   buttons[i].addEventListener("click", () => {
//     alert(i);
//   });
// }

