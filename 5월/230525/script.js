const arr = [2, 4, 6, 8, 10];

const origin = document.querySelector(".origin");
const result = document.querySelector(".result");

// origin.innerText = arr;

// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   result.innerText = `${arr},${sum}`;
// }


const showArray = (a, b) => {
  let str = "<table><tr>";

  
  for(let i = 0; i < b.length; i++) {
    str += "<td>" + b[i] + "</td>";
  }
  str += "</tr></table>";
  a.innerHTML = str;
}

showArray(origin, arr);

let sum = 0;
for(let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
arr.push(sum);
showArray(result, arr);