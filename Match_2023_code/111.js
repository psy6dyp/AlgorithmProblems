//求最大高度转换而来
var maxDepth = function (root) {
  // 后序找到最大高度，此时也就是最大深度
  if (!root) return 0;
  let leftHeight = maxDepth(root.left);
  let leftRight = maxDepth(root.right);
  let height = 1 + Math.max(leftHeight, leftRight);
  return height;
};
//栈
// var minDepth = function (root) {
//   if (!root) return 0;
//   const stack = [[root, 1]];
//   while (stack.length) {
//     const [o, n] = stack.shift();
//     if (!o.left && !o.right) {
//       return n;
//     }
//     if (o.left) stack.push([o.left, n + 1]);
//     if (o.right) stack.push([o.right, n + 1]);
//   }
// };
