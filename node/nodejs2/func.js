import {odd, even} from './var.js';

function checkOddOrEven(number) {
  if(number % 2) {
    return odd;
  } else {
    return even;
  }
}

export default checkOddOrEven;
// module.exports = checkOddOrEven;