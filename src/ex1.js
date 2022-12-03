const fs = require('fs');
const path = require('path');

const f = fs.readFileSync(path.join(__dirname, '../input/1.t.txt')).toString();

const s1 = f.split('\n\n').reduce((a, v) => {
  s = v.split('\n').reduce((a, v) => +a + +v);
  return s > a ? s : a;
}, 0);

const s2 = f
  .split('\n\n')
  .reduce((a, v) => {
    return a.push(v.split('\n').reduce((a, v) => +a + +v)), a;
  }, [])
  .sort((a, b) => a - b)
  .slice(-3)
  .reduce((a, v) => a + v);

console.log({ solution1: s1 });
console.log({ solution2: s2 });
