//数据类型判断
const myTypeOf = function (obj) {
  const type = Object.prototype.toString.call(obj); // [object Function]
  return type.substring(8, type.length - 1).toLowerCase(); // function
};
console.log(
  myTypeOf(() => {
    console.log(666);
  })
); // function
console.log(myTypeOf({})); // object
console.log(myTypeOf([])); // array
console.log(myTypeOf(5)); // number
console.log(myTypeOf("aaa")); // string
console.log(myTypeOf(Symbol())); // symbol
