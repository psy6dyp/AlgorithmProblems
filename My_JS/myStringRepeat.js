// padEnd
// const myRepeat = function(str, count) {
//   let n = str.length * count
//   return str.padEnd(n, str)
// }

// Array.prototype.join
// const myRepeat = function(str, count) {
//   return new Array(count).fill(str).join('')
// }

// 递归
const myRepeat = function (str, count) {
  if (count === 0) return "";
  if (count === 1) return str;
  let n = str.length * count;
  let old = str;
  const r = function (str, n) {
    str += old;
    if (str.length < n) {
      str = r(str, n);
    }
    return str;
  };
  return r(str, n);
};
console.log(myRepeat("cba", 3));
