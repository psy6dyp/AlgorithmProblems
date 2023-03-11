// 递归
// var inorderTraversal = function(root) {
// 	const arr = []
//     const fun = (f) => {
//     	if(f) {
//     		fun(f.left)
//     		arr.push(f.val)
//     		fun(f.right)
//     	}
//     }
//     fun(root)
//     return arr
// };
// 栈
var inorderTraversal = function (root) {
  const arr = [];
  const stack = [];
  let o = root;
  while (stack.length && o) {
    while (o) {
      stack.push(o);
      o = o.left;
    }
    const n = stack.pop();
    arr.push(n.val);
    o = n.right;
  }
  return arr;
};
