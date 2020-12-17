// this is my promise. Promises can be used for long running asynchronous tasks etc

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve({
      name: 'Nath',
      age: 28
    });
    // reject('Something went wrong!');
  }, 5000);
});

// resolve/reject can only have one arguemen/value. (or an object)

console.log('before');

// .then lets us register a callback
// this code lets us set a promise then logs data to the screen when the promise complete
// catch allows us to send a message to the console even when it is rejected
promise.then((data) => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
        name: 'Nath',
        age: 28
      });
      // reject('Something went wrong!');
    }, 5000);
  });
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');
