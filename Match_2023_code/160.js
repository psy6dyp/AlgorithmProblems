/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//哈希表解决 两次循环
var getIntersectionNode = function (headA, headB) {
  const mA = new Map();
  while (headA) {
    mA.set(headA, headA);
    headA = headA.next;
  }
  while (headB) {
    if (mA.has(headB)) return headB;
    headB = headB.next;
  }
  return null;
};
