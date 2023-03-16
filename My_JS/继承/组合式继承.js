function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
};

function SubType(name, age) {
  //继承属性
  SuperType.call(this, name);
  this.age = age;
}

//继承方法
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function () {
  console.log(this.age);
};
var instance1 = new SubType("LiBai", 50);
instance1.colors.push("black");
console.log(instance1.colors); //["red", "blue", "green", "black"]
instance1.sayName(); //LiBai
instance1.sayAge(); //50

var instance2 = new SubType("DuFu", 60);
console.log(instance2.colors); //["red", "blue", "green"]
instance2.sayName(); //DuFu
instance2.sayAge(); //60
