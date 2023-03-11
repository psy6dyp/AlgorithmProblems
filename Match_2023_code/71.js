var simplifyPath = function (path) {
  const stack = [];
  const sp = path.split("/");
  for (let o of sp) {
    if (o && o === "..") {
      stack.pop();
    } else if (o && o !== ".") {
      stack.push(o);
    }
  }
  return "/" + stack.join("/");
};
console.log(
  simplifyPath("/home/"),
  simplifyPath("/../"),
  simplifyPath("/home//foo/"),
  simplifyPath("/a/./b/../../c/")
);
