const { error } = require('console');
const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
  if(err) {
    throw err;
  }
  console.log(data.toString());
});