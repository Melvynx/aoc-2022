const fakePromise = () => {
  return new Promise((resolve, reject) => {
    resolve(''); // or reject('')
  });
};

async function test() {
  const result = await fakePromise();
  console.log(result);
}

test();
