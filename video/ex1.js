const fs = require('fs');
const path = require('path');

const f = fs.readFileSync(path.join(__dirname, '../input/1.t.txt')).toString();

function compute() {
  const elfes = f.split('\n\n');

  const caloriesByElfes = elfes.map((elf) => {
    const calories = elf.split('\n');
    return calories.reduce((a, c) => {
      return Number(a) + Number(c);
    }, 0);
  });

  const sortCaloriesByElfes = caloriesByElfes.sort((a, b) => b - a);

  const [first, second, third] = sortCaloriesByElfes;

  console.log('Première solution', first);
  console.log('Deuxième solution', first + second + third);
}

compute(f);
