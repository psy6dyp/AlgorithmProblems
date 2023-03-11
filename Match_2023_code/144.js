// 递归
// var preorderTraversal = function(root) {
// 	const arr = []
// 	const fun = (f) => {
// 		if(f) {
// 			arr.push(f.val)
// 			fun(f.left)
// 			fun(f.right)
// 		}
// 	}
// 	fun(root)
// 	return arr
// };
// 栈 前序遍历

var preorderTraversal = function (root) {
  if (!root) return [];
  const arr = [];
  const stack = [root];
  while (stack.length) {
    const cur = stack.pop();
    arr.push(cur.val);
    cur.right && stack.push(cur.right);
    cur.left && stack.push(cur.left);
  }
  return arr;
};
