let initValue = {
  count: 0,
  id: "",
  pw: "",
}

function reducer (state = initValue, action) {
  console.log(action);
  switch(action.type) {
    case "INCREASE":
      return {...state, count: state.count + action.payload.num};
    case "LOGIN":
      return {...state, id: action.payload.id, pw: action.payload.pw};
    default:
      return {...state};
  }
}

export default reducer;