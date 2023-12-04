const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, '../input/5.txt')).toString();

const t = input.split('[');

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

console.log(matrix);

for (const a of actions) {
  const [turn, from, to] = a;
  const temp = matrix[from - 1].splice(0, turn);
  if (!temp.length) continue;
  matrix[to - 1].unshift(...temp);
}

const result = matrix.map((c) => c[0]).join('');
console.log(result);
