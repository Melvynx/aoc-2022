const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, '../../input/10.txt')).toString();

const a = input.split('\n');

const runInstruction = (instructions) => {
  let cycles = 0;
  let x = 1;

  let signalStrength = 0;
  const multiplyCycles = [20, 60, 100, 140, 180, 220];

  const incrementCycle = () => {
    cycles += 1;
    const multiplyCycle = multiplyCycles.find((c) => c === cycles);
    if (multiplyCycle) {
      signalStrength += x * multiplyCycle;
    }
  };

  for (const instruction of instructions) {
    if (instruction.includes('noop')) {
      incrementCycle();
      continue;
    }

    if (instruction.startsWith('add')) {
      incrementCycle();
      incrementCycle();
      x += parseInt(instruction.substring(5));
      continue;
    }
  }

  console.log(cycles, x, signalStrength);
};

runInstruction(a);
