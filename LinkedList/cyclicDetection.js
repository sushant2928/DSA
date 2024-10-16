/**
 * https://leetcode.com/problems/linked-list-cycle/description/
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head?.next?.next) {
    return false;
  } else {
    let low = head,
      high = head.next.next;
    if (low === high) return true;
    while (1) {
      if (low === high) return true;
      else if (low?.next === null || high?.next === null) return false;
      low = low?.next;
      high = high?.next?.next;
    }
  }
};
