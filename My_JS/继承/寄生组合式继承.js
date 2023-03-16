function inheritPrototype(subtype, supertype) {
  var prototype = Object(supertype.prototype); //创建超类型原型的一个副本
  prototype.constructor = subtype; //为创建的副本添加 constuctor 属性
  subtype.prototype = prototype; //将新创建的对象赋值给子类型的原型
}

function People(name) {
  this.name = name;
  this.colors = ["yellow"];
}

People.prototype.say = function () {
  console.log(this.name + "要吃饭");
};

function Students(name, age) {
  People.call(this, name);
  this.age = age;
}

inheritPrototype(Students, People);

Students.prototype.write = function () {
  console.log(this.name + "爱学习");
};

var s1 = new Students("张三", 20);
s1.colors.push("red");
console.log(s1);
s1.say();
s1.write();

var s2 = new Students("李四", 25);
s2.colors.push("blue");
console.log(s2);
s2.say();
s2.write();
