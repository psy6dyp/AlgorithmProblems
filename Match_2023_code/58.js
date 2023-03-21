var lengthOfLastWord = function (s) {
  let num = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (num === 0) {
        continue;
      }
      break;
    }
    num += 1;
  }
  return num;
};
