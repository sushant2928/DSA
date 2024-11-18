/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
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
var deleteDuplicates = function (head) {
  if (!head?.next) return head;
  let low = head;
  while (low?.next) {
    if (low.val === low.next.val) {
      low.next = low.next?.next;
    } else {
      low = low.next;
    }
  }
  return head;
};
