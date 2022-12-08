const fs = require('fs');
const path = require('path');

const input = fs
  .readFileSync(path.join(__dirname, '../../input/7.t.txt'))
  .toString();

const fileSystem = {
  '/a': {
    _files: [{ name: 'a.txt', size: 85050505 }],
  },
  _files: [{ name: 'b.txt', size: 85050505 }],
};

const fakeFs = {};

const parcours = input.split('\n');

let i = 0;
let currPath = '';

while (i !== parcours.length) {
  const c = parcours[i];

  i++;
  if (c === '$ cd /') {
    currPath = '/';
    fakeFs[currPath] = {
      _files: [],
    };
    continue;
  }

  if (c.startsWith('$')) {
    const sub = c.substring(2);
    if (sub.startsWith('cd')) {
      const subPath = sub.substring(3);

      if (subPath === '..') {
        const temp = currPath.split('/');
        temp.splice(-2, 1);
        currPath = temp.join('/');
        continue;
      }

      currPath += subPath + '/';
      if (!fakeFs[currPath]) {
        fakeFs[currPath] = {
          _files: [],
        };
      }
    }
    continue;
  }
  if (c.startsWith('dir')) {
    const tempPath = currPath + c.substring(4) + '/';
    if (!fakeFs[tempPath]) {
      fakeFs[tempPath] = {
        _files: [],
      };
    }
    continue;
  }

  const v = c.split(' ');
  const name = v[1];
  const size = +v[0];
  fakeFs[currPath]._files.push({ name, size });
}

const directoriesSize = {};

const calculateDirectorySize = (path) => {
  if (directoriesSize[path]) return directoriesSize[path];
  const files = fakeFs[path]._files;
  const size = files.reduce((acc, curr) => acc + curr.size, 0);
  return size;
};

console.log(fakeFs);
const directories = Object.keys(fakeFs);

for (const key of directories) {
  let size = 0;
  const childrenDirectories = directories.filter(
    (u) => u.startsWith(key) && u !== key
  );
  for (const child of childrenDirectories) {
    size += calculateDirectorySize(child);
  }
  size += calculateDirectorySize(key);
  directoriesSize[key] = size;
}

const result = Object.values(directoriesSize).reduce((a, c) => {
  if (c < 100000) {
    return a + c;
  }
  return a;
}, 0);

console.log('Result 1', result);

const freePlace = 70000000 - directoriesSize['/'];
3905358;
const freePlaceNeeded = 30000000;

const vvvv = Object.values(directoriesSize)
  .filter((u) => freePlace + u >= freePlaceNeeded)
  .sort((a, b) => a - b);

console.log({ freePlace, a: directoriesSize['/'] });

console.log('Result 2', vvvv[0]);
