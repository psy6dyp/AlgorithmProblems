//实现字符串翻转

const myReverse = function (str) {
  return Array.from(str).reverse().join("");
};

//递归
// const myReverse = function (str) {
//   const arr = Array.from(str);
//   let len = str.length;
//   const change = function (arr, len) {
//     if (len > 1) {
//       for (let i = 0; i < len - 1; i++) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//       }
//       len--;
//       change(arr, len);
//     }
//     return arr;
//   };
//   return change(arr, len).join("");
// };
console.log(myReverse("hello my friend"));
