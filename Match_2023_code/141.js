var hasCycle = function (head) {
  let s = head,
    f = head;
  while (f !== null && f.next !== null) {
    f = f.next.next;
    s = s.next;
    if (s === f) {
      return true;
    }
  }
  return false;
};
