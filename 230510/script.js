const fruits = [
  {rank : 1, name : "레드향"},
  {rank : 2, name : "샤인머스켓"},
  {rank : 3, name : "산청딸기"},
  {rank : 4, name : "한라봉"},
  {rank : 5, name : "사과"},
  {rank : 6, name : "애플망고"},
  {rank : 7, name : "딸기"},
  {rank : 8, name : "천혜향"},
  {rank : 9, name : "과일선물세트"},
  {rank : 10, name : "귤"}
]

for(let i = 0; i < fruits.length; i++) {
  document.write(`${fruits[i].rank} : ${fruits[i].name} </br></br>`)
}