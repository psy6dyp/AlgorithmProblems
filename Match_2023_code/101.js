// 判断左子树翻转之后是不是跟右子树一样，一样就对称.
var isSymmetric = function (root) {
  var rev = function (node) {
    if (node) {
      rev(node.left);
      rev(node.right);
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
    }
  };
  rev(root.left);
  var is = function (p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;
    return is(p.left, q.left) && is(p.right, q.right);
  };
  return is(root.left, root.right);
};
