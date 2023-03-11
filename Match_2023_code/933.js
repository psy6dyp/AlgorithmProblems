var RecentCounter = function () {
  this.stack = [];
};
RecentCounter.prototype.ping = function (t) {
  this.stack.push(t);
  while (this.stack[0] < t - 3000) {
    this.stack.shift();
  }
  return this.stack.length;
};
var a = new RecentCounter();
console.log(a.ping(1), a.ping(100), a.ping(3001), a.ping(3002));
