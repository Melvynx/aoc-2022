const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, '../input/5.txt')).toString();

const t = input.split('[');
console.log(t);

let arrI = 0;
let isFirstLine = true;
const matrix = [];

for (const u of t) {
  if (u[0] !== ' ') {
    if (!matrix[arrI]) {
      matrix[arrI] = [];
    }
    matrix[arrI].push(u[0]);
    arrI += 1;
  } else {
    const ttt = u.split('      ');
    arrI += ttt.length;
  }

  const sp = u.split(']');
  if (sp[1]?.length > 1) {
    const ttt = u.split('      ');
    arrI += ttt.length;
  }

  if (u.includes('\n')) {
    arrI = 0;
  }
}

const actions = input
  .split('\n')
  .filter((u) => u.startsWith('move'))
  .map((a) => a.match(/\d+/g).map(Number));

for (const a of actions) {
  const [turn, from, to] = a;
  for (let i = 0; i < a[0]; i += 1) {
    const temp = matrix[from - 1].shift();
    if (!temp) continue;
    matrix[to - 1].unshift(temp);
  }
}

const result = matrix.map((c) => c[0]).join('');
console.log(result);
