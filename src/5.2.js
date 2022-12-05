const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, '../input/5.txt')).toString();

const t = input.split('[');

let arrI = 0;
let isFirstLine = true;
const matrix = [];

j;
console.log(matrix);

const actions = input
  .split('\n')
  .filter((u) => u.startsWith('move'))
  .map((a) => a.match(/\d+/g).map(Number));

console.log(matrix);

for (const a of actions) {
  const [turn, from, to] = a;
  console.log({ a });
  const temp = matrix[from - 1].splice(0, turn);
  if (!temp.length) continue;
  matrix[to - 1].unshift(...temp);
}

const result = matrix.map((c) => c[0]).join('');
console.log(result);
