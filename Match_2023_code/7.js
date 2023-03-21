/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let f = 1
  if(x<0){x=-x; f=0}
  let cur = Array.from(String(x))
  for(let i = cur.length - 1; i >= 0;i--){
      if(cur[i]==0) cur.pop()
      else break
  }
  let r = Number(cur.reverse().join(""))
  r = f===1 ? r : -r
  if(r>-Math.pow(2,31) && r<Math.pow(2,31)-1){
  return r
  }
  return 0
};