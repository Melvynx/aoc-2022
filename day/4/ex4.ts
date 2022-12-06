const fs = require('fs');
const path = require('path');

const f = fs
  .readFileSync(path.join(__dirname, '../input/4.txt'))
  .toString() as string;

const lines: number = f
  .split('\n')
  .map((v) => {
    const [line1, line2] = v.split(',').map((v) => {
      const [min, max] = v.split('-');
      return [Number(min), Number(max)];
    });

    // if (line1[0] === line2[0] && line1[1] === line2[1]) {
    //   console.log('NON', line1, line2);
    //   return 0;
    // }

    if (line1[0] >= line2[0] && line1[1] <= line2[1]) {
      return 1;
    }

    if (line2[0] >= line1[0] && line2[1] <= line1[1]) {
      return 1;
    }

    return 0;
  })
  .reduce((a, v) => a + v, 0);

function range(min: number, max: number) {
  var len = max - min + 1;
  var arr = new Array(len);
  for (var i = 0; i < len; i++) {
    arr[i] = min + i;
  }
  return arr;
}

const lines2 = f
  .split('\n')
  .map((v) => {
    const [line1, line2] = v.split(',').map((v) => {
      const [min, max] = v.split('-');
      return range(+min, +max);
    });

    console.log({ line1, line2 });

    const intersection = line1.filter((v) => line2.includes(v));
    return intersection.length ? 1 : 0;
  })
  .reduce((a, v) => a + v, 0);

console.log(lines2);
