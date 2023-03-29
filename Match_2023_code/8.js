var myAtoi = function (s) {
  s = s.trim()
  let flag = 1
  let num = ''
  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      if (s[i] === '+') continue
      if (s[i] === '-') {
        flag = 0
      } else if (isNaN(Number(s[i]))) {
        return 0
      } else {
        num += s[i]
      }
    } else {
      if (isNaN(Number(s[i])) || s[i] === ' ') {
        break
      } else {
        num += s[i]
      }
    }
  }
  num = flag ? Number(num) : -(Number(num))
  if (num >= -Math.pow(2, 31) && num <= Math.pow(2, 31) - 1) {
    return num
  } else if (num < -Math.pow(2, 31)) {
    return -Math.pow(2, 31)
  } else {
    return Math.pow(2, 31) - 1
  }
};