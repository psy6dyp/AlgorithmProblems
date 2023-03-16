function Person(name) {
  this.info = {
    name,
  };
}

function Student(name) {
  Person.call(this, name);
}

const s1 = new Student("aa");
s1.info.nickName = "小小";
console.log(s1.info); // { name: 'aa', nickName: '小小' }

const s2 = new Student("bb");
console.log(s2.info); // { name: 'bb' }
// 优点：解决了原型链实现继承的不能传参问题和父类的原型引用类型共享问题
// 不足：1.借用构造函数的缺点是方法都在构造函数中定义，因此无法实现函数复用
// 不足：2.在父类的原型中定义的方法，对子类而言也是不可见的，结果所有类型都只能用构造函数模式
