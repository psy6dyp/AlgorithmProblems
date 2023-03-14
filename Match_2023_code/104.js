//栈
var maxDepth = function (root) {
  if (!root) return 0;
  const stack = [root];
  let num = 0;
  while (stack.length) {
    let len = stack.length;
    while (len--) {
      const cur = stack.shift();
      if (cur.left) stack.push(cur.left);
      if (cur.right) stack.push(cur.right);
    }
    num++;
  }
  return num;
};
//递归
// var maxDepth = function(root) {
//   // 后序找到最大高度，此时也就是最大深度
//   if(!root) return 0
//   let leftHeight = maxDepth(root.left)
//   let leftRight = maxDepth(root.right)
//   let height = 1 + Math.max(leftHeight, leftRight)
//   return height
// };
