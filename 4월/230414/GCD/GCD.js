const first = document.querySelector("#first_value");
const second = document.querySelector("#second_value");
const calc = document.querySelector("#calc");
const result = document.querySelector("#result");


function getGCD(a, b) {
  let max = a > b ? a : b;
  let GCD = 0;
  for(let i = 1; i <= max; i++) {
    if(a % i === 0 && b % i === 0) {
      GCD = i;
    }
  }
  return GCD;
}

calc.onclick = (e) => {
  e.preventDefault();
  result.innerText = `${getGCD(first.value, second.value)}`;
}