const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, '../../input/10.txt')).toString();

const a = input.split('\n');

const runInstruction = (instructions) => {
  let cycles = 0;
  let registerX = 1;
  let CRT = ['', '', '', '', '', ''];

  let currentLine = 0;
  const multiplyCycles = [40, 80, 120, 160, 200, 240];

  const incrementCycle = () => {
    cycles += 1;

    const multiplyCycle = multiplyCycles.find((c) => c === cycles);

    const length = CRT[currentLine].length + 1;

    if (length >= 6) {
      console.log(CRT);
    }

    if (length >= registerX && length <= registerX + 2) {
      CRT[currentLine] += '#';
    } else {
      CRT[currentLine] += ' ';
    }

    if (multiplyCycle) {
      currentLine += 1;
      if (currentLine === 6) {
        console.log(CRT);
        process.exit();
      }
    }
  };

  for (const instruction of instructions) {
    incrementCycle();

    if (instruction.startsWith('add')) {
      incrementCycle();
      registerX += parseInt(instruction.substring(5));
      continue;
    }
  }

  console.log(cycles, registerX, signalStrength);
};

runInstruction(a);

// function part2(instructions) {

// }

// part2(a)
