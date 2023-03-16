function Person() {
  this.friends = ["aa", "bb"];
}
Person.prototype.getFriends = function () {
  return this.friends;
};

function Student() {}
Student.prototype = new Person();

const s1 = new Student();
s1.friends.push("cc");
console.log(s1.getFriends()); // [ 'aa', 'bb', 'cc' ]
const s2 = new Student();
console.log(s2.getFriends()); // [ 'aa', 'bb', 'cc' ]
// 优点： 1.节约空间，重复利用函数 2.写法简介，容易理解
// 不足：1.原型中包含的引用类型属性将被所有实例共享
//       2.子类在实例化的时候不能给父类构造函数传参
