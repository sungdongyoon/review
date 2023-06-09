// 타입스크립트를 활용한 배열의 map, reduce, filter 메서드 예제

// const multiply = (result: number, val: number) => result * val;

// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let tempResult = numbers.filter(val => val % 2 != 0).map(val => val * val).reduce(multiply, 1);
// let result = Math.round(Math.sqrt(tempResult));
// console.log(result);


// const array: number[] = range(1, 10 + 1);
// const half = array.length / 2;

// // let odds: number[] = array.filter((value) => value % 2 != 0);
// // let evens: number[] = array.filter((value) => value % 2 == 0);

// let belowHalf: number[] = array.filter((value, index) => index < half);
// let overHalf: number[] = array.filter((value, index) => index >= half);

// console.log(belowHalf, overHalf);

// let squares: number[] = range(1, 5 + 1).map((val: number) => val * val);
// console.log(squares);


// let names: string[] = range(1, 5 + 1).map((val, index) => `[${index}]: ${val}`);
// console.log(names);



// let reduceSum: number = range(1, 100 + 1).reduce((result: number, value: number) => result + value, 0);

// console.log(reduceSum);



// let reduceMulti:number = range(1, 10 + 1).reduce((result: number, value: number) => result * value, 1);

// console.log(reduceMulti);

// import { range } from "./range";

// function impure1(array: readonly number[]): void {
//   array.push(1);
//   array.splice(0, 1);
// }

// deep-copy

// let original = 1;
// let copied = original;

// copied += 2;
// console.log(original, copied);


// shallow-copy

// const originalArray = [5, 3, 9, 7];
// const shallowCopiedArray = originalArray;

// shallowCopiedArray[0] = 0;
// console.log(originalArray, shallowCopiedArray);

// const oArray = [1, 2, 3, 4, 5];
// const deepCopiedArray = [...oArray];

// deepCopiedArray[0] = 0;
// console.log(oArray, deepCopiedArray);

import { doSomething } from "./sort_test";
const [result, errorMessage] = doSomething();

console.log(result, errorMessage);