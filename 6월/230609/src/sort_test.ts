// import { pureSort } from "./sort";

// let beforeSort = [6, 2, 9, 0];
// const afterSort = pureSort(beforeSort);

// console.log(beforeSort, afterSort);

// import { pureDelete } from "./sort";

// const mixedArray: object[] = [
//   [], {name: "Jack"}, {name: "Jane", age: 32}, ["description"]
// ];

// const objectsOnly: object[] = pureDelete(mixedArray, (val) => Array.isArray(val));

// console.log(mixedArray, objectsOnly);

import { ResultType } from "./sort";

export const doSomething = (): ResultType => {
  try {
    throw new Error("Some error occurs..");
  } catch(e: any) {
    return [false, e.message]
  }
}