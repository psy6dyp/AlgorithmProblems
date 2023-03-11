var deleteDuplicates = function (head) {
  if (head === null) {
    return null;
  }
  let t = head;
  while (t.next !== null) {
    if (t.val === t.next.val) {
      t.next = t.next.next;
    } else {
      t = t.next;
    }
  }
  return head;
};
