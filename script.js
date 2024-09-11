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

class Solution {
  // /**
  //  * @param {ListNode} list1
  //  * @param {ListNode} list2
  //  * @return {ListNode}
  //  */
  mergeTwoLists(list1, list2) {
    const initialDummy = new ListNode(0, null);

    //defining a new list with a new Head to start
    let cur = initialDummy;

    while (list1 && list2) {
      if (list1.val <= list2.val) {
        cur.next = list1;
        list1 = list1.next;
      } else {
        cur.next = list2;
        list2 = list2.next;
      }

      cur = cur.next;
    }

    if (!list1) {
      cur.next = list2;
    }

    if (!list2) {
      cur.next = list1;
    }

    return initialDummy.next;
  }
}
