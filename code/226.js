var invertTree = function (root) {
  var fun = function (node) {
    if (node) {
      fun(node.left);
      fun(node.right);
      const n1 = node.left;
      node.left = node.right;
      node.right = n1;
    }
  };
  fun(root);
  return root;
};
