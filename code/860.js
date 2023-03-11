var lemonadeChange = function (bills) {
  const m = new Map();
  m.set(5, 0);
  m.set(10, 0);
  for (let o of bills) {
    let count5 = m.get(5);
    let count10 = m.get(10);
    if (o === 5) {
      m.set(5, count5 + 1);
    } else if (o === 10) {
      if (count5 < 1) return false;
      m.set(5, count5 - 1);
      m.set(10, count10 + 1);
    } else {
      if (count5 === 0) return false;
      if (count10 >= 1) {
        m.set(5, count5 - 1);
        m.set(10, count10 - 1);
      } else {
        if (count5 >= 3) {
          m.set(5, count5 - 3);
        } else return false;
      }
    }
  }
  return true;
};
