var postorderTraversal = function (root) {
  if (!root) return [];
  const arr = [];
  const stack = [root];
  while (stack.length) {
    const cur = stack.pop();
    arr.push(cur.val);
    cur.left && stack.push(cur.left);
    cur.right && stack.push(cur.right);
  }
  arr.reverse();
  return arr;
};
