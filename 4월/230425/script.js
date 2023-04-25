const student = {
  name : "홍길동",
  score : {
    history : 85,
    science : 94
  },
  friends : ["kim", "lee", "park"]
}

let {
  name,
  score : {
    history,
    science
  },
  friends : [f1, f2, f3]
} = student

