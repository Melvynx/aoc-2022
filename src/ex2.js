const fs = require('fs');
const path = require('path');

const f = fs.readFileSync(path.join(__dirname, '../input/2.txt')).toString();

const map = {
  A: 1,
  B: 2,
  C: 3,
};

const winner = {
  A: 'Z',
  B: 'X',
  C: 'Y',
};

const same = {
  A: 'X',
  B: 'Y',
  C: 'Z',
};

const lines = f.split('\n').map((v) => {
  if (v.length < 2) return 0;

  const p = v.split(' ');
  const isOpponentWinning = winner[p[0]] === p[1];
  if (same[p[0]] === p[1]) {
    return map[p[0]] + 3;
  }
  return isOpponentWinning ? map[p[1]] : 6 + map[p[1]];
});

lines.forEach((v) => console.log(v));

console.log(lines.reduce((a, v) => a + v));

const state = {
  A: { w: 3, l: 2 },
  B: { w: 1, l: 3 },
  C: { w: 2, l: 1 },
};

const lines2 = f.split('\n').map((v) => {
  if (v.length < 2) return 0;
  const p = v.split(' ');
  const s = state[p[0]];

  console.log(p, s);
  if (p[1] === 'X') {
    return s.w;
  }
  if (p[1] === 'Y') {
    return 3 + map[p[0]];
  }
  if (p[1] === 'Z') {
    return 6 + s.l;
  }
});

lines2.forEach((v) => console.log(v));

console.log(lines2.reduce((a, v) => a + v));
