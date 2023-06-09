// export const pureSort = <T>(array: T[]): T[] => {
//   let deepCopied = [...array];
//   return deepCopied.sort();
// }

// export const pureDelete = <T>(array: T[], callback: (val: T, index?: number) => boolean): T[] => {
//   return array.filter((val, index) => callback(val, index) == false)
// }

// const array: number[] = [1, 2, 3, 4];
// const tuple: [boolean, string] = [true, "the result is ok"]

export type ResultType = [boolean, string];