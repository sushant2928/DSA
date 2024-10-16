/**
 * https://leetcode.com/problems/middle-of-the-linked-list/description/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  if (!head?.next) return head;
  else {
    let slow = head,
      fast = head;
    while (fast?.next) {
      slow = slow?.next;
      fast = fast?.next?.next;
    }
    return slow;
  }
};
