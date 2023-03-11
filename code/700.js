var searchBST = function (root, val) {
  if (!root || root.val === val) {
    return root;
  }
  if (root.val > val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};
