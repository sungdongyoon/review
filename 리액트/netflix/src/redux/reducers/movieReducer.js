let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
}

function movieReducer(state = initialState, action) {
  let {type, payload} = action;
  switch(type) {
    case "GET_MOVIE_SUCCESS":
      return {...state, popularMovies: payload.popularMovies, topRatedMovies: payload.topRatedMovies, upComingMovies: payload.upComingMovies}
    default:
      return {...state};
  }
}

export default movieReducer;