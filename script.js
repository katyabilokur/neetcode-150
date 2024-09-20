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

import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

const stones = [2, 7, 4, 1, 8, 1];

const lastStoneWeight = function (stones) {
  let stoneHeap = new MaxPriorityQueue();
  stones.forEach((stone) => {
    stoneHeap.enqueue(stone);
  });

  while (stoneHeap.size() > 1) {
    const firstHeavy = stoneHeap.dequeue();
    const secondHeavy = stoneHeap.dequeue();

    if (firstHeavy !== secondHeavy) {
      stoneHeap.enqueue(firstHeavy - secondHeavy);
    }
  }
  return stoneHeap.size() === 1 ? stoneHeap.front() : 0;
};

console.log(lastStoneWeight(stones));

//-----  -----
//----- NeetCode, LeetCode 1046: Last Stone Weight -----
//-----  -----
