const initValue = {
  count: 0,
  id: "",
  pw: "",
}

function reducer(state = initValue, action) {
  switch(action.type) {
    case "INCREMENT":
      return {...state, count: state.count + 1};
    case "LOGIN":
      return {...state, id: action.payload.id, pw: action.payload.pw}
    case "DECREMENT":
      return {...state, count: state.count - 1};
    default:
      return {...state};
  }
}

export default reducer;