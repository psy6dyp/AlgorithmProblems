const tree = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: null,
  },
};
//
var findMode = function (root) {
  const m = new Map();
  const arr = [];
  let n = 0;
  var pre = function (node) {
    if (node) {
      if (m.has(node.val)) {
        let a = m.get(node.val) + 1;
        m.set(node.val, a);
        n = Math.max(n, a);
      } else {
        m.set(node.val, 1);
        n = Math.max(n, 1);
      }
      pre(node.left);
      pre(node.right);
    }
  };
  pre(root);
  const mEnt = m.entries();
  for (let [key, value] of mEnt) {
    if (value === n) arr.push(key);
  }

  return arr;
};
console.log(findMode(tree));
