import { range } from "./range";
import { fold } from "./fold";
import { filter } from "./filter";
import { map } from "./map";

let numbers: number[] = range(1, 100 + 1);
// console.log(numbers);

// const isOdd = (n: number): boolean => n % 2 != 0;
// const isEven = (n: number): boolean => n % 2 == 0;

let result = fold(map(numbers, value => value * value), (result, value) => result + value, 0);
console.log(result);