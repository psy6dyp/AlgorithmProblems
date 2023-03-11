// 有左孩子的话才判断他的左孩子是不是叶子节点，是的话加，不是就不变
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  var pre = function (node) {
    if (node) {
      if (node.left) {
        if (!node.left.left && !node.left.right) sum += node.left.val;
        pre(node.left);
      }
      pre(node.right);
    }
  };
  pre(root);
  return sum;
};
