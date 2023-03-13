/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 虽然这题不难。但是要考虑清楚边界情况
var addTwoNumbers = function (l1, l2) {
  let n = 0;
  let sum = new ListNode(0, null);
  let res = sum; //记录头结点
  while (l1 || l2) {
    let cur = 0;
    if (l1) {
      n += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      n += l2.val;
      l2 = l2.next;
    }
    if (n >= 10) {
      cur = n % 10;
      n = 1;
    } else {
      cur = n;
      n = 0;
    }
    sum.next = new ListNode(cur, null);
    sum = sum.next;
  }
  if (n !== 0) sum.next = new ListNode(n, null); //最后的和大于10那还得记录一下
  return res.next;
};
