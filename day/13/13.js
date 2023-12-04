const fs = require('fs');
const path = require('path');

const input = fs
  .readFileSync(path.join(__dirname, '../../input/13.t.txt'))
  .toString();

const groupes = input.split('\n\n').map((v) => v.split('\n'));

console.log(groupes);

const getGroupesObject = (groupes) => {
  const recursivelyGetGroupes = (line) => {
    if (line.startsWidth("[")) {
      let cGroup = [];
      // remove line first caractères
      line = line.substring(1);
      while (!line.startsWith("]")) {
    }
    

  groupes.map(g => {

  })
}

const checkGroupes = (g) => {

};

checkGroupes(groups);
