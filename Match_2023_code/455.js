/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 排序＋贪心 遍历饼干 消费掉一个就计数加一 小孩子下标就是计数
// sort方法
var findContentChildren = function (g, s) {
  g.sort((a, b) => {
    return a - b;
  });
  s.sort((a, b) => {
    return a - b;
  });
  let c = 0;
  for (let j = 0; j < s.length; j++) {
    if (s[j] >= g[c]) {
      c++;
    }
  }
  return c;
};
// 手写快速排序
// var findContentChildren = function(g, s) {
//   const quickSort = function(arr) {
//       if(arr.length <= 1) return arr
//       const mid = arr.length >> 1
//       const left = []
//       const right = []
//       const pivot = arr.splice(mid, 1)[0]
//       for(let i = 0; i < arr.length; i++) {
//           if(arr[i] < pivot) {
//               left.push(arr[i])
//           } else {
//               right.push(arr[i])
//           }
//       }
//       return quickSort(left).concat(pivot, quickSort(right))
//   }
//   g = quickSort(g)
//   s = quickSort(s)
//   let c = 0
//   for(let j = 0; j < s.length; j++) {
//       if(s[j] >= g[c]) {
//           c++
//       }
//   }
//   return c
// };
console.log(findContentChildren([2, 1, 3], [2, 1]));
