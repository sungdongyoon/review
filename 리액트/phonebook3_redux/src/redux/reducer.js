let initValue = {
  contact: [],
  keyword: "",
};

function reducer(state = initValue, action) {
  const {type, payload} = action;
  switch(type) {
    case "ADD_CONTACT":
      state.contact.push({name: payload.name, phone: payload.phone});
      break;
    case "SEARCH_BY_USENAME":
      state.keyword = payload.keyword;
      break;
  }
  return {...state};
}

export default reducer;